import Link from "next/link";
import { Globe2, Mail, Phone, Search, Send, Share2 } from "lucide-react";

const logoUrl = "/images/sokos-logo.png";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "/products" },
  { label: "SOLUTIONS", href: "/solutions" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const contactEmail = "benny.wang10@sokosmachinery.com";
const contactPhone = "+86 13915678357";
const contactPhoneLink = "+8613915678357";

function FloatingContactButtons() {
  const contactItems = [
    {
      label: contactEmail,
      href: `mailto:${contactEmail}`,
      icon: Mail,
      iconClassName: "bg-primary text-white",
    },
    {
      label: contactPhone,
      href: `tel:${contactPhoneLink}`,
      icon: Phone,
      iconClassName: "bg-[#131314] text-white",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${contactPhoneLink.replace("+", "")}`,
      icon: null,
      iconClassName: "bg-[#25d366] text-white",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2">
      {contactItems.map(({ label, href, icon: Icon, iconClassName }) => (
        <a
          aria-label={label}
          className="flex size-12 items-center justify-center overflow-hidden border border-[#e2e8f0] bg-white shadow-lg shadow-black/10 transition-colors hover:border-primary"
          href={href}
          key={label}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          target={href.startsWith("http") ? "_blank" : undefined}
        >
          <span className={`flex size-12 shrink-0 items-center justify-center ${iconClassName}`}>
            {Icon ? <Icon size={18} /> : <span className="font-mono text-[11px] font-bold">WA</span>}
          </span>
        </a>
      ))}
    </div>
  );
}

export function SiteHeader({ active = "HOME" }: { active?: string }) {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e2e8f0] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 py-5 md:px-10 md:py-6 xl:px-16">
          <div className="flex items-center gap-10">
            <Link href="/">
              <img alt="Sokos Machinery Logo" className="h-11 w-auto" src={logoUrl} />
            </Link>
            <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navItems.map((item) => (
                <Link
                  className={`font-mono text-xs font-medium tracking-[0.16em] transition-colors ${
                    item.label === active
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-slate-600 hover:text-primary"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            <Search className="text-slate-600 transition-colors hover:text-primary" size={21} />
            <button
              className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-slate-600 transition-colors hover:text-primary"
              type="button"
            >
              <Globe2 size={18} />
              EN
            </button>
            <Link
              className="hidden items-center justify-center bg-primary px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 sm:inline-flex"
              href="/contact"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </header>
      <FloatingContactButtons />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-24 md:grid-cols-4 md:px-16 lg:py-[120px]">
        <div>
          <img alt="Sokos Logo" className="mb-8 h-10" src={logoUrl} />
          <p className="mb-8 font-mono text-sm leading-6 text-slate-600">
            Precision engineering for industrial excellence. Leading manufacturer of liquid
            filling and packaging technology since 2004.
          </p>
          <div className="flex gap-4">
            <a
              className="flex size-10 items-center justify-center border border-[#e2e8f0] transition-colors hover:bg-primary hover:text-white"
              href="#"
            >
              <Globe2 size={18} />
            </a>
            <a
              className="flex size-10 items-center justify-center border border-[#e2e8f0] transition-colors hover:bg-primary hover:text-white"
              href="#"
            >
              <Share2 size={18} />
            </a>
          </div>
        </div>
        {[
          {
            title: "Core Products",
            href: "/products",
            links: [
              "Water Treatment",
              "Beverage Blending",
              "Blow Molding Machine",
              "Filling Machine",
              "Labeling Machine",
              "Packaging Machine",
              "Palletizing Machine",
              "CO2 Mixer",
              "Depalletizer",
            ],
          },
          {
            title: "Solutions",
            href: "/solutions",
            links: ["Water Filling Line", "Juice Filling Line", "CSD Filling Line", "Turnkey Projects"],
          },
        ].map(({ title, href, links }) => (
          <div key={title as string}>
            <h4 className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em]">
              {title}
            </h4>
            <ul className="flex flex-col gap-4 font-mono text-sm text-slate-600">
              {links.map((link) => (
                <li key={link}>
                  <Link className="transition-colors hover:text-primary" href={href}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em]">
            Inquiry Form
          </h4>
          <p className="mb-6 font-mono text-sm text-slate-600">
            Send your production requirements to our technical sales team.
          </p>
          <form className="flex flex-col gap-3">
            <input
              className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
              placeholder="YOUR NAME"
              type="text"
            />
            <input
              className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
              placeholder="EMAIL ADDRESS"
              type="email"
            />
            <input
              className="border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
              placeholder="PHONE / WHATSAPP"
              type="tel"
            />
            <textarea
              className="min-h-24 resize-none border border-[#e2e8f0] bg-[#f5f7fa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
              placeholder="PROJECT REQUIREMENTS"
            />
            <button className="inline-flex items-center justify-center gap-2 bg-primary py-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white shadow-md transition-colors hover:bg-primary/90">
              Submit <Send size={14} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-[#e2e8f0] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
            © 2024 Sokos Machinery. Precision engineering for industrial excellence.
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.2em] md:gap-8">
            {["Privacy Policy", "Terms of Service", "Compliance"].map((item) => (
              <a className="text-slate-600 transition-colors hover:text-[#131314]" href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
