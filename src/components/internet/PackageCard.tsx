import { Rocket, CheckCircle2, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useSignupModal } from "./SignupModalProvider";

interface PackageCardProps {
  badge: string;
  speed: string;
  features: string[];
  price: number;
  taxNote: string;
  isSelected?: boolean;
  onSelect?: () => void;
  showSelectButton?: boolean;
}

export const PackageCard = ({
  badge,
  speed,
  features,
  price,
  taxNote,
  isSelected = false,
  onSelect,
  showSelectButton = false,
}: PackageCardProps) => {
  const { openSignup } = useSignupModal();

  return (
    <motion.div
      className={`glass-card border-2 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
        isSelected ? "border-accent shadow-xl shadow-accent/20" : "border-white/10"
      }`}
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
    >
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="60" stroke="white" strokeWidth="4" fill="none" opacity="0.2" />
            <circle
              cx="64"
              cy="64"
              r="60"
              stroke="hsl(var(--accent))"
              strokeWidth="4"
              fill="none"
              strokeDasharray="377"
              strokeDashoffset="94"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Rocket className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      <div className="text-center mb-2">
        <span className="text-accent font-raleway font-bold text-sm tracking-wide uppercase">{badge}</span>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-white font-raleway font-bold text-5xl">{speed}</h3>
      </div>

      <div className="w-full h-px bg-white/20 mb-6" />

      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-white/90 font-lato text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-white/20 mb-6" />

      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-white font-raleway text-2xl">Rs</span>
          <span className="text-white font-raleway font-bold text-5xl">{price.toLocaleString()}</span>
        </div>
        <span className="text-accent font-lato text-sm">{taxNote}</span>
      </div>

      <div className="space-y-3">
        {showSelectButton && (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.();
              }}
              variant={isSelected ? "default" : "outlined"}
              className={`w-full font-raleway font-semibold text-base py-4 rounded-full transition-all duration-300 ${
                isSelected
                  ? "bg-accent hover:bg-accent/90 text-white"
                  : "border-accent text-accent hover:bg-accent hover:text-white"
              }`}
            >
              {isSelected ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Selected
                </>
              ) : (
                "Select to Compare"
              )}
            </Button>
          </motion.div>
        )}

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => openSignup({ serviceType: "home", packageLabel: speed })}
            aria-label={`Order the ${speed} package`}
            className="w-full cursor-pointer bg-accent hover:bg-accent/90 text-white font-raleway font-bold text-lg py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2"
          >
            Order Now
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
