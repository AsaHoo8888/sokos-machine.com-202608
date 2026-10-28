import config from "@payload-config";
import { after } from "next/server";
import { getPayload } from "payload";

import { parseInquiry } from "@/lib/inquiry";
import { smtpConfigured } from "@/lib/smtp";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string) {
  // shortcut: per-process limit; use shared rate limiting if the app runs on multiple instances.
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + 10 * 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 20_000) {
    return Response.json({ error: "Request too large" }, { status: 413 });
  }

  const body = await request.json().catch(() => null);
  if (body && typeof body === "object" && "website" in body && body.website) {
    return Response.json({ ok: true });
  }

  const inquiry = parseInquiry(body);
  if (!inquiry) return Response.json({ error: "Invalid inquiry" }, { status: 400 });

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const client = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  if (rateLimited(client)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }
  if (!process.env.DATABASE_URI) {
    return Response.json({ error: "Database is not configured" }, { status: 503 });
  }

  try {
    const payload = await getPayload({ config });
    const recipient = process.env.INQUIRY_TO_EMAIL;
    const notificationConfigured = smtpConfigured && Boolean(recipient);
    const created = await payload.create({
      collection: "inquiries",
      data: {
        ...inquiry,
        emailStatus: notificationConfigured ? "failed" : "not-configured",
        status: "new",
      },
    });

    if (notificationConfigured && recipient) {
      after(async () => {
        try {
          await payload.sendEmail({
            replyTo: inquiry.email,
            subject: `New website inquiry: ${inquiry.product || inquiry.name}`,
            text: Object.entries(inquiry)
              .map(([key, value]) => `${key}: ${value}`)
              .join("\n"),
            to: recipient,
          });
          await payload.update({
            collection: "inquiries",
            id: created.id,
            data: { emailStatus: "sent" },
          });
        } catch {
          payload.logger.error({ msg: "Inquiry email notification failed", inquiryId: created.id });
        }
      });
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to save inquiry" }, { status: 503 });
  }
}
