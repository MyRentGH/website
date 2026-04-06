const problems = [
  {
    iconBg: "#FEE2E2",
    iconStroke: "#DC2626",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#DC2626" strokeWidth="1.5">
        <rect x="1" y="3" width="14" height="10" rx="1.5" />
        <path d="M1 7h14" />
        <path d="M4 10.5h2" strokeLinecap="round" />
      </svg>
    ),
    title: "Rent cash flow is hard to predict",
    desc: "Manual collection and lump-sum expectations can make occupancy and planning harder. RentGH gives landlords and agents clear schedules, automated reminders, and a complete payment trail.",
  },
  {
    iconBg: "#FEF9C3",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#A16207" strokeWidth="1.5">
        <rect x="3" y="1" width="10" height="14" rx="1.5" />
        <path d="M6 5h4M6 8h4M6 11h2" strokeLinecap="round" />
      </svg>
    ),
    title: "No leases, no records, no protection",
    desc: "Most agreements are verbal or handwritten. When disputes arise, neither party has evidence. The platform creates an audit trail from day one.",
  },
  {
    iconBg: "#EDE9FE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#6D28D9" strokeWidth="1.5">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4v4l2.5 2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Diaspora landlords have zero visibility",
    desc: "Ghanaians in the UK, US, and Canada own properties back home. They rely on family members or agents — with no way to verify what's actually happening.",
  },
];

import { FadeUp } from "@/components/fade-up";

export default function Problem() {
  return (
    <section id="problem" className="py-[100px] px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div
              className="text-xs font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "var(--navy)" }}
            >
              The problem
            </div>
            <h2
              className="text-[40px] font-normal leading-[1.2] mb-5"
              style={{ fontFamily: "var(--font-dm-serif)", color: "var(--navy)" }}
            >
              Ghana&apos;s rental market runs on <em>chaos</em>
            </h2>
            <p className="text-[16px] font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              Cash payments with no records. Verbal leases. WhatsApp reminders. Delayed remittances and unclear
              handovers. It doesn&apos;t have to be this way.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-4">
            {problems.map((p, i) => (
              <FadeUp key={p.title} delay={(i + 1) * 0.1}>
              <div
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  boxShadow: "0 1px 4px rgba(11,34,57,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: p.iconBg }}
                >
                  {p.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "var(--navy)" }}>
                    {p.title}
                  </div>
                  <div className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
                    {p.desc}
                  </div>
                </div>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
