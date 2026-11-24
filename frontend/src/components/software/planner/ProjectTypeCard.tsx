import React from "react";
import { cn } from "@/lib/utils";

interface ProjectTypeCardProps {
  icon: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  isPopular?: boolean;
}

export const ProjectTypeCard: React.FC<ProjectTypeCardProps> = ({
  icon,
  title,
  description,
  isSelected,
  onClick,
  isPopular,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full h-[220px] bg-white rounded-xl p-6 transition-all duration-300 relative",
        "border-2 flex flex-col items-center justify-center text-center",
        "hover:shadow-lg hover:-translate-y-1",
        isSelected
          ? "border-brand-primary bg-brand-primary/5 scale-[1.02]"
          : "border-neutral-border hover:border-brand-primary/30"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-lato font-bold text-xs rounded-full shadow-lg whitespace-nowrap">
            ⭐ Most Popular
          </span>
        </div>
      )}
      <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
        <span className="text-4xl">{icon}</span>
      </div>
      <h4 className="font-raleway font-bold text-lg text-brand-dark mb-2">
        {title}
      </h4>
      <p className="font-lato text-sm text-neutral-medium leading-relaxed">
        {description}
      </p>
    </button>
  );
};
