import assert from "node:assert/strict";
import { test } from "node:test";
import { SiteSettings } from "../globals/SiteSettings.ts";

test("tracking IDs accept only supported provider IDs, and allow disabling", () => {
  const group = SiteSettings.fields.find((field) => "name" in field && field.name === "tracking");
  assert.ok(group && "fields" in group);
  for (const [name, valid, invalid] of [
    ["gtmId", "GTM-ABC123", "G-ABC123"],
    ["gaId", "G-ABC123", "GTM-ABC123"],
    ["clarityId", "abc123", "https://clarity.ms/tag/abc123"],
  ]) {
    const field = group.fields.find((field) => "name" in field && field.name === name);
    assert.ok(field && "validate" in field && typeof field.validate === "function");
    const validate = field.validate as (value: string | null | undefined) => true | string;
    for (const value of [valid, "", null, undefined]) assert.equal(validate(value), true);
    for (const value of [invalid, " ", "</script><script>alert(1)</script>", `${valid}\n`]) {
      assert.equal(typeof validate(value), "string");
    }
  }
});
