import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Factory,
  Wrench,
  Monitor,
  Recycle,
  Target,
  RefreshCw,
  ShieldCheck,
  FlaskConical,
  Wallet,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Snowflake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/site/quote-dialog";
import { GROUPS } from "@/lib/lyo-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lyotech Pharma — Lyophilizer & Freeze Dryer Supplier India" },
      { name: "description", content: "India's leading supplier of lyophilizers. Custom builds, AMC, software upgrades, and refurbished freeze dryers from 0.2 to 42 m²." },
      { property: "og:title", content: "Lyotech Pharma — Lyophilizer & Freeze Dryer Supplier India" },
      { property: "og:description", content: "India's leading supplier of lyophilizers. Custom builds, AMC, and refurbished freeze dryers." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PRODUCT_GROUPS = [
  {
    key: "lab" as const,
    models: "LYO 0.2, LYO 0.6, LYO 1",
    shell: "0.24 – 1.08 m²",
    vials: "Up to 3,500",
  },
  {
    key: "small" as const,
    models: "LYO 2, LYO 3, LYO 5",
    shell: "2.16 – 5.4 m²",
    vials: "Up to 17,500",
  },
  {
    key: "mid" as const,
    models: "LYO 7.5, LYO 10, LYO 15",
    shell: "7.5 – 15.84 m²",
    vials: "Up to 57,000",
  },
  {
    key: "large" as const,
    models: "LYO 20 to LYO 40",
    shell: "19.84 – 42 m²",
    vials: "Up to 152,000",
  },
];

const SERVICES = [
  {
    icon: Factory,
    title: "Lyophilizer Manufacturing",
    desc: "End-to-end engineering, FAT, installation, and training.",
  },
  {
    icon: Wrench,
    title: "Custom Modifications & Process Refinement",
    desc: "Tailored component replacements, design modifications, process optimization.",
  },
  {
    icon: Monitor,
    title: "Support Services (Hardware & Software)",
    desc: "AMC, daily service rates, SCADA upgrades (Windows 7/10 Pro), lifetime support.",
  },
  {
    icon: Recycle,
    title: "Refurbished Lyophilizers",
    desc: "Branded refurbished units at reduced costs with service warranty.",
  },
];

const WHY = [
  { icon: Target, title: "Precision Engineering", desc: "Design qualifications met for every customer" },
  { icon: RefreshCw, title: "End-to-End Service", desc: "From manufacturing to post-sales support" },
  { icon: ShieldCheck, title: "Trusted Support", desc: "AMC, software upgrades, lifetime support" },
  { icon: FlaskConical, title: "Custom Solutions", desc: "Modified to your technical specifications" },
  { icon: Wallet, title: "Refurbished Options", desc: "Reduce CapEx without compromising quality" },
  { icon: MapPin, title: "Pan-India Presence", desc: "Chandigarh, Hyderabad, Pune, Chennai" },
];

function Home() {
  const [quote, setQuote] = useState(false);

  return (
    <>
      {/* HERO */}
      <section 
        className="relative overflow-hidden bg-no-repeat bg-center bg-cover bg-background py-16 md:py-24"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="container-page relative z-10">
          <div className="max-w-2xl animate-fade-in-up bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-2xl border border-white/20 shadow-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-xs">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              India's Leading Lyophilizer Supplier
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Lyophilizer and <span className="text-primary">Freeze Dryer</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/90 font-semibold">
              We are a leading supplier of lyophilizers in India.
            </p>
            <p className="mt-2 text-base text-foreground/85 font-medium">
              We cater to all customer needs, from custom builds to after-sales support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-md shadow-primary/10 cursor-pointer"
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 backdrop-blur-xs cursor-pointer">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-border/40 backdrop-blur-xs"><Factory className="size-4 text-primary" />Custom Builds</span>
              <span className="inline-flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-border/40 backdrop-blur-xs"><Wrench className="size-4 text-primary" />After Sales Support</span>
              <span className="inline-flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-border/40 backdrop-blur-xs"><MapPin className="size-4 text-primary" />Made for India</span>
              <span className="inline-flex items-center gap-1.5 bg-white/60 px-2.5 py-1 rounded-md border border-border/40 backdrop-blur-xs"><CheckCircle2 className="size-4 text-primary" />FAT Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface-alt border-y border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {[
            ["14+", "Models Available"],
            ["0.2 to 42", "Shell Area Range (m²)"],
            ["-75°C", "Min Condenser Temp"],
            ["4", "Cities Served Across India"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{n}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container-page py-20">
        <SectionHeading
          title="Our Lyophilizer Range"
          subtitle="From compact lab units to large-scale industrial systems"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {PRODUCT_GROUPS.map((g) => {
            const meta = GROUPS[g.key];
            return (
              <Link
                key={g.key}
                to="/products"
                className="group block rounded-xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Snowflake className="size-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-secondary font-semibold">
                  {meta.label}
                </div>
                <div className="mt-1 font-mono text-sm font-semibold text-foreground">
                  {g.models}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <li><span className="text-foreground font-medium">Shell:</span> {g.shell}</li>
                  <li><span className="text-foreground font-medium">Vials:</span> {g.vials}</li>
                  <li><span className="text-foreground font-medium">Use:</span> {meta.use}</li>
                </ul>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  View Specs <ArrowRight className="size-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface-alt">
        <div className="container-page py-20">
          <SectionHeading
            title="All Lyophilizer Solutions Under One Roof"
            subtitle="Our thoughtfully curated machines are engineered in limited runs"
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-page py-20">
        <SectionHeading title="Why Industry Leaders Choose Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-card p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-3">
                <w.icon className="size-5" />
              </div>
              <h3 className="font-semibold text-foreground">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITIES */}
      <section className="bg-surface-alt">
        <div className="container-page py-20">
          <SectionHeading title="Serving Major Cities Across India" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Chandigarh", "Hyderabad", "Pune", "Chennai"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
              >
                <MapPin className="size-4 text-primary" />
                {c}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm">
              <Factory className="size-4" />
              Manufacturing Plant: Ahmedabad, Gujarat
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to upgrade your lyophilization process?
          </h2>
          <p className="mt-3 text-white/85">Talk to our technical experts today.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => setQuote(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get a Quote
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <QuoteDialog open={quote} onOpenChange={setQuote} />
    </>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function LyophilizerSVG() {
  return (
    <svg viewBox="0 0 400 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lyophilizer schematic">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4F8A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1B4F8A" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cfd9e3" />
          <stop offset="100%" stopColor="#8a9ab0" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="360" height="380" rx="20" fill="url(#lg)" />
      {/* Chamber */}
      <rect x="60" y="70" width="200" height="240" rx="10" fill="url(#steel)" stroke="#1B4F8A" strokeWidth="2" />
      {/* Shelves */}
      {[100, 140, 180, 220, 260].map((y) => (
        <rect key={y} x="76" y={y} width="168" height="6" rx="2" fill="#1B4F8A" opacity="0.7" />
      ))}
      {/* Vials */}
      {[110, 150, 190, 230].map((y) => (
        [90, 110, 130, 150, 170, 190, 210, 230].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y - 4} r="4" fill="#0D9488" opacity="0.85" />
        ))
      ))}
      {/* Control panel */}
      <rect x="285" y="70" width="75" height="120" rx="6" fill="#1B4F8A" />
      <rect x="295" y="84" width="55" height="32" rx="3" fill="#0D9488" />
      <text x="322" y="105" textAnchor="middle" fill="white" fontSize="11" fontFamily="monospace">-75°C</text>
      {[130, 145, 160, 175].map((y) => (
        <circle key={y} cx="300" cy={y} r="3" fill="#cfd9e3" />
      ))}
      {[130, 145, 160, 175].map((y) => (
        <rect key={y} x="312" y={y - 2} width="40" height="4" rx="2" fill="#cfd9e3" />
      ))}
      {/* Condenser */}
      <rect x="285" y="210" width="75" height="100" rx="6" fill="url(#steel)" stroke="#1B4F8A" strokeWidth="2" />
      <text x="322" y="262" textAnchor="middle" fill="#1B4F8A" fontSize="10" fontWeight="700">CONDENSER</text>
      {/* Base */}
      <rect x="40" y="310" width="320" height="30" rx="6" fill="#1B4F8A" />
      <rect x="70" y="340" width="20" height="40" fill="#0F3460" />
      <rect x="310" y="340" width="20" height="40" fill="#0F3460" />
      {/* Label */}
      <text x="160" y="58" textAnchor="middle" fill="#1B4F8A" fontSize="11" fontWeight="700" fontFamily="monospace">LYOTECH FREEZE DRYER</text>
    </svg>
  );
}
