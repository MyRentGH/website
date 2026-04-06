import { FadeUp } from "@/components/fade-up";

export default function Agents() {
  return (
    <section id="agents" className="py-[100px] px-12 max-[900px]:py-16 max-[900px]:px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">
          {/* Left */}
          <FadeUp>
            <div
              className="text-xs font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "var(--navy)" }}
            >
              For agents
            </div>
            <h2
              className="text-[40px] font-normal leading-[1.2] mb-4"
              style={{ fontFamily: "var(--font-dm-serif)", color: "var(--navy)" }}
            >
              A free professional tool<br />for every <em>agent</em>
            </h2>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              Ghana&apos;s real estate agents manage dozens of landlords with notebooks and WhatsApp. RentGH gives them a
              professional platform — at no cost.
            </p>
            <a
              href="#"
              className="btn-gold inline-flex items-center gap-2 px-6 py-[14px] rounded-[10px] text-[15px] font-semibold no-underline"
            >
              Join as an agent — free
            </a>
          </FadeUp>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Free badge card */}
            <FadeUp delay={0.1}>
            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: "var(--navy)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,147,58,0.2)" }}
              >
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.8">
                  <circle cx="8" cy="5" r="3" />
                  <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" />
                </svg>
              </div>
              <div>
                <div className="text-base font-semibold text-white mb-1">
                  Agents are always free on RentGH
                </div>
                <div className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Your landlord&apos;s subscription covers your access. Commission tracking, tenant management, maintenance
                  dashboard — all free, forever.
                </div>
              </div>
            </div>
            </FadeUp>

            {/* Testimonial */}
            <FadeUp delay={0.2}>
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                boxShadow: "0 1px 4px rgba(11,34,57,0.06)",
              }}
            >
              <p className="text-[15px] leading-relaxed mb-5 font-light" style={{ color: "var(--text-mid)" }}>
                &ldquo;Before RentGH, I was collecting rent in cash and sending it to landlords by MoMo — no records, no
                proof of anything. Now every transaction is logged and my landlords can see exactly what I&apos;ve done. It&apos;s
                made me look a lot more professional.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "var(--navy-mid)" }}
                >
                  KM
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
                    Kweku Mensah
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-light)" }}>
                    Real estate agent · East Legon, Accra · 12 units managed
                  </div>
                </div>
              </div>
            </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
