import Link from "next/link";
import { ArrowLeft, ArrowRight, Gauge, ShieldCheck, Waves } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { categoryDescription, sharedParameterRows, waterFillingProducts } from "./data";

export default function WaterFillingMachineCategoryPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="PRODUCTS" />

        <section className="industrial-grid border-b border-[#e2e8f0] bg-[#f9f9f9] pt-24">
          <div className="mx-auto grid min-h-[720px] max-w-[1200px] grid-cols-1 items-center gap-14 px-5 py-24 md:px-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Link
                className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary"
                href="/products/filling-machine"
              >
                <ArrowLeft size={16} />
                Back to filling machine
              </Link>
              <SectionLabel>Water Filling Machine</SectionLabel>
              <h1 className="mb-8 text-5xl font-bold uppercase leading-tight md:text-7xl">
                CGF Series Water Filling Machine
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                {categoryDescription}
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
                {[
                  ["8 Models", "CGF Series"],
                  ["2,000-36,000", "BPH Range"],
                  ["3-in-1", "Wash Fill Cap"],
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
              <div className="relative aspect-square overflow-hidden bg-[#f5f7fa]">
                <img
                  alt="CGF series water filling machine"
                  className="size-full object-contain p-6"
                  src="/images/products/water-filling-60-head.jpg"
                />
                <div className="absolute left-5 top-5 bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  CGF Series
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#e2e8f0] pb-8 md:flex-row md:items-end">
              <div>
                <SectionLabel>Product Models</SectionLabel>
                <h2 className="text-4xl font-semibold uppercase">8 Water Filling Machines</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                Titles follow the supplied product title section; parameters follow the CGF model
                and capacity ranges in the water filling document.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {waterFillingProducts.map((product) => (
                <article
                  className="group grid grid-cols-1 overflow-hidden border border-[#e2e8f0] bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg lg:grid-cols-[210px_1fr]"
                  key={product.model}
                >
                  <div className="relative min-h-[220px] border-b border-[#e2e8f0] bg-[#f5f7fa] lg:border-b-0 lg:border-r">
                    <img
                      alt={product.title}
                      className="size-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      src={product.image}
                    />
                    <div className="absolute left-4 top-4 bg-primary px-2 py-1 font-mono text-[10px] text-white">
                      {product.model}
                    </div>
                  </div>
                  <div className="flex flex-col p-7">
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
                    <div className="mt-auto grid grid-cols-1 gap-3 border-t border-[#e2e8f0] pt-5 font-mono text-xs md:grid-cols-2">
                      <span className="text-primary">
                        Capacity: {product.parameters[0][1]} BPH
                      </span>
                      <span className="text-slate-500">{product.heads}</span>
                    </div>
                    <Link
                      className="mt-5 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary"
                      href={`/products/water-filling-machine/${product.slug}`}
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
              [
                Waves,
                "3-in-1 Monoblock",
                "Washing, filling, and capping are integrated into one automatic system.",
              ],
              [
                Gauge,
                "Stable Output",
                "Model options cover small plants through high-speed lines up to 36,000 BPH.",
              ],
              [
                ShieldCheck,
                "Automatic Control",
                "PLC, inverter, and photoelectric detection help maintain reliable operation.",
              ],
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

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-12">
              <SectionLabel>Reference Parameters</SectionLabel>
              <h2 className="text-4xl font-bold uppercase">Shared Technical Basis</h2>
            </div>
            <div className="overflow-x-auto border border-[#e2e8f0]">
              <table className="w-full border-collapse bg-white">
                <tbody className="font-mono text-sm">
                  {sharedParameterRows.map(([label, value]) => (
                    <tr className="border-b border-[#e2e8f0] last:border-b-0" key={label}>
                      <td className="w-[260px] bg-[#f5f7fa] px-5 py-5 text-xs uppercase tracking-[0.14em] text-slate-500">
                        {label}
                      </td>
                      <td className="px-5 py-5 text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-20 text-white md:px-16">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-white/70">
                Project Matching
              </p>
              <h2 className="text-4xl font-bold">Need help choosing the right CGF model?</h2>
            </div>
            <Link
              className="inline-flex items-center justify-center gap-3 bg-white px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] text-primary"
              href="/contact"
            >
              Request Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
