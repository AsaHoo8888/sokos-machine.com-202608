import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { Product as CMSProduct } from "@/payload-types";
import { productCategoryDefinitions } from "./product-categories";

function toProduct(doc: CMSProduct) {
  const cover = typeof doc.coverImage === "object" ? doc.coverImage : null;
  return {
    ...doc,
    image: cover?.url || doc.image,
    code: doc.model,
    category: doc.categoryLabel || doc.categorySlug,
    heads: doc.heads || undefined,
    videoUrl: doc.videoUrl || undefined,
    description: doc.description?.length ? doc.description.map(({ text }) => text) : undefined,
    highlights: doc.highlights?.length ? doc.highlights.map(({ text }) => text) : undefined,
    parameters: doc.parameters as string[][],
  };
}

export const getPublishedProducts = cache(async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "products", overrideAccess: false,
    where: { status: { equals: "published" } },
    sort: "sortOrder", pagination: false, depth: 1,
  });
  return docs.map(toProduct);
});

export const getProductCategories = cache(async () => {
  const products = await getPublishedProducts();
  return productCategoryDefinitions.map((category) => ({
    ...category,
    metric: category.slug === "filling-machine" ? `${products.filter((product) => product.categorySlug === category.slug).length} Models` : category.metric,
    products: products.filter((product) => product.categorySlug === category.slug),
  }));
});

export async function getProductCategory(slug: string) {
  return (await getProductCategories()).find((category) => category.slug === slug);
}

export async function getProduct(categorySlug: string, slug: string) {
  return (await getPublishedProducts()).find((product) => product.categorySlug === categorySlug && product.slug === slug);
}

export async function getFamilyProducts(family: string) {
  return (await getPublishedProducts()).filter((product) => product.family === family);
}

export async function getFamilyProduct(family: string, slug: string) {
  return (await getFamilyProducts(family)).find((product) => product.slug === slug);
}
