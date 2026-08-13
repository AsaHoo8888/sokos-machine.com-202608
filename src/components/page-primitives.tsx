export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="font-bold text-primary">/</span>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
        {children}
      </span>
    </div>
  );
}

export function PrimaryLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      className="inline-flex items-center justify-center bg-primary px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
      href={href}
    >
      {children}
    </a>
  );
}
