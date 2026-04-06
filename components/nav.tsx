export default function Nav() {
  const links = [
    { label: "How it works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "Diaspora", href: "#diaspora" },
    { label: "For agents", href: "#agents" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B2239]/[0.97] backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-full items-center justify-between px-4 sm:px-6 lg:px-12">
        <a
          href="#"
          className="shrink-0 text-[24px] leading-none tracking-[-0.3px] text-white no-underline"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Rent<span style={{ color: "var(--gold)" }}>GH</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium tracking-[0.01em] text-white/65 no-underline transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-[12px] bg-[var(--gold)] px-[22px] py-[9px] text-[14px] font-semibold text-[var(--navy)] no-underline transition-colors duration-200 hover:bg-[var(--gold-light)]"
          >
            Get started free
          </a>
        </div>

        <a
          href="#"
          className="rounded-[10px] bg-[var(--gold)] px-4 py-2 text-[13px] font-semibold text-[var(--navy)] no-underline transition-colors duration-200 hover:bg-[var(--gold-light)] lg:hidden"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
