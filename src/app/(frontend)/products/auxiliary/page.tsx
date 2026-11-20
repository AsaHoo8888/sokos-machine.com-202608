export const dynamic = "force-dynamic";

import { ProductCategoryListing } from "@/components/product-category-listing";
import { getFamilyProducts, getProductCategories } from "@/lib/products";

export const metadata = { title: "Auxiliary Equipment | Sokos Machinery" };

export default async function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  const [products, categories] = await Promise.all([getFamilyProducts("auxiliary"), getProductCategories()]);
  const category = { ...categories[0], slug: "auxiliary", title: "Auxiliary Equipment", description: "Auxiliary equipment for beverage filling lines.", products };
  return <ProductCategoryListing category={category} categories={categories} searchParams={searchParams} />;
}
