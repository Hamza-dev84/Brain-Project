import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group bg-white border border-neutral-100 flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-0 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
      {/* Bottom accent line that expands on hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary w-0 group-hover:w-full transition-all duration-500" />

      <div className="relative z-10">
        <div className="w-[70px] h-[70px] mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
          <img loading="lazy" decoding="async"
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-raleway text-2xl font-bold text-brand-dark text-center mt-4">
          {title}
        </h3>
        <p className="font-lato text-base font-medium leading-relaxed text-neutral-400 text-center mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};
