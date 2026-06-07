import { Link } from "@tanstack/react-router";
import { Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer text-white mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3">
        <div>
          <img
            src="https://lyotechpharma.com/lyo-tech.jpg"
            alt="Lyotech Pharma"
            className="h-12 w-auto bg-white rounded p-1 mb-4"
          />
          <p className="text-sm font-medium text-white/90 mb-2">
            One stop shop for all your Lyophilizer needs.
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            Lyotech Pharma is India's leading lyophilizer manufacturer, offering
            custom-built freeze dryers, refurbished units, and lifetime support
            services to the pharmaceutical industry.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy-policy", label: "Privacy Policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="size-4 mt-0.5 shrink-0 text-secondary" />
              <span>
                Plot no 408, GIDC, Dholka–Kheda Road, Dholka, Rampur,
                Ahmedabad, Gujarat 382225
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 mt-0.5 shrink-0 text-secondary" />
              <span>
                <a href="tel:+919737632241" className="hover:text-white block">+91 9737632241</a>
                <a href="tel:+919926905544" className="hover:text-white block">+91 9926905544</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 mt-0.5 shrink-0 text-secondary" />
              <a href="mailto:neelamber@lyotechpharma.com" className="hover:text-white">
                neelamber@lyotechpharma.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neelamberpol/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-1 text-white/80 hover:text-white"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/60">
          © 2026 Lyotech Pharma Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
