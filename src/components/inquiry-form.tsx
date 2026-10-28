"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type InquiryFormProps = {
  children: ReactNode;
  className?: string;
  source: string;
};

export function InquiryForm({ children, className, source }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "timeout">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({ ...data, source }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
        signal: AbortSignal.timeout(20_000),
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus(error instanceof Error && error.name === "TimeoutError" ? "timeout" : "error");
    }
  }

  return (
    <form aria-busy={status === "sending"} className={className} onSubmit={submit}>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="absolute -left-[9999px]"
        name="website"
        tabIndex={-1}
        type="text"
      />
      {children}
      <p aria-live="polite" className="text-sm">
        {status === "sending" && "Sending..."}
        {status === "sent" && "Thank you. Your inquiry has been received."}
        {status === "error" && "Unable to send. Please try again or contact us by email."}
        {status === "timeout" && "We could not confirm your submission in time. Your inquiry may have been saved. Please contact us by email before submitting again."}
      </p>
    </form>
  );
}
