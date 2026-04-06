const laws = [
  {
    title: "Clear rent terms from day one",
    desc: "RentGH lease templates set expectations upfront and track all rent terms in one place, reducing misunderstandings for landlords, agents, and tenants.",
  },
  {
    title: "Legally valid digital signatures",
    desc: "Ghana's Electronic Transactions Act 2008 (Act 772) gives digital signatures the same legal weight as wet ink signatures. RentGH leases are fully enforceable.",
  },
  {
    title: "RCD-ready dispute records",
    desc: "Payment logs, maintenance requests, and WhatsApp evidence from RentGH are structured to be admissible in Rent Control Department proceedings.",
  },
];

const badges = [
  "Rent Act 1963 (Act 220)",
  "Electronic Transactions Act 2008",
  "GRA compliant",
];

import { FadeUp } from "@/components/fade-up";

export default function Compliance() {
  return (
    <section className="py-[100px] px-12 max-[900px]:py-16 max-[900px]:px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className="rounded-3xl p-16 max-[900px]:p-8 max-[720px]:p-6 grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10 items-center"
          style={{ background: "var(--navy)" }}
        >
          {/* Left */}
          <FadeUp>
            <div
              className="text-xs font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "var(--gold)" }}
            >
              Legal compliance
            </div>
            <h2
              className="text-[40px] font-normal leading-[1.2] mb-4"
              style={{ fontFamily: "var(--font-dm-serif)", color: "#fff" }}
            >
              Built on Ghana&apos;s<br />rental laws
            </h2>
            <p className="text-base font-light leading-[1.8] mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              RentGH is the only platform designed specifically around Ghana&apos;s legal framework for residential rentals.
              Every lease, every payment record, every dispute trail is structured to hold up in front of the Rent
              Control Department.
            </p>
            <div className="flex gap-3 flex-wrap">
              {badges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-[10px] text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80" }} />
                  {b}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {laws.map((law, i) => (
              <FadeUp key={law.title} delay={(i + 1) * 0.1}>
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-sm font-bold text-white mb-1.5">{law.title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {law.desc}
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
