import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, Play, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const lineSteps = [
  {
    phase: "PHASE 01",
    title: "Piston Filling Machine",
    text: "Servo piston filling delivers accurate portions for sauces, pastes, detergents, and other high-viscosity products.",
    image: "/images/products/viscous-line-piston-filling.jpg",
  },
  {
    phase: "PHASE 02",
    title: "Labeling Machine",
    text: "Automatic label application keeps bottle or jar presentation consistent across round, square, and shaped containers.",
    image: "/images/products/viscous-line-labeling-machine.jpg",
  },
  {
    phase: "PHASE 03",
    title: "Carton Packing Machine",
    text: "Automatic carton forming, product loading, and sealing prepares finished viscous products for stable shipment.",
    image: "/images/products/viscous-line-carton-packing.jpg",
  },
  {
    phase: "PHASE 04",
    title: "Palletizing System",
    text: "Automatic carton conveying, stacking, and pallet handling improves end-of-line efficiency and warehouse flow.",
    image: "/images/products/viscous-line-palletizing-system.png",
  },
];

const specs = [
  ["ZGF4", "500 - 1,000", "4 piston heads", "3.0 kW", "0.4 m3/min"],
  ["ZGF8", "1,000 - 2,000", "8 piston heads", "4.5 kW", "0.6 m3/min"],
  ["ZGF12", "2,000 - 3,000", "12 piston heads", "6.5 kW", "0.8 m3/min"],
  ["ZGF14", "3,000 - 4,000", "14 piston heads", "8.0 kW", "1.0 m3/min"],
];

const projects = [
  {
    place: "THAILAND, BANGKOK",
    title: "Sauce Filling Line",
    text: "Integrated piston filling, labeling, carton packing, and palletizing for high-viscosity sauce production.",
    year: "Est. 2022",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP4P6D4E2dV2F7dNvNymMgO9yZdWDrAex2pCmQu7uEGu9dHcLJqp1vZ_nrBulkGhw9boMYU7eUEKIFnKYnrc6-WyluhJYCuy1LUcc0YdnTlHZ-xFAvOwk8n7aoH8Gqtx6dR_jyhTBo9TWDWEzbMnvLIGCKwssNhW5Dz8Yr3YqLwN3lraXHZa19c554GwwiOx7kEZCqQy-wLrLKPHbJDGNaAuDdB58OvBSiLD9Sc5bb359q3Qzdw2Og",
  },
  {
    place: "VIETNAM, HCMC",
    title: "Detergent Filling System",
    text: "Designed for foaming-control filling and clean carton packing in a compact factory layout.",
    year: "Est. 2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0gEzsSt7W3IFqo_5TPGC470ACgNg21JOJuFGXVRJbdWhGNlokARzqjk8SAI-GD8EVot97FsMSXO_LTqCMwNymVC68i0UYSUJn4M1xrpYJ_MEZU15FAJmy3oCLXjsPi6IhpIyw3TpNo-9zJJUPSyt0b9DfYjxG3VYnj2eleBc3sTVMLJftBPw0rJgZNQnq0Y25UaW6YQuJYiJFM9KmOgwbd2sU3ppeHOuSJ86g7NviAejs84al3bXm",
  },
  {
    place: "INDONESIA, SURABAYA",
    title: "Multi-Format Viscous Line",
    text: "Flexible configuration handling bottles and jars with anti-drip filling and rapid changeover.",
    year: "Est. 2021",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsmqer5ZMN104UAIQms18Eqhzt6lx2SYm4qC7qZALtn3aOFPC7ElnB_rUfMTDMRjrwfKDNj-XYJR0cDIl4OCnKSNQNp2eAS172oN590SMZ73J6-Sd0mzc9eiLnQXJNdoJVudc-_KwAhAkxfnZjTgFemD9OqI7cM68KuChmJ92uBPJwbSmKG6FBOaOVlwt_PAbOtO8sZ934y0NlG8HDEN1Pmefsghjk0J0eSn-xO2ZmV0ODeE4_qlh0",
  },
];

export default function ViscousProductFillingLinePage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="SOLUTIONS" />

        <section className="relative overflow-hidden px-5 pb-24 pt-40 md:px-16 lg:pb-[120px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-95"
            style={{ backgroundImage: "url('/images/products/viscous-line-piston-filling.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/15" />
          <div className="relative mx-auto max-w-[1200px]">
            <div className="max-w-2xl">
              <div className="mb-6 inline-block border border-primary/30 px-3 py-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  ISO 9001 Certified
                </span>
              </div>
              <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
                Complete Viscous Product
                <br />
                <span className="text-primary">Filling Solutions</span>
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-8 text-slate-600">
                Engineered for sauces, pastes, detergents, creams, and other high-viscosity
                products. From piston filling to palletizing, each module is configured for clean,
                accurate, and stable production.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white"
                  href="#configurations"
                >
                  View Configurations <ArrowRight size={16} />
                </Link>
                <Link
                  className="inline-flex items-center justify-center border border-[#e2e8f0] bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] hover:border-primary"
                  href="#technical-specs"
                >
                  Technical Specs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]" id="configurations">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
              <div>
                <h2 className="mb-4 text-4xl font-bold">Main Machine</h2>
                <div className="h-1 w-20 bg-primary" />
              </div>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                A complete viscous product filling line connects piston filling, labeling, carton
                packing, and palletizing into one continuous production system. Each module is
                configured around viscosity, container format, factory layout, and output target.
              </p>
            </div>
            <div className="mx-auto flex max-w-5xl flex-col gap-6">
              {lineSteps.map((step) => (
                <article
                  className="group grid grid-cols-1 items-center gap-8 border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:border-primary md:grid-cols-[240px_1fr] md:p-8"
                  key={step.phase}
                >
                  <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden">
                    <img
                      alt={step.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      src={step.image}
                    />
                  </div>
                  <div className="border-l-2 border-[#e2e8f0] pl-6">
                    <div className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {step.phase}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-[#131314]">{step.title}</h3>
                    <p className="max-w-2xl leading-7 text-slate-600">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-24 lg:py-[120px]" id="technical-specs">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="mb-2 text-3xl font-bold uppercase">Technical Specifications</h2>
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-slate-600">
                  System configuration matrix V2.4
                </p>
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">
                All units: SUS304 / PLC Control
              </span>
            </div>
            <div className="overflow-x-auto border border-[#e2e8f0] bg-white">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#e2e8f0] bg-[#e2e8f0]">
                    {["Model ID", "Capacity (BPH)", "Filling Heads", "Power (KW)", "Air Consumption"].map(
                      (label) => (
                        <th className="p-6 font-mono text-xs uppercase text-primary" key={label}>
                          {label}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {specs.map((row, index) => (
                    <tr
                      className={`border-b border-[#e2e8f0] transition-colors hover:bg-[#f1f5f9] ${
                        index === specs.length - 1 ? "text-primary" : "text-slate-600"
                      }`}
                      key={row[0]}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          className={`p-6 ${cellIndex === 0 ? "font-bold text-[#131314]" : ""}`}
                          key={cell}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="industrial-grid bg-white py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-16">
            <article className="border border-[#e2e8f0] bg-white/80 p-10 shadow-sm backdrop-blur md:col-span-2">
              <h3 className="mb-6 text-3xl font-bold">Intelligent Automation</h3>
              <p className="mb-8 max-w-md text-lg leading-8 text-slate-600">
                Siemens PLC integration allows for real-time monitoring and adaptive speed
                control, reducing human intervention by 85%.
              </p>
              <ul className="space-y-4 font-mono text-sm">
                {["Remote Diagnostics", "One-Touch Format Changeover", "IoT Data Logging"].map(
                  (item) => (
                    <li className="flex items-center gap-3" key={item}>
                      <CheckCircle2 className="text-primary" size={18} />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </article>
            <article className="bg-primary p-10 text-white shadow-md">
              <ShieldCheck className="mb-8 text-white" size={58} />
              <h3 className="mb-6 text-2xl font-bold text-white">Clean Product Contact Design</h3>
              <p className="mb-6 leading-7 text-white/80">
                All contact parts constructed from 316L stainless steel. Mirror-polished
                surfaces eliminate bacterial traps.
              </p>
              <div className="border-t border-white/20 pt-4 font-mono text-xs uppercase tracking-[0.16em]">
                CE & FDA Compliant
              </div>
            </article>
            <article className="border border-[#e2e8f0] bg-white p-10 shadow-sm">
              <Leaf className="mb-6 text-primary" size={48} />
              <h3 className="mb-4 text-2xl font-bold">Energy Efficient</h3>
              <p className="mb-6 leading-7 text-slate-600">
                Servo-driven filling and conveying systems reduce energy use while keeping
                high-viscosity product movement steady.
              </p>
              <div className="font-mono text-primary">-22% KWh/Unit</div>
            </article>
            <article className="flex flex-col gap-10 border border-[#e2e8f0] bg-white p-10 shadow-sm md:col-span-2 md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-bold">Modular Expansion</h3>
                <p className="leading-7 text-slate-600">
                  Our lines are built on a modular chassis, allowing future upgrades for different
                  container sizes, cap formats, and carton packing layouts with minimal downtime.
                </p>
              </div>
              <div className="hidden size-48 items-center justify-center rounded-full border border-[#e2e8f0] p-4 md:flex">
                <div className="size-full rounded-full border border-primary/40" />
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold">Engineering in Motion</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Watch complete viscous product filling and packaging lines in action, demonstrating
                accurate piston filling, clean labeling, carton packing, and palletizing efficiency.
              </p>
            </div>
            <div className="group relative aspect-video w-full overflow-hidden border border-[#e2e8f0]">
              <img
                alt="Production line video thumbnail"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT1zJ32yEY9H3zQINbkItmKoCDNlGzvrSqofD4JcUefJzVTcxjXm1lIy4RWF-JETawlndh0IXT-ad7IUBXdVU-vGvsdYt5UEE4eDFTx-faeuk7bnuDlwfLW3LHNyvdwqSPibZWCLDPSTKVofiGGb87ej1ikJsgZIjZ3-snuSO1WiNXNwcp18c2FlzFzSL4ujAXMJvQJIIXbVYbP7KguH9IDaBly75c3F_Z9DbRDF5TySVvsGFEFyOG"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <div className="flex size-20 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-transform group-hover:scale-110">
                  <Play className="ml-1" fill="currentColor" size={42} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 border border-[#e2e8f0] bg-white/90 px-4 py-2 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  4K Production Showcase
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16">
              <h2 className="mb-2 text-3xl font-bold uppercase">Global Installations</h2>
              <p className="text-slate-600">
                Reliable performance across varying climates and infrastructures.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  className="group overflow-hidden border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-md"
                  key={project.place}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      alt={project.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={project.image}
                    />
                    <div className="absolute left-4 top-4 border border-[#e2e8f0] bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-primary backdrop-blur-md">
                      {project.place}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
                    <p className="mb-6 text-sm leading-6 text-slate-600">{project.text}</p>
                    <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-4 font-mono text-xs">
                      <span className="font-bold text-primary">Status: Operational</span>
                      <span className="text-slate-600">{project.year}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industrial-grid border-y border-[#e2e8f0] bg-white py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-5 md:px-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl font-bold leading-tight">
                Ready to
                <br />
                Optimize Your <span className="text-primary">Production?</span>
              </h2>
              <p className="mb-12 text-lg leading-8 text-slate-600">
                Our engineering team provides comprehensive technical proposals including floor
                plan design, capacity calculation, and ROI analysis within 48 hours.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  ["24/7", "Global Technical Support"],
                  ["12 MO.", "Full System Warranty"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="mb-2 font-mono text-2xl font-bold text-primary">{value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-6 border border-[#e2e8f0] bg-[#f1f5f9] p-10 shadow-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
                    Full Name
                  </span>
                  <input className="w-full border border-[#e2e8f0] bg-white p-3" placeholder="John Doe" type="text" />
                </label>
                <label className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
                    Work Email
                  </span>
                  <input className="w-full border border-[#e2e8f0] bg-white p-3" placeholder="j.doe@company.com" type="email" />
                </label>
              </div>
              <label className="block space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
                  Target Capacity (BPH)
                </span>
                <select className="w-full border border-[#e2e8f0] bg-white p-3">
                  <option>Select Capacity Range</option>
                  <option>2,000 - 5,000 BPH</option>
                  <option>6,000 - 12,000 BPH</option>
                  <option>15,000 - 24,000 BPH</option>
                </select>
              </label>
              <label className="block space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-600">
                  Project Details
                </span>
                <textarea
                  className="min-h-32 w-full border border-[#e2e8f0] bg-white p-3"
                  placeholder="Tell us about your production requirements..."
                />
              </label>
              <button
                className="w-full bg-primary py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white"
                type="submit"
              >
                Request A Technical Proposal
              </button>
            </form>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
