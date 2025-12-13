export default function Page() {
return (
<main className="min-h-screen bg-white text-slate-900">
{/* Top Nav */}
<header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
<div className="flex items-center gap-3">
{/* Placeholder logo mark */}
<div className="h-9 w-9 rounded-xl border bg-slate-50" />
<div className="leading-tight">
<div className="text-sm font-semibold">TransVida Health</div>
<div className="text-xs text-slate-500">Transport + SaaS</div>
</div>
</div>

<nav className="hidden items-center gap-6 text-sm md:flex">
<a className="hover:underline" href="#platform">
Platform
</a>
<a className="hover:underline" href="#solutions">
Solutions
</a>
<a className="hover:underline" href="#pricing">
Pricing
</a>
<a className="hover:underline" href="#resources">
Resources
</a>
</nav>

<div className="flex items-center gap-2">
<a
className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
href="#pricing"
>
Get pricing
</a>
<a
className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
href="#demo"
>
Book a demo
</a>
</div>
</div>
</header>

{/* Hero */}
<section className="mx-auto max-w-6xl px-4 py-16">
<div className="grid gap-10 md:grid-cols-2 md:items-center">
<div>
<p className="mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold text-slate-700">
Dialysis Transport Intelligence • Built as SaaS • Proven in ops
</p>

<h1 className="text-4xl font-semibold leading-tight md:text-5xl">
A clinic-first platform for dialysis transportation, dispatch, and compliance.
</h1>

<p className="mt-5 text-lg text-slate-600">
TransVida Health connects clinics and transport operations in real time—reducing missed
treatments, improving ETAs, and creating cleaner documentation for billing workflows.
</p>

<div className="mt-7 flex flex-wrap gap-3">
<a
className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
href="#demo"
>
Book a demo
</a>
<a
className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
href="#platform"
>
See the platform
</a>
</div>

<div className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-3">
<StatCard title="Clinic portal" desc="Requests, readiness, VIP overrides" />
<StatCard title="Dispatch + FleetOps" desc="Routing, driver workflows, GPS" />
<StatCard title="Compliance exports" desc="Structured trip documentation" />
</div>
</div>

<div className="rounded-2xl border p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold">Command Center Preview</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
Placeholder
</span>
</div>
<div className="mt-4 h-72 w-full rounded-xl border bg-slate-50" />
<p className="mt-4 text-sm text-slate-600">
Replace this with a dashboard screenshot or a clean UI mock later.
</p>
</div>
</div>
</section>

{/* Platform */}
<section id="platform" className="mx-auto max-w-6xl px-4 py-12">
<div className="rounded-2xl border p-8">
<h2 className="text-2xl font-semibold">Platform</h2>
<p className="mt-3 max-w-3xl text-slate-600">
Built for dialysis workflows from day one: clinic scheduling, dispatch execution, trip status,
exception handling, and documentation—without the chaos of phone calls.
</p>

<div className="mt-6 grid gap-4 md:grid-cols-3">
<Feature title="Clinic-first visibility" desc="Real-time status, ETAs, exceptions, and confirmations." />
<Feature title="Operational control" desc="Dispatcher command center: shifts, capacity, reroutes, cancellations." />
<Feature title="Compliance-first data" desc="Capture trip details consistently for audit-ready exports." />
</div>

<div className="mt-8 grid gap-4 md:grid-cols-2">
<InfoCard
title="SaaS (Software)"
desc="Licensed to clinics and operators for scheduling, dispatch, documentation, and reporting."
/>
<InfoCard
title="Transportation (Operations)"
desc="We also operate transport—so the platform is validated in the field, not built in a vacuum."
/>
</div>
</div>
</section>

{/* Solutions */}
<section id="solutions" className="mx-auto max-w-6xl px-4 py-12">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold">Solutions</h2>
<p className="mt-2 text-slate-600">
Modular capabilities that work together as one system.
</p>
</div>
</div>

<div className="mt-8 grid gap-4 md:grid-cols-3">
<SolutionCard
title="Clinic Portal"
desc="Request rides, confirm readiness, track ETAs, manage VIPs, and handle exceptions."
bullets={["Ride requests + approvals", "Readiness confirmations", "ETA + exception alerts", "VIP tier override controls"]}
/>
<SolutionCard
title="Dispatch & FleetOps"
desc="Central dispatch, shift planning, driver workflows, GPS tracking, reroutes, cancellations."
bullets={["Scheduling command center", "Driver app workflows", "GPS tracking + rerouting", "Capacity/shift planning"]}
/>
<SolutionCard
title="Billing & Compliance"
desc="Trip documentation and structured exports designed for reimbursement workflows."
bullets={["Trip-level audit trail", "Consistent documentation", "Export-ready datasets", "Designed for high-denial environments"]}
/>
</div>
</section>

{/* Pricing */}
<section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
<h2 className="text-2xl font-semibold">Pricing</h2>
<p className="mt-2 max-w-3xl text-slate-600">
Pricing scales with ride volume and modules. Start simple and expand as you grow.
</p>

<div className="mt-6 grid gap-4 md:grid-cols-3">
<PriceCard
name="Starter"
desc="Single clinic or small operator."
items={["Core scheduling", "Basic clinic portal", "Standard support"]}
/>
<PriceCard
name="Growth"
desc="Multi-van operations + clinic networks."
items={["Dispatch + FleetOps", "Clinic alerts + exceptions", "Compliance exports"]}
highlight
/>
<PriceCard
name="Enterprise"
desc="Health systems + large operations."
items={["Custom integrations", "Advanced reporting", "Dedicated onboarding"]}
/>
</div>

{/* Demo CTA */}
<div id="demo" className="mt-10 rounded-2xl border p-8">
<h3 className="text-xl font-semibold">Book a demo</h3>
<p className="mt-2 text-slate-600">
Once your Calendly is ready, we’ll link it here. For now this is a simple lead form.
</p>

<form className="mt-6 grid gap-3 md:grid-cols-2">
<input className="rounded-xl border px-4 py-3" placeholder="Full name" />
<input className="rounded-xl border px-4 py-3" placeholder="Email" />
<input className="rounded-xl border px-4 py-3" placeholder="Clinic / Operator name" />
<input className="rounded-xl border px-4 py-3" placeholder="Monthly ride volume (estimate)" />
<div className="md:col-span-2">
<textarea
className="min-h-28 w-full rounded-xl border px-4 py-3"
placeholder="What are you trying to solve?"
/>
</div>
<div className="md:col-span-2">
<button
type="button"
className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
>
Request demo
</button>
</div>
</form>
</div>
</section>

{/* Resources */}
<section id="resources" className="mx-auto max-w-6xl px-4 py-12">
<h2 className="text-2xl font-semibold">Resources</h2>
<p className="mt-2 text-slate-600">
Operational insights, compliance checklists, and clinic best practices (add blog later).
</p>

<div className="mt-6 grid gap-4 md:grid-cols-3">
<ResourceCard title="Dialysis transport compliance checklist" />
<ResourceCard title="Reducing missed treatments: operations playbook" />
<ResourceCard title="Common denials + how to prevent them" />
</div>
</section>

{/* Footer */}
<footer className="border-t">
<div className="mx-auto max-w-6xl px-4 py-10">
<div className="grid gap-6 md:grid-cols-2">
<div>
<div className="text-lg font-semibold">TransVida Health</div>
<p className="mt-2 max-w-md text-sm text-slate-600">
Dialysis Transport Intelligence — built as SaaS, proven in the field.
</p>
</div>
<div className="flex gap-6 text-sm md:justify-end">
<a className="hover:underline" href="#platform">
Platform
</a>
<a className="hover:underline" href="#solutions">
Solutions
</a>
<a className="hover:underline" href="#pricing">
Pricing
</a>
<a className="hover:underline" href="#demo">
Book a demo
</a>
</div>
</div>

<p className="mt-8 text-xs text-slate-500">
© {new Date().getFullYear()} TransVida Health. All rights reserved.
</p>
</div>
</footer>
</main>
);
}

function StatCard({ title, desc }: { title: string; desc: string }) {
return (
<div className="rounded-xl border p-4">
<div className="text-sm font-semibold">{title}</div>
<div className="mt-1 text-sm text-slate-600">{desc}</div>
</div>
);
}

function Feature({ title, desc }: { title: string; desc: string }) {
return (
<div className="rounded-2xl border p-6">
<div className="font-semibold">{title}</div>
<div className="mt-2 text-sm text-slate-600">{desc}</div>
</div>
);
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
return (
<div className="rounded-2xl border p-6">
<h3 className="font-semibold">{title}</h3>
<p className="mt-2 text-slate-600">{desc}</p>
</div>
);
}

function SolutionCard({
title,
desc,
bullets,
}: {
title: string;
desc: string;
bullets: string[];
}) {
return (
<div className="rounded-2xl border p-6">
<h3 className="text-lg font-semibold">{title}</h3>
<p className="mt-2 text-slate-600">{desc}</p>
<ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
{bullets.map((b) => (
<li key={b}>{b}</li>
))}
</ul>
</div>
);
}

function PriceCard({
name,
desc,
items,
highlight,
}: {
name: string;
desc: string;
items: string[];
highlight?: boolean;
}) {
return (
<div className={`rounded-2xl border p-6 ${highlight ? "ring-1 ring-slate-900" : ""}`}>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">{name}</h3>
{highlight ? (
<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
Most Popular
</span>
) : null}
</div>
<p className="mt-2 text-slate-600">{desc}</p>
<ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
{items.map((i) => (
<li key={i}>{i}</li>
))}
</ul>
<a
className="mt-6 inline-flex w-full justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
href="#demo"
>
Book a demo
</a>
</div>
);
}

function ResourceCard({ title }: { title: string }) {
return (
<div className="rounded-2xl border p-6">
<div className="text-sm font-semibold">{title}</div>
<p className="mt-2 text-sm text-slate-600">
Coming soon. We’ll publish operational guides and compliance checklists here.
</p>
<a className="mt-4 inline-flex text-sm font-semibold hover:underline" href="#demo">
Get updates →
</a>
</div>
);
}
