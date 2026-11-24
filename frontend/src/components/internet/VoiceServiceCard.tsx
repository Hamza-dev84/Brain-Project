import { Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSignupModal } from "./SignupModalProvider";

interface VoiceServiceCardProps {
  badge: string;
  title: string;
  features: string[];
  lineOptions: string[];
  recommendedFor: string[];
}

export const VoiceServiceCard = ({
  badge,
  title,
  features,
  lineOptions,
  recommendedFor,
}: VoiceServiceCardProps) => {
  const { openSignup } = useSignupModal();

  return (
    <div className="glass-card p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[hsl(358,80%,52%)] to-[hsl(358,80%,42%)] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <Phone className="w-10 h-10 text-white" />
      </div>

      <div className="text-center mb-4">
        <Badge className="bg-[hsl(358,80%,52%)]/20 text-[hsl(358,80%,52%)] border-[hsl(358,80%,52%)]/30 font-raleway font-semibold px-4 py-1">
          {badge}
        </Badge>
      </div>

      <h3 className="text-2xl font-raleway font-bold text-white text-center mb-6">{title}</h3>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[hsl(358,80%,52%)] flex-shrink-0 mt-0.5" />
            <span className="text-white/80 font-lato text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-white/60 font-lato text-sm mb-2">Available Lines:</p>
        <div className="flex flex-wrap gap-2">
          {lineOptions.map((option, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-white/20 text-white/70 hover:border-[hsl(358,80%,52%)] hover:text-[hsl(358,80%,52%)] transition-colors"
            >
              {option}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
        <p className="text-white/60 font-lato text-sm mb-2">Recommended for:</p>
        <div className="flex flex-wrap gap-2">
          {recommendedFor.map((item, index) => (
            <span key={index} className="text-xs font-lato text-white/80 bg-white/10 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* <Button
        onClick={() => openSignup({ serviceType: "business", packageLabel: title })}
        aria-label={`Get a quotation for ${title}`}
        className="w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 bg-gradient-to-r from-[hsl(358,80%,52%)] to-[hsl(358,80%,42%)] hover:from-[hsl(358,80%,62%)] hover:to-[hsl(358,80%,52%)] text-white font-raleway font-semibold py-6 text-lg shadow-lg">
        Get a Quotation
      </Button> */}

      <a
        href="https://wa.me/923276222888"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full bg-gradient-to-r from-[hsl(358,80%,52%)] to-[hsl(358,80%,42%)] hover:from-[hsl(358,80%,62%)] hover:to-[hsl(358,80%,52%)] text-white font-raleway font-semibold py-6 text-lg shadow-lg shadow-[hsl(358,80%,52%)]/30">
          Get a Quotation
        </Button>
      </a>
      
    </div>
  );
};

export default VoiceServiceCard;
