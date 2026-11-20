export const dynamic = "force-dynamic";

import { ProductCategoryListing } from "@/components/product-category-listing";
import { getFamilyProducts, getProductCategories } from "@/lib/products";
import { categoryDescription } from "./data";

export const metadata = { title: "Juice Filling Machine | Sokos Machinery" };

export default async function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  const [products, categories] = await Promise.all([getFamilyProducts("juice-filling-machine"), getProductCategories()]);
  const category = { ...categories[0], slug: "juice-filling-machine", title: "Juice Filling Machine", description: categoryDescription, products };
  return <ProductCategoryListing category={category} categories={categories} searchParams={searchParams} />;
}
