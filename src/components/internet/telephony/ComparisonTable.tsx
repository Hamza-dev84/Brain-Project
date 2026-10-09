import { ReactNode } from "react";
import { Check, Minus, X } from "lucide-react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

export type Cell = "yes" | "no" | "partial" | string;

export interface ComparisonRow {
  label: string;
  values: Cell[];
}

interface ComparisonTableProps {
  eyebrow?: string;
  title: ReactNode;
  kicker?: string;
  columns: string[];
  rows: ComparisonRow[];
  highlightIndex?: number;
  caption: string;
}

const Cellular = ({ v }: { v: Cell }) => {
  if (v === "yes") return <Check className="w-5 h-5 text-[hsl(var(--bn-violet-soft))] mx-auto" aria-label="Yes" />;
  if (v === "no") return <X className="w-5 h-5 text-accent mx-auto" aria-label="No" />;
  if (v === "partial") return <Minus className="w-5 h-5 text-[hsl(var(--bn-ink-soft))] mx-auto" aria-label="Partial" />;
  return (
    <span className="block text-center font-dm text-sm text-[hsl(var(--bn-ink-soft))]">{v}</span>
  );
};

export const ComparisonTable = ({
  eyebrow = "Comparison",
  title,
  kicker,
  columns,
  rows,
  highlightIndex = columns.length - 1,
  caption,
}: ComparisonTableProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader eyebrow={eyebrow} title={title} kicker={kicker} />

      <ScrollReveal>
        <div className="bn-tile mt-14 overflow-x-auto">
          <table className="w-full min-w-[680px] text-left">
            <caption className="sr-only">{caption}</caption>
            <thead>
              <tr className="border-b border-[hsl(var(--bn-line)/0.6)]">
                <th scope="col" className="p-5 font-display text-sm text-[hsl(var(--bn-ink-soft))] font-medium">
                  Capability
                </th>
                {columns.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`p-5 text-center font-display text-sm font-semibold ${
                      i === highlightIndex ? "text-[hsl(var(--bn-ink))]" : "text-[hsl(var(--bn-ink-soft))]"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-[hsl(var(--bn-line)/0.3)] last:border-0">
                  <th scope="row" className="p-5 font-dm text-sm text-[hsl(var(--bn-ink))] font-normal">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-5 ${i === highlightIndex ? "bg-[hsl(var(--bn-violet)/0.08)]" : ""}`}
                    >
                      <Cellular v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ComparisonTable;
