import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";

interface ServiceCardUnifiedProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const getServiceLink = (title: string): string => {
  const linkMap: Record<string, string> = {
    "Web Development": "/services/software/web-development-pakistan",
    "App Development": "/services/software/mobile-app-developers-pakistan",
    "ERP Solutions": "/services/software/erp-software-pakistan",
    "Digital Marketing": "/services/software/digital-marketing-pakistan",
    "UI/UX Designing": "/services/software/web-design-services-pakistan",
  };
  return linkMap[title] || "/";
};

export const ServiceCardUnified: React.FC<ServiceCardUnifiedProps> = ({
  image,
  title,
  description,
  onClick,
}) => {
  const content = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group bg-white shadow-lg min-w-60 flex-1 shrink basis-0 rounded-[2rem] border-b-8 border-brand-secondary overflow-hidden cursor-pointer"
    >
      {/* Image with gradient overlay on hover */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src={image}
          alt={title}
          className="aspect-[1.75] object-cover w-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center"
          >
            <ArrowRight className="w-8 h-8 text-brand-dark" />
          </motion.div>
        </motion.div>
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
