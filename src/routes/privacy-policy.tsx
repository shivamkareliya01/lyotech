import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lyotech Pharma" },
      { name: "description", content: "Privacy Policy for Lyotech Pharma Pvt. Ltd." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" crumb="Privacy Policy" />
      <section className="container-page py-14 prose prose-slate max-w-3xl">
        <p className="text-muted-foreground">
          Lyotech Pharma Pvt. Ltd. respects your privacy. This page explains how
          we handle information collected through our website.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">Information We Collect</h2>
        <p className="text-muted-foreground">
          We collect information you voluntarily provide via our contact forms
          (name, company, email, phone, country, and message) for the sole purpose
          of responding to your enquiry.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">How We Use It</h2>
        <p className="text-muted-foreground">
          Submitted information is used only to communicate with you about our
          lyophilizer products and services. We do not sell or share your data
          with third parties.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-3 text-foreground">Contact</h2>
        <p className="text-muted-foreground">
          For any privacy-related questions, contact{" "}
          <a href="mailto:neelamber@lyotechpharma.com" className="text-primary underline">
            neelamber@lyotechpharma.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
