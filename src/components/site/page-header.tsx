import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
      <div className="container-page py-14 md:py-20 animate-fade-in-up">
        <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-white/85 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
