import { Check, Minus, X } from "lucide-react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";

type Cell = "yes" | "no" | "partial";

const columns = ["Traditional PRI / analog", "Offshore VoIP apps", "BrainNET VoIP"];

const rows: { label: string; values: Cell[] }[] = [
  { label: "Runs on your own dedicated fiber last mile", values: ["no", "no", "yes"] },
  { label: "Local, licensed operator with on-ground engineers", values: ["yes", "no", "yes"] },
  { label: "Add or remove channels the same week", values: ["no", "yes", "yes"] },
  { label: "IVR, call recording & analytics included", values: ["no", "partial", "yes"] },
  { label: "Keep your existing numbers", values: ["yes", "partial", "yes"] },
  { label: "One invoice for internet + voice", values: ["no", "no", "yes"] },
  { label: "99.9% uptime SLA with credits", values: ["partial", "no", "yes"] },
  { label: "24/7 support in your timezone", values: ["partial", "no", "yes"] },
];

const Icon = ({ v }: { v: Cell }) =>
  v === "yes" ? (
    <Check className="w-5 h-5 text-[hsl(var(--bn-violet-soft))] mx-auto" aria-label="Yes" />
  ) : v === "partial" ? (
    <Minus className="w-5 h-5 text-[hsl(var(--bn-ink-soft))] mx-auto" aria-label="Partial" />
  ) : (
    <X className="w-5 h-5 text-accent mx-auto" aria-label="No" />
  );

export const VoIPComparison = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader
        eyebrow="Comparison"
        title={<>PRI lines, app-only VoIP, or <span className="bn-display-accent">a real network.</span></>}
        kicker="Where BrainNET sits against the two options most Pakistani businesses weigh up."
      />

      <ScrollReveal>
        <div className="bn-tile mt-14 overflow-x-auto">
          <table className="w-full min-w-[680px] text-left">
            <caption className="sr-only">
              Comparison of traditional PRI lines, offshore VoIP apps and BrainNET VoIP services in Pakistan
            </caption>
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
                      i === 2 ? "text-[hsl(var(--bn-ink))]" : "text-[hsl(var(--bn-ink-soft))]"
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
                    <td key={i} className={`p-5 ${i === 2 ? "bg-[hsl(var(--bn-violet)/0.08)]" : ""}`}>
                      <Icon v={v} />
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

export default VoIPComparison;
