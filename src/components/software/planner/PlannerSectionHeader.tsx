import React from "react";
import { Calculator, CheckCircle, LucideIcon } from "lucide-react";

interface PlannerSectionHeaderProps {
  icon?: LucideIcon;
  eyebrow?: string;
  heading: string;
  description: string;
}

export const PlannerSectionHeader: React.FC<PlannerSectionHeaderProps> = ({
  icon: Icon = Calculator,
  eyebrow = "Interactive Project Planner",
  heading,
  description,
}) => {
  return (
    <div className="py-16 bg-gradient-to-b from-white via-brand-secondary/5 to-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Animated Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-primary/10 mb-6 animate-pulse">
          <Icon className="w-12 h-12 text-brand-primary" />
        </div>
        
        {/* Eyebrow Text */}
        <p className="font-lato text-sm font-semibold text-brand-secondary uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
        
        {/* Heading */}
        <h2 className="font-raleway text-4xl md:text-5xl font-bold text-brand-dark mb-4">
          {heading}
        </h2>
        
        {/* Subheading with Benefits */}
        <p className="font-lato text-lg text-neutral-medium mb-8">
          {description}
        </p>
        
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-6 text-sm text-neutral-medium flex-wrap">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-secondary" />
            No Commitment
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-secondary" />
            Instant Results
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-secondary" />
            Free Proposal
          </span>
        </div>
      </div>
    </div>
  );
};
