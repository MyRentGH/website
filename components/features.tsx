"use client";

import { useState } from "react";
import { motion, type Easing } from "framer-motion";

const EASE: Easing = "easeOut";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.6, ease: EASE, delay },
});

type FeatureItem = { title: string; desc: string; icon: React.ReactNode };
type Tab = {
  id: string;
  label: string;
  items: FeatureItem[];
  mock: React.ReactNode;
  visualLabel: string;
  visualTitle: string;
  visualSub: string;
};

// Shared card primitive inside the navy visual panel
const FvCard = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 10,
      padding: 14,
      marginBottom: 10,
      ...style,
    }}
  >
    {children}
  </div>
);

const FvRow = ({ label, value, valueStyle }: { label: string; value: React.ReactNode; valueStyle?: React.CSSProperties }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{label}</span>
    <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", ...valueStyle }}>{value}</span>
  </div>
);

const FvBadge = ({ children, color, bg }: { children: string; color: string; bg: string }) => (
  <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 99, background: bg, color }}>{children}</span>
);

const tabs: Tab[] = [
  {
    id: "payments",
    label: "Rent collection",
    items: [
      {
        title: "MoMo, card, and bank payments",
        desc: "Tenants pay however they prefer. MTN MoMo, Telecel Cash, Visa, Mastercard, or bank transfer — all via a secure payment checkout.",
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
    mock: (
      <>
        <FvCard>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Unit 2B · April rent</span>
            <FvBadge color="#4ADE80" bg="rgba(74,222,128,0.15)">Paid</FvBadge>
          </div>
          <FvRow label="Amount" value="GH₵1,500" valueStyle={{ color: "#4ADE80" }} />
          <FvRow label="Method" value="MTN MoMo" />
          <FvRow label="Ref" value="RGH-00412" valueStyle={{ fontFamily: "monospace", fontSize: 10 }} />
        </FvCard>
        <FvCard>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Unit 1, Spintex · April</span>
            <FvBadge color="#FCA5A5" bg="rgba(252,165,165,0.15)">Overdue</FvBadge>
          </div>
          <FvRow label="Days late" value="14 days" valueStyle={{ color: "#FCA5A5" }} />
          <FvRow label="Reminder sent" value="Yes — WhatsApp" />
        </FvCard>
        <FvCard>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Apt A, Tema · April</span>
            <FvBadge color="#FCD34D" bg="rgba(252,211,77,0.15)">Due soon</FvBadge>
          </div>
          <FvRow label="Due in" value="2 days" valueStyle={{ color: "#FCD34D" }} />
        </FvCard>
      </>
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
        desc: "Pre-built templates aligned with the Rent Act 1963 (Act 220). Every lease captures clear rent terms and responsibilities to protect both parties.",
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
    mock: (
      <FvCard style={{ background: "rgba(255,255,255,0.95)" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#0B2239", marginBottom: 8 }}>Residential Tenancy Agreement</div>
        {[
          { k: "Landlord", v: "Kwame Asante", vc: "#0B2239" },
          { k: "Tenant", v: "Kofi Mensah", vc: "#0B2239" },
          { k: "Rent", v: "GH₵1,500/mo", vc: "#15803D" },
          { k: "Signed", v: "✓ 3 Apr 2026 · 9:47am", vc: "#15803D" },
        ].map((r) => (
          <div key={r.k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F3F4F6" }}>
            <span style={{ fontSize: 11, color: "#6B7280" }}>{r.k}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: r.vc }}>{r.v}</span>
          </div>
        ))}
      </FvCard>
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
    mock: (
      <FvCard>
        <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Commission — April 2026</div>
        <FvRow label="Kwame Asante · 10%" value="GH₵1,050" valueStyle={{ color: "#4ADE80" }} />
        <FvRow label="Esi Boateng · 8%" value="GH₵416" valueStyle={{ color: "#FCD34D" }} />
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 4, paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Total earned</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>GH₵1,466</span>
        </div>
      </FvCard>
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
    mock: (
      <>
        <FvCard style={{ borderLeft: "3px solid #EF4444", borderRadius: "0 8px 8px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Burst pipe · Unit 1C</span>
            <FvBadge color="#FCA5A5" bg="rgba(239,68,68,0.2)">Urgent</FvBadge>
          </div>
          <FvRow label="Status" value="In progress · Agent notified" valueStyle={{ color: "#FCD34D" }} />
          <FvRow label="Escalates in" value="1hr 23min" valueStyle={{ color: "#FCA5A5" }} />
        </FvCard>
        <FvCard style={{ borderLeft: "3px solid #FCD34D", borderRadius: "0 8px 8px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>No power · Unit 4, Spintex</span>
            <FvBadge color="#FCD34D" bg="rgba(252,211,77,0.15)">High</FvBadge>
          </div>
          <FvRow label="Status" value="Acknowledged" valueStyle={{ color: "#4ADE80" }} />
        </FvCard>
      </>
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
    <section id="features" className="px-12 py-[100px] max-[900px]:px-6 max-[900px]:py-16" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--gold)" }}>
            Features
          </div>
          <h2
            className="mb-5 text-[clamp(34px,4vw,52px)] leading-[1.15] tracking-[-0.5px]"
            style={{ fontFamily: "var(--font-dm-serif)", color: "var(--text)" }}
          >
            Everything a landlord<br />actually needs
          </h2>
          <p className="mx-auto max-w-[560px] text-[18px] font-light leading-[1.7]" style={{ color: "var(--text-mid)" }}>
            Built specifically for Ghana — not a global tool adapted for Africa, but a platform designed from the ground up for how property works here.
          </p>
        </motion.div>

        {/* Tabs — individual pill buttons */}
        <motion.div {...fadeUp(0.1)} className="mb-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="feature-tab cursor-pointer rounded-full px-5 py-[9px] text-[13px] font-semibold transition-all duration-200"
              style={
                activeTab === t.id
                  ? { background: "var(--navy)", color: "#fff", border: "1.5px solid var(--navy)" }
                  : { background: "#fff", color: "var(--text-mid)", border: "1.5px solid var(--border)" }
              }
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Panel: 2-col grid, feature list left, navy visual right */}
        <div className="grid grid-cols-2 items-center gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-8">

          {/* Left: feature list */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-5">
            {tab.items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]"
                  style={{ background: "var(--gold-pale)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="mb-1 text-[15px] font-semibold" style={{ color: "var(--text)" }}>{item.title}</div>
                  <div className="text-[13px] leading-[1.65]" style={{ color: "var(--text-mid)" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: navy visual panel */}
          <motion.div {...fadeUp(0.25)}
            className="feature-visual relative overflow-hidden rounded-[20px] p-8 max-[900px]:p-6"
            style={{
              background: "var(--navy)",
              minHeight: 480,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {/* Radial gradient overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(201,147,58,0.15) 0%, transparent 60%)",
              }}
            />

            {/* Mock cards — absolute at top on desktop, static on mobile */}
            <div className="absolute left-8 right-8 top-7 max-[900px]:relative max-[900px]:left-0 max-[900px]:right-0 max-[900px]:top-0 max-[900px]:mb-6">
              {tab.mock}
            </div>

            {/* Label / title / sub — at bottom, above overlay */}
            <div className="relative z-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--gold)" }}>
                {tab.visualLabel}
              </div>
              <div
                className="mb-2 text-[28px] leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {tab.visualTitle}
              </div>
              <div className="text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>{tab.visualSub}</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
