import assert from "node:assert/strict";
import test from "node:test";

test("SMTP requires complete credentials and does not verify the network on initialization", async () => {
  const keys = ["SMTP_HOST", "SMTP_FROM_ADDRESS", "SMTP_USER", "SMTP_PASSWORD"] as const;
  const previous = keys.map((key) => process.env[key]);
  try {
    process.env.SMTP_HOST = "smtp.example.invalid";
    process.env.SMTP_FROM_ADDRESS = "sender@example.com";
    process.env.SMTP_USER = "sender@example.com";
    process.env.SMTP_PASSWORD = "";
    const incomplete = await import(new URL("./smtp.ts?incomplete", import.meta.url).href);
    assert.equal(incomplete.smtpConfigured, false);
    assert.equal(incomplete.smtpEmailAdapter, undefined);

    process.env.SMTP_PASSWORD = "test-password";
    const complete = await import(new URL("./smtp.ts?complete", import.meta.url).href);
    assert.equal(complete.smtpConfigured, true);
    assert.ok(await complete.smtpEmailAdapter);
  } finally {
    keys.forEach((key, index) => {
      if (previous[index] === undefined) delete process.env[key];
      else process.env[key] = previous[index];
    });
  }
});
