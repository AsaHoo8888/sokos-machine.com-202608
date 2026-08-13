import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  Factory,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { ArrowButton, HomeV2Footer, HomeV2Header, SmallLabel } from "@/components/home-v2-shell";

const stats = [
  ["20+", "Years experience"],
  ["30,000㎡", "Manufacturing space"],
  ["120+", "Team members"],
  ["80+", "Export markets"],
];

const factoryImages = [
  "/images/home-v2/industrial-workshop-wide.jpg",
  "/images/about-workshop/workshop-01.jpg",
  "/images/about-workshop/workshop-02.jpg",
  "/images/about-workshop/cnc-machining.jpg",
  "/images/about-workshop/engineering-design.jpg",
];

const history = [
  {
    year: "2004",
    image: "/images/about-workshop/workshop-01.jpg",
    title: "Manufacturing Foundation",
    text: "Sokos started from machinery manufacturing and built a stable base in stainless-steel equipment production.",
  },
  {
    year: "2012",
    image: "/images/solutions/water-line.jpg",
    title: "Turnkey Line Integration",
    text: "The company expanded from single machines into complete beverage filling and packaging line projects.",
  },
  {
    year: "2018",
    image: "/images/about-workshop/cnc-machining.jpg",
    title: "Precision Manufacturing",
    text: "CNC machining, engineering design, and full-line testing became stronger pillars for overseas delivery.",
  },
  {
    year: "2025",
    image: "/certificates/sokos-ce-certificate.png",
    title: "International Credentials",
    text: "Sokos continued upgrading certificates and global support for more demanding international projects.",
  },
];

const capabilities = [
  ["Plant Planning", "Factory layout, line flow, and capacity matching for new beverage projects."],
  ["Engineering Design", "Customized filling, packaging, and automation configuration."],
  ["Precision Manufacturing", "CNC machining, stainless-steel fabrication, and strict assembly control."],
  ["Quality Control", "Pre-delivery inspection and complete line running tests before shipment."],
];

const certificates = [
  ["CE Certificate 1", "/certificates/sokos-ce-certificate.png"],
  ["CE Certificate 2", "/certificates/sokos-ce-certificate.png"],
  ["CE Certificate 3", "/certificates/sokos-ce-certificate.png"],
  ["CE Certificate 4", "/certificates/sokos-ce-certificate.png"],
];

export const metadata = {
  title: "About Sokos Machinery V2",
  description:
    "Steelix-inspired about page for Sokos Machinery with factory scale, history, culture, capabilities, and certificates.",
};

export default function AboutV2Page() {
  return (
    <main className="bg-[#07111f] text-white">
      <HomeV2Header active="About" />

      <section className="relative min-h-[760px] overflow-hidden">
        <img
          alt="Sokos factory exterior"
          className="absolute inset-0 size-full object-cover"
          src="/images/home-v2/since-2004-factory.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.72)_0%,rgba(7,17,31,0.38)_46%,rgba(7,17,31,0.08)_100%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1320px] items-center px-5 md:px-8">
          <div className="max-w-3xl">
            <SmallLabel dark>About Sokos Machinery</SmallLabel>
            <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-[-0.035em] md:text-7xl">
              Factory-Scale Engineering For Global Beverage Lines
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Since 2004, Sokos has focused on liquid filling and packaging machinery, combining
              production scale, engineering design, and long-term service for complete line projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SmallLabel>Industrial excellence</SmallLabel>
            <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Built Around Manufacturing, Engineering, And Project Delivery
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Sokos provides turnkey solutions across the complete liquid production lifecycle,
              from water treatment and blow molding to high-speed filling and final palletizing.
              We engineer stable production systems for beverage, oil, beer, and viscous products.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div className="border-l-4 border-[#c8ff2e] bg-white p-5 shadow-sm" key={label}>
                  <div className="font-mono text-3xl font-semibold text-primary">{value}</div>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Sokos production workshop"
              className="col-span-2 h-[330px] w-full object-cover object-[center_35%]"
              src={factoryImages[0]}
            />
            {factoryImages.slice(1, 5).map((image) => (
              <img alt="Sokos factory capability" className="h-52 w-full object-cover" key={image} src={image} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SmallLabel dark>Company history</SmallLabel>
              <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
                A Clear Growth Path From Workshop To Turnkey Factory Lines
              </h2>
            </div>
            <ArrowButton dark href="/contact-v2" label="Talk to us" />
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {history.map((item) => (
              <article className="bg-[#10243a] p-5" key={item.year}>
                <img
                  alt={item.title}
                  className="h-52 w-full object-cover"
                  src={item.image}
                />
                <p className="mt-7 font-mono text-4xl font-semibold text-[#c8ff2e]">{item.year}</p>
                <h3 className="mt-4 text-xl font-semibold uppercase">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Engineering capability</SmallLabel>
              <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
                Integrated Control From Planning To Final Acceptance
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-3 border border-[#07111f] px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] transition hover:bg-[#07111f] hover:text-white"
              href="/solutions"
            >
              View solutions
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {capabilities.map(([title, text], index) => (
              <article className="bg-[#eef3f6] p-7" key={title}>
                <div className="mb-9 grid size-12 place-items-center bg-white text-primary">
                  {index === 0 ? <Building2 size={24} /> : <Factory size={24} />}
                </div>
                <h3 className="text-xl font-semibold uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Certificates</SmallLabel>
              <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
                Credentials For International Projects
              </h2>
            </div>
            <div className="flex gap-4 text-primary">
              <Award size={30} />
              <ShieldCheck size={30} />
              <Users size={30} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map(([title, image]) => (
              <a
                className="group block bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                href={image}
                key={title}
                rel="noreferrer"
                target="_blank"
              >
                <div className="aspect-[3/4] bg-[#eef3f6] p-3">
                  <img
                    alt={title}
                    className="size-full object-contain object-top transition duration-500 group-hover:scale-[1.03]"
                    src={image}
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 md:px-8">
        <img
          alt="Sokos engineering design"
          className="absolute inset-0 size-full object-cover opacity-35"
          src="/images/about-workshop/engineering-design.jpg"
        />
        <div className="absolute inset-0 bg-[#07111f]/80" />
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SmallLabel dark>Culture</SmallLabel>
            <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Precision, Responsibility, Innovation, And Service
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              [Sparkles, "Innovation", "Smarter automation and continuous R&D."],
              [CheckCircle2, "Quality", "Controlled manufacturing and testing."],
              [HeartHandshake, "Service", "Long-term technical response."],
            ].map(([Icon, title, text]) => (
              <article className="bg-white p-7 text-[#07111f]" key={title as string}>
                <Icon className="mb-8 text-primary" size={30} />
                <h3 className="text-xl font-semibold uppercase">{title as string}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeV2Footer />
    </main>
  );
}
