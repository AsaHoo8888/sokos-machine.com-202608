import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ArrowButton, HomeV2Footer, HomeV2Header, SmallLabel } from "@/components/home-v2-shell";
import { getProductCategoryV2, productCategoriesV2 } from "../data";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return productCategoriesV2.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getProductCategoryV2(slug);

  if (!category) return {};

  return {
    title: `${category.title} | Sokos Machinery`,
    description: category.description,
  };
}

export default async function ProductsV2CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getProductCategoryV2(slug);

  if (!category) notFound();

  return (
    <main className="bg-[#07111f] text-white">
      <HomeV2Header active="Products" />

      <section className="relative overflow-hidden border-b border-white/10 bg-[#07111f]">
        <div className="absolute inset-y-0 right-0 w-full opacity-25 lg:w-1/2">
          <img alt="" className="size-full object-cover" src={category.image} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/95 to-[#07111f]/40" />
        <div className="relative mx-auto min-h-[640px] max-w-[1320px] px-5 py-24 md:px-8 lg:py-32">
          <Link
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#c8ff2e]"
            href="/products-v2"
          >
            <ArrowLeft size={16} />
            Back to products
          </Link>
          <SmallLabel dark>{category.eyebrow}</SmallLabel>
          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] md:text-8xl">
            {category.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">{category.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ArrowButton dark href="/contact-v2" label="Get Quote" />
            <span className="inline-flex items-center border border-white/15 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white">
              {category.metric}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Available Models</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase md:text-6xl">
                {category.products.length} Product
                {category.products.length > 1 ? "s" : ""}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Select a model to review image, description, highlights, and technical parameters.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {category.products.map((product) => (
              <article
                className="group grid overflow-hidden border border-slate-200 bg-white transition hover:border-primary lg:grid-cols-[260px_1fr]"
                key={product.slug}
              >
                <div className="relative min-h-[260px] bg-slate-100">
                  <img
                    alt={product.title}
                    className="size-full object-contain p-6 transition duration-700 group-hover:scale-105"
                    src={product.image}
                  />
                  <div className="absolute left-4 top-4 bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                    {product.model}
                  </div>
                </div>
                <div className="flex flex-col p-7">
                  <h3 className="mb-4 text-2xl font-semibold leading-tight">{product.title}</h3>
                  <p className="mb-6 text-sm leading-6 text-slate-600">
                    {product.shortDescription}
                  </p>
                  <div className="mb-7 flex flex-col gap-2">
                    {(product.highlights ?? [product.heads, "Automatic production", "Factory direct supply"])
                      .filter(Boolean)
                      .slice(0, 3)
                      .map((highlight) => (
                        <span className="flex items-center gap-2 text-sm text-slate-600" key={highlight}>
                          <CheckCircle2 className="text-primary" size={16} />
                          {highlight}
                        </span>
                      ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
                    <Link
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary"
                      href={`/products-v2/${category.slug}/${product.slug}`}
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                    <Link
                      className="bg-[#07111f] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white"
                      href="/contact-v2"
                    >
                      Inquiry
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeV2Footer />
    </main>
  );
}
