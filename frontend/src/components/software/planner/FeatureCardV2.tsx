import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FeatureCardV2Props {
  name: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  isRecommended?: boolean;
  isPopular?: boolean;
}

export const FeatureCardV2: React.FC<FeatureCardV2Props> = ({
  name,
  description,
  isSelected,
  onClick,
  isRecommended,
  isPopular,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full p-4 rounded-xl border-2 transition-all duration-300 text-left",
        "hover:shadow-lg hover:-translate-y-0.5",
        isSelected
          ? "border-brand-primary bg-brand-primary/5 shadow-md"
          : "border-neutral-border bg-white hover:border-brand-primary/30"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Custom Checkbox */}
        <div className={cn(
          "flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200",
          isSelected
            ? "bg-brand-primary border-brand-primary scale-110"
            : "border-neutral-border bg-white group-hover:border-brand-primary/50"
        )}>
          {isSelected && (
            <Check className="w-4 h-4 text-white animate-scale-in" strokeWidth={3} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h5 className="font-lato font-semibold text-base text-brand-dark">
              {name}
            </h5>
            {isPopular && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full whitespace-nowrap">
                Popular
              </span>
            )}
            {isRecommended && !isPopular && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full whitespace-nowrap">
                Recommended
              </span>
            )}
          </div>
          <p className="font-lato text-sm text-neutral-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};
