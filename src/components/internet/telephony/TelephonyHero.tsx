import { ReactNode } from "react";
import { LucideIcon, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedMesh from "@/components/internet/home/AnimatedMesh";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/internet/animations/StaggerContainer";
import ImagePlaceholder from "./ImagePlaceholder";
import { WHATSAPP } from "./telephonyLinks";

export interface HeroBadge {
  Icon: LucideIcon;
  label: string;
}

interface TelephonyHeroProps {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subcopy: ReactNode;
  badges: HeroBadge[];
  imageLabel: string;
  imageHint: string;
  onQuote: () => void;
}

export const TelephonyHero = ({
  eyebrow,
  headline,
  headlineAccent,
  subcopy,
  badges,
  imageLabel,
  imageHint,
  onQuote,
}: TelephonyHeroProps) => (
  <section id="main-content" className="relative pt-8 pb-20 md:pb-28">
    <AnimatedMesh />
    <div className="relative z-10 max-w-screen-xl mx-auto px-5">
      <ScrollReveal>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="bn-eyebrow mb-6 inline-flex">{eyebrow}</span>
          <h1 className="font-display font-bold text-[clamp(2.25rem,6.5vw,5rem)] leading-[0.98] tracking-tight mt-6">
            <span className="bn-display">{headline}</span>
            <br />
            <span className="bn-display-accent">{headlineAccent}</span>
          </h1>
          <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            {subcopy}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <ImagePlaceholder
          label={imageLabel}
          hint={imageHint}
          aspect="aspect-[21/9]"
          className="max-w-5xl mx-auto mb-12"
        />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {badges.map((b, i) => (
          <StaggerItem key={b.label}>
            <div
              className={`bn-tile ${i === 0 ? "bn-glow-violet" : i === 2 ? "bn-glow-red" : ""} p-8 flex flex-col items-center text-center gap-4 h-full`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--bn-violet)/0.15)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
                <b.Icon className="w-8 h-8 text-[hsl(var(--bn-violet-soft))]" />
              </div>
              <p className="font-display font-semibold text-xl text-[hsl(var(--bn-ink))]">{b.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Button
            size="lg"
            onClick={onQuote}
            className="bg-accent hover:bg-accent/90 text-white font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-[0_20px_60px_-15px_hsl(var(--bn-red)/0.7)] hover:shadow-[0_25px_70px_-15px_hsl(var(--bn-red)/0.9)] transition-all"
          >
            Check Availability Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outlined"
            onClick={() => window.open(WHATSAPP, "_blank", "noopener,noreferrer")}
            className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold text-base md:text-lg px-8 py-6 rounded-full"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Talk to an Expert
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TelephonyHero;
