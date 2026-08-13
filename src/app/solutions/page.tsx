import Link from "next/link";
import { ArrowRight, DraftingCompass, Factory, Globe2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroImage =
  "/images/water-line-2.jpg";

const solutions = [
  {
    code: "WFL-9000",
    title: "Water Filling Line",
    href: "/solutions/water-filling-line",
    description:
      "High-speed rotary systems for pure, mineral, and distilled water in PET or glass bottles.",
    image: "/images/water-line-2.jpg",
  },
  {
    code: "JFL-SERIES",
    title: "Juice Filling Line",
    href: "/solutions/juice-filling-line",
    description:
      "Hot-filling and aseptic packaging technologies to preserve nutrient density and flavor profile.",
    image: "/images/solutions/juice-line.jpg",
  },
  {
    code: "CSD-ULTRA",
    title: "Carbonated Drink Filling Line",
    href: "/solutions/carbonated-drink-filling-line",
    description:
      "Isobaric filling solutions for soft drinks, mixers, and sparkling waters with advanced CO2 control.",
    image: "/images/solutions/csd-line.png",
  },
  {
    code: "BFL-3000",
    title: "Beer Filling Line",
    href: "/solutions/beer-filling-line",
    description:
      "Oxygen-free filling systems designed to maintain the carbonation and integrity of craft brews.",
    image: "/images/solutions/beer-filling-line-generated.png",
  },
  {
    code: "OIL-PRO",
    title: "Edible Oil Filling Line",
    href: "/solutions/oil-filling-line",
    description:
      "Weighted filling and drip-free technology for viscous cooking oils and lubricants.",
    image: "/images/solutions/oil-filling-line.jpg",
  },
  {
    code: "VPF-LINE",
    title: "Viscous Product Filling Line",
    href: "/solutions/viscous-product-filling-line",
    description:
      "Piston filling, labeling, carton packing, and palletizing for sauces, pastes, creams, and detergents.",
    image: "/images/solutions/viscous-product-filling-line-generated.png",
  },
];

const processSteps = [
  ["01", "Requirement Analysis", "Defining output goals and bottle specs."],
  ["02", "Layout Design", "Optimizing factory floor spatial efficiency."],
  ["03", "Manufacturing", "Precision fabrication of line components."],
  ["04", "Testing", "Rigorous quality control and dry runs."],
  ["05", "Shipment", "Secure global logistics and delivery."],
  ["06", "Installation", "On-site setup and personnel training."],
];

const advantages = [
  [
    Factory,
    "Factory Direct Supply",
    "Eliminate middlemen. Buy directly from our ISO-certified manufacturing facility for superior pricing and parts availability.",
  ],
  [
    DraftingCompass,
    "Custom Engineering",
    "Our R&D team adapts every component to match your unique bottle shapes and viscosity requirements perfectly.",
  ],
  [
    Globe2,
    "Global Support",
    "24/7 technical assistance and on-site engineering teams available in over 60 countries across five continents.",
  ],
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="SOLUTIONS" />

        <section className="relative flex h-[520px] items-center overflow-hidden border-b border-[#e2e8f0] pt-24">
          <div className="absolute inset-0">
            <img alt="" className="size-full object-cover opacity-95" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Global Excellence
            </span>
            <h1 className="mb-6 text-5xl font-bold uppercase md:text-7xl">
              Complete Production
              <br />
              Line Solutions
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Turnkey engineering for global beverage manufacturers. We provide end-to-end
              machinery setups designed for maximum throughput and uncompromising reliability.
            </p>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]" id="industry-segments">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16 text-left">
              <h2 className="mb-3 text-4xl font-bold">Industry Segments</h2>
              <p className="max-w-xl leading-7 text-slate-600">
                Precision-engineered filling and packaging lines tailored to your specific
                product requirements and factory layout.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <article
                  className="group flex flex-col justify-between border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                  key={solution.title}
                >
                  <div>
                    <div className="relative mb-6 aspect-video overflow-hidden border border-[#e2e8f0] bg-[#f5f7fa]">
                      <img
                        alt={solution.title}
                        className="size-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        src={solution.image}
                      />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-primary">
                      {solution.title}
                    </h3>
                    <p className="mb-10 leading-7 text-slate-600">{solution.description}</p>
                  </div>
                  <Link
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary transition-transform group-hover:translate-x-2"
                    href={solution.href}
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#e2e8f0] bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="mb-3 text-4xl font-bold">The Turnkey Lifecycle</h2>
                <p className="leading-7 text-slate-600">
                  Seamless transition from concept to high-volume production.
                </p>
              </div>
              <div className="hidden font-mono text-sm font-bold uppercase tracking-[0.14em] text-primary md:block">
                FLOW_STATUS: OPTIMIZED
              </div>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-[#e2e8f0] bg-white shadow-sm md:grid-cols-3 lg:grid-cols-6">
              {processSteps.map(([number, title, description]) => (
                <article
                  className="group relative overflow-hidden border-b border-r border-[#e2e8f0] p-6 transition-colors hover:bg-[#f5f7fa]"
                  key={number}
                >
                  <div className="mb-4 font-mono text-sm font-bold text-primary">{number}</div>
                  <h3 className="mb-2 text-sm font-bold uppercase">{title}</h3>
                  <p className="text-xs leading-5 text-slate-600">{description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {advantages.map(([Icon, title, description]) => (
                <article
                  className="border border-[#e2e8f0] bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                  key={title as string}
                >
                  <Icon className="mb-6 text-primary" size={40} />
                  <h3 className="mb-3 text-2xl font-bold">{title as string}</h3>
                  <p className="leading-7 text-slate-600">{description as string}</p>
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
