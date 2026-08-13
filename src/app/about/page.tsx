import { Globe2, ShieldCheck, Wrench } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroImage = "/images/about-hero-workshop.jpg";

const overviewImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVGlvT8k64Us6onRKlBJtKlUPU81gSy40CKBb63f7WI84PtFLSjg1wrk5U14hyXMqbuIAqF8wR63jzdTXQJKxSuYkT_ZYybXUt5KRK5iRl5claE5s6AE-DTM6lo9xN5qE3aWNbkg1hrkBNkyB35aiJ37urncxDdCiIhBfAIa3oS2TSI-YbE-0s0Fe4kZscQuTn-ctUOPb3Vi-cIESnHf_sfPhrdIttU5VTCRjroPw7oWlnmm3VK_92tXU_W9GflyL-zjMpJbREZyc";

const capabilityImages = [
  "/images/about-workshop/cnc-machining.jpg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBa7GJwmV-igoCHPeTdxISDonpQ80-0wIl-609VOjq4BZEribCZOH2D3iTf5QYr5LHjxQgY0jMsXFT4P99nT74zhH5-W0-JzLRzVyz2Zt843wwmefCMlsRbTrxMF1Ojnms-TfGc_RExeiVQUBlZwIYXS95X9Ql1NmIL7TljZOnw4JFCitbGaX83pcyis40aFU7lzRSSgqSJjWxyqsbbNrDxC9CXm26arIjVMmtdUgahRKCHilYVuoPooL7eITRSRg_KbYjKEmyIgWs",
  "/images/about-workshop/engineering-design.jpg",
];

const certificateItems = [
  {
    title: "CE Certificate 1",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 2",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 3",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 4",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 5",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 6",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 7",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 8",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
  {
    title: "CE Certificate 9",
    image: "/certificates/sokos-ce-certificate.png",
    href: "/certificates/sokos-ce-certificate.png",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="ABOUT" />

        <section className="relative flex min-h-[720px] items-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img alt="" className="size-full object-cover opacity-95" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-16">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Established 2004
              </span>
              <h1 className="mb-8 text-5xl font-bold uppercase leading-tight md:text-7xl">
                Engineering <span className="text-primary">Excellence</span> Since 2004
              </h1>
              <p className="max-w-2xl border-l-4 border-primary py-2 pl-6 text-lg leading-8 text-slate-600">
                Sokos Machinery is dedicated to the research, development, and manufacture of
                world-class liquid filling and packaging solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-5 md:px-16 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 size-24 border-l-2 border-t-2 border-primary" />
              <img
                alt="Filling line close-up"
                className="aspect-[4/3] w-full border border-[#e2e8f0] object-cover shadow-xl"
                src={overviewImage}
              />
              <div className="absolute -bottom-4 -right-4 size-24 border-b-2 border-r-2 border-primary" />
            </div>
            <div>
              <SectionLabel>Company Overview</SectionLabel>
              <h2 className="mb-6 text-4xl font-semibold uppercase">
                Global Leader in Filling & Packaging
              </h2>
              <div className="flex flex-col gap-6 leading-8 text-slate-600">
                <p>
                  Sokos provides turnkey solutions across the complete liquid production
                  lifecycle, from water treatment and blow molding to high-speed filling and
                  final palletizing.
                </p>
                <p>
                  We engineer competitive advantages for clients by maximizing throughput while
                  reducing operational overhead and maintenance complexity.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#e2e8f0] pt-10">
                <div>
                  <h3 className="mb-2 font-mono text-xl text-primary">Mission</h3>
                  <p className="text-sm text-slate-600">
                    Empower beverage brands with precision-engineered automation.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-mono text-xl text-primary">Vision</h3>
                  <p className="text-sm text-slate-600">
                    Standardize industrial excellence through R&D and global service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <p className="mb-5 text-sm font-semibold">Performance</p>
                <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
                  Numbers that speak for themselves
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-sm leading-6 text-[#131314]">
                  Sokos Machinery has grown steadily with manufacturing scale, global service,
                  and long-term customer partnerships across beverage production markets.
                </p>
                <div className="mt-7 flex items-center gap-5">
                  <a
                    className="inline-flex h-11 items-center border border-[#131314] px-6 text-xs font-medium transition-colors hover:bg-[#131314] hover:text-white"
                    href="/about"
                  >
                    Learn
                  </a>
                  <a
                    className="inline-flex h-11 items-center gap-2 text-xs font-medium transition-colors hover:text-primary"
                    href="/contact"
                  >
                    More
                    <span aria-hidden="true">›</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-5">
              {[
                ["Years operating", "20+", "Production experience in filling and packaging systems"],
                ["Factory scale", "30,000", "Square meters of modern manufacturing space"],
                ["Team members", "120+", "Employees across engineering, production, and service"],
                ["Countries served", "80+", "Export markets with active customer installations"],
                ["Clients worldwide", "5,000+", "Customers supported by Sokos machinery solutions"],
              ].map(([label, value, description]) => (
                <article className="border-2 border-[#131314] bg-white p-7" key={label}>
                  <h3 className="min-h-10 text-base font-bold">{label}</h3>
                  <div className="mt-12 border-b border-[#9ca3af] pb-4 text-right text-5xl font-bold leading-none md:text-6xl xl:text-5xl">
                    {value}
                  </div>
                  <p className="mt-4 text-right text-xs leading-5 text-[#131314]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel>Certificates</SectionLabel>
                <h2 className="text-4xl font-semibold uppercase">Certifications & Honors</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">
                International quality certifications, supplier credentials, and technical honors
                that support reliable global project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {certificateItems.map((certificate) => (
                <article
                  className="border border-[#e2e8f0] bg-white p-4 shadow-sm"
                  key={certificate.title}
                >
                  <a
                    className="block bg-[#f8fafc]"
                    href={certificate.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={certificate.title}
                      className="aspect-[4/3] w-full object-contain p-2"
                      src={certificate.image}
                    />
                  </a>
                  <h3 className="mt-5 text-lg font-semibold">{certificate.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <SectionLabel>Precision at Scale</SectionLabel>
                <h2 className="text-4xl font-semibold uppercase">
                  Advanced Manufacturing Ecosystem
                </h2>
              </div>
              <p className="font-mono text-sm uppercase tracking-[0.16em] text-slate-500">
                10,000 sqm facility / CNC integration
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ["CNC Precision", "Every component is machined in-house using 5-axis CNC technology."],
                ["Rigorous QC", "Each unit passes a 48-hour stress test before shipment authorization."],
                ["Innovative R&D", "Smart automation and IoT integration for predictive maintenance."],
              ].map(([title, description], index) => (
                <article className="border border-[#e2e8f0] bg-white p-6" key={title}>
                  <img
                    alt={title}
                    className="mb-6 h-48 w-full object-cover"
                    src={capabilityImages[index]}
                  />
                  <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-semibold uppercase">A Global Support Network</h2>
              <p className="mx-auto max-w-2xl text-slate-600">
                Wherever you are, our engineers provide remote diagnostics and on-site support
                across six continents.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                [Globe2, "On-Site Commissioning"],
                [Wrench, "Parts Lifecycle Management"],
                [ShieldCheck, "Cloud Diagnostics"],
              ].map(([Icon, title]) => (
                <article className="border-l-2 border-primary bg-[#f5f7fa] p-8" key={title as string}>
                  <Icon className="mb-5 text-primary" size={28} />
                  <h3 className="mb-2 text-xl font-semibold">{title as string}</h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Structured service programs keep your beverage production operating at
                    peak efficiency.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
