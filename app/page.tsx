"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    setFeature?: (id: string) => void;
  }
}

const landingMarkup = `
<!-- ── Nav ── -->
<nav>
  <a href="#" class="nav-logo">Rent<span>GH</span></a>
  <div class="nav-links">
    <a href="#how">How it works</a>
    <a href="#features">Features</a>
    <a href="#diaspora">Diaspora</a>
    <a href="#agents">For agents</a>
    <a href="#pricing">Pricing</a>
    <a href="#" class="nav-cta">Get started free</a>
  </div>
</nav>

<!-- ── Hero ── -->
<div class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-content container">
    <div class="hero-left">
      <div class="hero-eyebrow">
        <div class="hero-eyebrow-dot"></div>
        Built for Ghana · Now live in Accra
      </div>
      <h1>
        Collect rent.<br>
        Manage leases.<br>
        <em>Stay in control.</em>
      </h1>
      <p class="hero-sub">
        RentGH replaces cash, WhatsApp, and notebooks with one platform — for landlords, agents, and diaspora property owners across Ghana.
      </p>
      <div class="hero-ctas">
        <a href="#" class="btn-primary">
          Start managing free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#how" class="btn-secondary">
          See how it works
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="hero-trust">
        <div class="trust-item">
          <svg class="trust-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1l2 4 4.5.65-3.25 3.17.77 4.48L8 11.1l-4.02 2.2.77-4.48L1.5 5.65 6 5l2-4z"/></svg>
          <span class="trust-text">MoMo, card & bank payments</span>
        </div>
        <div class="trust-item">
          <svg class="trust-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="10" height="8" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>
          <span class="trust-text">Ghana Rent Act compliant</span>
        </div>
        <div class="trust-item">
          <svg class="trust-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1l2 4 4.5.65-3.25 3.17.77 4.48L8 11.1l-4.02 2.2.77-4.48L1.5 5.65 6 5l2-4z"/></svg>
          <span class="trust-text">Secured by Paystack</span>
        </div>
      </div>
    </div>

    <div class="hero-right">
      <div style="position:relative">
        <div class="hero-stat-pill pill-top fade-up fade-up-delay-2">
          <div class="pill-icon" style="background:#DCFCE7"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#15803D" stroke-width="1.8"><path d="M3 8l4 4 6-7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div><div class="pill-val">GH₵1,500 paid</div><div class="pill-lbl">Unit 2B · Just now</div></div>
        </div>

        <div class="dashboard-mockup">
          <div class="mock-topbar">
            <div class="mock-logo">Rent<span>GH</span></div>
            <div class="mock-nav-dots">
              <div class="mock-dot" style="background:#EF4444"></div>
              <div class="mock-dot" style="background:#F59E0B"></div>
              <div class="mock-dot" style="background:#22C55E"></div>
            </div>
          </div>
          <div class="mock-body">
            <div class="mock-stats">
              <div class="mock-stat"><div class="mock-stat-val">GH₵18.5K</div><div class="mock-stat-lbl">Collected Apr</div></div>
              <div class="mock-stat"><div class="mock-stat-val" style="color:#DC2626">3</div><div class="mock-stat-lbl">Overdue units</div></div>
              <div class="mock-stat"><div class="mock-stat-val">87%</div><div class="mock-stat-lbl">Occupancy</div></div>
            </div>
            <div style="font-size:10px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px">Unit status</div>
            <div class="mock-units">
              <div class="mock-unit mu-paid"><div class="mock-unit-label">1A</div><div class="mock-unit-amt">Paid</div></div>
              <div class="mock-unit mu-paid"><div class="mock-unit-label">1B</div><div class="mock-unit-amt">Paid</div></div>
              <div class="mock-unit mu-late"><div class="mock-unit-label">1C</div><div class="mock-unit-amt">7 days</div></div>
              <div class="mock-unit mu-due"><div class="mock-unit-label">2A</div><div class="mock-unit-amt">Due</div></div>
              <div class="mock-unit mu-paid"><div class="mock-unit-label">2B</div><div class="mock-unit-amt">Paid</div></div>
              <div class="mock-unit mu-paid"><div class="mock-unit-label">2C</div><div class="mock-unit-amt">Paid</div></div>
              <div class="mock-unit mu-vac"><div class="mock-unit-label">3A</div><div class="mock-unit-amt">Vacant</div></div>
              <div class="mock-unit mu-late"><div class="mock-unit-label">S1</div><div class="mock-unit-amt">14 days</div></div>
            </div>
            <div class="mock-activity">
              <div class="mock-act-row"><div class="mock-act-dot" style="background:#DCFCE7;color:#15803D">GH₵</div><div class="mock-act-text">Rent paid · Unit 2, Spintex · MoMo</div><div class="mock-act-amt">+1,200</div></div>
              <div class="mock-act-row"><div class="mock-act-dot" style="background:#FEE2E2;color:#DC2626">!</div><div class="mock-act-text">Overdue · Unit 4 · 14 days late</div></div>
              <div class="mock-act-row"><div class="mock-act-dot" style="background:#DBEAFE;color:#1D4ED8">≡</div><div class="mock-act-text">Lease signed · Apt B · Tema House</div></div>
            </div>
          </div>
        </div>

        <div class="hero-stat-pill pill-bottom fade-up fade-up-delay-3">
          <div class="pill-icon" style="background:#EDE9FE"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6D28D9" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5"/></svg></div>
          <div><div class="pill-val">Kweku Mensah</div><div class="pill-lbl">Agent · 12 units managed</div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-bottom">
    <div class="hero-stat"><div class="hero-stat-num">5.4M+</div><div class="hero-stat-label">Ghanaians renting</div></div>
    <div class="hero-stat-divider"></div>
    <div class="hero-stat"><div class="hero-stat-num">73K+</div><div class="hero-stat-label">Rent disputes in 2024</div></div>
    <div class="hero-stat-divider"></div>
    <div class="hero-stat"><div class="hero-stat-num">0</div><div class="hero-stat-label">Dedicated local platforms</div></div>
    <div class="hero-stat-divider"></div>
    <div class="hero-stat"><div class="hero-stat-num">Act 220</div><div class="hero-stat-label">Ghana Rent Act compliant</div></div>
  </div>
</div>

<!-- ── Problem ── -->
<section class="problem" id="problem">
  <div class="container">
    <div class="problem-grid">
      <div class="fade-up">
        <div class="section-eyebrow">The problem</div>
        <h2>Ghana's rental market runs on <em>chaos</em></h2>
        <p class="section-sub" style="margin-bottom:0">Cash payments with no records. Verbal leases. WhatsApp reminders. Agents collecting money that never arrives. It doesn't have to be this way.</p>
      </div>
      <div class="problem-cards">
        <div class="problem-card fade-up fade-up-delay-1">
          <div class="problem-icon" style="background:#FEE2E2"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#DC2626" stroke-width="1.5"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 7h14"/><path d="M4 10.5h2" stroke-linecap="round"/></svg></div>
          <div><div class="problem-title">Landlords demand illegal advance payments</div><div class="problem-desc">The law caps advance rent at 6 months. Most landlords demand 2–3 years. Enforcement is virtually nonexistent — 73,000 disputes in 2024 alone.</div></div>
        </div>
        <div class="problem-card fade-up fade-up-delay-2">
          <div class="problem-icon" style="background:#FEF9C3"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#A16207" stroke-width="1.5"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 5h4M6 8h4M6 11h2" stroke-linecap="round"/></svg></div>
          <div><div class="problem-title">No leases, no records, no protection</div><div class="problem-desc">Most agreements are verbal or handwritten. When disputes arise, neither party has evidence. The platform creates an audit trail from day one.</div></div>
        </div>
        <div class="problem-card fade-up fade-up-delay-3">
          <div class="problem-icon" style="background:#EDE9FE"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#6D28D9" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l2.5 2.5" stroke-linecap="round"/></svg></div>
          <div><div class="problem-title">Diaspora landlords have zero visibility</div><div class="problem-desc">Ghanaians in the UK, US, and Canada own billions in property back home. They rely on family members or agents — with no way to verify what's actually happening.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── How it works ── -->
<section class="how" id="how">
  <div class="container">
    <div class="fade-up">
      <div class="section-eyebrow">How it works</div>
      <h2>Simple for everyone<br>involved</h2>
      <p class="section-sub">From adding a property to collecting rent — the whole flow takes under 10 minutes to set up.</p>
    </div>
    <div class="steps">
      <div class="step fade-up fade-up-delay-1">
        <div class="step-num">01</div>
        <div class="step-title">Add your property</div>
        <div class="step-desc">Create your property, add units, set rent amounts and due dates. Invite your agent if you have one — they get free access.</div>
        <div class="step-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"><path d="M2 6h8M6 2l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>
      <div class="step fade-up fade-up-delay-2">
        <div class="step-num">02</div>
        <div class="step-title">Add tenants & send leases</div>
        <div class="step-desc">Add a tenant's name and phone. The platform generates a Ghana-law lease and sends it to them via WhatsApp. They sign digitally — no app needed.</div>
        <div class="step-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"><path d="M2 6h8M6 2l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>
      <div class="step fade-up fade-up-delay-3">
        <div class="step-num">03</div>
        <div class="step-title">Collect rent automatically</div>
        <div class="step-desc">Tenants pay via MoMo, card, or bank transfer. Rent goes directly to your account — never through an agent. Receipts sent instantly to both parties.</div>
        <div class="step-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"><path d="M2 6h8M6 2l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>
      <div class="step fade-up fade-up-delay-4">
        <div class="step-num">04</div>
        <div class="step-title">Stay in control</div>
        <div class="step-desc">See all units, payments, maintenance, agent commission, and expiring leases on one dashboard. Everything documented, everything searchable.</div>
      </div>
    </div>
  </div>
</section>

<!-- ── Features ── -->
<section class="features" id="features">
  <div class="container">
    <div class="features-header fade-up">
      <div class="section-eyebrow">Features</div>
      <h2>Everything a landlord<br>actually needs</h2>
      <p class="section-sub">Built specifically for Ghana — not a global tool adapted for Africa, but a platform designed from the ground up for how property works here.</p>
    </div>
    <div class="feature-tabs">
      <div class="feature-tab active" onclick="setFeature('payments')">Rent collection</div>
      <div class="feature-tab" onclick="setFeature('leases')">Leases</div>
      <div class="feature-tab" onclick="setFeature('agents')">Agents</div>
      <div class="feature-tab" onclick="setFeature('maintenance')">Maintenance</div>
    </div>
    <div class="feature-panels">

      <div class="feature-panel active" id="fp-payments">
        <div class="feature-list fade-up">
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 7h14M4 10.5h2" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">MoMo, card, and bank payments</div><div class="feature-item-desc">Tenants pay however they prefer. MTN MoMo, Telecel Cash, Visa, Mastercard, or bank transfer — all via Paystack's secure checkout.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M8 1a7 7 0 100 14A7 7 0 008 1z"/><path d="M8 4v5l3 3" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">Automatic reminders</div><div class="feature-item-desc">Rent reminders sent 5 days before due date via WhatsApp. Escalating alerts if payment is late. You never have to chase manually again.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M2 12l4-4 3 3 5-6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="feature-item-title">Instant receipts and records</div><div class="feature-item-desc">Every payment generates a receipt sent to both landlord and tenant. Full payment history stored permanently — your GRA audit is already done.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M1 8h14M5 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="feature-item-title">Rent goes directly to you</div><div class="feature-item-desc">Money moves from tenant to your MoMo or bank account. No intermediary holds your rent. Agents are notified — not in the money flow.</div></div>
          </div>
        </div>
        <div class="feature-visual fade-up fade-up-delay-2">
          <div class="fv-mock">
            <div class="fv-card">
              <div class="fv-card-row"><div class="fv-key">Unit 2B · April rent</div><span class="fv-badge fb-paid">Paid</span></div>
              <div class="fv-card-row"><div class="fv-key">Amount</div><div class="fv-val green">GH₵1,500</div></div>
              <div class="fv-card-row"><div class="fv-key">Method</div><div class="fv-val">MTN MoMo</div></div>
              <div class="fv-card-row"><div class="fv-key">Ref</div><div class="fv-val" style="font-family:monospace;font-size:10px">RGH-00412</div></div>
            </div>
            <div class="fv-card">
              <div class="fv-card-row"><div class="fv-key">Unit 1, Spintex · April</div><span class="fv-badge fb-late">Overdue</span></div>
              <div class="fv-card-row"><div class="fv-key">Days late</div><div class="fv-val red">14 days</div></div>
              <div class="fv-card-row"><div class="fv-key">Reminder sent</div><div class="fv-val">Yes — WhatsApp</div></div>
            </div>
            <div class="fv-card">
              <div class="fv-card-row"><div class="fv-key">Apt A, Tema · April</div><span class="fv-badge fb-due">Due soon</span></div>
              <div class="fv-card-row"><div class="fv-key">Due in</div><div class="fv-val amber">2 days</div></div>
            </div>
          </div>
          <div style="position:relative;z-index:1">
            <div class="fv-label">Rent collection</div>
            <div class="fv-title">Every payment tracked automatically</div>
            <div class="fv-sub">MoMo · Card · Bank transfer</div>
          </div>
        </div>
      </div>

      <div class="feature-panel" id="fp-leases">
        <div class="feature-list fade-up">
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 5h4M6 8h4M6 11h2" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">Ghana-law lease templates</div><div class="feature-item-desc">Pre-built templates compliant with the Rent Act 1963 (Act 220). Every lease includes the legal advance rent cap notice — protecting both parties.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M3 10l3 3 7-8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="feature-item-title">Digital signing via WhatsApp</div><div class="feature-item-desc">Tenants receive a link, review the full document, tick 5 key understanding checkboxes, and sign digitally — legally valid under Ghana's Electronic Transactions Act.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M8 1v9M4 7l4 4 4-4M1 13h14" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">PDF stored for both parties</div><div class="feature-item-desc">Signed PDF sent to landlord and tenant the moment signing is complete. Stored permanently on the platform — accessible anytime from any device.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l2.5 2.5" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">Expiry alerts</div><div class="feature-item-desc">30-day and 7-day warnings before a lease expires. Never lose a tenant to a gap in your tenancy calendar.</div></div>
          </div>
        </div>
        <div class="feature-visual fade-up fade-up-delay-2">
          <div class="fv-mock">
            <div class="fv-card" style="background:rgba(255,255,255,0.95)">
              <div style="font-size:12px;font-weight:700;color:#0B2239;margin-bottom:8px">Residential Tenancy Agreement</div>
              <div class="fv-card-row" style="border-bottom:1px solid #F3F4F6;padding-bottom:6px"><div class="fv-key">Landlord</div><div class="fv-val" style="color:#0B2239;font-size:11px">Kwame Asante</div></div>
              <div class="fv-card-row" style="border-bottom:1px solid #F3F4F6;padding-bottom:6px"><div class="fv-key">Tenant</div><div class="fv-val" style="color:#0B2239;font-size:11px">Kofi Mensah</div></div>
              <div class="fv-card-row" style="border-bottom:1px solid #F3F4F6;padding-bottom:6px"><div class="fv-key">Rent</div><div class="fv-val green">GH₵1,500/mo</div></div>
              <div class="fv-card-row"><div class="fv-key">Signed</div><div class="fv-val" style="color:#4ADE80;font-size:11px">✓ 3 Apr 2026 · 9:47am</div></div>
            </div>
          </div>
          <div style="position:relative;z-index:1">
            <div class="fv-label">Digital leases</div>
            <div class="fv-title">Signed in minutes.<br>Valid forever.</div>
            <div class="fv-sub">Compliant with Ghana Rent Act 1963</div>
          </div>
        </div>
      </div>

      <div class="feature-panel" id="fp-agents">
        <div class="feature-list fade-up">
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5"/><path d="M13 7v4M11 9h4" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">Agents get free access</div><div class="feature-item-desc">Invite your agent by phone. They get a free account, funded by your subscription. No cost, no friction, no excuse not to use the platform.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M2 12l4-4 3 3 5-6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="feature-item-title">Transparent commission tracking</div><div class="feature-item-desc">Set your agent's commission rate. The platform automatically calculates what's owed on every payment. Both of you see the same numbers.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><rect x="3" y="7" width="10" height="8" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg></div>
            <div><div class="feature-item-title">Money never passes through the agent</div><div class="feature-item-desc">This is the key protection. Rent goes tenant → your account directly. Agents see commission owed but never touch your rent.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><circle cx="5.5" cy="5" r="2.5"/><circle cx="10.5" cy="5" r="2.5"/><path d="M1 13c0-2.2 2-3.5 4.5-3.5S10 10.8 10 13" stroke-linecap="round"/><path d="M10.5 9.5c2.5 0 4.5 1.3 4.5 3.5" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">One agent, multiple landlords</div><div class="feature-item-desc">Agents get their own dashboard to manage all their landlord portfolios. Property-level access isolation — each landlord only sees their own.</div></div>
          </div>
        </div>
        <div class="feature-visual fade-up fade-up-delay-2">
          <div class="fv-mock">
            <div class="fv-card">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);margin-bottom:10px">Commission — April 2026</div>
              <div class="fv-card-row"><div class="fv-key">Kwame Asante · 10%</div><div class="fv-val green">GH₵1,050</div></div>
              <div class="fv-card-row"><div class="fv-key">Esi Boateng · 8%</div><div class="fv-val amber">GH₵416</div></div>
              <div class="fv-card-row" style="border:none;padding-top:10px;margin-top:4px;border-top:1px solid rgba(255,255,255,0.1)"><div class="fv-key">Total earned</div><div class="fv-val" style="color:#fff;font-size:14px">GH₵1,466</div></div>
            </div>
          </div>
          <div style="position:relative;z-index:1">
            <div class="fv-label">Agent tools</div>
            <div class="fv-title">Professional tools for serious agents</div>
            <div class="fv-sub">Free access · Commission tracking · Multi-landlord</div>
          </div>
        </div>
      </div>

      <div class="feature-panel" id="fp-maintenance">
        <div class="feature-list fade-up">
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M2 8c0-3.314 2.686-5 6-5s6 1.686 6 5M2 8c0 3.314 2.686 5 6 5s6-1.686 6-5"/></svg></div>
            <div><div class="feature-item-title">3 ways to file — no account needed</div><div class="feature-item-desc">Tenants file via their portal link, WhatsApp message to the RentGH number, or QR code on their door. We identify them by phone number automatically.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l2.5 2.5" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">Automatic routing & escalation</div><div class="feature-item-desc">Requests route to your agent first. If they don't respond within the urgency window, you're alerted automatically. Nothing falls through the cracks.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M3 8l4 4 6-7" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div><div class="feature-item-title">Tenant confirms resolution</div><div class="feature-item-desc">When your agent marks an issue resolved, the tenant gets a WhatsApp asking "Was this fixed?" If they say no, the ticket reopens and you're notified.</div></div>
          </div>
          <div class="feature-item">
            <div class="feature-item-icon"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 5h4M6 8h4M6 11h2" stroke-linecap="round"/></svg></div>
            <div><div class="feature-item-title">Full history per unit</div><div class="feature-item-desc">Every maintenance request, status update, and photo is stored permanently on the unit record. Legal evidence in any future dispute.</div></div>
          </div>
        </div>
        <div class="feature-visual fade-up fade-up-delay-2">
          <div class="fv-mock">
            <div class="fv-card" style="border-left:3px solid #EF4444;border-radius:0 8px 8px 0">
              <div class="fv-card-row"><div class="fv-key">Burst pipe · Unit 1C</div><span class="fv-badge" style="background:rgba(239,68,68,0.2);color:#FCA5A5">Urgent</span></div>
              <div class="fv-card-row"><div class="fv-key">Status</div><div class="fv-val amber">In progress · Agent notified</div></div>
              <div class="fv-card-row"><div class="fv-key">Escalates in</div><div class="fv-val red">1hr 23min</div></div>
            </div>
            <div class="fv-card" style="border-left:3px solid #FCD34D;border-radius:0 8px 8px 0">
              <div class="fv-card-row"><div class="fv-key">No power · Unit 4, Spintex</div><span class="fv-badge fb-due">High</span></div>
              <div class="fv-card-row"><div class="fv-key">Status</div><div class="fv-val green">Acknowledged</div></div>
            </div>
          </div>
          <div style="position:relative;z-index:1">
            <div class="fv-label">Maintenance</div>
            <div class="fv-title">Issues tracked from filing to resolution</div>
            <div class="fv-sub">WhatsApp · Portal · QR code</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ── Diaspora ── -->
<section class="diaspora" id="diaspora">
  <div class="container">
    <div class="diaspora-grid">
      <div class="fade-up">
        <div class="section-eyebrow">For diaspora landlords</div>
        <h2>Own property in Ghana.<br>Live <em>anywhere</em>.</h2>
        <p class="section-sub">The Ghanaian diaspora has invested billions in property back home with no tools to manage it remotely. RentGH changes that.</p>
        <div class="diaspora-features">
          <div class="diaspora-feature">
            <div class="df-icon"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M8 1a7 7 0 100 14A7 7 0 008 1z"/><path d="M1 8h14M8 1c-2 3-2 9 0 14M8 1c2 3 2 9 0 14"/></svg></div>
            <div class="df-text">See rent collected in GHS and your home currency (GBP, USD, EUR) at the rate on payment day</div>
          </div>
          <div class="diaspora-feature">
            <div class="df-icon"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><circle cx="5.5" cy="5" r="2.5"/><circle cx="10.5" cy="5" r="2.5"/><path d="M1 13c0-2.2 2-3.5 4.5-3.5S10 10.8 10 13" stroke-linecap="round"/><path d="M10.5 9.5c2.5 0 4.5 1.3 4.5 3.5" stroke-linecap="round"/></svg></div>
            <div class="df-text">Assign a caretaker with limited access — they handle on-the-ground issues, you see everything</div>
          </div>
          <div class="diaspora-feature">
            <div class="df-icon"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><path d="M8 1v9M4 7l4 4 4-4M1 13h14" stroke-linecap="round"/></svg></div>
            <div class="df-text">Monthly PDF reports emailed to you — rent collected, maintenance done, leases expiring</div>
          </div>
          <div class="diaspora-feature">
            <div class="df-icon"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#C9933A" stroke-width="1.5"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 7h14"/></svg></div>
            <div class="df-text">Priced in USD/GBP — $30/month, billed to your international card</div>
          </div>
        </div>
      </div>
      <div class="fade-up fade-up-delay-2">
        <div class="diaspora-card">
          <div class="dc-header">
            <div class="dc-title">April 2026 · East Legon House</div>
            <div class="dc-amount">GH₵18,500</div>
            <div class="dc-fx">≈ £985 · $1,240 USD at payment-day rates</div>
          </div>
          <div class="dc-rows">
            <div class="dc-row"><div class="dc-key">Units occupied</div><div class="dc-val">13 of 15</div></div>
            <div class="dc-row"><div class="dc-key">Overdue units</div><div class="dc-val" style="color:#FCA5A5">3</div></div>
            <div class="dc-row"><div class="dc-key">Agent commission</div><div class="dc-val gold">GH₵1,850 owed</div></div>
            <div class="dc-row"><div class="dc-key">Open maintenance</div><div class="dc-val">2 issues · Caretaker assigned</div></div>
            <div class="dc-row"><div class="dc-key">Leases expiring soon</div><div class="dc-val">2 in next 45 days</div></div>
            <div class="dc-row"><div class="dc-key">Last updated</div><div class="dc-val">Live · 3 Apr 2026</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Agents ── -->
<section class="agents" id="agents">
  <div class="container">
    <div class="agents-grid">
      <div class="fade-up">
        <div class="section-eyebrow">For agents</div>
        <h2>A free professional tool<br>for every <em>agent</em></h2>
        <p class="section-sub" style="margin-bottom:36px">Ghana's real estate agents manage dozens of landlords with notebooks and WhatsApp. RentGH gives them a professional platform — at no cost.</p>
        <a href="#" class="btn-primary">Join as an agent — free</a>
      </div>
      <div class="agent-proof">
        <div class="agent-free-badge fade-up fade-up-delay-1">
          <div class="afb-icon">
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="1.8"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5"/></svg>
          </div>
          <div>
            <div class="afb-title">Agents are always free on RentGH</div>
            <div class="afb-sub">Your landlord's subscription covers your access. Commission tracking, tenant management, maintenance dashboard — all free, forever.</div>
          </div>
        </div>
        <div class="agent-testimonial fade-up fade-up-delay-2">
          <div class="at-quote">"Before RentGH, I was collecting rent in cash and sending it to landlords by MoMo — no records, no proof of anything. Now every transaction is logged and my landlords can see exactly what I've done. It's made me look a lot more professional."</div>
          <div class="at-person">
            <div class="at-avatar">KM</div>
            <div>
              <div class="at-name">Kweku Mensah</div>
              <div class="at-role">Real estate agent · East Legon, Accra · 12 units managed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── Pricing ── -->
<section class="pricing" id="pricing">
  <div class="container">
    <div class="fade-up">
      <div class="section-eyebrow">Pricing</div>
      <h2>Simple, honest pricing</h2>
      <p class="section-sub">No setup fees. No hidden charges. Cancel any time. Agents are always free.</p>
    </div>
    <div class="pricing-grid">
      <div class="pricing-card fade-up fade-up-delay-1">
        <div class="pricing-label">Starter</div>
        <div class="pricing-price">GH₵100<span>/month</span></div>
        <div class="pricing-desc">For landlords starting out with 1–3 units who want to go digital.</div>
        <div class="pricing-divider"></div>
        <div class="pricing-features">
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Up to 3 units</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>MoMo, card & bank collection</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Digital lease generation</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>1 agent free</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>WhatsApp reminders</div>
        </div>
        <a href="#" class="pricing-btn ghost">Get started</a>
      </div>

      <div class="pricing-card featured fade-up fade-up-delay-2">
        <div class="featured-badge">Most popular</div>
        <div class="pricing-label">Growth</div>
        <div class="pricing-price" style="color:var(--navy)">GH₵250<span>/month</span></div>
        <div class="pricing-desc" style="color:var(--text-mid)">For serious landlords managing multiple units across one or more properties.</div>
        <div class="pricing-divider" style="background:rgba(11,34,57,0.1)"></div>
        <div class="pricing-features">
          <div class="pricing-feature" style="color:var(--text)"><div class="pf-check" style="background:rgba(21,128,61,0.1)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#15803D" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Up to 15 units</div>
          <div class="pricing-feature" style="color:var(--text)"><div class="pf-check" style="background:rgba(21,128,61,0.1)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#15803D" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Everything in Starter</div>
          <div class="pricing-feature" style="color:var(--text)"><div class="pf-check" style="background:rgba(21,128,61,0.1)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#15803D" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>3 agents free</div>
          <div class="pricing-feature" style="color:var(--text)"><div class="pf-check" style="background:rgba(21,128,61,0.1)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#15803D" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Monthly PDF statement</div>
          <div class="pricing-feature" style="color:var(--text)"><div class="pf-check" style="background:rgba(21,128,61,0.1)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#15803D" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Commission tracking</div>
          <div class="pricing-feature" style="color:var(--text)"><div class="pf-check" style="background:rgba(21,128,61,0.1)"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#15803D" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>GRA tax report (coming soon)</div>
        </div>
        <a href="#" class="pricing-btn solid">Get started</a>
      </div>

      <div class="pricing-card fade-up fade-up-delay-3">
        <div class="pricing-label">Diaspora</div>
        <div class="pricing-price">$30<span>/month USD</span></div>
        <div class="pricing-desc">For Ghanaians managing property remotely from the UK, US, Canada, or elsewhere.</div>
        <div class="pricing-divider"></div>
        <div class="pricing-features">
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Up to 5 units</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Everything in Growth</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>GBP/USD FX reporting</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Caretaker sub-account</div>
          <div class="pricing-feature"><div class="pf-check"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#4ADE80" stroke-width="1.5"><path d="M2 5l2.5 2.5 3.5-4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>Monthly email report</div>
        </div>
        <a href="#" class="pricing-btn ghost">Get started</a>
      </div>
    </div>
  </div>
</section>

<!-- ── Compliance ── -->
<section class="compliance">
  <div class="container">
    <div class="compliance-inner">
      <div class="fade-up">
        <div class="section-eyebrow">Legal compliance</div>
        <h2>Built on Ghana's<br>rental laws</h2>
        <p>RentGH is the only platform designed specifically around Ghana's legal framework for residential rentals. Every lease, every payment record, every dispute trail is structured to hold up in front of the Rent Control Department.</p>
        <div class="compliance-badges">
          <div class="comp-badge"><div class="comp-badge-dot"></div>Rent Act 1963 (Act 220)</div>
          <div class="comp-badge"><div class="comp-badge-dot"></div>Electronic Transactions Act 2008</div>
          <div class="comp-badge"><div class="comp-badge-dot"></div>GRA compliant</div>
        </div>
      </div>
      <div class="compliance-laws fade-up fade-up-delay-2">
        <div class="law-card">
          <div class="law-title">Advance rent cap — 6 months maximum</div>
          <div class="law-desc">The Rent Act (Act 220) caps advance rent at 6 months. Every RentGH lease includes this notice, and the platform tracks advance payments to ensure compliance.</div>
        </div>
        <div class="law-card">
          <div class="law-title">Legally valid digital signatures</div>
          <div class="law-desc">Ghana's Electronic Transactions Act 2008 (Act 772) gives digital signatures the same legal weight as wet ink signatures. RentGH leases are fully enforceable.</div>
        </div>
        <div class="law-card">
          <div class="law-title">RCD-ready dispute records</div>
          <div class="law-desc">Payment logs, maintenance requests, and WhatsApp evidence from RentGH are structured to be admissible in Rent Control Department proceedings.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ── -->
<section class="cta-section">
  <div class="container">
    <div class="cta-inner fade-up">
      <div class="section-eyebrow" style="color:var(--gold)">Get started today</div>
      <h2>Your properties deserve<br>better than WhatsApp</h2>
      <p>Join Ghana's first dedicated property management platform. Set up your first property in under 10 minutes.</p>
      <div class="cta-buttons">
        <a href="#" class="btn-primary">
          Start free — no card needed
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#" class="btn-gold-outline">Talk to the team</a>
      </div>
    </div>
  </div>
</section>

<!-- ── Footer ── -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#" class="footer-logo">Rent<span>GH</span></a>
        <div class="footer-tagline">Ghana's property management platform. For landlords, agents, and diaspora property owners.</div>
      </div>
      <div>
        <div class="footer-col-title">Product</div>
        <a href="#" class="footer-link">How it works</a>
        <a href="#" class="footer-link">Features</a>
        <a href="#" class="footer-link">Pricing</a>
        <a href="#" class="footer-link">For agents</a>
        <a href="#" class="footer-link">Diaspora</a>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Blog</a>
        <a href="#" class="footer-link">Careers</a>
        <a href="#" class="footer-link">Contact</a>
      </div>
      <div>
        <div class="footer-col-title">Legal</div>
        <a href="#" class="footer-link">Privacy policy</a>
        <a href="#" class="footer-link">Terms of service</a>
        <a href="#" class="footer-link">Cookie policy</a>
        <a href="#" class="footer-link">Ghana Rent Act</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 RentGH Ltd. Registered in Ghana. All rights reserved.</div>
      <div class="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
`;

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const fadeElements = document.querySelectorAll<HTMLElement>(".fade-up");
    fadeElements.forEach((element) => observer.observe(element));

    const setFeature = (id: string) => {
      const featureIds = ["payments", "leases", "agents", "maintenance"];

      document.querySelectorAll<HTMLElement>(".feature-tab").forEach((tab, index) => {
        tab.classList.toggle("active", featureIds[index] === id);
      });

      document.querySelectorAll<HTMLElement>(".feature-panel").forEach((panel) => {
        panel.classList.remove("active");
      });

      const activePanel = document.getElementById(`fp-${id}`);
      if (activePanel) {
        activePanel.classList.add("active");
      }
    };

    window.setFeature = setFeature;

    const onScroll = () => {
      const nav = document.querySelector("nav") as HTMLElement | null;
      if (!nav) {
        return;
      }

      nav.style.borderBottomColor =
        window.scrollY > 20 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);

      if (window.setFeature) {
        delete window.setFeature;
      }
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: landingMarkup }} />;
}
