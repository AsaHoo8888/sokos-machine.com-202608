import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { MainSiteFooter, MainSiteHeader, SmallLabel } from "@/components/main-site-shell";

const contactEmail = "benny.wang10@sokosmachinery.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Sokos Machinery",
  description: "How Sokos Machinery collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you choose to provide when you contact us, request a quotation, or send a project inquiry. This may include your name, business email, company, phone or WhatsApp number, country, and project requirements.",
      "Our website and hosting provider may also process basic technical information such as IP address, browser type, device information, requested pages, and access times for security and reliable site operation.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We use personal information to respond to inquiries, prepare equipment recommendations and quotations, provide project and after-sales support, improve website security and performance, and meet applicable legal obligations.",
      "We do not sell or rent personal information.",
    ],
  },
  {
    title: "Sharing and International Processing",
    content: [
      "Information may be shared with service providers that support website hosting, communications, logistics, installation, or customer service, but only when needed to provide those services. Because we serve customers worldwide, information may be processed in countries other than your own, subject to reasonable safeguards.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We do not currently use non-essential advertising or behavioral tracking cookies. Essential technical storage may be used by the website or hosting platform for security and core functionality.",
    ],
  },
  {
    title: "Data Retention and Security",
    content: [
      "We retain information only as long as reasonably necessary for the purposes described above, including business records, customer support, and legal requirements. We use reasonable technical and organizational measures to protect information, although no internet transmission or storage system is completely secure.",
    ],
  },
  {
    title: "Your Choices and Rights",
    content: [
      "Depending on your location, you may have rights to request access, correction, deletion, restriction, or a copy of your personal information, and to object to certain processing. You may also withdraw consent where processing is based on consent. Contact us to make a request.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "This business website is not directed to children, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Policy Updates",
    content: [
      "We may update this policy when our website, services, or legal obligations change. The latest version will be posted on this page with its effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#eef3f6] text-[#07111f]">
      <MainSiteHeader />

      <section className="bg-[#07111f] px-5 py-20 text-white md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SmallLabel dark>Legal information</SmallLabel>
          <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.95] md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            This policy explains how Sokos Machinery handles personal information submitted
            through this website and our business communications.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
            Effective August 17, 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-6">
          {sections.map((section, index) => (
            <article className="min-w-0 border border-slate-200 bg-white p-7 md:p-10" key={section.title}>
              <div className="min-w-0 grid gap-5 md:grid-cols-[80px_1fr]">
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold uppercase md:text-3xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                    {section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <article className="bg-primary p-7 text-white md:p-10">
            <SmallLabel dark>Privacy contact</SmallLabel>
            <h2 className="text-3xl font-semibold uppercase">Questions or Requests</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/80">
              Contact us if you have questions about this policy or want to exercise a privacy right.
            </p>
            <Link className="mt-7 inline-flex max-w-full flex-wrap items-center gap-3 break-all bg-[#c8ff2e] px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[#07111f]" href={`mailto:${contactEmail}`}>
              <Mail size={16} /> {contactEmail}
            </Link>
          </article>
        </div>
      </section>

      <MainSiteFooter />
    </main>
  );
}
