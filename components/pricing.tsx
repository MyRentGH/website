type Plan = {
  label: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    label: "Starter",
    price: "GH₵100",
    period: "/month",
    desc: "For landlords starting out with 1–3 units who want to go digital.",
    features: [
      "Up to 3 units",
      "MoMo, card & bank collection",
      "Digital lease generation",
      "1 agent free",
      "WhatsApp reminders",
    ],
    cta: "Get started",
  },
  {
    label: "Growth",
    price: "GH₵250",
    period: "/month",
    desc: "For serious landlords managing multiple units across one or more properties.",
    features: [
      "Up to 15 units",
      "Everything in Starter",
      "3 agents free",
      "Monthly PDF statement",
      "Commission tracking",
      "GRA tax report (coming soon)",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    label: "Diaspora",
    price: "$30",
    period: "/month USD",
    desc: "For Ghanaians managing property remotely from the UK, US, Canada, or elsewhere.",
    features: [
      "Up to 5 units",
      "Everything in Growth",
      "GBP/USD FX reporting",
      "Caretaker sub-account",
      "Monthly email report",
    ],
    cta: "Get started",
  },
];

function Check({ featured }: { featured?: boolean }) {
  return (
    <div
      className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ background: featured ? "rgba(21,128,61,0.1)" : "rgba(74,222,128,0.15)" }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={featured ? "#15803D" : "#4ADE80"} strokeWidth="1.5">
        <path d="M2 5l2.5 2.5 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-[100px] px-12" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: "var(--gold)" }}>
            Pricing
          </div>
          <h2
            className="text-[40px] font-normal leading-[1.2] mb-4 text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Simple, honest pricing
          </h2>
          <p className="text-base font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
            No setup fees. No hidden charges. Cancel any time. Agents are always free.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="relative rounded-2xl p-8 transition-all duration-200"
              style={
                plan.featured
                  ? { background: "var(--gold-pale)", border: "1px solid var(--gold)" }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "var(--gold)", color: "var(--navy)" }}
                >
                  Most popular
                </div>
              )}

              <div
                className="text-[11px] font-bold uppercase tracking-[0.08em] mb-3"
                style={{ color: plan.featured ? "var(--text-mid)" : "rgba(255,255,255,0.4)" }}
              >
                {plan.label}
              </div>
              <div
                className="text-[40px] font-normal mb-1"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: plan.featured ? "var(--navy)" : "#fff",
                }}
              >
                {plan.price}
                <span
                  className="text-base font-normal"
                  style={{ fontFamily: "var(--font-dm-sans)", color: plan.featured ? "var(--text-mid)" : "rgba(255,255,255,0.5)" }}
                >
                  {plan.period}
                </span>
              </div>
              <div
                className="text-sm font-light leading-relaxed mb-6"
                style={{ color: plan.featured ? "var(--text-mid)" : "rgba(255,255,255,0.45)" }}
              >
                {plan.desc}
              </div>

              <div
                className="h-px mb-6"
                style={{ background: plan.featured ? "rgba(11,34,57,0.1)" : "rgba(255,255,255,0.08)" }}
              />

              <div className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: plan.featured ? "var(--text)" : "rgba(255,255,255,0.7)" }}
                  >
                    <Check featured={plan.featured} />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`block w-full py-3 rounded-[10px] text-center text-sm font-semibold no-underline ${plan.featured ? "btn-gold" : "btn-ghost-white"}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
