import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Send, ShieldCheck, SlidersHorizontal, Thermometer } from "lucide-react";
import { SectionLabel } from "@/components/page-primitives";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getJuiceFillingProduct, juiceFillingProducts } from "../data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const productImage = "/images/products/juice-line-filling-machine.jpg";

export function generateStaticParams() {
  return juiceFillingProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getJuiceFillingProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.model} | ${product.title}`,
    description: product.shortDescription,
  };
}

export default async function JuiceFillingProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getJuiceFillingProduct(slug);

  if (!product) {
    notFound();
  }

  const capacity = product.parameters.find(([label]) => label === "Capacity(for 500ml)")?.[1];

  return (
    <main className="bg-[#f5f7fa] text-[#131314]">
      <div className="mx-auto min-h-screen max-w-[2000px] bg-white shadow-sm">
        <SiteHeader active="PRODUCTS" />

        <section className="industrial-grid border-b border-[#e2e8f0] bg-[#f9f9f9] pt-24">
          <div className="mx-auto flex min-h-[760px] max-w-[1200px] flex-col gap-14 px-5 py-24 md:px-16">
            <Link
              className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary"
              href="/products/juice-filling-machine"
            >
              <ArrowLeft size={16} />
              Back to juice filling machines
            </Link>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <SectionLabel>{product.model}</SectionLabel>
                <h1 className="mb-7 text-4xl font-bold leading-tight md:text-6xl">
                  {product.title}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  {product.shortDescription}
                </p>
                <a
                  className="mt-8 inline-flex items-center justify-center bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:bg-primary/90"
                  href="#inquiry"
                >
                  Send Inquiry
                </a>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-mono text-2xl">{capacity}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Capacity for 500ml
                    </div>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-mono text-2xl">RCGF Hot Fill</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Rinsing / Filling / Capping
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-primary/5 blur-3xl" />
                <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-[#e2e8f0] bg-white p-8 shadow-sm">
                  <img
                    alt={product.title}
                    className="size-full object-contain"
                    src={product.image ?? productImage}
                  />
                </div>
                <div className="absolute bottom-4 left-4 border border-[#e2e8f0] bg-white/90 px-3 py-2 font-mono text-xs text-slate-600">
                  MODEL: {product.model}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <SectionLabel>Model Parameters</SectionLabel>
                <h2 className="mb-4 text-4xl font-bold">Technical Data</h2>
                <p className="text-slate-600">
                  Parameters are taken only from the corresponding {product.model} column in the
                  supplied Excel table.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm text-primary">
                <span className="size-2 rounded-full bg-primary" />
                Excel model data
              </div>
            </div>

            <div className="overflow-x-auto border border-[#e2e8f0]">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#e2e8f0] bg-[#f5f7fa]">
                    {["Parameter", product.model].map((head) => (
                      <th
                        className="px-5 py-5 text-left font-mono text-xs uppercase tracking-[0.14em] text-slate-500"
                        key={head}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {product.parameters.map(([label, value]) => (
                    <tr className="border-b border-[#e2e8f0] last:border-b-0" key={label}>
                      <td className="w-[320px] bg-[#f5f7fa] px-5 py-5 text-xs uppercase tracking-[0.12em] text-slate-500">
                        {label}
                      </td>
                      <td className="px-5 py-5 text-slate-700">{value}</td>
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
              [
                Thermometer,
                "Hot Fill Process",
                "Designed for juice, nectar, tea drinks, and milk beverages in PET bottles.",
              ],
              [
                SlidersHorizontal,
                "Automatic Operation",
                "Integrated monoblock workflow supports daily juice beverage production.",
              ],
              [
                ShieldCheck,
                "Stable Parameters",
                "Model data follows the supplied Excel table for this machine.",
              ],
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

        <section className="bg-[#f5f7fa] py-24 lg:py-[120px]" id="inquiry">
          <div className="mx-auto max-w-[1200px] px-5 md:px-16">
            <div className="border border-[#e2e8f0] bg-white p-8 md:p-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
                <div>
                  <h2 className="mb-6 text-4xl font-bold">Get {product.model} Proposal</h2>
                  <p className="mb-10 max-w-md leading-7 text-slate-600">
                    Send your bottle size, juice type, and target capacity. Sokos engineers will
                    match the machine layout and quotation for your juice bottling plant.
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
                  <input className="border border-[#e2e8f0] p-3" defaultValue={product.model} />
                  <input className="border border-[#e2e8f0] p-3" placeholder="Name" type="text" />
                  <input className="border border-[#e2e8f0] p-3" placeholder="Business email" type="email" />
                  <textarea
                    className="min-h-32 border border-[#e2e8f0] p-3"
                    placeholder="Bottle size, juice type, filling temperature, and target output"
                  />
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
