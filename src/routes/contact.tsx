import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Factory } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/site/page-header";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lyotech Pharma — Lyophilizer Inquiries India" },
      { name: "description", content: "Contact Lyotech Pharma in Ahmedabad, Gujarat. Serving Chandigarh, Hyderabad, Pune, Chennai. Phone +91 9737632241." },
      { property: "og:title", content: "Contact Lyotech Pharma" },
      { property: "og:description", content: "Get in touch with our team for lyophilizer enquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const COUNTRIES = ["IN", "US", "CH", "N", "GB", "KR", "JP", "EU"];

function ContactPage() {
  const [country, setCountry] = useState("IN");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) {
      toast.error("Please agree to the privacy policy.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setAgree(false);
      toast.success("Thank you! We'll get back to you soon.");
    }, 700);
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Our services are currently offered in major cities across India."
        crumb="Contact"
      />

      <section className="container-page py-14">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>

            <InfoRow icon={MapPin} title="Address">
              Plot no 408, GIDC, Dholka – Kheda Road,<br />
              Dholka, Rampur, Ahmedabad, Gujarat, 382225
            </InfoRow>
            <InfoRow icon={Phone} title="Telephone">
              <a className="hover:text-primary block" href="tel:+919737632241">+91 9737632241</a>
              <a className="hover:text-primary block" href="tel:+919926905544">+91 9926905544</a>
            </InfoRow>
            <InfoRow icon={Mail} title="Email">
              <a className="hover:text-primary" href="mailto:neelamber@lyotechpharma.com">
                neelamber@lyotechpharma.com
              </a>
            </InfoRow>
            <InfoRow icon={Linkedin} title="LinkedIn">
              <a className="hover:text-primary" href="https://www.linkedin.com/in/neelamberpol/" target="_blank" rel="noreferrer">
                linkedin.com/in/neelamberpol
              </a>
            </InfoRow>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">Cities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {["Chandigarh", "Hyderabad", "Pune", "Chennai"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-sm">
                    <MapPin className="size-3.5 text-primary" />
                    {c}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm">
                  <Factory className="size-3.5" />
                  Plant: Ahmedabad, Gujarat
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="firstName" label="First Name" required />
                <Field id="lastName" label="Last Name" required />
              </div>
              <Field id="company" label="Company" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="email" label="Email" type="email" required />
                <Field id="phone" label="Phone number" type="tel" />
              </div>
              <div>
                <Label>Country</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} maxLength={1000} />
              </div>
              <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                <Checkbox checked={agree} onCheckedChange={(v) => setAgree(!!v)} className="mt-0.5" />
                <span>
                  By selecting this, you agree to our{" "}
                  <Link to="/privacy-policy" className="text-primary underline">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                {submitting ? "Sending..." : "Let's talk"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">{title}</div>
        <div className="mt-0.5 text-sm text-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input id={id} name={id} type={type} required={required} maxLength={150} />
    </div>
  );
}
