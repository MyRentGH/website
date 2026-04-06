const steps = [
  {
    num: "01",
    title: "Add your property",
    desc: "Create your property, add units, set rent amounts and due dates. Invite your agent if you have one — they get free access.",
  },
  {
    num: "02",
    title: "Add tenants & send leases",
    desc: "Add a tenant's name and phone. The platform generates a Ghana-law lease and sends it to them via WhatsApp. They sign digitally — no app needed.",
  },
  {
    num: "03",
    title: "Collect rent automatically",
    desc: "Tenants pay via MoMo, card, or bank transfer. Rent goes directly to your account — never through an agent. Receipts sent instantly to both parties.",
  },
  {
    num: "04",
    title: "Stay in control",
    desc: "See all units, payments, maintenance, agent commission, and expiring leases on one dashboard. Everything documented, everything searchable.",
  },
];

import { FadeUp } from "@/components/fade-up";

export default function HowItWorks() {
  return (
    <section id="how" className="overflow-hidden px-12 py-[100px] max-[900px]:px-6 max-[900px]:py-16" style={{ background: "var(--navy)" }}>
      <div className="mx-auto max-w-[1200px]">
        <FadeUp className="mb-[60px]">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--gold)" }}>
            How it works
          </div>
          <h2
            className="mb-5 text-[clamp(34px,4vw,52px)] leading-[1.15] tracking-[-0.5px]"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#fff" }}
          >
            Simple for everyone<br />involved
          </h2>
          <p className="max-w-[560px] text-[18px] font-light leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
            From adding a property to collecting rent — the whole flow takes under 10 minutes to set up.
          </p>
        </FadeUp>

        {/* Steps: seamless connected row, 2px gaps, only outer corners rounded */}
        <div className="grid grid-cols-4 gap-[2px] max-[900px]:grid-cols-2 max-[720px]:grid-cols-1">
          {steps.map((step, i) => {
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;
            // Desktop: only outer horizontal corners rounded
            // Mobile 2-col: top-left/top-right for row 1, bottom-left/bottom-right for row 2
            // Mobile 1-col: all fully rounded
            const radius = isFirst
              ? "16px 0 0 16px"
              : isLast
              ? "0 16px 16px 0"
              : "0";

            return (
              <FadeUp
                key={step.num}
                delay={i * 0.1}
                className="how-step relative px-7 py-9"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: radius,
                }}
              >
                {/* Large decorative step number */}
                <div
                  className="mb-5 text-[56px] leading-none"
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    color: "rgba(201,147,58,0.2)",
                  }}
                >
                  {step.num}
                </div>

                <div className="mb-[10px] text-[17px] font-semibold text-white">
                  {step.title}
                </div>
                <div className="text-[14px] font-light leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.desc}
                </div>

                {/* Arrow connector between steps — hidden on mobile */}
                {!isLast && (
                  <div
                    className="absolute right-[-14px] top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full min-[900px]:flex"
                    style={{
                      background: "var(--navy-mid)",
                      border: "2px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                      <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
