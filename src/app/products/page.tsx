import Link from "next/link";
import { ArrowRight, Factory, ShieldCheck, Wrench } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5QktW79y84gZY7_u8RUsGXIZvo4gpc7wlmxowcWODUDq-hrhjjR0RoBzt4IZ-5x42BElgIxs7oLRpQRA-CpEDCke0DVmRFC7IVd0ztk-3yTTkUJbF9FenoQx1dIo6BPJpAxIxdV0_VWasH82qB8onDBJYN0yC11NL5_pvEePWQkF1NGGhbQPQCH6TbprLTh3FIQ3aTzJXGbWhzy_v5jFy8SSFIErrbzCZSQr2N64VOAyXc79CCefow-MgeW14i4xRIsHcK8qil-4";

const productImage = "/images/product-filling-machine.jpg";

const categories = [
  [
    "Water Treatment",
    "Advanced filtration, RO purification, and sterilization modules.",
    "WTS-X800",
    "CAP: 2,000L/H",
    "/images/products/auxiliary/water-treatment.png",
    "/products/auxiliary/water-treatment-system",
  ],
  [
    "Blending",
    "Mixing and preparation systems for juice, tea, and functional drinks.",
    "MIX-PRO",
    "PLC: SIEMENS",
    "/images/products/auxiliary/juice-blending-system.png",
    "/products/auxiliary/juice-blending-system",
  ],
  [
    "Blow Molding Machine",
    "Automated PET stretch-blow solutions for stable bottle forming.",
    "BBM-V4",
    "MAX: 12,000 BPH",
    "/images/products/auxiliary/blow-molding-machine.png",
    "/products/auxiliary/fully-automatic-blow-molding-machine",
  ],
  [
    "Filling Machine",
    "Rotary rinsing, filling, and capping machines for water, CSD, juice, beer, and oil.",
    "FILLING",
    "MULTI SERIES",
    "/images/products/water-filling-60-head.jpg",
    "/products/filling-machine",
  ],
  [
    "Labeling Machine",
    "Rotary and linear labeling systems for self-adhesive, OPP, and shrink sleeve labels.",
    "LBL-SERIES",
    "4 TYPES",
    "/images/products/auxiliary/rotary-opp-labeler.png",
    "/products/labeling-machine",
  ],
  [
    "Packaging Machine",
    "Shrink wrapping and carton packing for finished products.",
    "PKG-MAX",
    "PLC: SIEMENS",
    "/images/products/auxiliary/shrink-wrap-machine.png",
    "/products/auxiliary/shrink-wrap-machine",
  ],
  [
    "Palletizing Machine",
    "Automatic stacking systems for cartons, trays, and wrapped packs.",
    "PAL-AUTO",
    "STACK: AUTO",
    "/images/products/auxiliary/palletizer.png",
    "/products/auxiliary/palletizer",
  ],
  [
    "Depalletizer",
    "Automatic empty bottle or can unloading for high-speed production lines.",
    "DEP-AUTO",
    "LINE: AUTO",
    "/images/products/auxiliary/depalletizer.png",
    "/products/auxiliary/depalletizer",
  ],
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="PRODUCTS" />

        <section className="relative flex h-[520px] items-center overflow-hidden border-b border-[#e2e8f0] pt-24">
          <div className="absolute inset-0">
            <img alt="" className="size-full object-cover opacity-95" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Machinery Portfolio
            </span>
            <h1 className="mb-6 text-5xl font-bold uppercase md:text-7xl">
              Industrial Beverage Solutions
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              High-precision engineering for global manufacturing. Sokos provides turnkey
              automation solutions for the complete beverage production lifecycle.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16 flex flex-col justify-between gap-6 border-b border-[#e2e8f0] pb-8 md:flex-row md:items-end">
              <div>
                <SectionLabel>Machinery Portfolio</SectionLabel>
                <h2 className="text-4xl font-semibold uppercase">Precision Systems</h2>
              </div>
              <p className="hidden font-mono text-sm uppercase tracking-[0.16em] text-slate-500 md:block">
                ISO 9001:2015 certified manufacturing
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map(([title, description, code, spec, image, href]) => (
                <article
                  className="group flex flex-col border border-[#e2e8f0] bg-white shadow-sm transition-all hover:border-primary hover:shadow-lg"
                  key={title}
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-[#e2e8f0]">
                    <img
                      alt={title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={image}
                    />
                    <div className="absolute left-4 top-4 bg-primary px-2 py-1 font-mono text-[10px] text-white">
                      {code}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="mb-8 text-sm leading-6 text-slate-600">{description}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-[#e2e8f0] pt-5">
                      <span className="font-mono text-xs text-primary">{spec}</span>
                      <Link href={href}>
                        <ArrowRight
                          className="text-primary transition-transform group-hover:translate-x-1"
                          size={18}
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 md:px-16 lg:grid-cols-2">
            <div>
              <SectionLabel>Core Competencies</SectionLabel>
              <h2 className="mb-8 text-4xl font-bold uppercase">The Engineering Advantage.</h2>
              <div className="flex flex-col gap-8">
                {[
                  [Factory, "Factory Direct Execution"],
                  [ShieldCheck, "CE/ISO International Certification"],
                  [Wrench, "24/7 Global Technical Support"],
                ].map(([Icon, title]) => (
                  <div className="flex gap-6" key={title as string}>
                    <div className="flex size-12 shrink-0 items-center justify-center border border-[#e2e8f0] bg-[#f5f7fa] text-primary">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold">{title as string}</h3>
                      <p className="text-sm leading-6 text-slate-600">
                        Manufacturing depth, certified quality, and fast support throughout the
                        machine lifecycle.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#e2e8f0] bg-white p-4 shadow-sm">
              <div className="relative aspect-square overflow-hidden bg-[#f5f7fa]">
                <img alt="Engineering system" className="size-full object-cover" src={productImage} />
                <div className="absolute bottom-8 left-8">
                  <div className="mb-1 font-mono text-5xl font-bold text-primary">99.8%</div>
                  <div className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                    Operational uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
