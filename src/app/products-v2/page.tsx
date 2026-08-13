import Link from "next/link";
import { ArrowRight, Factory, Gauge, Layers3 } from "lucide-react";
import { ArrowButton, HomeV2Footer, HomeV2Header, SmallLabel } from "@/components/home-v2-shell";
import { fillingSubCategories, productCategoriesV2 } from "./data";

export default function ProductsV2Page() {
  return (
    <main className="bg-[#07111f] text-white">
      <HomeV2Header active="Products" />

      <section className="relative min-h-[760px] overflow-hidden">
        <img
          alt="Sokos production line"
          className="absolute inset-0 size-full object-cover"
          src="/images/home-v2/banner-production-line.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/70 to-[#07111f]/20" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1320px] flex-col justify-end px-5 pb-24 pt-24 md:px-8">
          <SmallLabel dark>Product Architecture</SmallLabel>
          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] md:text-8xl">
            Machinery Built Around Complete Lines
          </h1>
          <div className="mt-8 flex max-w-3xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="text-lg leading-8 text-slate-300">
              Explore Sokos equipment by production function, from purified water preparation
              through filling, labeling, packaging, palletizing, and complete line automation.
            </p>
            <ArrowButton dark href="/contact-v2" label="Plan Project" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <SmallLabel>Product Categories</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase md:text-6xl">
                Factory Modules
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Each product family connects to the next stage of the plant, creating a clean path
              from process water and bottles to packed pallets ready for shipment.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
            {productCategoriesV2.map((category) => (
              <Link
                className="group bg-white"
                href={`/products-v2/${category.slug}`}
                key={category.slug}
              >
                <article className="flex min-h-[460px] flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      alt={category.title}
                      className="size-full object-contain p-6 transition duration-700 group-hover:scale-105"
                      src={category.image}
                    />
                    <div className="absolute left-5 top-5 bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                      {category.code}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                      {category.eyebrow}
                    </p>
                    <h3 className="mb-4 text-2xl font-semibold">{category.title}</h3>
                    <p className="mb-8 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5">
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">
                        {category.metric}
                      </span>
                      <span className="grid size-10 place-items-center bg-[#07111f] text-white transition group-hover:bg-[#c8ff2e] group-hover:text-[#07111f]">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1626] px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <SmallLabel dark>Filling Machine</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase md:text-6xl">
                Four Core Filling Families
              </h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              Water, carbonated beverage, juice, and glass bottle beer machines are organized
              under Filling Machine for faster project matching.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {fillingSubCategories.map((item) => (
              <article
                className="grid gap-6 border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[220px_1fr]"
                key={item.title}
              >
                <div className="aspect-[4/3] bg-white">
                  <img alt={item.title} className="size-full object-contain p-4" src={item.image} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                  <p className="line-clamp-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#07111f] md:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
          {[
            [Factory, "Factory Built", "Machinery manufactured and assembled in Sokos workshops."],
            [Layers3, "Line Integrated", "Every module is selected around the full line workflow."],
            [Gauge, "Capacity Matched", "Model options are selected by bottle size and target output."],
          ].map(([Icon, title, text]) => (
            <article className="bg-white p-9" key={title as string}>
              <Icon className="mb-8 text-primary" size={34} />
              <h3 className="mb-3 text-2xl font-semibold">{title as string}</h3>
              <p className="leading-7 text-slate-600">{text as string}</p>
            </article>
          ))}
        </div>
      </section>

      <HomeV2Footer />
    </main>
  );
}
