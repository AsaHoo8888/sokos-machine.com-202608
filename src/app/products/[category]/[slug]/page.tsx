import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Send, ShieldCheck, Sparkles } from "lucide-react";
import { MainSiteFooter, MainSiteHeader, SmallLabel } from "@/components/main-site-shell";
import { getProductCategory, getProduct, productCategories } from "../../data";

type ProductPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      slug: product.slug,
    })),
  );
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);

  if (!product) return {};

  return {
    title: `${product.model} | ${product.title}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { category: categorySlug, slug } = await params;
  const category = getProductCategory(categorySlug);
  const product = getProduct(categorySlug, slug);

  if (!category || !product) notFound();

  const parameterHeader = product.parameters[0] ?? ["Parameter", "Value"];
  const parameterRows =
    parameterHeader[0]?.toLowerCase().includes("parameter") ||
    parameterHeader[0]?.toLowerCase().includes("model") ||
    parameterHeader[0]?.toLowerCase().includes("item") ||
    parameterHeader[0]?.toLowerCase().includes("section")
      ? product.parameters.slice(1)
      : product.parameters;
  const tableHeads =
    parameterRows === product.parameters ? ["Parameter", product.model] : parameterHeader;

  return (
    <main className="bg-[#07111f] text-white">
      <MainSiteHeader active="Products" />

      <section className="bg-[#07111f] px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Link
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#c8ff2e]"
            href={`/products/${category.slug}`}
          >
            <ArrowLeft size={16} />
            Back to {category.title}
          </Link>

          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SmallLabel dark>{product.model}</SmallLabel>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                {product.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                {product.shortDescription}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-3 bg-[#c8ff2e] px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-[#07111f]"
                  href="#inquiry"
                >
                  Send Inquiry <Send size={14} />
                </a>
                <span className="inline-flex items-center border border-white/15 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white">
                  {category.title}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 bg-[#c8ff2e]/10 blur-3xl" />
              <div className="relative aspect-[5/4] border border-white/10 bg-white">
                <img
                  alt={product.title}
                  className="size-full object-contain p-8"
                  src={product.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SmallLabel>Product Overview</SmallLabel>
            <h2 className="mb-7 text-4xl font-semibold uppercase md:text-5xl">
              Built For Daily Production
            </h2>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              {(product.description ?? [
                product.shortDescription,
                "The machine is engineered for reliable plant operation, stable product handling, and easy connection with upstream and downstream equipment.",
              ]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
            {(product.highlights ?? [
              product.heads ?? "Automatic integrated production",
              "Food-grade stainless-steel contact parts",
              "PLC control and production line integration",
              "Factory-direct project support",
            ]).map((highlight) => (
              <article className="bg-white p-8" key={highlight}>
                <Sparkles className="mb-6 text-primary" size={26} />
                <p className="leading-7 text-slate-700">{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Technical Parameters</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase md:text-5xl">Model Data</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Parameters are kept close to the existing product data and displayed in a clean,
              procurement-friendly table.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 bg-white">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-[#07111f] text-white">
                  {tableHeads.map((head) => (
                    <th
                      className="px-5 py-5 font-mono text-xs uppercase tracking-[0.14em]"
                      key={head}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                {parameterRows.map((row, rowIndex) => (
                  <tr className="border-b border-slate-200 last:border-b-0" key={row.join("-")}>
                    {row.map((cell, cellIndex) => (
                      <td
                        className={`px-5 py-5 ${
                          cellIndex === 0 || rowIndex === 0 ? "font-semibold text-[#07111f]" : "text-slate-600"
                        }`}
                        key={`${cell}-${cellIndex}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-5 py-20 md:px-8" id="inquiry">
        <div className="mx-auto grid max-w-[1320px] gap-10 border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:grid-cols-[1fr_440px]">
          <div>
            <SmallLabel dark>Project Inquiry</SmallLabel>
            <h2 className="mb-5 text-4xl font-semibold">Get {product.model} Proposal</h2>
            <p className="max-w-2xl leading-7 text-slate-300">
              Share bottle type, capacity target, product category, and factory layout. Sokos will
              match the machine configuration and complete line plan.
            </p>
            <p className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#c8ff2e]">
              <ShieldCheck size={16} />
              ISO / CE production support
            </p>
          </div>
          <form className="grid gap-4">
            <input className="border border-white/10 bg-white px-4 py-4 text-[#07111f]" defaultValue={product.model} />
            <input className="border border-white/10 bg-white px-4 py-4 text-[#07111f]" placeholder="Name" />
            <input className="border border-white/10 bg-white px-4 py-4 text-[#07111f]" placeholder="Business email" type="email" />
            <textarea
              className="min-h-32 border border-white/10 bg-white px-4 py-4 text-[#07111f]"
              placeholder="Bottle size, capacity, product type"
            />
            <button className="bg-[#c8ff2e] py-5 font-mono text-xs uppercase tracking-[0.18em] text-[#07111f]">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <MainSiteFooter />
    </main>
  );
}
