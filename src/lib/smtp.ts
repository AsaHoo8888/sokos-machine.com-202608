import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpFromAddress = process.env.SMTP_FROM_ADDRESS;
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

export const smtpConfigured = Boolean(smtpHost && smtpFromAddress && smtpUser && smtpPassword);

export const smtpEmailAdapter = smtpConfigured
  ? nodemailerAdapter({
      defaultFromAddress: smtpFromAddress!,
      defaultFromName: process.env.SMTP_FROM_NAME || "Sokos Machinery",
      skipVerify: true,
      transportOptions: {
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
        auth: { user: smtpUser, pass: smtpPassword },
      },
    })
  : undefined;
