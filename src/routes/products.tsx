import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpDown, FileDown, Info, Search, GitCompare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { PageHeader } from "@/components/site/page-header";
import { QuoteDialog } from "@/components/site/quote-dialog";
import { LYO_MODELS, GROUPS, type LyoModel } from "@/lib/lyo-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Lyotech Pharma Lyophilizer Specifications" },
      { name: "description", content: "Full specifications for our 14 lyophilizer models from LYO 0.2 to LYO 40. Shell area 0.24–42 m², up to 152,000 vials." },
      { property: "og:title", content: "Lyotech Pharma — Lyophilizer Product Range" },
      { property: "og:description", content: "Complete specs for all 14 lyophilizer models from lab scale to large industrial." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type SortKey = keyof Pick<LyoModel, "shellArea" | "condenserCapacity" | "shelves" | "vials" | "weight" | "power">;

const FILTERS = [
  { key: "all", label: "All" },
  { key: "lab", label: "Lab Scale: 0.2–1" },
  { key: "small", label: "Small: 2–5" },
  { key: "mid", label: "Mid: 7.5–15" },
  { key: "large", label: "Large: 20–40" },
] as const;

const COL_TIPS: Record<string, string> = {
  "Shell Area (m²)": "Total usable shelf surface area in square meters",
  "Condenser Capacity (KG)": "Maximum ice holding capacity of the condenser",
  "Ultimate Vacuum (μBar)": "Lowest achievable chamber pressure in micro bar",
  "No of Vials": "Approximate 2R vial capacity based on shelf size",
};

function ProductsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 } | null>(null);
  const [compare, setCompare] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteModel, setQuoteModel] = useState<string | undefined>();

  const rows = useMemo(() => {
    let r = LYO_MODELS.slice();
    if (filter !== "all") r = r.filter((m) => m.group === filter);
    if (query) r = r.filter((m) => m.model.toLowerCase().includes(query.toLowerCase()));
    if (sort) {
      r.sort((a, b) => ((a[sort.key] as number) - (b[sort.key] as number)) * sort.dir);
    }
    return r;
  }, [filter, query, sort]);

  const toggleSort = (key: SortKey) => {
    setSort((s) =>
      s?.key === key ? { key, dir: (s.dir * -1) as 1 | -1 } : { key, dir: 1 }
    );
  };

  const toggleCompare = (model: string) => {
    setCompare((c) =>
      c.includes(model) ? c.filter((m) => m !== model) : c.length < 3 ? [...c, model] : c
    );
  };

  const openQuote = (m?: string) => {
    setQuoteModel(m);
    setQuoteOpen(true);
  };

  const fmt = (n: number) => n.toLocaleString("en-IN");

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Our thoughtfully curated machines are engineered in limited runs. Improve your productivity and organization with these."
        crumb="Products"
      />

      <section className="container-page py-12">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search model..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 w-48"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setCompareOpen(true)}
              disabled={compare.length < 2}
            >
              <GitCompare className="size-4" /> Compare ({compare.length})
            </Button>
            <Button variant="outline" onClick={() => window.print()}>
              <FileDown className="size-4" /> Export PDF
            </Button>
          </div>
        </div>

        {/* Table */}
        <TooltipProvider>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead className="bg-table-header text-white">
                  <tr>
                    <th className="sticky left-0 z-10 bg-table-header text-left px-3 py-3 font-semibold whitespace-nowrap">
                      <Checkbox className="opacity-0 pointer-events-none mr-2" />
                      Model
                    </th>
                    <SortHead label="Shell Area (m²)" onSort={() => toggleSort("shellArea")} active={sort?.key === "shellArea"} />
                    <SortHead label="Condenser Capacity (KG)" onSort={() => toggleSort("condenserCapacity")} active={sort?.key === "condenserCapacity"} />
                    <PlainHead label="Shelf Size (mm)" />
                    <SortHead label="No of Shelves" onSort={() => toggleSort("shelves")} active={sort?.key === "shelves"} />
                    <SortHead label="No of Vials" onSort={() => toggleSort("vials")} active={sort?.key === "vials"} />
                    <PlainHead label="Shelf Spacing (mm)" />
                    <PlainHead label="Shelf Temp Range" />
                    <PlainHead label="Min Condenser Temp" />
                    <PlainHead label="Ultimate Vacuum (μBar)" />
                    <PlainHead label="Install Dimensions (mm)" />
                    <SortHead label="Weight (KG)" onSort={() => toggleSort("weight")} active={sort?.key === "weight"} />
                    <SortHead label="Power (KW)" onSort={() => toggleSort("power")} active={sort?.key === "power"} />
                    <th className="px-3 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((m, i) => (
                    <tr
                      key={m.model}
                      className={`border-t border-border hover:bg-primary/5 transition-colors ${
                        i % 2 === 1 ? "bg-table-row-alt" : "bg-card"
                      }`}
                    >
                      <td className="sticky left-0 z-10 bg-inherit px-3 py-3 font-bold text-foreground whitespace-nowrap">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={compare.includes(m.model)}
                            onCheckedChange={() => toggleCompare(m.model)}
                          />
                          {m.model}
                        </label>
                      </td>
                      <td className="px-3 py-3">{m.shellArea}</td>
                      <td className="px-3 py-3">{m.condenserCapacity}</td>
                      <td className="px-3 py-3 whitespace-nowrap">{m.shelfSize}</td>
                      <td className="px-3 py-3">{m.shelves}</td>
                      <td className="px-3 py-3">{fmt(m.vials)}</td>
                      <td className="px-3 py-3">{m.shelfSpacing}</td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <Badge variant="outline" className="font-mono text-[11px] border-primary/30 text-primary">
                          {m.shelfTemp}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <Badge className="font-mono text-[11px] bg-secondary/15 text-secondary border-0 hover:bg-secondary/20">
                          {m.minCondenser}
                        </Badge>
                      </td>
                      <td className="px-3 py-3">{m.vacuum}</td>
                      <td className="px-3 py-3 whitespace-nowrap">{m.installDims}</td>
                      <td className="px-3 py-3">{fmt(m.weight)}</td>
                      <td className="px-3 py-3">{m.power}</td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openQuote(m.model)}
                        >
                          Quote
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={14} className="text-center py-12 text-muted-foreground font-sans">
                        No models match your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </TooltipProvider>

        {/* Grouped detail cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {(Object.keys(GROUPS) as Array<keyof typeof GROUPS>).map((k) => {
            const g = GROUPS[k];
            const models = LYO_MODELS.filter((m) => m.group === k);
            return (
              <div key={k} className="rounded-xl border border-border bg-card p-6 flex flex-col">
                <div className="text-xs uppercase tracking-wider font-semibold text-secondary">
                  {g.label}
                </div>
                <div className="mt-1 font-mono font-bold text-lg text-primary">
                  LYO {g.range}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{g.use}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {models.map((m) => (
                    <li key={m.model}>
                      <Badge variant="outline" className="font-mono">{m.model}</Badge>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openQuote(models[0]?.model)}
                  className="mt-auto pt-4 bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  Request Quote
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compare modal */}
      <Dialog open={compareOpen} onOpenChange={setCompareOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Compare Models</DialogTitle>
          </DialogHeader>
          {compare.length < 2 ? (
            <p className="text-sm text-muted-foreground">Select at least 2 models from the table.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-3 py-2">Spec</th>
                    {compare.map((m) => {
                      const row = LYO_MODELS.find((x) => x.model === m)!;
                      return (
                        <th key={m} className="text-left px-3 py-2 text-primary">
                          {row.model}
                          <button
                            onClick={() => toggleCompare(m)}
                            className="ml-2 text-muted-foreground hover:text-foreground"
                            aria-label="Remove"
                          >
                            <X className="inline size-3" />
                          </button>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      ["Shell Area (m²)", "shellArea"],
                      ["Condenser (KG)", "condenserCapacity"],
                      ["Shelves", "shelves"],
                      ["Vials", "vials"],
                      ["Shelf Temp", "shelfTemp"],
                      ["Min Condenser", "minCondenser"],
                      ["Vacuum (μBar)", "vacuum"],
                      ["Weight (KG)", "weight"],
                      ["Power (KW)", "power"],
                    ] as Array<[string, keyof LyoModel]>
                  ).map(([label, key]) => (
                    <tr key={label} className="border-t border-border">
                      <td className="px-3 py-2 font-sans font-medium text-muted-foreground">{label}</td>
                      {compare.map((m) => {
                        const row = LYO_MODELS.find((x) => x.model === m)!;
                        const v = row[key];
                        return (
                          <td key={m} className="px-3 py-2 text-foreground">
                            {typeof v === "number" ? v.toLocaleString("en-IN") : v}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} defaultModel={quoteModel} />
    </>
  );
}

function PlainHead({ label }: { label: string }) {
  const tip = COL_TIPS[label];
  return (
    <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
      <span className="inline-flex items-center gap-1">
        {label}
        {tip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="size-3.5 opacity-70 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>{tip}</TooltipContent>
          </Tooltip>
        )}
      </span>
    </th>
  );
}

function SortHead({ label, onSort, active }: { label: string; onSort: () => void; active?: boolean }) {
  const tip = COL_TIPS[label];
  return (
    <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
      <button onClick={onSort} className="inline-flex items-center gap-1 hover:opacity-80">
        {label}
        <ArrowUpDown className={`size-3.5 ${active ? "opacity-100" : "opacity-60"}`} />
        {tip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="size-3.5 opacity-70 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>{tip}</TooltipContent>
          </Tooltip>
        )}
      </button>
    </th>
  );
}
