import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpFromAddress = process.env.SMTP_FROM_ADDRESS;
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

export const smtpConfigured = Boolean(smtpHost && smtpFromAddress);

export const smtpEmailAdapter = smtpConfigured
  ? nodemailerAdapter({
      defaultFromAddress: smtpFromAddress!,
      defaultFromName: process.env.SMTP_FROM_NAME || "Sokos Machinery",
      transportOptions: {
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        ...(smtpUser && smtpPassword
          ? { auth: { user: smtpUser, pass: smtpPassword } }
          : {}),
      },
    })
  : undefined;
