import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, RotateCw, Settings2 } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const labelingCategories = [
  {
    title: "Rotary Self-Adhesive Labeling Machine",
    description:
      "High-speed rotary pressure-sensitive labeler for round, flat, square, and shaped bottles.",
    code: "ROTARY PSA",
    spec: "12,000-36,000 BPH",
    image: "/images/products/auxiliary/rotary-self-adhesive-labeler.png",
    href: "/products/auxiliary/rotary-self-adhesive-labeler",
  },
  {
    title: "Rotary OPP Labeling Machine",
    description:
      "Rotary hot-melt OPP labeling machine for high-speed round bottle and can production lines.",
    code: "ROTARY OPP",
    spec: "8,000-30,000 BPH",
    image: "/images/products/auxiliary/rotary-opp-labeler.png",
    href: "/products/auxiliary/rotary-opp-labeling-machine",
  },
  {
    title: "Linear Self-Adhesive Labeling Machine",
    description:
      "Flexible linear self-adhesive labeler for single-side, double-side, and wraparound labels.",
    code: "LINEAR PSA",
    spec: "Multi-shape",
    image: "/images/products/auxiliary/linear-self-adhesive-labeler.png",
    href: "/products/auxiliary/linear-self-adhesive-labeler",
  },
  {
    title: "Linear Shrink Sleeve Labeling Machine",
    description:
      "Linear sleeve labeling system for bottle body, neck, cap, and barrel mouth shrink labels.",
    code: "SLEEVE",
    spec: "500-24,000 BPH",
    image: "/images/products/auxiliary/shrink-sleeve-labeler.png",
    href: "/products/auxiliary/shrink-sleeve-labeler",
  },
];

export const metadata = {
  title: "Labeling Machine Categories | Sokos Machinery",
  description:
    "Browse Sokos labeling machine categories including rotary self-adhesive, rotary OPP, linear self-adhesive, and linear shrink sleeve labelers.",
};

export default function LabelingMachinePage() {
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
              <SectionLabel>Labeling Machine</SectionLabel>
              <h1 className="mb-8 text-5xl font-bold uppercase leading-tight md:text-7xl">
                Labeling Machine Categories
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                Select the labeling machine type by label material, bottle shape, and line speed.
                Sokos supplies rotary and linear labeling systems for self-adhesive labels, OPP
                labels, and shrink sleeve labels.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
                {[
                  ["4", "Labeling Types"],
                  ["Rotary", "High-Speed Lines"],
                  ["Linear", "Flexible Formats"],
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
                {labelingCategories.map((category) => (
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
                <h2 className="text-4xl font-semibold uppercase">Labeling Machine Portfolio</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                Choose between rotary speed, linear flexibility, self-adhesive labels, OPP film,
                or shrink sleeve applications.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {labelingCategories.map((category) => (
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
                        View Product
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
              [RotateCw, "Rotary Speed", "Rotary platforms support high-speed continuous labeling for beverage lines."],
              [Settings2, "Linear Flexibility", "Linear machines suit multi-shape bottles and frequent production changeovers."],
              [BadgeCheck, "Label Accuracy", "Servo control and stable bottle handling help maintain accurate label placement."],
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
