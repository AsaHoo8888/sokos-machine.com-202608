import Link from "next/link";
import { ArrowLeft, ArrowRight, Gauge, ShieldCheck, Waves } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const fillingCategories = [
  {
    title: "Water Filling Machine",
    description:
      "CGF series rinsing, filling, and capping monoblocks for PET bottled water and mineral water production.",
    code: "CGF",
    spec: "8 Models",
    image: "/images/products/water-filling-machine/cgf-60-60-20.jpg",
    href: "/products/water-filling-machine",
  },
  {
    title: "Juice Filling Machine",
    description:
      "RCGF hot filling machines for juice, tea, and functional beverages requiring stable filling temperature control.",
    code: "RCGF",
    spec: "5 Models",
    image: "/images/products/juice-filling-machine/rcgf-40-40-10.jpg",
    href: "/products/juice-filling-machine",
  },
  {
    title: "Carbonated Beverage Filling Machine",
    description:
      "DCGF isobaric filling systems for sparkling water, soda, cola, and carbonated soft drink production.",
    code: "DCGF",
    spec: "9 Models",
    image: "/images/products/carbonated-beverages-filling-machine/dcgf-60-60-20.jpg",
    href: "/products/carbonated-beverages-filling-machine",
  },
  {
    title: "Glass Bottle Beer Filling Machine",
    description:
      "BDCGF glass bottle beer filling and capping machines for brewery lines with reliable bottle handling.",
    code: "BDCGF",
    spec: "4 Models",
    image: "/images/products/glass-bottle-beer-filling-machine/bdcgf-24-24-8.jpg",
    href: "/products/glass-bottle-beer-filling-machine",
  },
];

export const metadata = {
  title: "Filling Machine Categories | Sokos Machinery",
  description:
    "Browse Sokos filling machine categories for water, juice, carbonated beverages, and glass bottle beer production.",
};

export default function FillingMachinePage() {
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
              <SectionLabel>Filling Machine</SectionLabel>
              <h1 className="mb-8 text-5xl font-bold uppercase leading-tight md:text-7xl">
                Beverage Filling Machine Categories
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                Select the filling machine category by product type. Sokos supplies complete
                rinsing, filling, and capping solutions for bottled water, juice, carbonated
                beverages, and glass bottle beer.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
                {[
                  ["4", "Filling Categories"],
                  ["CGF / RCGF", "PET Bottle Lines"],
                  ["DCGF / BDCGF", "Pressure Filling"],
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
                {fillingCategories.map((category) => (
                  <div className="overflow-hidden bg-white" key={category.title}>
                    <img
                      alt={category.title}
                      className="size-full object-contain p-3"
                      src={category.image}
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
                <SectionLabel>Second-Level Categories</SectionLabel>
                <h2 className="text-4xl font-semibold uppercase">Filling Machine Portfolio</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                Choose the filling platform that matches your bottle material, beverage type, and
                production capacity.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {fillingCategories.map((category) => (
                <article
                  className="group grid grid-cols-1 overflow-hidden border border-[#e2e8f0] bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg lg:grid-cols-[240px_1fr]"
                  key={category.title}
                >
                  <div className="relative min-h-[230px] border-b border-[#e2e8f0] bg-[#f5f7fa] lg:border-b-0 lg:border-r">
                    <img
                      alt={category.title}
                      className="size-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      src={category.image}
                    />
                    <div className="absolute left-4 top-4 bg-primary px-2 py-1 font-mono text-[10px] text-white">
                      {category.code}
                    </div>
                  </div>
                  <div className="flex flex-col p-7">
                    <h3 className="mb-3 text-xl font-semibold leading-7 transition-colors group-hover:text-primary">
                      {category.title}
                    </h3>
                    <p className="mb-6 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-[#e2e8f0] pt-5">
                      <span className="font-mono text-xs text-primary">{category.spec}</span>
                      <Link
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary"
                        href={category.href}
                      >
                        View Products
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e8f0] bg-[#f9f9f9] py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-16">
            {[
              [Waves, "Product Matching", "Water, juice, carbonated drinks, and beer each use a dedicated filling structure."],
              [Gauge, "Capacity Planning", "Model ranges support compact plants through high-speed automatic production lines."],
              [ShieldCheck, "Turnkey Integration", "Each filling platform connects with treatment, labeling, packaging, and palletizing machines."],
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
