const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" />
        <path d="M1 8h14M8 1c-2 3-2 9 0 14M8 1c2 3 2 9 0 14" />
      </svg>
    ),
    text: "See rent collected in GHS and your home currency (GBP, USD, EUR) at the rate on payment day",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5">
        <circle cx="5.5" cy="5" r="2.5" />
        <circle cx="10.5" cy="5" r="2.5" />
        <path d="M1 13c0-2.2 2-3.5 4.5-3.5S10 10.8 10 13" strokeLinecap="round" />
        <path d="M10.5 9.5c2.5 0 4.5 1.3 4.5 3.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Assign a caretaker with limited access — they handle on-the-ground issues, you see everything",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5">
        <path d="M8 1v9M4 7l4 4 4-4M1 13h14" strokeLinecap="round" />
      </svg>
    ),
    text: "Monthly PDF reports emailed to you — rent collected, maintenance done, leases expiring",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5">
        <rect x="1" y="3" width="14" height="10" rx="1.5" />
        <path d="M1 7h14" />
      </svg>
    ),
    text: "Priced in USD/GBP — $30/month, billed to your international card",
  },
];

export default function Diaspora() {
  return (
    <section
      id="diaspora"
      className="py-[100px] px-12"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              For diaspora landlords
            </div>
            <h2
              className="text-[40px] font-normal leading-[1.2] mb-4 text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Own property in Ghana.<br />Live <em>anywhere</em>.
            </h2>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              The Ghanaian diaspora has invested billions in property back home with no tools to manage it remotely.
              RentGH changes that.
            </p>
            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(201,147,58,0.12)" }}
                  >
                    {f.icon}
                  </div>
                  <div className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — report card */}
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="p-6"
                style={{ background: "rgba(201,147,58,0.12)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-sm font-semibold mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  April 2026 · East Legon House
                </div>
                <div
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  GH₵18,500
                </div>
                <div className="text-sm" style={{ color: "var(--gold-light)" }}>
                  ≈ £985 · $1,240 USD at payment-day rates
                </div>
              </div>
              <div className="p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                {[
                  { k: "Units occupied", v: "13 of 15" },
                  { k: "Overdue units", v: "3", vColor: "#FCA5A5" },
                  { k: "Agent commission", v: "GH₵1,850 owed", vColor: "var(--gold)" },
                  { k: "Open maintenance", v: "2 issues · Caretaker assigned" },
                  { k: "Leases expiring soon", v: "2 in next 45 days" },
                  { k: "Last updated", v: "Live · 3 Apr 2026", vColor: "#4ADE80" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex justify-between py-3 text-sm border-b last:border-0"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>{row.k}</span>
                    <span
                      className="font-medium"
                      style={{ color: row.vColor || "rgba(255,255,255,0.85)" }}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
