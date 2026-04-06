const unitStatus = [
  { id: "1A", state: "Paid", cls: "bg-[#F0FDF4] border-[#86EFAC] text-[#15803D]" },
  { id: "1B", state: "Paid", cls: "bg-[#F0FDF4] border-[#86EFAC] text-[#15803D]" },
  { id: "1C", state: "7 days", cls: "bg-[#FEF2F2] border-[#FCA5A5] text-[#DC2626]" },
  { id: "2A", state: "Due", cls: "bg-[#FFFBEB] border-[#FCD34D] text-[#D97706]" },
  { id: "2B", state: "Paid", cls: "bg-[#F0FDF4] border-[#86EFAC] text-[#15803D]" },
  { id: "2C", state: "Paid", cls: "bg-[#F0FDF4] border-[#86EFAC] text-[#15803D]" },
  {
    id: "3A",
    state: "Vacant",
    cls: "bg-[#F9FAFB] border-[#D1D5DB] text-[#9CA3AF] border-dashed",
  },
  { id: "S1", state: "14 days", cls: "bg-[#FEF2F2] border-[#FCA5A5] text-[#DC2626]" },
];

const activity = [
  {
    dot: "GH₵",
    dotBg: "bg-[#DCFCE7]",
    dotText: "text-[#15803D]",
    text: "Rent paid · Unit 2, Spintex · MoMo",
    amount: "+1,200",
  },
  {
    dot: "!",
    dotBg: "bg-[#FEE2E2]",
    dotText: "text-[#DC2626]",
    text: "Overdue · Unit 4 · 14 days late",
  },
  {
    dot: "≡",
    dotBg: "bg-[#DBEAFE]",
    dotText: "text-[#1D4ED8]",
    text: "Lease signed · Apt B · Tema House",
  },
];

const stats = [
  { num: "5.4M+", label: "Ghanaians renting" },
  { num: "73K+", label: "Rent disputes in 2024" },
  { num: "0", label: "Dedicated local platforms" },
  { num: "Act 220", label: "Built for Ghana rentals" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--navy)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(201,147,58,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(26,90,139,0.3) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-1 items-center gap-20 px-12 pb-20  max-[900px]:flex-col max-[900px]:gap-12 max-[900px]:px-6 max-[900px]:pb-[60px] max-[900px]:pt-[100px]">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,147,58,0.3)] bg-[rgba(201,147,58,0.15)] px-[14px] py-[5px] text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--gold-light)]">
            <span className="h-[6px] w-[6px] rounded-full bg-[var(--gold)]" />
            Built for Ghana · Launching Soon
          </div>

          <h1
            className="mb-6 text-[clamp(44px,5vw,68px)] leading-[1.1] tracking-[-1px] text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Collect rent.
            <br />
            Manage leases.
            <br />
            <span className="text-[var(--gold)]">Stay in control.</span>
          </h1>

          <p className="mb-10 max-w-[520px] text-[18px] font-light leading-[1.7] text-white/60">
            RentGH replaces cash, WhatsApp, and paperwork with one platform, built for
            landlords, tenants, agents, and diaspora property owners across Ghana.
          </p>

          <div className="mb-14 flex items-center gap-4 max-[720px]:flex-col max-[720px]:items-stretch">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--gold)] px-7 py-[14px] text-[15px] font-semibold text-[var(--navy)] no-underline transition-all duration-200 hover:bg-[var(--gold-light)] hover:-translate-y-px max-[720px]:justify-center"
            >
              Start managing free
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-white/75 no-underline transition-colors duration-200 hover:text-white max-[720px]:justify-center"
            >
              See how it works
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            <div className="inline-flex items-center gap-2 text-[13px] text-white/50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-[var(--gold)]">
                <path d="M8 1l2 4 4.5.65-3.25 3.17.77 4.48L8 11.1l-4.02 2.2.77-4.48L1.5 5.65 6 5l2-4z" />
              </svg>
              MoMo, card &amp; bank payments
            </div>
            <div className="inline-flex items-center gap-2 text-[13px] text-white/50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-[var(--gold)]">
                <rect x="3" y="7" width="10" height="8" rx="1.5" />
                <path d="M5 7V5a3 3 0 016 0v2" />
              </svg>
              Automated reminders and arrears alerts
            </div>
            <div className="inline-flex items-center gap-2 text-[13px] text-white/50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-[var(--gold)]">
                <path d="M8 1l2 4 4.5.65-3.25 3.17.77 4.48L8 11.1l-4.02 2.2.77-4.48L1.5 5.65 6 5l2-4z" />
              </svg>
              Digital lease and payment records
            </div>
          </div>
        </div>

        <div className="relative w-[460px] shrink-0 max-[900px]:w-full max-[900px]:max-w-[560px]">
          <div className="absolute right-[-30px] top-[-20px] z-10 flex items-center gap-3 rounded-xl bg-white px-[14px] py-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] max-[900px]:static max-[900px]:mb-3 max-[900px]:ml-auto max-[900px]:w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCFCE7]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#15803D"
                  strokeWidth="1.8"
                >
                  <path
                    d="M3 8l4 4 6-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-[var(--navy)]">GH₵1,500 paid</div>
                <div className="text-[10px] text-[#9CA3AF]">Unit 2B · Just now</div>
              </div>
            </div>

            <div
              className="dashboard-mockup overflow-hidden rounded-[16px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]"
            >
              <div className="flex items-center justify-between bg-[var(--navy)] px-4 py-3">
                <span
                  className="text-[16px] text-white"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Rent<span className="text-[var(--gold)]">GH</span>
                </span>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                </div>
              </div>

              <div className="bg-[#F4F6F8] p-4">
                <div className="mb-3 grid grid-cols-3 gap-2">
                  {[
                    { val: "GH₵18.5K", lbl: "Collected Apr", valClass: "text-[var(--navy)]" },
                    { val: "3", lbl: "Overdue units", valClass: "text-[#DC2626]" },
                    { val: "87%", lbl: "Occupancy", valClass: "text-[var(--navy)]" },
                  ].map((item) => (
                    <div key={item.lbl} className="rounded-lg bg-white p-3">
                      <div className={`text-[18px] font-bold leading-none ${item.valClass}`}>
                        {item.val}
                      </div>
                      <div className="mt-0.5 text-[10px] text-[#9CA3AF]">{item.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.05em] text-[#9CA3AF]">
                  Unit status
                </div>

                <div className="mb-3 grid grid-cols-4 gap-[6px]">
                  {unitStatus.map((unit) => (
                    <div key={unit.id} className={`rounded-[6px] border p-2 ${unit.cls}`}>
                      <div className="text-[9px] font-bold leading-none">{unit.id}</div>
                      <div className="mt-[3px] text-[9px]">{unit.state}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-white p-2.5">
                  {activity.map((item, index) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2 border-b border-[#F3F4F6] py-[5px] last:border-b-0"
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-[8px] font-bold ${item.dotBg} ${item.dotText}`}
                      >
                        {item.dot}
                      </div>
                      <div className="flex-1 text-[10px] text-[#374151]">{item.text}</div>
                      {index === 0 && (
                        <div className="text-[10px] font-bold text-[#15803D]">{item.amount}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-[-40px] z-10 flex items-center gap-3 rounded-xl bg-white px-[14px] py-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] max-[900px]:static max-[900px]:mt-3 max-[900px]:w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDE9FE]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6D28D9"
                  strokeWidth="1.5"
                >
                  <circle cx="8" cy="5" r="3" />
                  <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-[var(--navy)]">Kweku Mensah</div>
                <div className="text-[10px] text-[#9CA3AF]">Agent · 12 units managed</div>
              </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] border-t border-white/[0.08] bg-white/[0.03] px-12 py-6 max-[900px]:px-4">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-center gap-16 max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-6">
          {stats.map((stat, index) => (
            <div key={stat.num} className="flex items-center">
              <div className="px-10 text-center max-[900px]:px-2">
                <div
                  className="text-[32px] leading-none text-white"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {stat.num}
                </div>
                <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.06em] text-white/40">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="h-10 w-px bg-white/10 max-[900px]:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
