export default function Home() {
return (
<main id="top" className="tv-page">
{/* HERO */}
<section className="tv-hero">
<div className="tv-hero-inner">
<div className="tv-hero-left">
<div className="tv-pill">
Dialysis Transport Intelligence • Built as SaaS • Proven in ops
</div>

<h1 className="tv-h1">
A clinic-first platform for dialysis transportation, dispatch, and
compliance.
</h1>

<p className="tv-sub">
TransVida Health connects clinics and transport operations in real
time — reducing missed treatments, improving ETAs, and creating
cleaner documentation for billing workflows.
</p>

<div className="tv-actions">
<a className="tv-btn tv-btn-primary" href="#demo">
Book a demo
</a>
<a className="tv-btn tv-btn-ghost" href="#platform">
See the platform
</a>
</div>

<div className="tv-mini-cards">
<div className="tv-mini-card">
<div className="tv-mini-title">Clinic portal</div>
<div className="tv-mini-sub">
Requests, readiness, VIP overrides
</div>
</div>

<div className="tv-mini-card">
<div className="tv-mini-title">Dispatch + FleetOps</div>
<div className="tv-mini-sub">Routing, driver workflows, GPS</div>
</div>

<div className="tv-mini-card">
<div className="tv-mini-title">Compliance exports</div>
<div className="tv-mini-sub">Structured trip documentation</div>
</div>
</div>
</div>

<div className="tv-hero-right">
<div className="tv-mock">
<div className="tv-mock-top">
<div className="tv-mock-title">Command Center Preview</div>
<div className="tv-mock-chip">Placeholder</div>
</div>

<div className="tv-mock-screen" />

<div className="tv-mock-note">
Replace this with a dashboard screenshot or a clean UI mock
later.
</div>
</div>
</div>
</div>
</section>

{/* PLATFORM */}
<section id="platform" className="tv-section">
<div className="tv-section-head">
<h2 className="tv-h2">Platform</h2>
<p className="tv-lead">
Built for dialysis workflows from day one: clinic scheduling,
dispatch execution, trip status, exception handling, and
documentation — without the chaos of phone calls.
</p>
</div>

<div className="tv-grid-3">
<div className="tv-card">
<div className="tv-card-title">Clinic-first visibility</div>
<div className="tv-card-sub">
Real-time status, ETAs, exceptions, and confirmations.
</div>
</div>

<div className="tv-card">
<div className="tv-card-title">Operational control</div>
<div className="tv-card-sub">
Dispatcher command center: shifts, capacity, reroutes,
cancellations.
</div>
</div>

<div className="tv-card">
<div className="tv-card-title">Compliance-first data</div>
<div className="tv-card-sub">
Capture trip details consistently for audit-ready exports.
</div>
</div>
</div>

<div className="tv-grid-2 tv-mt">
<div className="tv-card">
<div className="tv-card-title">SaaS (Software)</div>
<div className="tv-card-sub">
Licensed to clinics and operators for scheduling, dispatch,
documentation, and reporting.
</div>
</div>

<div className="tv-card">
<div className="tv-card-title">Transportation (Operations)</div>
<div className="tv-card-sub">
We also operate transport — so the platform is validated in the
field, not built in a vacuum.
</div>
</div>
</div>
</section>

{/* SOLUTIONS */}
<section id="solutions" className="tv-section">
<div className="tv-section-head">
<h2 className="tv-h2">Solutions</h2>
<p className="tv-lead">Modular capabilities that work together as one system.</p>
</div>

<div className="tv-grid-3">
<div className="tv-card">
<div className="tv-card-title">Clinic Portal</div>
<div className="tv-card-sub">
Request rides, confirm readiness, track ETAs, manage VIPs, and
handle exceptions.
</div>
<ul className="tv-list">
<li>Ride requests + approvals</li>
<li>Readiness confirmations</li>
<li>ETA + exception alerts</li>
<li>VIP tier override controls</li>
</ul>
</div>

<div className="tv-card">
<div className="tv-card-title">Dispatch & FleetOps</div>
<div className="tv-card-sub">
Central dispatch: shift planning, driver workflows, GPS tracking,
routes, cancellations.
</div>
<ul className="tv-list">
<li>Scheduling command center</li>
<li>Driver app workflows</li>
<li>GPS tracking + rerouting</li>
<li>Capacity/shift planning</li>
</ul>
</div>

<div className="tv-card">
<div className="tv-card-title">Billing & Compliance</div>
<div className="tv-card-sub">
Trip documentation and structured exports designed for reimbursement workflows.
</div>
<ul className="tv-list">
<li>Trip-level audit trail</li>
<li>Consistent documentation</li>
<li>Export-ready datasets</li>
<li>Designed for high-denial environments</li>
</ul>
</div>
</div>
</section>

{/* PRICING */}
<section id="pricing" className="tv-section">
<div className="tv-section-head">
<h2 className="tv-h2">Pricing</h2>
<p className="tv-lead">
Pricing that scales with routes. Start with a clinic + dispatch pilot,
then expand across regions and vehicles.
</p>
</div>

<div className="tv-grid-4">
<div className="tv-price tv-price-bronze">
<div className="tv-price-top">
<div className="tv-price-name">Bronze</div>
<div className="tv-price-badge">$</div>
</div>
<ul className="tv-list">
<li><b>Basic wheelchair trips</b></li>
<li>Normal routing</li>
<li>No auto-wait billing</li>
<li>No upgrades</li>
</ul>
<a className="tv-btn tv-btn-primary tv-btn-wide" href="#demo">
Book a demo
</a>
</div>

<div className="tv-price tv-price-silver">
<div className="tv-price-top">
<div className="tv-price-name">Silver= Same service + visibility + optional wait</div>
<div className="tv-price-badge">$$</div>
</div>
<ul className="tv-list">
<li><b>GPS tracking visibility</b></li>
<li>Normal routing priority</li>
<li>Optional waiting period</li>
<li> No preiun guarantees</li>
</ul>
<a className="tv-btn tv-btn-primary tv-btn-wide" href="#demo">
Book a demo
</a>
</div>

<div className="tv-price tv-price-gold">
<div className="tv-price-top">
<div className="tv-price-name">Gold= VIP movement + Billing advantage</div>
<div className="tv-price-badge">$$$</div>
</div>
<ul className="tv-list">
<li><b>Guaranteed pickup window</b></li>
<li>Auto wait-time billing</li>
<li>High reliability performance</li>
<li>Priority routing</li>
</ul>
<a className="tv-btn tv-btn-primary tv-btn-wide" href="#demo">
Book a demo
</a>
</div>

<div className="tv-price tv-price-platinum">
<div className="tv-price-top">
<div className="tv-price-name">Platinum= MEDICAL SAFETY TIER</div>
<div className="tv-price-badge">$$$$</div>
</div>
<ul className="tv-list">
<li><b>Mandatory 2-person assist when required</b></li>
<li>Bariatric levels</li>
<li>Physician order enforcement</li>
<li>Auto wait billing</li>
<li>Highest routing priority</li>
<li>Same-Day Platinum upgrade button</li>
</ul>
<a className="tv-btn tv-btn-primary tv-btn-wide" href="#demo">
Book a demo
</a>
</div>
</div>
</section>

{/* DEMO */}
<section id="demo" className="tv-section">
<div className="tv-section-head">
<h2 className="tv-h2">Book a demo</h2>
<p className="tv-lead">
Once your Calendly is ready, we’ll link it here. For now this is a simple lead form.
</p>
</div>

<div className="tv-form">
<div className="tv-form-grid">
<input className="tv-input" placeholder="Full name" />
<input className="tv-input" placeholder="Email" />
<input className="tv-input" placeholder="Clinic / Operator name" />
<input className="tv-input" placeholder="Monthly ride volume (estimate)" />
</div>
<textarea className="tv-textarea" placeholder="What are you trying to solve?" />
<button className="tv-btn tv-btn-primary tv-btn-wide">Request demo</button>
</div>
</section>

{/* RESOURCES */}
<section id="resources" className="tv-section">
<div className="tv-section-head">
<h2 className="tv-h2">Resources</h2>
<p className="tv-lead">
Operational insights, compliance checklists, and clinic best practices (add blog later).
</p>
</div>

<div className="tv-grid-3">
<div className="tv-card">
<div className="tv-card-title">Dialysis transport compliance checklist</div>
<div className="tv-card-sub">
Coming soon. We’ll publish operational guides and compliance checklists here.
</div>
<div className="tv-linkish">Get updates →</div>
</div>

<div className="tv-card">
<div className="tv-card-title">Reducing missed treatments: operations playbook</div>
<div className="tv-card-sub">
Coming soon. We’ll publish operational guides and compliance checklists here.
</div>
<div className="tv-linkish">Get updates →</div>
</div>

<div className="tv-card">
<div className="tv-card-title">Common denials + how to prevent them</div>
<div className="tv-card-sub">
Coming soon. We’ll publish operational guides and compliance checklists here.
</div>
<div className="tv-linkish">Get updates →</div>
</div>
</div>

<footer className="tv-footer">
<div className="tv-footer-left">
<div className="tv-footer-title">TransVida Health</div>
<div className="tv-footer-sub">
Dialysis Transport Intelligence — built as SaaS, proven in the field.
</div>
<div className="tv-footer-copy">© {new Date().getFullYear()} TransVida Health. All rights reserved.</div>
</div>

<div className="tv-footer-links">
<a href="#platform">Platform</a>
<a href="#solutions">Solutions</a>
<a href="#pricing">Pricing</a>
<a href="#demo">Book a demo</a>
</div>
</footer>
</section>
</main>
);
}
