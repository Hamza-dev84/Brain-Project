import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";

export interface FeatureItem {
  Icon: LucideIcon;
  title: string;
  body: ReactNode;
}

interface FeatureGridProps {
  eyebrow: string;
  title: ReactNode;
  kicker?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  accent?: "violet" | "red";
  grid?: boolean;
}

const colClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export const FeatureGrid = ({
  eyebrow,
  title,
  kicker,
  items,
  columns = 3,
  accent = "violet",
  grid = true,
}: FeatureGridProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    {grid && <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />}
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader eyebrow={eyebrow} title={title} kicker={kicker} />

      <StaggerContainer className={`grid grid-cols-1 ${colClass[columns]} gap-6 mt-14`}>
        {items.map((f) => (
          <StaggerItem key={f.title}>
            <article className="bn-tile p-7 h-full flex flex-col gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  accent === "red"
                    ? "bg-[hsl(var(--bn-red)/0.12)] border border-[hsl(var(--bn-red)/0.35)]"
                    : "bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)]"
                }`}
              >
                <f.Icon
                  className={`w-7 h-7 ${accent === "red" ? "text-accent" : "text-[hsl(var(--bn-violet-soft))]"}`}
                />
              </div>
              <h3 className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{f.title}</h3>
              <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{f.body}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default FeatureGrid;
