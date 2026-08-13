import { Send, ShieldCheck, SlidersHorizontal, Waves } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const productImage = "/images/product-filling-machine.jpg";

const specs = [
  ["Heads (Rinse-Fill-Cap)", "Sets", "18 - 18 - 6", "DIN/CE"],
  ["Production Capacity", "BPH", "2,000 - 8,000", "Adjustable"],
  ["Total Installed Power", "kW", "4.5", "High Efficiency"],
  ["Air Consumption", "m3/min", "0.3", "0.6 MPa"],
  ["Suitable Bottle Size", "ml", "250 - 2000", "PET"],
];

export default function SingleProductPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="PRODUCTS" />

        <section className="industrial-grid border-b border-[#e2e8f0] bg-[#f9f9f9] pt-24">
          <div className="mx-auto flex min-h-[820px] max-w-[1200px] flex-col gap-16 px-5 py-24 md:px-16">
            <div className="max-w-4xl">
              <span className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-primary">
                Bottling Innovation
              </span>
              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                3-in-1 Water Filling Monoblock
              </h1>
            </div>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-primary/5 blur-3xl" />
                <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-[#e2e8f0] bg-white p-8 shadow-sm">
                  <img
                    alt="3-in-1 water filling monoblock"
                    className="size-full object-contain"
                    src={productImage}
                  />
                </div>
                <div className="absolute bottom-4 left-4 border border-[#e2e8f0] bg-white/90 px-2 py-1 font-mono text-xs text-slate-600">
                  MODEL: SKS-W3IN1-18186
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  The Sokos 3-in-1 series integrates rinsing, filling, and capping into a
                  single high-efficiency frame for still water production.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-mono text-2xl">8,000 BPH</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Max Capacity
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-mono text-2xl">SUS304/316</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Construction
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a className="bg-primary px-10 py-5 font-mono text-sm uppercase tracking-[0.2em] text-white" href="/contact">
                    Request Quote
                  </a>
                  <button className="border border-[#e2e8f0] px-10 py-5 font-mono text-sm uppercase tracking-[0.2em]">
                    Download Spec
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="mb-4 text-4xl font-bold">Technical Data</h2>
                <p className="text-slate-600">Precision-engineered parameters for global compliance.</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm text-primary">
                <span className="size-2 rounded-full bg-primary" />
                Live specifications
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-y border-[#e2e8f0] bg-[#f5f7fa]">
                    {["Parameter", "Unit", "Range / Value", "Standard"].map((head) => (
                      <th className="px-4 py-6 text-left font-mono text-xs uppercase text-slate-500" key={head}>
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {specs.map((row) => (
                    <tr className="border-b border-[#e2e8f0] transition-colors hover:bg-[#f5f7fa]" key={row[0]}>
                      {row.map((cell, index) => (
                        <td className={`px-4 py-7 ${index === 3 ? "text-right text-slate-500" : index === 1 ? "text-slate-500" : ""}`} key={cell}>
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

        <section className="border-y border-[#e2e8f0] bg-[#f9f9f9] py-24 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-16">
            {[
              [Waves, "Sanitary Design", "Anti-contamination structure with neck-clamping technology."],
              [SlidersHorizontal, "PLC Control System", "Siemens PLC and Schneider electrical components."],
              [ShieldCheck, "Heavy-Duty Frame", "SUS304/316 stainless steel construction."],
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

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="border border-[#e2e8f0] bg-white p-8 md:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_450px]">
                <div>
                  <h2 className="mb-6 text-4xl font-bold">Get Technical Proposal</h2>
                  <p className="mb-10 max-w-md leading-7 text-slate-600">
                    Our engineering team will provide a tailored production line layout and
                    quotation within 24 hours.
                  </p>
                  <div className="flex flex-col gap-5 font-mono text-sm">
                    <span className="flex items-center gap-3 text-primary">
                      <ShieldCheck size={18} /> ISO 9001:2015 Certified Production
                    </span>
                    <span className="flex items-center gap-3 text-primary">
                      <Send size={18} /> 24/7 Global Technical Support
                    </span>
                  </div>
                </div>
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="border border-[#e2e8f0] p-3" placeholder="Name" type="text" />
                    <input className="border border-[#e2e8f0] p-3" placeholder="Company" type="text" />
                  </div>
                  <input className="border border-[#e2e8f0] p-3" placeholder="Business email" type="email" />
                  <select className="border border-[#e2e8f0] p-3">
                    <option>2,000 - 4,000 BPH</option>
                    <option>4,000 - 6,000 BPH</option>
                    <option>6,000 - 8,000 BPH</option>
                    <option>8,000+ BPH</option>
                  </select>
                  <button className="bg-primary py-5 font-mono text-sm uppercase tracking-[0.2em] text-white">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
