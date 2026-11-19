import assert from "node:assert/strict";
import { getPayload } from "payload";
import config from "../payload.config.ts";
import { productSeed } from "../lib/product-seed.ts";
import { validateParameters } from "../collections/Products.ts";

assert.equal(new Set(productSeed.map(({ slug }) => slug)).size, productSeed.length, "Duplicate product slugs");
for (const product of productSeed) assert.equal(validateParameters(product.parameters), true, product.slug);

const payload = await getPayload({ config });
const transactionID = await payload.db.beginTransaction();
assert.ok(transactionID, "Product import requires database transactions");
const req = { transactionID };
let created = 0;
let skipped = 0;
try {
  for (const data of productSeed) {
    const existing = await payload.find({ collection: "products", where: { slug: { equals: data.slug } }, limit: 1, req });
    if (existing.totalDocs) { skipped++; continue; }
    const doc = await payload.create({ collection: "products", data, req });
    assert.equal(doc.slug, data.slug);
    assert.deepEqual(doc.parameters, data.parameters);
    created++;
  }
  await payload.db.commitTransaction(transactionID);
  console.log(JSON.stringify({ source: productSeed.length, created, skipped }));
} catch (error) {
  await payload.db.rollbackTransaction(transactionID);
  throw error;
} finally {
  await payload.destroy();
}
