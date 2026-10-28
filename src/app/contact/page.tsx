import {
  Building2,
  Factory,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ArrowButton, MainSiteFooter, MainSiteHeader, SmallLabel } from "@/components/main-site-shell";
import { InquiryForm } from "@/components/inquiry-form";
import { ContactPhoneInput } from "@/components/contact-phone-input";

const contactEmail = "benny.wang10@sokosmachinery.com";
const contactPhone = "+86 13915678357";
const contactPhoneLink = "+8613915678357";

const inquiryFields: Array<{
  name: string;
  label: string;
  autoComplete: string;
  required: boolean;
  type: "email" | "tel" | "text";
}> = [
  { name: "name", label: "Full Name", autoComplete: "name", required: true, type: "text" },
  { name: "email", label: "Email", autoComplete: "email", required: true, type: "email" },
  { name: "phone", label: "Phone", autoComplete: "tel-national", required: true, type: "tel" },
  { name: "company", label: "Business / Organization", autoComplete: "organization", required: false, type: "text" },
];

const contactCards = [
  [Mail, "Sales Inquiry", contactEmail, `mailto:${contactEmail}`],
  [Phone, "Phone / WhatsApp", contactPhone, `https://wa.me/${contactPhoneLink.replace("+", "")}`],
  [Building2, "Company Office", "Zhangjiagang City, Jiangsu Province, China", ""],
  [Factory, "Manufacturing Factory", "Sokos production and assembly workshop", ""],
];

export const metadata = {
  title: "Contact Sokos Machinery",
  description:
    "Steelix-inspired contact page for Sokos Machinery with technical inquiry, project support, and global service information.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#07111f] text-white">
      <MainSiteHeader active="Contact" />

      <section className="relative min-h-[700px] overflow-hidden">
        <img
          alt="Sokos turnkey beverage line"
          className="absolute inset-0 size-full object-cover"
          src="/images/home/banner-production-line.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.78)_0%,rgba(7,17,31,0.48)_45%,rgba(7,17,31,0.08)_100%)]" />
        <div className="relative mx-auto flex min-h-[700px] max-w-[1320px] items-center px-5 md:px-8">
          <div className="max-w-3xl">
            <SmallLabel dark>Technical inquiry</SmallLabel>
            <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-[-0.035em] md:text-7xl">
              Start Your Beverage Factory Project With Sokos
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Share your product type, bottle format, and target capacity. Our engineering team
              will prepare a matching filling line proposal and layout direction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6] px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-white p-6 shadow-sm md:p-10">
            <SmallLabel>Request a proposal</SmallLabel>
            <h2 className="max-w-2xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Tell Us Your Line Requirements
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              The more details you provide, the faster we can match the right washing, filling,
              capping, labeling, packing, and palletizing configuration.
            </p>
            <InquiryForm className="mt-10 flex flex-col gap-7" source="contact-page">
              {inquiryFields.map(({ name, label, autoComplete, required, type }) => (
                <div className="flex flex-col gap-3 text-sm font-semibold" key={name}>
                  <label htmlFor={`contact-${name}`}>{label}{required && <span className="text-red-600"> *</span>}</label>
                  {name === "phone" ? (
                    <ContactPhoneInput />
                  ) : (
                    <input
                      autoComplete={autoComplete}
                      className="min-h-11 w-full min-w-0 rounded-sm border border-slate-300 bg-white px-3 py-2 text-base font-normal text-[#07111f] focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      id={`contact-${name}`}
                      name={name}
                      required={required}
                      type={type}
                    />
                  )}
                </div>
              ))}
              <label className="flex flex-col gap-3 text-sm font-semibold" htmlFor="contact-message">
                <span>Request<span className="text-red-600"> *</span></span>
                <textarea
                  className="min-h-32 w-full resize-y rounded-sm border border-slate-300 bg-white px-3 py-2 text-base font-normal text-[#07111f] focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  id="contact-message"
                  name="message"
                  required
                />
              </label>
              <button className="min-h-11 self-start rounded-sm bg-primary px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#c8ff2e] hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" type="submit">
                Submit
              </button>
            </InquiryForm>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[340px] overflow-hidden bg-[#10243a] p-8 text-white">
              <img
                alt="Sokos factory workshop"
                className="absolute inset-0 size-full object-cover opacity-45"
                src="/images/home/industrial-workshop-wide.jpg"
              />
              <div className="absolute inset-0 bg-[#07111f]/45" />
              <div className="relative flex h-full flex-col justify-between">
                <SmallLabel dark>Fast response</SmallLabel>
                <div>
                  <h3 className="text-4xl font-semibold uppercase leading-tight">
                    Engineering Support For Global Installations
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    Remote diagnostics, project communication, installation guidance, and spare
                    parts support for long-term stable operation.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden bg-slate-200 md:grid-cols-2">
              {contactCards.map(([Icon, label, value, href]) => {
                const content = (
                  <article className="min-h-[165px] bg-white p-6">
                    <Icon className="mb-7 text-primary" size={28} />
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                      {label as string}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{value as string}</p>
                  </article>
                );

                return href ? (
                  <a href={href as string} key={label as string} rel="noreferrer" target={href.toString().startsWith("http") ? "_blank" : undefined}>
                    {content}
                  </a>
                ) : (
                  <div key={label as string}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <SmallLabel dark>Project process</SmallLabel>
              <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
                From First Inquiry To Factory Acceptance
              </h2>
            </div>
            <ArrowButton dark href="/solutions" label="View solutions" />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {[
              ["01", "Requirement Check", "Product, bottle, capacity, and plant layout are confirmed."],
              ["02", "Line Configuration", "Main machines and auxiliary systems are matched to the target output."],
              ["03", "Technical Proposal", "Sokos prepares layout, equipment list, and commercial proposal."],
              ["04", "Delivery Support", "Production, testing, shipping, installation, and after-sales response."],
            ].map(([step, title, text]) => (
              <article className="border border-white/10 bg-[#10243a] p-7" key={step}>
                <p className="font-mono text-4xl font-semibold text-[#c8ff2e]">{step}</p>
                <h3 className="mt-10 text-xl font-semibold uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#07111f] md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SmallLabel>Global service</SmallLabel>
            <h2 className="text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Support That Follows The Equipment Lifecycle
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">
              Sokos supports customers from layout consultation to commissioning and maintenance,
              helping complete beverage lines stay stable after installation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              [MapPinned, "Overseas Projects", "References across the Middle East, Africa, Southeast Asia, Europe, and the Americas."],
              [Wrench, "Spare Parts", "Structured replacement parts support for long-term operation and planned maintenance."],
              [ShieldCheck, "Remote Support", "Technical communication for operation checks, troubleshooting, and service planning."],
            ].map(([Icon, title, text]) => (
              <article className="bg-[#eef3f6] p-7" key={title as string}>
                <Icon className="mb-8 text-primary" size={30} />
                <h3 className="text-xl font-semibold uppercase">{title as string}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 md:px-8">
        <img
          alt="Sokos engineering design"
          className="absolute inset-0 size-full object-cover opacity-30"
          src="/images/about-workshop/engineering-design.jpg"
        />
        <div className="absolute inset-0 bg-[#07111f]/82" />
        <div className="relative mx-auto flex max-w-[1320px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <SmallLabel dark>Direct contact</SmallLabel>
            <h2 className="max-w-3xl text-4xl font-semibold uppercase leading-tight md:text-5xl">
              Send Your Bottle Drawing, Capacity Target, Or Factory Layout
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ArrowButton dark href={`mailto:${contactEmail}`} label="Email us" />
            <a
              className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white hover:border-[#c8ff2e] hover:text-[#c8ff2e]"
              href={`https://wa.me/${contactPhoneLink.replace("+", "")}`}
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </main>
  );
}
