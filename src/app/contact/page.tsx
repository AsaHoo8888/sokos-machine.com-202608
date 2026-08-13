import { Building2, Factory, Mail, MessageCircle, Send } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5QktW79y84gZY7_u8RUsGXIZvo4gpc7wlmxowcWODUDq-hrhjjR0RoBzt4IZ-5x42BElgIxs7oLRpQRA-CpEDCke0DVmRFC7IVd0ztk-3yTTkUJbF9FenoQx1dIo6BPJpAxIxdV0_VWasH82qB8onDBJYN0yC11NL5_pvEePWQkF1NGGhbQPQCH6TbprLTh3FIQ3aTzJXGbWhzy_v5jFy8SSFIErrbzCZSQr2N64VOAyXc79CCefow-MgeW14i4xRIsHcK8qil-4";

const facilityImage =
  "/images/workshop/workshop-02.jpg";

export default function ContactPage() {
  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="CONTACT" />

        <section className="relative flex h-[520px] items-center overflow-hidden border-b border-[#e2e8f0] pt-24">
          <div className="absolute inset-0">
            <img alt="" className="size-full object-cover opacity-95" src={heroImage} />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Precision Engineering
            </span>
            <h1 className="mb-6 text-5xl font-bold uppercase md:text-7xl">
              Get a Technical Proposal
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Connect with our engineering experts to design a high-capacity production line
              tailored to your facility requirements.
            </p>
          </div>
        </section>

        <section className="industrial-grid bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-6 border border-[#e2e8f0] bg-white p-8 shadow-sm md:p-12">
              <div className="mb-10">
                <h2 className="mb-2 text-4xl font-semibold">Technical Inquiry</h2>
                <p className="text-slate-600">
                  Complete the form below and our technical sales team will contact you within
                  24 business hours.
                </p>
              </div>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3" placeholder="Full Name" type="text" />
                  <input className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3" placeholder="Work Email" type="email" />
                  <input className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3" placeholder="Company Name" type="text" />
                  <input className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3" placeholder="Phone / WhatsApp" type="tel" />
                  <select className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3">
                    <option>Mineral Water</option>
                    <option>Carbonated Soft Drinks</option>
                    <option>Fruit Juice / Tea</option>
                    <option>Dairy Products</option>
                  </select>
                  <input className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3" placeholder="Capacity (BPH)" type="text" />
                </div>
                <textarea
                  className="min-h-32 border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3"
                  placeholder="Technical requirements / message"
                />
                <button className="flex items-center justify-center gap-3 bg-primary py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/10">
                  Submit Technical Request <Send size={16} />
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-6 border border-[#e2e8f0] bg-[#f5f7fa] p-8 md:p-10 lg:grid-cols-2">
              <img alt="Sokos facility" className="h-full min-h-[360px] w-full object-cover" src={facilityImage} />
              <div>
                <h3 className="mb-8 text-3xl font-semibold">Contact Information</h3>
                <div className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0] bg-white">
                  {[
                    [Mail, "Sales Inquiry", "info@sokosmachinery.com"],
                    [MessageCircle, "WhatsApp Service", "+86 123 4567 8910"],
                    [Building2, "Corporate Office", "High-Tech Industrial District, Shanghai"],
                    [Factory, "Manufacturing Factory", "Sokos Industrial Park, Zhangjiagang"],
                  ].map(([Icon, label, value]) => (
                    <div className="flex gap-5 px-5 py-6" key={label as string}>
                      <div className="flex size-12 shrink-0 items-center justify-center border border-[#e2e8f0] bg-[#f5f7fa] text-primary">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="mb-1 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                          {label as string}
                        </p>
                        <p className="leading-7 text-slate-700">{value as string}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[#e2e8f0] bg-[#f5f7fa] py-24">
          <div className="mx-auto max-w-[1200px] px-5 text-center md:px-16">
            <span className="mb-8 inline-block border border-primary/20 bg-primary/10 px-4 py-1 font-mono text-sm text-primary">
              Live Response Network
            </span>
            <h2 className="mb-8 text-4xl font-bold uppercase md:text-6xl">
              24/7 Global Technical Assistance
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ["120+ Countries", "On-site service support with local engineering hubs."],
                ["Fast Response", "Remote diagnostics and emergency parts shipping."],
                ["Lifetime Support", "Maintenance programs for the full equipment lifecycle."],
              ].map(([title, text]) => (
                <article className="border border-[#e2e8f0] bg-white p-8 shadow-sm" key={title}>
                  <h3 className="mb-4 text-2xl font-semibold text-primary">{title}</h3>
                  <p className="text-slate-600">{text}</p>
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
