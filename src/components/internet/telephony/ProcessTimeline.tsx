import { ReactNode } from "react";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import ImagePlaceholder from "./ImagePlaceholder";

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}

interface ProcessTimelineProps {
  eyebrow?: string;
  title: ReactNode;
  kicker?: string;
  steps: ProcessStep[];
  imageLabel?: string;
  imageHint?: string;
}

export const ProcessTimeline = ({
  eyebrow = "How it works",
  title,
  kicker,
  steps,
  imageLabel,
  imageHint,
}: ProcessTimelineProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader eyebrow={eyebrow} title={title} kicker={kicker} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-14 items-start">
        <StaggerContainer className={`${imageLabel ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col gap-4`}>
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <article className="bn-tile p-6 flex gap-5 items-start">
                <span className="font-display font-bold text-2xl text-[hsl(var(--bn-violet-soft))] shrink-0 w-12">
                  {s.n}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-lg text-[hsl(var(--bn-ink))]">{s.title}</h3>
                  <p className="font-dm text-sm text-[hsl(var(--bn-ink-soft))] leading-relaxed">{s.body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {imageLabel && (
          <ScrollReveal delay={0.2} className="lg:col-span-5 lg:sticky lg:top-32">
            <ImagePlaceholder label={imageLabel} hint={imageHint} aspect="aspect-square" />
          </ScrollReveal>
        )}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
