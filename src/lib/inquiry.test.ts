import assert from "node:assert/strict";
import test from "node:test";

import { parseInquiry } from "./inquiry.ts";

test("validates and normalizes inquiry input", () => {
  assert.deepEqual(
    parseInquiry({ name: "  Ada   Lee ", email: "ADA@EXAMPLE.COM", source: "contact" }),
    { name: "Ada Lee", email: "ada@example.com", source: "contact" },
  );
  assert.equal(parseInquiry({ name: "Ada", email: "invalid" }), null);
  assert.equal(parseInquiry({ name: "x".repeat(121), email: "a@example.com" }), null);
});
