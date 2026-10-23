import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";

interface ServiceCardUnifiedProps {
  image: string;
  altText: string;
  imageIcon?: string;
  title: string;
  description: string;
  techHeading?: string;
  techIcons?: string[];
  onClick?: () => void;
}

const getServiceLink = (title: string): string => {
  const linkMap: Record<string, string> = {
    "Web Development": "/services/software/web-development-pakistan",
    "App Development": "/services/software/mobile-app-developers-pakistan",
    "ERP Solutions": "/services/software/erp-software-pakistan",
    "Digital Marketing": "/services/software/digital-marketing-pakistan",
    "SEO Services": "/services/software/seo-services-lahore",
    "UI/UX Designing": "/services/software/web-design-services-pakistan",
  };
  return linkMap[title] || "/";
};

export const ServiceCardUnified: React.FC<ServiceCardUnifiedProps> = ({
  image,
  altText,
  imageIcon,
  title,
  description,
  techHeading,
  techIcons,
  onClick,
}) => {
  const content = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group bg-white shadow-lg min-w-60 flex-1 shrink basis-0 rounded-b-2xl border-b-8 border-brand-secondary overflow-hidden cursor-pointer"
    >

      <div className="relative">
        {/* Image wrapper (clipped) */}
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={image}
            alt={altText}
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
        {imageIcon &&
          <img
            src={imageIcon}
            alt={imageIcon}
            className="absolute left-4 top-[67%] md:top-[82%] z-30 h-15 w-15 rounded-full bg-white object-contain p-2shadow-xl"
          />
        }
      </div>

      <div className="w-full mt-14 pb-6 px-6">
        <div className="w-full text-brand-dark">
          <h3 className="font-raleway text-2xl font-bold">{title}</h3>

          {techHeading && techIcons?.length ? (
            <>
              <li className="flex items-start gap-2 mt-4 font-lato text-base font-medium leading-relaxed text-brand-dark">

                <span className="flex-1">{description}</span>
              </li>
              <h3 className="font-raleway text-sm font-bold mt-4">
                {techHeading}
              </h3>

              <div className="flex flex-wrap items-center gap-6 mt-4">
                {techIcons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="Technology icon"
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-start gap-2 mt-4 font-lato text-base font-medium leading-relaxed text-brand-dark">
              <span className="flex-1">{description}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-brand-primary font-lato font-semibold text-center mt-6 group-hover:gap-4 transition-all duration-300">
          <span>Get service now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );

  if (onClick) {
    return (
      <div onClick={onClick} className="block">
        {content}
      </div>
    );
  }

  return (
    <Link to={getServiceLink(title)} className="block">
      {content}
    </Link>
  );
};