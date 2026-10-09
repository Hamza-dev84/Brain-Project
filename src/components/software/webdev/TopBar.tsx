import React from "react";
import { Link } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 md:h-12 bg-gradient-to-r from-[#17164F] to-[#2a2870]">
      <div className="flex items-center h-full px-[60px] max-md:px-5">
        <Link
          to="/services/software"
          className="flex items-center gap-2 text-white hover:text-[#F9B050] transition-colors duration-300 font-lato font-semibold text-xs md:text-sm group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span>Go to Main Site</span>
        </Link>
      </div>
    </div>
  );
};
