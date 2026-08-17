import Link from "next/link";
import { ArrowRight, ChevronRight, Globe2 } from "lucide-react";

export function SmallLabel({ children, dark = false }: { children: string; dark?: boolean }) {
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

export function ArrowButton({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
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

export function MainSiteHeader({ active = "Home" }: { active?: string }) {
  const navItems = [
    ["Home", "/"],
    ["Solutions", "/solutions"],
    ["Products", "/products"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
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
          {navItems.map(([label, href]) => (
            <Link
              className={`transition hover:text-primary ${
                label === active ? "text-primary" : ""
              }`}
              href={href}
              key={label}
            >
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
  );
}

export function MainSiteFooter() {
  return (
    <footer className="bg-[#07111f] px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
        <div>
          <img
            alt="Sokos Machinery"
            className="h-14 w-auto"
            src="/images/home/sokos-logo-white.png"
          />
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Complete beverage filling and packaging lines for global factories.
          </p>
          <Link
            className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.16em] text-slate-400 transition hover:text-[#c8ff2e]"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ArrowButton dark href="/contact" label="Contact Us" />
          <Link
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white hover:border-[#c8ff2e] hover:text-[#c8ff2e]"
            href="/"
          >
            Original Home <Globe2 size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
