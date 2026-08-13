import Link from "next/link";
import { ArrowRight, DraftingCompass, Factory, Globe2 } from "lucide-react";
import { ArrowButton, MainSiteFooter, MainSiteHeader, SmallLabel } from "@/components/main-site-shell";
import { solutions } from "./data";

export default function SolutionsPage() {
  return (
    <main className="bg-[#07111f] text-white">
      <MainSiteHeader active="Solutions" />

      <section className="relative min-h-[780px] overflow-hidden">
        <img
          alt="Turnkey beverage line"
          className="absolute inset-0 size-full object-cover"
          src="/images/home/turnkey-line-layout.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/72 to-[#07111f]/10" />
        <div className="relative mx-auto flex min-h-[780px] max-w-[1320px] flex-col justify-end px-5 pb-24 pt-24 md:px-8">
          <SmallLabel dark>Turnkey Engineering</SmallLabel>
          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] md:text-8xl">
            Production Lines Planned As One System
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Sokos designs complete beverage and liquid filling lines around product type, target
            output, bottle format, workshop layout, and long-term serviceability.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Solution Library</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase md:text-6xl">
                Turnkey Lines
              </h2>
            </div>
            <ArrowButton href="/contact" label="Start Project" />
          </div>

          <div className="grid gap-8">
            {solutions.map((solution, index) => (
              <Link
                className="group grid overflow-hidden border border-slate-200 bg-white transition hover:border-primary lg:grid-cols-[0.92fr_1.08fr]"
                href={`/solutions/${solution.slug}`}
                key={solution.slug}
              >
                <div className={`relative min-h-[360px] bg-slate-100 ${index % 2 ? "lg:order-2" : ""}`}>
                  <img
                    alt={solution.title}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                    src={solution.image}
                  />
                  <div className="absolute left-6 top-6 bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                    {solution.code}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    {solution.market}
                  </p>
                  <h3 className="mb-5 text-3xl font-semibold md:text-5xl">{solution.title}</h3>
                  <p className="mb-8 max-w-2xl leading-8 text-slate-600">{solution.summary}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="border border-slate-200 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-600">
                      {solution.capacity}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      View Line <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1626] px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            [Factory, "Factory Execution", "Production, assembly, testing, and delivery handled through one manufacturing team."],
            [DraftingCompass, "Layout Planning", "Machine sequence and conveyor routing are matched to the customer workshop."],
            [Globe2, "Overseas Service", "Installation guidance and technical support for long-term production stability."],
          ].map(([Icon, title, text]) => (
            <article className="bg-[#07111f] p-9" key={title as string}>
              <Icon className="mb-8 text-[#c8ff2e]" size={34} />
              <h3 className="mb-3 text-2xl font-semibold">{title as string}</h3>
              <p className="leading-7 text-slate-400">{text as string}</p>
            </article>
          ))}
        </div>
      </section>

      <MainSiteFooter />
    </main>
  );
}
