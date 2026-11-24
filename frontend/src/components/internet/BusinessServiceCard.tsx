import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket } from "lucide-react";
import { useSignupModal } from "./SignupModalProvider";

interface BusinessServiceCardProps {
  badge: string;
  title: string;
  description: string;
  features: string[];
  speeds: string[];
  recommendedFor: string[];
}

export const BusinessServiceCard = ({
  badge,
  title,
  description,
  features,
  speeds,
  recommendedFor,
}: BusinessServiceCardProps) => {
  const { openSignup } = useSignupModal();

  return (
    <div className="group relative bg-gradient-to-b from-secondary to-primary border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full border-4 border-accent bg-accent/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
          <Rocket className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <Badge className="bg-accent text-white px-4 py-1 text-sm font-semibold">{badge}</Badge>
      </div>

      <h3 className="text-2xl font-raleway font-bold text-white text-center mb-3">{title}</h3>
      <p className="text-white/80 text-center mb-6 font-lato">{description}</p>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-accent" />
            </div>
            <span className="text-white/90 font-lato">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-white/70 text-sm font-semibold mb-3">Available Options:</p>
        <div className="grid grid-cols-2 gap-2">
          {speeds.map((speed, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-center text-white text-sm font-semibold hover:bg-white/20 transition-colors duration-200"
            >
              {speed}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-white/70 text-sm font-semibold mb-3">Recommended for:</p>
        <div className="flex flex-wrap gap-2">
          {recommendedFor.map((item, index) => (
            <span
              key={index}
              className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold border border-accent/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <Button
        onClick={() => openSignup({ serviceType: "business", packageLabel: title })}
        aria-label={`Get a quotation for ${title}`}
        className="w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/50">
        Get a Quotation
      </Button>
    </div>
  );
};

export default BusinessServiceCard;
