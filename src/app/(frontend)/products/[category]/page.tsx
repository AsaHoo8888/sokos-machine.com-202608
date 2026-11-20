export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { ProductCategoryListing } from "@/components/product-category-listing";
import { getProductCategories, getProductCategory } from "@/lib/products";

type CategoryPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = await getProductCategory(slug);

  if (!category) return {};

  return {
    title: `${category.title} | Sokos Machinery`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = await getProductCategory(slug);

  if (!category) notFound();

  const categories = await getProductCategories();
  return <ProductCategoryListing category={category} categories={categories} searchParams={searchParams} />;
}
