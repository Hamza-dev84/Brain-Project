import { ReactNode } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/internet/home/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";

export interface PricingTier {
  badge: string;
  title: string;
  scale: string;
  from: string;
  fromNote?: string;
  points: string[];
  featured?: boolean;
}

interface PricingTiersProps {
  eyebrow?: string;
  title: ReactNode;
  kicker?: string;
  tiers: PricingTier[];
  footnote?: string;
  onQuote: () => void;
}

export const PricingTiers = ({
  eyebrow = "Pricing",
  title,
  kicker,
  tiers,
  footnote,
  onQuote,
}: PricingTiersProps) => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bn-grid-bg opacity-40 pointer-events-none" />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <SectionHeader eyebrow={eyebrow} title={title} kicker={kicker} />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {tiers.map((p) => (
          <StaggerItem key={p.title}>
            <article
              className={`bn-tile p-8 h-full flex flex-col gap-5 ${
                p.featured ? "bn-glow-red border-[hsl(var(--bn-red)/0.5)]" : ""
              }`}
            >
              <span className="bn-eyebrow">{p.badge}</span>
              <h3 className="font-display font-bold text-2xl text-[hsl(var(--bn-ink))]">{p.title}</h3>
              <p className="font-dm text-sm text-[hsl(var(--bn-violet-soft))]">{p.scale}</p>

              <div className="flex flex-col gap-1 py-3 border-y border-[hsl(var(--bn-line)/0.5)]">
                <span className="font-display font-bold text-3xl text-[hsl(var(--bn-ink))]">{p.from}</span>
                {p.fromNote && (
                  <span className="font-dm text-xs text-[hsl(var(--bn-ink-soft))]">{p.fromNote}</span>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 font-dm text-sm text-[hsl(var(--bn-ink-soft))]">
                    <Check className="w-4 h-4 mt-0.5 text-[hsl(var(--bn-violet-soft))] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onQuote}
                className={`w-full rounded-full font-display font-semibold py-6 ${
                  p.featured
                    ? "bg-accent hover:bg-accent/90 text-white"
                    : "bg-white/5 border-2 border-white/25 text-white hover:bg-white/10"
                }`}
              >
                Get an exact quote
              </Button>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {footnote && (
        <p className="font-dm text-xs md:text-sm text-[hsl(var(--bn-ink-soft))] text-center max-w-3xl mx-auto mt-8">
          {footnote}
        </p>
      )}
    </div>
  </section>
);

export default PricingTiers;
