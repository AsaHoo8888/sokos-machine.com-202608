import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { MainSiteFooter, MainSiteHeader, SmallLabel } from "@/components/main-site-shell";
import { getProductCategories } from "@/lib/products";

export async function ProductCategoryListing({ category, categories, searchParams }: {
  category: Awaited<ReturnType<typeof getProductCategories>>[number];
  categories: Awaited<ReturnType<typeof getProductCategories>>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: requestedPage } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(category.products.length / 6));
  const parsedPage = Number(requestedPage);
  const page = Number.isSafeInteger(parsedPage) && parsedPage > 0 ? Math.min(parsedPage, totalPages) : 1;
  const products = category.products.slice((page - 1) * 6, page * 6);

  return (
    <main className="bg-[#07111f] text-white">
      <MainSiteHeader active="Products" />

      <section className="border-b border-slate-200 bg-slate-50 px-5 pb-10 pt-32 text-[#07111f] md:px-8">
        <div className="mx-auto max-w-[1320px]">
          <Link className="mb-6 inline-flex items-center gap-2 text-sm text-primary" href="/products">
            <ArrowLeft size={16} /> Products
          </Link>
          <h1 className="text-3xl font-semibold md:text-5xl">{category.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">{category.description}</p>
        </div>
      </section>

      <section className="bg-white px-5 py-12 text-[#07111f] md:px-8">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
          <div className="mb-8 flex flex-col justify-between gap-8 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Available Models</SmallLabel>
              <h2 className="text-2xl font-semibold">
                {category.products.length} Product
                {category.products.length > 1 ? "s" : ""}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Select a model to review image, description, highlights, and technical parameters.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article
                className="group grid overflow-hidden border border-slate-200 bg-white transition hover:border-primary"
                key={product.slug}
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
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
                      href={`/products/${category.slug}/${product.slug}`}
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                    <Link
                      className="bg-[#07111f] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white"
                      href="/contact"
                    >
                      Inquiry
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {totalPages > 1 && (
            <nav aria-label="Product pagination" className="mt-10 flex flex-wrap gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                <Link key={number} href={`/products/${category.slug}?page=${number}`}
                  aria-current={page === number ? "page" : undefined}
                  aria-label={`Page ${number}`}
                  className={`flex size-11 items-center justify-center border ${page === number ? "border-primary bg-primary text-white" : "border-slate-200 hover:border-primary"}`}>
                  {number}
                </Link>
              ))}
            </nav>
          )}
          </div>
          <aside className="border border-slate-200 lg:sticky lg:top-28">
            <h2 className="bg-[#07111f] px-6 py-5 text-lg font-semibold text-white">Product Categories</h2>
            <nav aria-label="Product categories" className="divide-y divide-slate-200">
              {categories.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`}
                  aria-current={category.slug === item.slug ? "page" : undefined}
                  className={`flex items-center justify-between gap-3 px-6 py-4 text-sm hover:text-primary ${category.slug === item.slug ? "bg-slate-50 font-semibold text-primary" : "text-slate-600"}`}>
                  {item.title}<ArrowRight size={14} className="shrink-0" />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <MainSiteFooter />
    </main>
  );
}
