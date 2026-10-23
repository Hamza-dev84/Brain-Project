import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  altText: string;
  imageIcon: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  altText,
  imageIcon,
  title,
  description,
}) => {
  return (
    <div className="group bg-white shadow-lg min-w-60 flex-1 shrink basis-0 rounded-b-2xl border-b-8 border-brand-secondary overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        {/* Image wrapper (clipped) */}
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={image}
            alt={altText || title}
            className="aspect-[1.75] object-cover w-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ArrowRight className="w-8 h-8 text-brand-dark" />
            </div>
          </div>
        </div>

        {/* Icon (NOT clipped) */}
        {imageIcon && (
          <img
            src={imageIcon}
            alt="icon"
            className="absolute left-4 top-[67%] md:top-[82%] z-30 h-15 w-15 rounded-full bg-white object-contain p-2shadow-xl"
          />
        )}
      </div>

      <div className="w-full mt-14 pb-6 px-6">
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
