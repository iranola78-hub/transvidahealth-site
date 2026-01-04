import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
title: "TransVida Health",
description: "Dialysis Transport Intelligence — Transport + SaaS",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>
{/* HEADER (NOT STICKY) */}
<header className="tv-header">
<div className="tv-header-inner">
<Link href="#top" className="tv-brand" aria-label="TransVida Health">
<Image
src="/logo.png"
alt="TransVida Health"
width={360}
height={110}
priority
className="tv-logo"
/>
<div className="tv-brand-text">
<div className="tv-brand-title">TransVida Health</div>
<div className="tv-brand-sub">Transport + SaaS</div>
</div>
</Link>

<nav className="tv-nav" aria-label="Primary">
<a className="tv-navlink" href="#platform">Platform</a>
<a className="tv-navlink" href="#solutions">Solutions</a>
<a className="tv-navlink" href="#pricing">Pricing</a>
<a className="tv-navlink" href="#resources">Resources</a>
</nav>

<div className="tv-header-cta">
<a className="tv-btn tv-btn-ghost" href="#pricing">Get pricing</a>
<a className="tv-btn tv-btn-primary" href="#demo">Book a demo</a>
</div>
</div>
</header>

{children}
</body>
</html>
);
}
