import React from "react";
import { cn } from "@/lib/utils";

interface FeatureToggleProps {
  name: string;
  description: string;
  impactMetric: string;
  isSelected: boolean;
  onChange: (checked: boolean) => void;
  popular?: boolean;
}

export const FeatureToggle: React.FC<FeatureToggleProps> = ({
  name,
  description,
  impactMetric,
  isSelected,
  onChange,
  popular,
}) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border transition-all duration-300 cursor-pointer",
        isSelected
          ? "bg-brand-primary/5 border-brand-primary"
          : "bg-white border-neutral-border hover:bg-neutral-50"
      )}
      onClick={() => onChange(!isSelected)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <div
              className={cn(
                "w-12 h-6 rounded-full transition-all duration-300 relative",
                isSelected ? "bg-brand-primary" : "bg-neutral-border"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300",
                  isSelected ? "left-7" : "left-1"
                )}
              />
            </div>
            <h5 className="font-lato font-semibold text-brand-dark flex items-center gap-2">
              {name}
              {popular && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-400/20 text-yellow-700 font-lato font-semibold text-[10px] rounded-full">
                  ⭐ Popular
                </span>
              )}
            </h5>
          </div>
          <p className="font-lato text-sm text-neutral-medium ml-[60px]">
            {description}
          </p>
        </div>
        <span className="px-3 py-1 bg-brand-secondary/20 text-brand-dark font-lato font-semibold text-xs rounded-full whitespace-nowrap">
          {impactMetric}
        </span>
      </div>
    </div>
  );
};
