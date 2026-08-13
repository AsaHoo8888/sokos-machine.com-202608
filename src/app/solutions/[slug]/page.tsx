import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Play } from "lucide-react";
import { ArrowButton, MainSiteFooter, MainSiteHeader, SmallLabel } from "@/components/main-site-shell";
import { getSolution, solutions } from "../data";

type SolutionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: `${solution.title} | Sokos Machinery`,
    description: solution.summary,
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  return (
    <main className="bg-[#07111f] text-white">
      <MainSiteHeader active="Solutions" />

      <section className="relative min-h-[760px] overflow-hidden">
        <img alt={solution.title} className="absolute inset-0 size-full object-cover" src={solution.image} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/20" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1320px] flex-col justify-end px-5 pb-24 pt-24 md:px-8">
          <Link
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#c8ff2e]"
            href="/solutions"
          >
            <ArrowLeft size={16} />
            Back to solutions
          </Link>
          <SmallLabel dark>{`${solution.code} / ${solution.market}`}</SmallLabel>
          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] md:text-8xl">
            {solution.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">{solution.summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ArrowButton dark href="/contact" label="Request Layout" />
            {solution.videoUrl ? (
              <a
                className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white hover:border-[#c8ff2e] hover:text-[#c8ff2e]"
                href={solution.videoUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Play size={14} />
                Watch Video
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <SmallLabel>Main Machine</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase md:text-6xl">
                Line Sequence
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Each stage is selected as part of a complete system, so conveying, controls, safety,
              and output targets can be matched before manufacturing.
            </p>
          </div>

          <div className="grid gap-6">
            {solution.steps.map((step, index) => (
              <article
                className="group grid items-center gap-7 border border-slate-200 bg-white p-5 transition hover:border-primary md:grid-cols-[280px_1fr_110px]"
                key={`${step.phase}-${step.title}`}
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    alt={step.title}
                    className="size-full object-contain p-4 transition duration-700 group-hover:scale-105"
                    src={step.image}
                  />
                </div>
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    {step.phase}
                  </p>
                  <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                  <p className="max-w-3xl leading-7 text-slate-600">{step.text}</p>
                </div>
                <div className="font-mono text-5xl text-slate-200 md:text-right">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-24 text-[#07111f] md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SmallLabel>Project Scope</SmallLabel>
            <h2 className="mb-6 text-4xl font-semibold uppercase md:text-5xl">
              Designed Around Output
            </h2>
            <p className="leading-8 text-slate-600">
              Sokos engineers line configuration around bottle material, filling temperature,
              pressure requirements, packaging method, workshop footprint, and installation plan.
            </p>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
            {[
              ["Capacity", solution.capacity],
              ["Application", solution.market],
              ["Automation", "Integrated PLC line control"],
              ["Support", "Layout, installation, and training"],
            ].map(([label, value]) => (
              <article className="bg-white p-8" key={label}>
                <CheckCircle2 className="mb-6 text-primary" size={26} />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-5 py-20 md:px-8">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <SmallLabel dark>Factory Layout</SmallLabel>
            <h2 className="text-4xl font-semibold">Need a {solution.title} proposal?</h2>
          </div>
          <Link
            className="inline-flex items-center gap-3 bg-[#c8ff2e] px-7 py-5 font-mono text-xs uppercase tracking-[0.18em] text-[#07111f]"
            href="/contact"
          >
            Contact Engineering <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <MainSiteFooter />
    </main>
  );
}
