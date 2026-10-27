export type InquiryData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  capacity?: string;
  country?: string;
  product?: string;
  inquiryType?: string;
  message?: string;
  source: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const optionalFields = [
  "company",
  "phone",
  "capacity",
  "country",
  "product",
  "inquiryType",
] as const;

function text(value: unknown, maxLength: number, multiline = false) {
  if (typeof value !== "string") return "";
  const normalized = multiline ? value.trim() : value.trim().replace(/\s+/g, " ");
  return normalized.length <= maxLength ? normalized : "";
}

export function parseInquiry(value: unknown): InquiryData | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const input = value as Record<string, unknown>;
  const name = text(input.name, 120);
  const email = text(input.email, 254).toLowerCase();
  const source = text(input.source, 160) || "website";
  const message = text(input.message, 5000, true);

  if (!name || !emailPattern.test(email)) return null;

  const inquiry: InquiryData = { name, email, source };
  if (message) inquiry.message = message;

  for (const field of optionalFields) {
    const fieldValue = text(input[field], 240);
    if (fieldValue) inquiry[field] = fieldValue;
  }

  return inquiry;
}
