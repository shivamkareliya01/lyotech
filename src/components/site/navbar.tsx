import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "./quote-dialog";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://lyotechpharma.com/lyo-tech.jpg"
            alt="Lyotech Pharma"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/neelamberpol/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <Button
            onClick={() => setQuoteOpen(true)}
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            Get a Quote
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in-up">
          <div className="container-page py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === l.to
                    ? "bg-muted text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/neelamberpol/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <Button
                onClick={() => {
                  setOpen(false);
                  setQuoteOpen(true);
                }}
                className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </header>
  );
}
