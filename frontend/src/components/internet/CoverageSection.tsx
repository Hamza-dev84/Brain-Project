import React from "react";
import { MapPin } from "lucide-react";

const CoverageSection = () => {
  return (
    <section className="w-full min-h-[471px] relative flex items-center justify-center bn-home overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-slow shadow-[0_0_20px_rgba(236,28,35,0.8)]" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse-slow shadow-[0_0_20px_rgba(236,28,35,0.8)]" />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse-slow shadow-[0_0_20px_rgba(236,28,35,0.8)]" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-slow shadow-[0_0_20px_rgba(236,28,35,0.8)]" />

        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="#EC1C23" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="66%" y1="33%" x2="50%" y2="66%" stroke="#EC1C23" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="50%" y1="66%" x2="75%" y2="50%" stroke="#EC1C23" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      <div className="absolute flex items-center justify-center bg-black/20 inset-0">
        <div className="text-center max-w-[1230px] px-5 relative z-10">
          <div className="flex justify-center mb-6">
            <span className="bn-eyebrow">
              <MapPin className="w-3.5 h-3.5" /> Coverage
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] bn-display mb-5">
            Internet Coverage Areas in Lahore
          </h2>
          <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-xl md:text-2xl leading-relaxed mb-10">
            BrainNET Fiber provides internet services across major residential and commercial areas of Lahore,
            including:
          </p>
          <button className="text-white font-display font-semibold text-lg cursor-pointer transition-all duration-300 bg-accent px-8 py-5 rounded-full border-none hover:scale-105 shadow-[0_20px_50px_-15px_hsl(var(--bn-red)/0.7)]">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
