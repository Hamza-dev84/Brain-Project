import React from "react";
import { cn } from "@/lib/utils";

interface ProjectTypeCardV2Props {
  icon: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  isPopular?: boolean;
}

export const ProjectTypeCardV2: React.FC<ProjectTypeCardV2Props> = ({
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
        "group relative w-full min-h-[260px] bg-white rounded-2xl p-8 transition-all duration-300",
        "border-2 flex flex-col items-center justify-center text-center",
        "hover:shadow-2xl hover:-translate-y-2",
        isSelected
          ? "border-brand-primary bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 shadow-xl scale-[1.02]"
          : "border-neutral-border hover:border-brand-primary/50 hover:bg-gradient-to-br hover:from-white hover:to-brand-primary/5"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-brand-dark font-lato font-bold text-xs rounded-full shadow-lg whitespace-nowrap animate-fade-in">
            ⭐ Most Popular
          </span>
        </div>
      )}
      
      <div className={cn(
        "w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
        isSelected 
          ? "bg-gradient-to-br from-brand-primary to-brand-primary/80 shadow-lg scale-110" 
          : "bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 group-hover:scale-110 group-hover:shadow-md"
      )}>
        <span className={cn(
          "text-5xl transition-all duration-300",
          isSelected ? "scale-110" : "group-hover:scale-110"
        )}>{icon}</span>
      </div>
      
      <h4 className="font-raleway font-bold text-xl text-brand-dark mb-3 leading-tight">
        {title}
      </h4>
      
      <p className="font-lato text-sm text-neutral-medium leading-relaxed">
        {description}
      </p>
      
      {isSelected && (
        <div className="absolute top-4 right-4">
          <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center animate-scale-in">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
};
