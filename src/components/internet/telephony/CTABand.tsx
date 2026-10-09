import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/internet/animations/ScrollReveal";
import { WHATSAPP } from "./telephonyLinks";

interface CTABandProps {
  title: string;
  body: string;
  onQuote: () => void;
  ctaLabel?: string;
  showWhatsApp?: boolean;
}

export const CTABand = ({
  title,
  body,
  onQuote,
  ctaLabel = "Check Availability Now",
  showWhatsApp = false,
}: CTABandProps) => (
  <section className="relative py-14 overflow-hidden">
    <div className="max-w-screen-xl mx-auto px-5">
      <ScrollReveal>
        <div className="bn-tile bn-glow-violet p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="font-display font-bold text-2xl md:text-3xl bn-display">{title}</h2>
            <p className="font-dm text-[hsl(var(--bn-ink-soft))]">{body}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              size="lg"
              onClick={onQuote}
              className="bg-accent hover:bg-accent/90 text-white font-display font-semibold px-8 py-6 rounded-full whitespace-nowrap"
            >
              {ctaLabel}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {showWhatsApp && (
              <Button
                size="lg"
                variant="outlined"
                onClick={() => window.open(WHATSAPP, "_blank", "noopener,noreferrer")}
                className="border-2 border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:border-white/50 font-display font-semibold px-8 py-6 rounded-full whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to an Expert
              </Button>
            )}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABand;
