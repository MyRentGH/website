"use client";

import { useState } from "react";

type FeatureItem = { title: string; desc: string; icon: React.ReactNode };
type Tab = { id: string; label: string; items: FeatureItem[]; visual: React.ReactNode; visualLabel: string; visualTitle: string; visualSub: string };

const GoldIcon = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
    style={{ background: "rgba(201,147,58,0.12)" }}
  >
    {children}
  </div>
);

const tabs: Tab[] = [
  {
    id: "payments",
    label: "Rent collection",
    items: [
      {
        title: "MoMo, card, and bank payments",
        desc: "Tenants pay however they prefer. MTN MoMo, Telecel Cash, Visa, Mastercard, or bank transfer — all via Paystack's secure checkout.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><rect x="1" y="3" width="14" height="10" rx="1.5" /><path d="M1 7h14M4 10.5h2" strokeLinecap="round" /></svg>,
      },
      {
        title: "Automatic reminders",
        desc: "Rent reminders sent 5 days before due date via WhatsApp. Escalating alerts if payment is late. You never have to chase manually again.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M8 1a7 7 0 100 14A7 7 0 008 1z" /><path d="M8 4v5l3 3" strokeLinecap="round" /></svg>,
      },
      {
        title: "Instant receipts and records",
        desc: "Every payment generates a receipt sent to both landlord and tenant. Full payment history stored permanently — your GRA audit is already done.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M2 12l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
      {
        title: "Rent goes directly to you",
        desc: "Money moves from tenant to your MoMo or bank account. No intermediary holds your rent. Agents are notified — not in the money flow.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M1 8h14M5 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
    ],
    visual: (
      <div className="flex flex-col gap-3">
        {[
          { unit: "Unit 2B · April rent", status: "Paid", statusColor: "#4ADE80", statusBg: "rgba(74,222,128,0.15)", key1: "Amount", val1: "GH₵1,500", val1Color: "#4ADE80", key2: "Method", val2: "MTN MoMo", key3: "Ref", val3: "RGH-00412", mono: true },
          { unit: "Unit 1, Spintex · April", status: "Overdue", statusColor: "#FCA5A5", statusBg: "rgba(239,68,68,0.15)", key1: "Days late", val1: "14 days", val1Color: "#FCA5A5", key2: "Reminder sent", val2: "Yes — WhatsApp" },
          { unit: "Apt A, Tema · April", status: "Due soon", statusColor: "#FCD34D", statusBg: "rgba(252,211,77,0.15)", key1: "Due in", val1: "2 days", val1Color: "#FCD34D" },
        ].map((c) => (
          <div key={c.unit} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-white/80">{c.unit}</div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: c.statusBg, color: c.statusColor }}>{c.status}</span>
            </div>
            {c.key1 && (
              <div className="flex justify-between text-xs mb-1"><span className="text-white/40">{c.key1}</span><span style={{ color: c.val1Color || "rgba(255,255,255,0.7)", fontFamily: c.mono ? "monospace" : undefined }}>{c.val1}</span></div>
            )}
            {c.key2 && (
              <div className="flex justify-between text-xs mb-1"><span className="text-white/40">{c.key2}</span><span className="text-white/70">{c.val2}</span></div>
            )}
            {c.key3 && (
              <div className="flex justify-between text-xs"><span className="text-white/40">{c.key3}</span><span className="text-white/70">{c.val3}</span></div>
            )}
          </div>
        ))}
      </div>
    ),
    visualLabel: "Rent collection",
    visualTitle: "Every payment tracked automatically",
    visualSub: "MoMo · Card · Bank transfer",
  },
  {
    id: "leases",
    label: "Leases",
    items: [
      {
        title: "Ghana-law lease templates",
        desc: "Pre-built templates compliant with the Rent Act 1963 (Act 220). Every lease includes the legal advance rent cap notice — protecting both parties.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><rect x="3" y="1" width="10" height="14" rx="1.5" /><path d="M6 5h4M6 8h4M6 11h2" strokeLinecap="round" /></svg>,
      },
      {
        title: "Digital signing via WhatsApp",
        desc: "Tenants receive a link, review the full document, tick 5 key understanding checkboxes, and sign digitally — legally valid under Ghana's Electronic Transactions Act.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M3 10l3 3 7-8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
      {
        title: "PDF stored for both parties",
        desc: "Signed PDF sent to landlord and tenant the moment signing is complete. Stored permanently on the platform — accessible anytime from any device.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M8 1v9M4 7l4 4 4-4M1 13h14" strokeLinecap="round" /></svg>,
      },
      {
        title: "Expiry alerts",
        desc: "30-day and 7-day warnings before a lease expires. Never lose a tenant to a gap in your tenancy calendar.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><circle cx="8" cy="8" r="6" /><path d="M8 4v4l2.5 2.5" strokeLinecap="round" /></svg>,
      },
    ],
    visual: (
      <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.95)" }}>
        <div className="text-xs font-bold mb-4" style={{ color: "#0B2239" }}>Residential Tenancy Agreement</div>
        {[
          { k: "Landlord", v: "Kwame Asante" },
          { k: "Tenant", v: "Kofi Mensah" },
          { k: "Rent", v: "GH₵1,500/mo", vColor: "#15803D" },
          { k: "Signed", v: "✓ 3 Apr 2026 · 9:47am", vColor: "#15803D" },
        ].map((r) => (
          <div key={r.k} className="flex justify-between py-2 text-xs border-b last:border-0" style={{ borderColor: "#F3F4F6" }}>
            <span style={{ color: "#6B7280" }}>{r.k}</span>
            <span style={{ color: r.vColor || "#0B2239", fontWeight: 500 }}>{r.v}</span>
          </div>
        ))}
      </div>
    ),
    visualLabel: "Digital leases",
    visualTitle: "Signed in minutes. Valid forever.",
    visualSub: "Compliant with Ghana Rent Act 1963",
  },
  {
    id: "agents",
    label: "Agents",
    items: [
      {
        title: "Agents get free access",
        desc: "Invite your agent by phone. They get a free account, funded by your subscription. No cost, no friction, no excuse not to use the platform.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><circle cx="8" cy="5" r="3" /><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" /><path d="M13 7v4M11 9h4" strokeLinecap="round" /></svg>,
      },
      {
        title: "Transparent commission tracking",
        desc: "Set your agent's commission rate. The platform automatically calculates what's owed on every payment. Both of you see the same numbers.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M2 12l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
      {
        title: "Money never passes through the agent",
        desc: "This is the key protection. Rent goes tenant → your account directly. Agents see commission owed but never touch your rent.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><rect x="3" y="7" width="10" height="8" rx="1.5" /><path d="M5 7V5a3 3 0 016 0v2" /></svg>,
      },
      {
        title: "One agent, multiple landlords",
        desc: "Agents get their own dashboard to manage all their landlord portfolios. Property-level access isolation — each landlord only sees their own.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><circle cx="5.5" cy="5" r="2.5" /><circle cx="10.5" cy="5" r="2.5" /><path d="M1 13c0-2.2 2-3.5 4.5-3.5S10 10.8 10 13" strokeLinecap="round" /><path d="M10.5 9.5c2.5 0 4.5 1.3 4.5 3.5" strokeLinecap="round" /></svg>,
      },
    ],
    visual: (
      <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="text-xs font-bold uppercase tracking-[0.05em] mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Commission — April 2026</div>
        {[
          { k: "Kwame Asante · 10%", v: "GH₵1,050", vColor: "#4ADE80" },
          { k: "Esi Boateng · 8%", v: "GH₵416", vColor: "#FCD34D" },
        ].map((r) => (
          <div key={r.k} className="flex justify-between py-2 text-xs border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <span className="text-white/50">{r.k}</span>
            <span style={{ color: r.vColor, fontWeight: 600 }}>{r.v}</span>
          </div>
        ))}
        <div className="flex justify-between pt-3 text-sm font-semibold">
          <span className="text-white/60">Total earned</span>
          <span className="text-white">GH₵1,466</span>
        </div>
      </div>
    ),
    visualLabel: "Agent tools",
    visualTitle: "Professional tools for serious agents",
    visualSub: "Free access · Commission tracking · Multi-landlord",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    items: [
      {
        title: "3 ways to file — no account needed",
        desc: "Tenants file via their portal link, WhatsApp message to the RentGH number, or QR code on their door. We identify them by phone number automatically.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M2 8c0-3.314 2.686-5 6-5s6 1.686 6 5M2 8c0 3.314 2.686 5 6 5s6-1.686 6-5" /></svg>,
      },
      {
        title: "Automatic routing & escalation",
        desc: "Requests route to your agent first. If they don't respond within the urgency window, you're alerted automatically. Nothing falls through the cracks.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><circle cx="8" cy="8" r="6" /><path d="M8 4v4l2.5 2.5" strokeLinecap="round" /></svg>,
      },
      {
        title: "Tenant confirms resolution",
        desc: "When your agent marks an issue resolved, the tenant gets a WhatsApp asking \"Was this fixed?\" If they say no, the ticket reopens and you're notified.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><path d="M3 8l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      },
      {
        title: "Full history per unit",
        desc: "Every maintenance request, status update, and photo is stored permanently on the unit record. Legal evidence in any future dispute.",
        icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" strokeWidth="1.5"><rect x="3" y="1" width="10" height="14" rx="1.5" /><path d="M6 5h4M6 8h4M6 11h2" strokeLinecap="round" /></svg>,
      },
    ],
    visual: (
      <div className="flex flex-col gap-3">
        {[
          {
            title: "Burst pipe · Unit 1C", badge: "Urgent", badgeColor: "#FCA5A5", badgeBg: "rgba(239,68,68,0.2)",
            borderColor: "#EF4444",
            rows: [{ k: "Status", v: "In progress · Agent notified", vColor: "#FCD34D" }, { k: "Escalates in", v: "1hr 23min", vColor: "#FCA5A5" }],
          },
          {
            title: "No power · Unit 4, Spintex", badge: "High", badgeColor: "#FCD34D", badgeBg: "rgba(252,211,77,0.15)",
            borderColor: "#FCD34D",
            rows: [{ k: "Status", v: "Acknowledged", vColor: "#4ADE80" }],
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${c.borderColor}` }}>
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium text-white/80">{c.title}</div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: c.badgeBg, color: c.badgeColor }}>{c.badge}</span>
            </div>
            {c.rows.map((r) => (
              <div key={r.k} className="flex justify-between text-xs mb-1">
                <span className="text-white/40">{r.k}</span>
                <span style={{ color: r.vColor }}>{r.v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
    visualLabel: "Maintenance",
    visualTitle: "Issues tracked from filing to resolution",
    visualSub: "WhatsApp · Portal · QR code",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("payments");
  const tab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="features" className="py-[100px] px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: "var(--navy)" }}>
            Features
          </div>
          <h2
            className="text-[40px] font-normal leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-dm-serif)", color: "var(--navy)" }}
          >
            Everything a landlord<br />actually needs
          </h2>
          <p className="text-base font-light max-w-[540px] mx-auto" style={{ color: "var(--text-mid)" }}>
            Built specifically for Ghana — not a global tool adapted for Africa, but a platform designed from the ground
            up for how property works here.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1 rounded-xl mb-10 w-fit mx-auto"
          style={{ background: "rgba(11,34,57,0.06)" }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-0"
              style={{
                background: activeTab === t.id ? "var(--navy)" : "transparent",
                color: activeTab === t.id ? "#fff" : "var(--text-mid)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="grid grid-cols-2 gap-12 p-10 rounded-2xl"
          style={{ background: "var(--navy)" }}
        >
          {/* Feature list */}
          <div className="flex flex-col gap-6">
            {tab.items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <GoldIcon>{item.icon}</GoldIcon>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="flex flex-col gap-6 justify-between">
            <div>{tab.visual}</div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: "var(--gold)" }}>
                {tab.visualLabel}
              </div>
              <div className="text-xl font-normal text-white mb-1" style={{ fontFamily: "var(--font-dm-serif)" }}>
                {tab.visualTitle}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{tab.visualSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
