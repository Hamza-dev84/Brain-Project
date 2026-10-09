import React from 'react';
import { Link } from '@/lib/router-compat';
import { ArrowLeft } from 'lucide-react';

const TopNavBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 md:h-12 bg-gradient-to-r from-[#17164F] to-[#2a2870]">
      <div className="flex items-center h-full px-[60px] max-md:px-5">
        <Link 
          to="/services/software"
          className="flex items-center gap-2 text-white hover:text-[#F9B050] transition-colors text-xs md:text-sm font-semibold group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Go to Main Site</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
