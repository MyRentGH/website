"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[68px] transition-all duration-200"
      style={{
        background: scrolled
          ? "rgba(11,34,57,0.99)"
          : "rgba(11,34,57,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <a
        href="#"
        className="text-white no-underline text-2xl tracking-tight"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        Rent<span style={{ color: "var(--gold)" }}>GH</span>
      </a>

      <div className="flex items-center gap-7">
        {[
          { label: "How it works", href: "#how" },
          { label: "Features", href: "#features" },
          { label: "Diaspora", href: "#diaspora" },
          { label: "For agents", href: "#agents" },
          { label: "Pricing", href: "#pricing" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/65 no-underline tracking-[0.01em] transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="text-sm font-semibold no-underline px-[22px] py-[9px] rounded-lg transition-colors duration-200"
          style={{
            background: "var(--gold)",
            color: "var(--navy)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background =
              "var(--gold-light)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background =
              "var(--gold)")
          }
        >
          Get started free
        </a>
      </div>
    </nav>
  );
}
