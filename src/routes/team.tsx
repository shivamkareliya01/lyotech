import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Target, FlaskConical, Handshake } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Lyotech Pharma" },
      { name: "description", content: "Meet the leadership of Lyotech Pharma — passionate experts dedicated to delivering the best lyophilizer solutions." },
      { property: "og:title", content: "Our Team — Lyotech Pharma" },
      { property: "og:description", content: "Meet the leadership team of Lyotech Pharma." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const TEAM = [
  {
    name: "Neelamber Pol",
    title: "Director — Marketing and Sales",
    photo: "https://lyotechpharma.com/amber-new.jpeg",
    linkedin: "https://www.linkedin.com/in/neelamberpol/",
  },
  {
    name: "Arun Parmar",
    title: "Director — Technicals",
    photo: "https://lyotechpharma.com/arun-finalist.jpeg",
    linkedin: "https://www.linkedin.com/in/arun-parmar-2b003252/",
  },
];

const VALUES = [
  { icon: Target, label: "Customer First" },
  { icon: FlaskConical, label: "Technical Excellence" },
  { icon: Handshake, label: "Long-term Partnerships" },
];

function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients."
        crumb="Team"
      />

      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-secondary">{m.title}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#0077B5] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="container-page py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-5 mt-10 max-w-3xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.label} className="text-center rounded-xl bg-card border border-border p-6">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="size-6" />
                </div>
                <div className="mt-3 font-semibold text-foreground">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
