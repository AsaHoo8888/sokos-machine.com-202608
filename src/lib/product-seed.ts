import { productCategories } from "../app/(frontend)/products/data.ts";
import { waterFillingProducts } from "../app/(frontend)/products/water-filling-machine/data.ts";
import { carbonatedFillingProducts } from "../app/(frontend)/products/carbonated-beverages-filling-machine/data.ts";
import { juiceFillingProducts } from "../app/(frontend)/products/juice-filling-machine/data.ts";
import { glassBottleBeerProducts } from "../app/(frontend)/products/glass-bottle-beer-filling-machine/data.ts";
import { auxiliaryProducts } from "../app/(frontend)/products/auxiliary/data.ts";
import type { Product } from "../payload-types.ts";

const families = [
  ["water-filling-machine", waterFillingProducts],
  ["carbonated-beverages-filling-machine", carbonatedFillingProducts],
  ["juice-filling-machine", juiceFillingProducts],
  ["glass-bottle-beer-filling-machine", glassBottleBeerProducts],
] as const;

export const productSeed = productCategories.flatMap((category) => category.products.map((product) => {
  const auxiliary = auxiliaryProducts.find(({ slug }) => slug === product.slug);
  const family = auxiliary ? "auxiliary" : families.find(([, products]) =>
    products.some(({ slug }) => slug === product.slug))?.[0];
  if (!family) throw new Error(`Missing product family: ${product.slug}`);
  return {
    title: product.title, slug: product.slug, model: product.model,
    categorySlug: category.slug as Product["categorySlug"], family: family as Product["family"],
    categoryLabel: auxiliary?.category, image: product.image,
    videoUrl: auxiliary?.videoUrl, heads: product.heads,
    shortDescription: product.shortDescription,
    description: product.description?.map((text) => ({ text })),
    highlights: product.highlights?.map((text) => ({ text })),
    parameters: product.parameters, status: "published" as const, sortOrder: 0,
  };
}));

productSeed.push({
  title: "3-in-1 Water Filling Monoblock", slug: "water-filling-monoblock",
  model: "SKS-W3IN1-18186", categorySlug: "filling-machine", family: "water-filling-monoblock",
  categoryLabel: undefined, image: "/images/product-filling-machine.jpg", videoUrl: undefined,
  heads: "18 - 18 - 6",
  shortDescription: "The Sokos 3-in-1 series integrates rinsing, filling, and capping into a single high-efficiency frame for still water production.",
  description: undefined, highlights: undefined,
  parameters: [
  ["Heads (Rinse-Fill-Cap)", "Sets", "18 - 18 - 6", "DIN/CE"],
  ["Production Capacity", "BPH", "2,000 - 8,000", "Adjustable"],
  ["Total Installed Power", "kW", "4.5", "High Efficiency"],
  ["Air Consumption", "m3/min", "0.3", "0.6 MPa"],
  ["Suitable Bottle Size", "ml", "250 - 2000", "PET"],
], status: "published", sortOrder: 0,
});
productSeed.forEach((product, index) => { product.sortOrder = index; });
