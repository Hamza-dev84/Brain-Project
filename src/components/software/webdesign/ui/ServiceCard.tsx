import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group bg-white shadow-lg min-w-60 flex-1 shrink basis-0 rounded-[2rem] border-b-8 border-brand-secondary overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image with gradient overlay on hover */}
      <div className="relative overflow-hidden">
        <img loading="lazy" decoding="async"
          src={image}
          alt={title}
          className="aspect-[1.75] object-cover w-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <ArrowRight className="w-8 h-8 text-brand-dark" />
          </div>
        </div>
      </div>

      <div className="w-full mt-6 pb-6 px-6">
        <div className="w-full text-brand-dark">
          <h3 className="font-raleway text-2xl font-bold">{title}</h3>
          <p className="font-lato text-base font-medium leading-relaxed mt-4 text-neutral-400">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-brand-primary font-lato font-semibold text-center mt-6 group-hover:gap-4 transition-all duration-300">
          <span>Get service now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};
