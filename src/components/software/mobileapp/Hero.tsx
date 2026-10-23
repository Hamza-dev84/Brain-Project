import React from "react";
import { Rocket, Sparkles, Smartphone } from "lucide-react";
import { Button } from "@/components/software/ui/button";
import HeroLeadForm from "@/components/software/hero/HeroLeadForm";
import HeroTrustStrip from "@/components/software/hero/HeroTrustStrip";


const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[760px] flex items-center text-white">
      <img
        src="https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/452a52107d35f3427331d3e23deb4696535e7d1f?placeholderIfAbsent=true"
        alt="An Expert Mobile App Developer in Pakistan Drawing the Mobile App Architecture"
        className="absolute h-full w-full object-cover inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40 z-10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 animate-fadeIn text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Sparkles size={16} className="text-brand-secondary" />
            <span className="font-lato text-sm font-semibold">
              Transform Your Ideas
            </span>
          </div>

          <h1 className="font-raleway text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] font-extrabold text-white">
            Mobile App Developers in Pakistan
          </h1>

          <p className="font-lato text-lg md:text-xl font-medium text-white/85 max-w-2xl leading-relaxed">
            We help businesses turn ideas into fast, reliable, and easy-to-use
            mobile apps. As experienced mobile app developers in Pakistan, we
            build custom Android, iOS, and cross-platform apps that support
            business growth, better 
               <a
                href="/services/software/web-design-services-pakistan"
                className="
    text-[#fab152]
    hover:text-[#c88e42]
    active:text-[#966a31]
    transition-colors
  "
              >
            {" "} user experience, {" "}
            </a>
            and long-term product success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              className="group bg-brand-secondary text-brand-dark inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-lato font-bold hover:bg-brand-secondary/90 hover:shadow-glow transition-all shadow-xl"
              onClick={() => (window.location.href = "/contact-us")}
            >
              <Rocket size={20} />
              <span>Let's Build Your App</span>
            </button>
          </div>

          <HeroTrustStrip />
        </div>

        <div className="lg:col-span-6 w-full">
          <HeroLeadForm source="mobile-app" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
