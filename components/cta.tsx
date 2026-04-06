export default function CTA() {
  return (
    <section className="py-20 px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[800px] mx-auto">
        <div
          className="relative text-center rounded-3xl px-[60px] py-20 overflow-hidden"
          style={{ background: "var(--navy)" }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201,147,58,0.15) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <div
              className="text-xs font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              Get started today
            </div>
            <h2
              className="text-[40px] font-normal leading-[1.2] mb-4 text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Your properties deserve<br />better than WhatsApp
            </h2>
            <p className="text-[17px] font-light mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              Join Ghana&apos;s first dedicated property management platform. Set up your first property in under 10
              minutes.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <a
                href="#"
                className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold no-underline"
              >
                Start free — no card needed
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#"
                className="btn-gold-outline inline-flex items-center px-7 py-3.5 rounded-[10px] text-[15px] font-semibold no-underline"
              >
                Talk to the team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
