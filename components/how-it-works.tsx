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

export default function HowItWorks() {
  return (
    <section id="how" className="py-[100px] px-12" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <div
            className="text-xs font-semibold uppercase tracking-[0.08em] mb-4"
            style={{ color: "var(--gold)" }}
          >
            How it works
          </div>
          <h2
            className="text-[40px] font-normal leading-[1.2] mb-4 text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Simple for everyone<br />involved
          </h2>
          <p className="text-base font-light max-w-[480px]" style={{ color: "rgba(255,255,255,0.55)" }}>
            From adding a property to collecting rent — the whole flow takes under 10 minutes to set up.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[0.08em] mb-5"
                style={{ color: "var(--gold)" }}
              >
                {step.num}
              </div>
              <div className="text-base font-semibold text-white mb-3">{step.title}</div>
              <div className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {step.desc}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-8 -right-3 z-10">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                    <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
