export default function Hero() {
  return (
    <div
      className="h-screen flex flex-col relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(201,147,58,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(26,90,139,0.3) 0%, transparent 50%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content — flex-1 + flex-col justify-center = vertical centering */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full">
        <div className="flex items-center gap-20 px-12 pt-[68px] pb-8 max-w-[1200px] mx-auto w-full">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-[14px] py-[5px] text-xs font-semibold uppercase tracking-[0.06em] mb-7"
              style={{
                background: "rgba(201,147,58,0.15)",
                border: "1px solid rgba(201,147,58,0.3)",
                color: "var(--gold-light)",
              }}
            >
              <div className="w-[6px] h-[6px] rounded-full" style={{ background: "var(--gold)" }} />
              Built for Ghana · Now live in Accra
            </div>

            <h1
              className="text-[52px] leading-[1.1] font-normal text-white mb-5"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Collect rent.<br />
              Manage leases.<br />
              <em>Stay in control.</em>
            </h1>

            <p className="text-[16px] text-white/60 mb-8 max-w-[440px] font-light leading-relaxed">
              RentGH replaces cash, WhatsApp, and notebooks with one platform —
              for landlords, agents, and diaspora property owners across Ghana.
            </p>

            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <a href="#" className="btn-gold inline-flex items-center gap-2 px-6 py-[13px] rounded-[10px] text-[15px] font-semibold no-underline">
                Start managing free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how" className="btn-secondary-white inline-flex items-center gap-2 px-6 py-[13px] rounded-[10px] text-[15px] font-semibold no-underline">
                See how it works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              {["MoMo, card & bank payments", "Ghana Rent Act compliant", "Secured by Paystack"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-[12px]" style={{ color: "var(--text-light)" }}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 1l2 4 4.5.65-3.25 3.17.77 4.48L8 11.1l-4.02 2.2.77-4.48L1.5 5.65 6 5l2-4z" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="flex-1 flex justify-end">
            {/* Inner relative wrapper — pills positioned relative to this box */}
            <div className="relative mt-4 mb-4">

              {/* Top pill */}
              <div
                className="absolute -top-4 -left-6 z-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-xl"
                style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#DCFCE7" }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#15803D" strokeWidth="1.8">
                    <path d="M3 8l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">GH₵1,500 paid</div>
                  <div className="text-[11px]" style={{ color: "var(--text-light)" }}>Unit 2B · Just now</div>
                </div>
              </div>

              {/* Dashboard card */}
              <div
                className="w-[380px] rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {/* Top bar */}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-dm-serif)" }}>
                    Rent<span style={{ color: "var(--gold)" }}>GH</span>
                  </span>
                  <div className="flex gap-1.5">
                    {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    {[
                      { val: "GH₵18.5K", lbl: "Collected Apr" },
                      { val: "3",        lbl: "Overdue units", red: true },
                      { val: "87%",      lbl: "Occupancy" },
                    ].map((s) => (
                      <div key={s.lbl} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                        <div className="text-sm font-bold mb-0.5" style={{ color: s.red ? "#DC2626" : "#fff" }}>{s.val}</div>
                        <div className="text-[10px]" style={{ color: "var(--text-light)" }}>{s.lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* Unit grid */}
                  <div className="text-[10px] font-bold uppercase tracking-[0.05em] mb-2" style={{ color: "#9CA3AF" }}>
                    Unit status
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 mb-4">
                    {[
                      { id: "1A", status: "Paid",    bg: "#DCFCE7",               tc: "#15803D" },
                      { id: "1B", status: "Paid",    bg: "#DCFCE7",               tc: "#15803D" },
                      { id: "1C", status: "7 days",  bg: "#FEE2E2",               tc: "#DC2626" },
                      { id: "2A", status: "Due",     bg: "#FEF9C3",               tc: "#92400E" },
                      { id: "2B", status: "Paid",    bg: "#DCFCE7",               tc: "#15803D" },
                      { id: "2C", status: "Paid",    bg: "#DCFCE7",               tc: "#15803D" },
                      { id: "3A", status: "Vacant",  bg: "rgba(255,255,255,0.08)", tc: "#9CA3AF" },
                      { id: "S1", status: "14 days", bg: "#FEE2E2",               tc: "#DC2626" },
                    ].map((u) => (
                      <div key={u.id} className="rounded-lg p-2 text-center" style={{ background: u.bg }}>
                        <div className="text-[11px] font-bold" style={{ color: u.tc }}>{u.id}</div>
                        <div className="text-[9px]" style={{ color: u.tc, opacity: 0.8 }}>{u.status}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="flex flex-col gap-2">
                    {[
                      { dot: "GH₵", bg: "#DCFCE7", tc: "#15803D", text: "Rent paid · Unit 2, Spintex · MoMo", amt: "+1,200" },
                      { dot: "!",   bg: "#FEE2E2", tc: "#DC2626", text: "Overdue · Unit 4 · 14 days late" },
                      { dot: "≡",   bg: "#DBEAFE", tc: "#1D4ED8", text: "Lease signed · Apt B · Tema House" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: a.bg, color: a.tc }}>
                          {a.dot}
                        </div>
                        <div className="text-[11px] flex-1 text-white/60 truncate">{a.text}</div>
                        {a.amt && <div className="text-[11px] font-semibold" style={{ color: "#4ADE80" }}>{a.amt}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom pill */}
              <div
                className="absolute -bottom-4 -right-6 z-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl shadow-xl"
                style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EDE9FE" }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#6D28D9" strokeWidth="1.5">
                    <circle cx="8" cy="5" r="3" />
                    <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">Kweku Mensah</div>
                  <div className="text-[11px]" style={{ color: "var(--text-light)" }}>Agent · 12 units managed</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 flex items-center justify-center px-12 py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {[
          { num: "5.4M+",   label: "Ghanaians renting" },
          { num: "73K+",    label: "Rent disputes in 2024" },
          { num: "0",       label: "Dedicated local platforms" },
          { num: "Act 220", label: "Ghana Rent Act compliant" },
        ].map((stat, i) => (
          <div key={stat.num} className="flex items-center">
            <div className="text-center" style={{ padding: "0 40px" }}>
              <div
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "var(--font-dm-serif)", color: "var(--gold)" }}
              >
                {stat.num}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)", whiteSpace: "nowrap" }}>
                {stat.label}
              </div>
            </div>
            {i < 3 && (
              <div className="w-px h-8 flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
