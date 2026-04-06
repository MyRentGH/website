const productLinks = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "For agents", href: "#agents" },
  { label: "Diaspora", href: "#diaspora" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of service", href: "#" },
  { label: "Cookie policy", href: "#" },
  { label: "Ghana Rent Act", href: "#" },
];

function LinkCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div
        className="text-xs font-bold uppercase tracking-[0.08em] mb-4"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {title}
      </div>
      <div className="flex flex-col gap-2.5">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="footer-link-item text-sm">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="px-12 pt-16 pb-8"
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl no-underline mb-4 block"
              style={{ fontFamily: "var(--font-dm-serif)", color: "#fff" }}
            >
              Rent<span style={{ color: "var(--gold)" }}>GH</span>
            </a>
            <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Ghana&apos;s property management platform. For landlords, agents, and diaspora property owners.
            </p>
          </div>

          <LinkCol title="Product" links={productLinks} />
          <LinkCol title="Company" links={companyLinks} />
          <LinkCol title="Legal" links={legalLinks} />
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-6 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <span>© 2026 RentGH Ltd. Registered in Ghana. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="footer-bottom-link">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
