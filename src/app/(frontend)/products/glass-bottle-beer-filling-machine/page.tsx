export const dynamic = "force-dynamic";

import { ProductCategoryListing } from "@/components/product-category-listing";
import { getFamilyProducts, getProductCategories } from "@/lib/products";
import { categoryDescription } from "./data";

export const metadata = { title: "Glass Bottle Beer Filling Machine | Sokos Machinery" };

export default async function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  const [products, categories] = await Promise.all([getFamilyProducts("glass-bottle-beer-filling-machine"), getProductCategories()]);
  const category = { ...categories[0], slug: "glass-bottle-beer-filling-machine", title: "Glass Bottle Beer Filling Machine", description: categoryDescription, products };
  return <ProductCategoryListing category={category} categories={categories} searchParams={searchParams} />;
}
