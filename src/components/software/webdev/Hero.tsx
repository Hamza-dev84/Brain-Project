import React from "react";
import { Code2, Sparkles, Layers, ArrowRight, Zap, Code } from "lucide-react";
import { Button } from "@/components/software/ui/button";
import HeroLeadForm from '@/components/software/hero/HeroLeadForm';
import HeroTrustStrip from '@/components/software/hero/HeroTrustStrip';


interface HeroProps {
  onOpenPlanner: () => void;
}

// export const Hero: React.FC = () => {
export const Hero: React.FC<HeroProps> = ({ onOpenPlanner }) => {
  return (
    <section className="relative w-full overflow-hidden min-h-[760px] flex items-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/340228b3bce94242f093efa5fd4e151634ec692d?placeholderIfAbsent=true"
        alt="Expert Team of Web Developers Working On Website Development Services in Pakistan for a client"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40 z-10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl animate-float-slow z-10" />
      <Code2 className="absolute top-24 right-[10%] w-10 h-10 text-brand-secondary/30 animate-float-slow z-10 hidden lg:block" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 text-white space-y-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <Sparkles className="w-4 h-4 text-brand-secondary" />
            <span className="font-lato text-sm font-semibold text-white tracking-wide">
              Pakistan's Leading Web Development Agency
            </span>
          </div>

          <h1 className="font-raleway text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-white">
           Website Development Services in Pakistan
          </h1>

          <p className="font-lato text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            We build fast, modern, and 
             <a
                href="/services/software/seo-services-lahore"
                className="
    text-[#fab152]
    hover:text-[#c88e42]
    active:text-[#966a31]
    transition-colors
  "
              >
            {" "} search-friendly websites {" "}
            </a>
            for businesses across Pakistan. From company websites and 
             <a
                href="/services/software/web-design-services-lahore"
                className="
    text-[#fab152]
    hover:text-[#c88e42]
    active:text-[#966a31]
    transition-colors
  "
              >
             {" "}custom web design {" "}
</a>
            to eCommerce website development in Pakistan, our team creates websites that look professional, work smoothly, and help you get more leads, sales, and long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-brand-secondary text-brand-dark rounded-xl font-lato font-bold hover:bg-brand-secondary/90 hover:shadow-glow transition-all shadow-xl"
            >
              <span>Let's Build Your Site</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <HeroTrustStrip />
        </div>

        <div className="lg:col-span-5 w-full">
          <HeroLeadForm source="web-development" />
        </div>
      </div>
    </section>
  );
};