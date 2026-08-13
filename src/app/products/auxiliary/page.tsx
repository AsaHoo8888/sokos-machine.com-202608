import Link from "next/link";
import { ArrowLeft, ArrowRight, Cog, PackageCheck, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { auxiliaryProducts } from "./data";

export const metadata = {
  title: "Auxiliary Equipment | Sokos Machinery",
  description:
    "Auxiliary equipment for beverage filling lines, including water treatment, blending, blow molding, labeling, packaging, palletizing, CO2 mixing, and depalletizing systems.",
};

export default function AuxiliaryProductsPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="PRODUCTS" />

        <section className="industrial-grid border-b border-[#e2e8f0] bg-[#f9f9f9] pt-24">
          <div className="mx-auto grid min-h-[660px] max-w-[1200px] grid-cols-1 items-center gap-14 px-5 py-24 md:px-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Link
                className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary"
                href="/products"
              >
                <ArrowLeft size={16} />
                Back to products
              </Link>
              <SectionLabel>Auxiliary Equipment</SectionLabel>
              <h1 className="mb-8 text-5xl font-bold uppercase leading-tight md:text-7xl">
                Complete Line Support Machines
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                Auxiliary machines for turnkey beverage lines, covering water treatment, blending,
                bottle blowing, labeling, shrink wrapping, palletizing, CO2 mixing, and depalletizing.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
                {[
                  ["11", "Auxiliary Products"],
                  ["8", "Line Functions"],
                  ["Turnkey", "Plant Integration"],
                ].map(([value, label]) => (
                  <div className="border-l-2 border-primary pl-4" key={label}>
                    <div className="font-mono text-2xl font-semibold">{value}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#e2e8f0] bg-white p-5 shadow-sm">
              <div className="grid aspect-square grid-cols-2 gap-3 bg-[#f5f7fa] p-3">
                {auxiliaryProducts.slice(0, 4).map((product) => (
                  <div className="overflow-hidden bg-white" key={product.slug}>
                    <img
                      alt={product.title}
                      className="size-full object-contain p-3"
                      src={product.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#e2e8f0] pb-8 md:flex-row md:items-end">
              <div>
                <SectionLabel>Auxiliary Products</SectionLabel>
                <h2 className="text-4xl font-semibold uppercase">Support Equipment Portfolio</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                Each product page includes generated English descriptions and parameters from the
                supplied auxiliary documents.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {auxiliaryProducts.map((product) => (
                <article
                  className="group grid grid-cols-1 overflow-hidden border border-[#e2e8f0] bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg lg:grid-cols-[210px_1fr]"
                  key={product.slug}
                >
                  <div className="relative min-h-[220px] border-b border-[#e2e8f0] bg-[#f5f7fa] lg:border-b-0 lg:border-r">
                    <img
                      alt={product.title}
                      className="size-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      src={product.image}
                    />
                    <div className="absolute left-4 top-4 bg-primary px-2 py-1 font-mono text-[10px] text-white">
                      {product.code}
                    </div>
                  </div>
                  <div className="flex flex-col p-7">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      {product.category}
                    </p>
                    <h3 className="mb-3 text-xl font-semibold leading-7 transition-colors group-hover:text-primary">
                      {product.title}
                    </h3>
                    <p className="mb-6 text-sm leading-6 text-slate-600">
                      {product.shortDescription}
                    </p>
                    <Link
                      className="mb-6 inline-flex w-fit items-center justify-center bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition hover:bg-primary/90"
                      href="/contact"
                    >
                      Send Inquiry
                    </Link>
                    <Link
                      className="mt-auto inline-flex w-fit items-center gap-2 border-t border-[#e2e8f0] pt-5 font-mono text-xs uppercase tracking-[0.16em] text-primary"
                      href={`/products/auxiliary/${product.slug}`}
                    >
                      View Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e8f0] bg-[#f9f9f9] py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-16">
            {[
              [Cog, "Line Integration", "Designed to connect with Sokos filling lines."],
              [PackageCheck, "End-of-Line Support", "Packaging, palletizing, and depalletizing for complete output flow."],
              [ShieldCheck, "Automatic Control", "PLC and touchscreen options support stable daily production."],
            ].map(([Icon, title, text]) => (
              <article className="border border-[#e2e8f0] bg-white p-10" key={title as string}>
                <div className="mb-6 flex size-12 items-center justify-center bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{title as string}</h3>
                <p className="leading-7 text-slate-600">{text as string}</p>
              </article>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
