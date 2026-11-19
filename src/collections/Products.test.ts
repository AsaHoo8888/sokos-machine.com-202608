import assert from "node:assert/strict";
import test from "node:test";
import { access } from "node:fs/promises";
import path from "node:path";
import type { FieldHook, PayloadRequest } from "payload";
import { Products, productCategoryOptions, productFamilyOptions, preserveParameterTable, validateParameters } from "./Products.ts";
import { productSeed } from "../lib/product-seed.ts";

test("anonymous visitors only read published products; writes require authentication", async () => {
  const anonymous = { req: { user: null } as PayloadRequest };
  const authenticated = { req: { user: { id: 1, collection: "users" } } as PayloadRequest };
  assert.deepEqual(await Products.access!.read!(anonymous), { status: { equals: "published" } });
  assert.equal(await Products.access!.read!(authenticated), true);
  for (const operation of ["create", "update", "delete"] as const) {
    assert.equal(await Products.access![operation]!(anonymous), false);
    assert.equal(await Products.access![operation]!(authenticated), true);
  }
});

test("parameter tables retain multiple columns and reject malformed input", () => {
  assert.equal(validateParameters([["Model", "A", "B"], ["Capacity", "100", "200"]]), true);
  assert.equal(validateParameters('[["Model", "A"], ["Capacity", "100"]]'), true);

  for (const value of ["invalid JSON", null, [], {}, [["one column"]], [["a", 2]], ["bad row"]]) {
    assert.notEqual(validateParameters(value), true);
  }
});

test("seed includes all 38 products, unique slugs, valid groups, parameters, images and videos", async () => {
  assert.equal(productSeed.length, 38);
  assert.equal(new Set(productSeed.map(({ slug }) => slug)).size, productSeed.length);
  for (const product of productSeed) {
    assert.ok(productCategoryOptions.includes(product.categorySlug));
    assert.ok(productFamilyOptions.includes(product.family));
    assert.equal(validateParameters(product.parameters), true, product.slug);
    assert.ok(product.title && product.model && product.shortDescription);
    await access(path.join(process.cwd(), "public", product.image));
  }
  assert.ok(productSeed.find(({ slug }) => slug === "water-treatment-system")?.videoUrl);
});

test("partial updates preserve nested parameter arrays instead of Payload's fallback objects", async () => {
  const previousValue = [["Capacity", "100"]];
  const fallback = [{ "0": "Capacity", "1": "100" }];
  const args = { operation: "update", siblingData: {}, previousValue, value: fallback } as Parameters<FieldHook>[0];
  assert.deepEqual(await preserveParameterTable(args), previousValue);
  assert.equal(validateParameters(await preserveParameterTable(args)), true);
  assert.deepEqual(await preserveParameterTable({ ...args, siblingData: { parameters: fallback } }), fallback);
  assert.notEqual(validateParameters(fallback), true);
});
