export const dynamic = "force-dynamic";

import { ProductCategoryListing } from "@/components/product-category-listing";
import { getFamilyProducts, getProductCategories } from "@/lib/products";
import { categoryDescription } from "./data";

export const metadata = { title: "Carbonated Beverage Filling Machine | Sokos Machinery" };

export default async function CategoryPage({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  const [products, categories] = await Promise.all([getFamilyProducts("carbonated-beverages-filling-machine"), getProductCategories()]);
  const category = { ...categories[0], slug: "carbonated-beverages-filling-machine", title: "Carbonated Beverage Filling Machine", description: categoryDescription, products };
  return <ProductCategoryListing category={category} categories={categories} searchParams={searchParams} />;
}
