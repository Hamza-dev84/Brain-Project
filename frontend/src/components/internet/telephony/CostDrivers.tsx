import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import ImagePlaceholder from "./ImagePlaceholder";

export interface CostDriver {
  Icon: LucideIcon;
  title: string;
  body: string;
  impact: string;
}

interface CostDriversProps {
  eyebrow?: string;
  title: ReactNode;
  kicker?: string;
  drivers: CostDriver[];
  imageLabel?: string;
  imageHint?: string;
}

export const CostDrivers = ({
  eyebrow = "What drives the cost",
  title,
  kicker,
  drivers,
  imageLabel,
  imageHint,
}: CostDriversProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader eyebrow={eyebrow} title={title} kicker={kicker} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-start">
        <StaggerContainer className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {drivers.map((d) => (
            <StaggerItem key={d.title}>
              <article className="bn-tile p-6 h-full flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                    <d.Icon className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
                  </div>
                  <span className="bn-eyebrow">{d.impact}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">{d.title}</h3>
                <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{d.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {imageLabel && (
          <ScrollReveal delay={0.2} className="lg:col-span-4">
            <ImagePlaceholder
              label={imageLabel}
              hint={imageHint}
              aspect="aspect-[4/5]"
              className="h-full"
            />
          </ScrollReveal>
        )}
      </div>
    </div>
  </section>
);

export default CostDrivers;
