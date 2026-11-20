export const dynamic = "force-dynamic";

import { ProductCategoryListing } from "@/components/product-category-listing";
import { getFamilyProducts, getProductCategories } from "@/lib/products";
import { categoryDescription } from "./data";

export const metadata = { title: "Water Filling Machine | Sokos Machinery" };

export default async function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  const [products, categories] = await Promise.all([getFamilyProducts("water-filling-machine"), getProductCategories()]);
  const category = { ...categories[0], slug: "water-filling-machine", title: "Water Filling Machine", description: categoryDescription, products };
  return <ProductCategoryListing category={category} categories={categories} searchParams={searchParams} />;
}
