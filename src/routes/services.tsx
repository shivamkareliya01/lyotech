import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, Wrench, Monitor, Recycle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lyotech Pharma Lyophilizer Solutions" },
      { name: "description", content: "Comprehensive lyophilizer services: manufacturing, custom modifications, AMC and SCADA software upgrades, and refurbished units." },
      { property: "og:title", content: "Lyotech Pharma — Services" },
      { property: "og:description", content: "Manufacturing, modifications, AMC, SCADA upgrades, and refurbished lyophilizers." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Factory,
    title: "Lyophilizer Manufacturing",
    body:
      "We meticulously engineer Lyophilizer systems to meet the design qualifications for customers. We cater to guiding customers through manufacturing, industry-standard trials, and FAT. Our services extend to seamless installation and comprehensive training, including regular on-site sessions for peak performance and minimal downtime.",
    steps: ["Design Qualification", "Manufacturing", "Trials & FAT", "Installation", "Training & Handover"],
  },
  {
    icon: Wrench,
    title: "Custom Modifications and Process Refinement",
    body:
      "We provide services for custom modifications to machine design or replacement of various components. Our solutions are tailored to technical suitability and stability. Process development focuses on optimizing product and process duration within the system, allowing for reduced processing times and achieving optimal output.",
    bullets: [
      "Component-level replacements",
      "Machine design modifications",
      "Process duration optimization",
      "Stability-focused solutions",
    ],
  },
  {
    icon: Monitor,
    title: "Support Services (Hardware and Software)",
    body:
      "We provide services to customers with Lyophilizers from various suppliers/manufacturers, offering options such as AMC or daily chargeable rates. Furthermore, we offer software support including SCADA upgrades from older versions to the latest ones compatible with Windows 7 or Windows 10 Pro, along with lifetime support.",
    bullets: [
      "AMC contracts available",
      "Daily chargeable service rates",
      "SCADA software upgrades",
      "Windows 7 & Windows 10 Pro compatible",
      "Lifetime software support",
      "Multi-brand machine servicing",
    ],
  },
  {
    icon: Recycle,
    title: "Refurbished Lyophilizers",
    body:
      "We offer refurbished, branded Lyophilizers at substantially reduced costs, accompanied by service warranty support. This option enables customers to reduce risks and capital expenditure while still receiving comprehensive support.",
    bullets: [
      "Branded refurbished units",
      "Substantially reduced costs",
      "Service warranty included",
      "Reduce CapEx without quality compromise",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        title="All Lyophilizer Solutions Under One Roof"
        subtitle="Comprehensive support from manufacturing to lifetime maintenance"
        crumb="Services"
      />

      <div className="container-page py-12 space-y-16">
        {SERVICES.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={s.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/3] rounded-2xl bg-surface-alt border border-border flex items-center justify-center">
                <div className="inline-flex h-28 w-28 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <s.icon className="size-14" />
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-secondary mb-2">
                  Service {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>

                {s.steps && (
                  <ol className="mt-6 grid sm:grid-cols-2 gap-2">
                    {s.steps.map((step, idx) => (
                      <li
                        key={step}
                        className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 text-sm"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold font-mono">
                          {idx + 1}
                        </span>
                        <span className="font-medium text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {s.bullets && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-foreground">
                        <CheckCircle2 className="size-4 text-success mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Need a tailored solution?</h2>
          <p className="mt-2 text-white/85">Every business is different. Contact us for a custom quote.</p>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Contact Our Technical Team <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
