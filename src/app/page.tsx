import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  MapPin,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { MainSiteFooter } from "@/components/main-site-shell";

const solutions = [
  {
    title: "Water Bottling Turnkey Line",
    href: "/solutions/water-filling-line",
    image: "/images/home/turnkey-lines/water-bottling-turnkey-line-layout.jpg",
    imageAlt:
      "Complete water bottling turnkey line layout with bottle blowing, filling, labeling, packing, and palletizing machines",
    text: "Complete bottled water plant layout from bottle blowing and filling to labeling, carton packing, and palletizing.",
  },
  {
    title: "Carbonated Drink Filling Line",
    href: "/solutions/carbonated-drink-filling-line",
    image: "/images/home/turnkey-lines/carbonated-drink-filling-line-layout.jpg",
    imageAlt:
      "Carbonated drink filling line layout for soda, sparkling water, conveying, packing, and palletizing",
    text: "Integrated isobaric filling line for sparkling water, soda, cola, and other carbonated beverage projects.",
  },
  {
    title: "Juice Beverage Filling Line",
    href: "/solutions/juice-filling-line",
    image: "/images/home/turnkey-lines/juice-beverage-filling-line-layout.jpg",
    imageAlt:
      "Juice beverage filling line layout with blending, sterilizing, bottle filling, labeling, and packaging equipment",
    text: "Hot-fill juice and tea production line with blending, sterilization, filling, labeling, and end-of-line packaging.",
  },
  {
    title: "Edible Oil Filling Line",
    href: "/solutions/oil-filling-line",
    image: "/images/home/turnkey-lines/edible-oil-filling-line-layout.jpg",
    imageAlt:
      "Edible oil filling line layout with PET bottle filling, labeling, carton packing, and palletizing equipment",
    text: "Turnkey edible oil line for PET bottle handling, oil filling, labeling, carton packing, and palletized delivery.",
  },
  {
    title: "Beer Bottling Turnkey Line",
    href: "/solutions/beer-filling-line",
    image: "/images/home/turnkey-lines/beer-bottling-turnkey-line-layout.jpg",
    imageAlt:
      "Beer bottling turnkey line layout with glass bottle filling, labeling, packaging, conveying, and palletizing",
    text: "Glass bottle beer line covering depalletizing, rinsing, filling, capping, labeling, packing, and palletizing.",
  },
];

const deliveryImages = [
  {
    src: "/images/home/project-delivery/sokos-customer-project-meeting.jpg",
    alt: "Sokos beverage filling line project meeting with customers",
    title: "Project Meeting",
  },
  {
    src: "/images/home/project-delivery/sokos-overseas-customer-factory-inspection.jpg",
    alt: "Overseas customer inspecting Sokos beverage filling machinery in factory",
    title: "Factory Inspection",
  },
  {
    src: "/images/home/project-delivery/sokos-filling-line-factory-visit.png",
    alt: "Sokos team introducing filling line equipment during customer factory visit",
    title: "Factory Visit",
  },
  {
    src: "/images/home/project-delivery/sokos-filling-machine-container-loading.jpg",
    alt: "Sokos filling machines packed and loaded into containers for overseas delivery",
    title: "Container Loading",
  },
];

const exhibitions = [
  {
    title: "PROPAK ASIA 2026",
    image: "/images/home/exhibitions/propak-asia-2026-bangkok-sokos-machinery.jpg",
    imageAlt: "Sokos Machinery exhibition information for PROPAK ASIA 2026 in Bangkok",
    date: "June 10-13, 2026",
    location: "Bangkok, Thailand",
    booth: "Booth C1-R78-1",
    text: "Sokos Machinery will present complete liquid filling line solutions for beverage, food, and packaging projects.",
  },
  {
    title: "PROPAK INDONESIA 2026",
    image: "/images/home/exhibitions/propak-indonesia-2026-jakarta-sokos-machinery.jpg",
    imageAlt: "Sokos Machinery exhibition information for PROPAK INDONESIA 2026 in Jakarta",
    date: "July 21-24, 2026",
    location: "Jakarta, Indonesia",
    booth: "Booth A1-1411",
    text: "Meet New Peak Machinery and Sokos Machinery for liquid filling line manufacturing and turnkey project support.",
  },
  {
    title: "CBST 2025 Shanghai",
    image: "/images/home/exhibitions/cbst-2025-shanghai-sokos-machinery.jpg",
    imageAlt: "Sokos Machinery at CBST 2025 Shanghai beverage industry exhibition",
    date: "March 5-7, 2025",
    location: "Shanghai, China",
    booth: "Hall N3, Booth 3E15 & 3E19",
    text: "Visit Sokos Machinery and New Peak Machinery for beverage filling equipment and complete liquid filling solutions.",
  },
  {
    title: "MIHAS 2025 Malaysia",
    image: "/images/home/exhibitions/mihas-2025-malaysia-newpeak-machinery.jpg",
    imageAlt: "New Peak Machinery exhibition information for MIHAS 2025 Malaysia",
    date: "September 17-20, 2025",
    location: "Malaysia",
    booth: "Booth 8R11",
    text: "New Peak Machinery will showcase reliable filling line equipment for beverage, food, and liquid packaging sectors.",
  },
  {
    title: "Gulfood Manufacturing 2024",
    image: "/images/home/exhibitions/gulfood-manufacturing-2024-dubai-sokos-machinery.jpg",
    imageAlt: "Sokos Machinery at Gulfood Manufacturing 2024 Dubai World Trade Centre",
    date: "November 5-7, 2024",
    location: "Dubai, UAE",
    booth: "Booths J9-42 & J8-42",
    text: "Sokos Machinery joined the leading food and beverage manufacturing event with complete filling line solutions.",
  },
  {
    title: "AGROPRODMASH 2024",
    image: "/images/home/exhibitions/agroprodmash-2024-moscow-sokos-machinery.jpg",
    imageAlt: "Sokos Machinery at AGROPRODMASH 2024 Moscow food processing exhibition",
    date: "October 7-11, 2024",
    location: "Moscow, Russia",
    booth: "Hall 8.1, Room 81A32",
    text: "Sokos Machinery presented liquid filling equipment and complete production lines for food processing projects.",
  },
];

const applications = [
  {
    title: "Drinking Water",
    image: "/images/home/application-water.png",
    text: "Complete bottled water lines for purified water, mineral water, and spring water plants.",
  },
  {
    title: "Carbonated Drinks",
    image: "/images/home/application-carbonated.png",
    text: "Isobaric filling systems for sparkling water, soda, energy drinks, and carbonated beverages.",
  },
  {
    title: "Juice & Tea",
    image: "/images/home/application-juice.png",
    text: "Hot filling and blending solutions for juice, tea drinks, functional drinks, and flavored beverages.",
  },
  {
    title: "Edible Oil",
    image: "/images/home/application-oil.png",
    text: "Oil filling and packaging lines for PET bottles, handles, cartons, and palletized delivery.",
  },
  {
    title: "Beer",
    image: "/images/home/application-beer.png",
    text: "Glass bottle beer filling lines with depalletizing, rinsing, filling, capping, labeling, and packing.",
  },
  {
    title: "Viscous Products",
    image: "/images/home/application-viscous.png",
    text: "Piston filling solutions for sauce, detergent, lotion, and other high-viscosity products.",
  },
];

const history = [
  {
    year: "2004",
    image: "/images/home/company-history/sokos-beverage-machinery-factory-entrance.jpg",
    imageAlt:
      "Sokos beverage machinery factory entrance in Zhangjiagang, China",
    title: "Factory Foundation",
    text: "Sokos started from beverage machinery manufacturing in Zhangjiagang, building its foundation in stainless-steel equipment production.",
  },
  {
    year: "2012",
    image: "/images/home/company-history/sokos-filling-machine-factory-scale.jpg",
    imageAlt:
      "Aerial view of Sokos filling machine factory and production scale",
    title: "Manufacturing Expansion",
    text: "The company expanded factory capacity and moved from single machines into complete beverage filling and packaging line integration.",
  },
  {
    year: "2018",
    image: "/images/home/company-history/sokos-overseas-customer-acceptance.jpg",
    imageAlt:
      "Overseas customer acceptance visit for Sokos beverage filling machinery",
    title: "Overseas Project Delivery",
    text: "Sokos strengthened engineering, installation, and customer acceptance support for overseas beverage production line projects.",
  },
  {
    year: "2025",
    image: "/images/home/company-history/sokos-exporting-to-80-countries-after-sales-service.jpg",
    imageAlt:
      "Sokos exporting to more than 80 countries with 24/7 technical support and after-sales service",
    title: "Global Service Network",
    text: "Sokos turnkey filling lines reached 80+ countries with 24/7 technical support and reliable long-term after-sales service.",
  },
];

const markets = [
  ["🇦🇪", "Dubai", "12000BPH Water Filling Line"],
  ["🇪🇹", "Ethiopia", "16000BPH Carbonated Drink Line"],
  ["🇮🇩", "Indonesia", "8000BPH Edible Oil Line"],
  ["🇸🇦", "Saudi Arabia", "Turnkey Beverage Filling Line"],
  ["🇹🇷", "Turkey", "Certification-Ready Filling System"],
  ["🇧🇷", "Brazil", "Complete Beverage Packaging Line"],
];

const mapFlags = [
  ["🇺🇸", "United States", "left-[22%] top-[39%]"],
  ["🇲🇽", "Mexico", "left-[20%] top-[53%]"],
  ["🇧🇷", "Brazil", "left-[31%] top-[66%]"],
  ["🇬🇧", "United Kingdom", "left-[46%] top-[35%]"],
  ["🇹🇷", "Turkey", "left-[53%] top-[43%]"],
  ["🇪🇬", "Egypt", "left-[53%] top-[53%]"],
  ["🇿🇦", "South Africa", "left-[55%] top-[76%]"],
  ["🇦🇪", "Dubai", "left-[62%] top-[47%]"],
  ["🇸🇦", "Saudi Arabia", "left-[60%] top-[52%]"],
  ["🇮🇳", "India", "left-[68%] top-[58%]"],
  ["🇹🇭", "Thailand", "left-[74%] top-[62%]"],
  ["🇮🇩", "Indonesia", "left-[78%] top-[70%]"],
  ["🇨🇳", "China", "left-[75%] top-[48%]"],
  ["🇯🇵", "Japan", "left-[83%] top-[48%]"],
  ["🇦🇺", "Australia", "left-[83%] top-[79%]"],
];

const certificates = [
  [
    "CAC Machinery Directive Certificate",
    "/images/home/certificates/sokos-cac-machinery-directive-certificate.jpg",
  ],
  [
    "UDEM Machinery Directive Certificate",
    "/images/home/certificates/sokos-udem-machinery-directive-certificate.jpg",
  ],
  [
    "ISO 9001 Quality Management Certificate",
    "/images/home/certificates/sokos-iso-9001-quality-management-certificate.jpg",
  ],
  [
    "High-Tech Enterprise Certificate",
    "/images/home/certificates/sokos-high-tech-enterprise-certificate.jpg",
  ],
];

function SmallLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] ${
        dark ? "text-[#c8ff2e]" : "text-primary"
      }`}
    >
      <span className="block size-2 bg-[#c8ff2e]" />
      {children}
    </p>
  );
}

function ArrowButton({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <Link
      className={`inline-flex items-center gap-3 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] transition ${
        dark
          ? "bg-[#c8ff2e] text-[#07111f] hover:bg-white"
          : "bg-primary text-white hover:bg-[#c8ff2e] hover:text-[#07111f]"
      }`}
      href={href}
    >
      {label}
      <span className="grid size-6 place-items-center bg-white/20">
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

export const metadata = {
  title: "Sokos Machinery Home",
  description:
    "Steelix-inspired second homepage layout for Sokos Machinery, featuring production lines, factory scale, culture, history, overseas markets, and certificates.",
};

export default function HomePage() {
  return (
    <main className="bg-[#07111f] text-white">
      <header className="relative z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 md:px-8">
          <Link className="flex items-center gap-3" href="/">
            <img
              alt="Sokos Machinery"
              className="h-11 w-auto"
              src="/images/home/sokos-logo-wide.png"
            />
          </Link>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-slate-700 lg:flex">
            {[
              ["Home", "/"],
              ["Solutions", "/solutions"],
              ["Products", "/products"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link className="transition hover:text-primary" href={href} key={label}>
                {label}
              </Link>
            ))}
          </nav>
          <Link
            className="hidden items-center gap-2 bg-[#c8ff2e] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#07111f] md:inline-flex"
            href="/contact"
          >
            Get Quote <ChevronRight size={14} />
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img
          alt="Sokos beverage filling machine manufacturer turnkey production line"
          className="block h-auto w-full"
          src="/images/home/sokos-beverage-filling-machine-manufacturer-banner.jpg"
        />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07111f]/90 to-transparent" />
      </section>

      <section className="bg-[#eef3f6] px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SmallLabel>Industrial excellence</SmallLabel>
            <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Complete Line Engineering With Factory-Scale Delivery
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Sokos provides turnkey solutions across the complete liquid production lifecycle,
              from water treatment and blow molding to high-speed filling and final palletizing.
              We combine manufacturing scale, engineering design, and global service to support
              stable long-term production.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4">
              {[
                ["20+", "Years experience"],
                ["30,000㎡", "Manufacturing space"],
                ["120+", "Team members"],
                ["80+", "Export markets"],
              ].map(([value, label]) => (
                <div className="border-l-4 border-[#c8ff2e] bg-white p-5 shadow-sm" key={label}>
                  <div className="font-mono text-3xl font-semibold text-primary">{value}</div>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Sokos factory production workshop"
              className="col-span-2 h-[280px] w-full object-cover object-[center_28%]"
              src="/images/home/industrial-workshop-wide.jpg"
            />
            <img
              alt="Sokos factory assembly workshop"
              className="col-span-2 h-[280px] w-full object-cover object-[center_34%]"
              src="/images/about-workshop/workshop-01.jpg"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 lg:py-28">
        <div className="mx-auto mb-12 flex max-w-[1320px] flex-col gap-8 px-5 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SmallLabel dark>Large-scale projects</SmallLabel>
            <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Turnkey Lines Shown Through Real Production Layouts
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Each line is presented with a clean image, title, and description format. The image
              rail stretches to the right edge of the screen for a stronger industrial layout.
            </p>
          </div>
          <ArrowButton dark href="/solutions" label="Explore" />
        </div>
        <div className="ml-0 lg:ml-[max(2rem,calc((100vw-1320px)/2+2rem))]">
          <div className="flex gap-6 overflow-x-auto px-5 pb-4 md:px-8 lg:pl-0 lg:pr-0">
            {solutions.map((item) => (
              <Link
                className="group w-full shrink-0 bg-[#10243a] sm:w-[460px] xl:w-[620px]"
                href={item.href}
                key={item.title}
              >
                <div className="aspect-[2/1] overflow-hidden bg-[#eef3f6]">
                  <img
                    alt={item.imageAlt}
                    className="size-full object-contain transition duration-700 group-hover:scale-105"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                    title={item.title}
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold uppercase">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SmallLabel>Exhibition information</SmallLabel>
              <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
                Meet Sokos Machinery At Global Industry Exhibitions
              </h2>
            </div>
            <ArrowButton href="/contact" label="Contact us" />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {exhibitions.map((item) => (
              <article
                className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                key={item.title}
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    alt={item.imageAlt}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                    title={item.title}
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold uppercase">{item.title}</h3>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-primary" />
                      {item.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      {item.location}
                    </p>
                    <p className="font-semibold text-[#07111f]">{item.booth}</p>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-32 md:px-8 lg:py-44">
        <img
          alt="Sokos factory exterior"
          className="absolute inset-0 size-full object-cover opacity-88"
          src="/images/home/since-2004-factory.jpg"
        />
        <div className="absolute inset-0 bg-[#07111f]/28" />
        <div className="relative mx-auto max-w-[1320px]">
          <div>
            <SmallLabel dark>Since 2004</SmallLabel>
            <h2 className="max-w-2xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
              We Work For Reliable Beverage Production Around The World
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SmallLabel>Project delivery</SmallLabel>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Customer Visits, Factory Checks And Overseas Shipment
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
              Sokos supports every turnkey filling line from technical discussion and factory
              inspection to equipment packing, container loading, and overseas project delivery.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Project communication",
                "Factory acceptance",
                "Equipment inspection",
                "Export packing",
              ].map((item) => (
                <div className="border-l-2 border-primary bg-white px-5 py-4 shadow-sm" key={item}>
                  <p className="text-sm font-semibold uppercase text-[#07111f]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {deliveryImages.map((image, index) => (
              <figure
                className={`${index === 0 ? "md:translate-y-8" : ""} ${
                  index === 3 ? "md:-translate-y-8" : ""
                } bg-white p-3 shadow-sm`}
                key={image.src}
              >
                <img
                  alt={image.alt}
                  className="h-[250px] w-full object-cover"
                  loading="lazy"
                  src={image.src}
                  title={image.title}
                />
                <figcaption className="px-1 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {String(index + 1).padStart(2, "0")} / {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1a2b] px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SmallLabel dark>Company history</SmallLabel>
              <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
                From Local Manufacturing To Global Turnkey Projects
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
                Sokos has grown from factory-based beverage machinery production into an
                international turnkey filling line supplier with project delivery and after-sales
                support across major overseas markets.
              </p>
            </div>
            <ArrowButton dark href="/about" label="About us" />
          </div>

          <div className="px-0 py-4 text-white lg:py-8">
            <div className="relative hidden min-h-[460px] lg:block">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/35" />
              <div className="absolute left-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#c8ff2e]" />
              <div className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#c8ff2e]" />

              {history.map((item, index) => {
                const positions = ["left-[8%]", "left-[34%]", "left-[61%]", "left-[88%]"];
                const imageSizes = ["size-20", "size-28", "size-24", "size-32"];
                const markerSizes = ["size-24", "size-32", "size-28", "size-36"];
                const isTop = index % 2 === 0;

                return (
                  <article className={`absolute top-1/2 w-[220px] -translate-x-1/2 ${positions[index]}`} key={item.year}>
                    <div
                      className={`absolute left-1/2 w-px -translate-x-1/2 bg-white/35 ${
                        isTop ? "-top-24 h-24" : "top-0 h-24"
                      }`}
                    />
                    <div
                      className={`absolute left-1/2 top-0 z-10 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-xl ring-8 ring-[#0b1a2b] ${markerSizes[index]}`}
                    >
                      <img
                        alt={item.imageAlt}
                        className={`rounded-full object-cover ${imageSizes[index]}`}
                        src={item.image}
                        title={`${item.year} ${item.title}`}
                      />
                    </div>
                    <div
                      className={`absolute left-1/2 w-[220px] -translate-x-1/2 ${
                        isTop ? "-top-44" : "top-28"
                      }`}
                    >
                      <p className="font-mono text-3xl font-semibold text-[#c8ff2e]">{item.year}</p>
                      <h3 className="mt-2 text-base font-semibold uppercase text-white">{item.title}</h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="grid gap-6 lg:hidden">
              {history.map((item, index) => {
                const imageSizes = ["size-20", "size-24", "size-20", "size-28"];

                return (
                  <article className="grid grid-cols-[auto_1fr] gap-5" key={item.year}>
                    <div className="relative flex justify-center">
                      <div className="absolute bottom-0 top-0 w-px bg-white/25" />
                      <img
                        alt={item.imageAlt}
                        className={`relative z-10 rounded-full border-4 border-white object-cover shadow-lg ${imageSizes[index]}`}
                        src={item.image}
                        title={`${item.year} ${item.title}`}
                      />
                    </div>
                    <div className="pb-8">
                      <p className="font-mono text-3xl font-semibold text-[#c8ff2e]">{item.year}</p>
                      <h3 className="mt-2 text-base font-semibold uppercase text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 grid grid-cols-1 gap-7 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <SmallLabel>Application</SmallLabel>
              <h2 className="max-w-2xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
                Application Projects For Different Beverage Categories
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <p className="max-w-xl text-sm leading-7 text-slate-600 lg:text-right">
                From water and carbonated drinks to juice, oil, beer, and viscous products, Sokos
                configures complete line solutions around each product process and bottle format.
              </p>
              <ArrowButton href="/solutions" label="View projects" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
            {applications.map((item, index) => (
              <Link
                className={`group relative min-h-[360px] overflow-hidden bg-[#10243a] ${
                  index === 0 ? "xl:col-span-2" : ""
                }`}
                href="/solutions"
                key={item.title}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02)_0%,rgba(7,17,31,0.38)_48%,rgba(7,17,31,0.92)_100%)]" />
                <div className="relative flex h-full min-h-[360px] flex-col justify-between p-7 text-white">
                  <div className="flex justify-between">
                    <span className="font-mono text-sm text-[#c8ff2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-10 place-items-center border border-white/35 text-white transition group-hover:border-[#c8ff2e] group-hover:bg-[#c8ff2e] group-hover:text-[#07111f]">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                  <div>
                    <h3 className="max-w-md text-2xl font-semibold uppercase md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">{item.text}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SmallLabel dark>Overseas markets</SmallLabel>
            <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Global Project Distribution
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              Sokos turnkey filling lines are installed across major overseas markets, with project
              references in the Middle East, Africa, Southeast Asia, South America, and Europe.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {markets.map(([, country, project]) => (
                <div className="border border-white/10 bg-[#10243a] p-5" key={project}>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#c8ff2e]">
                    {country}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {project}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden bg-[#d8effa]">
            <img
              alt="Sokos global project world map"
              className="absolute inset-0 size-full object-cover"
              src="/images/home/world-map-dots.jpg"
            />
            <div className="absolute inset-0 bg-white/5" />
            {mapFlags.map(([flag, country, position]) => (
              <div
                className={`absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-2xl shadow-lg ring-2 ring-white ${position}`}
                key={country}
              >
                {flag}
              </div>
            ))}
            <div className="absolute bottom-8 left-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#07111f]">
              <MapPinned size={18} />
              Global project map
            </div>
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
          alt="Engineering service"
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

      <MainSiteFooter />
    </main>
  );
}
