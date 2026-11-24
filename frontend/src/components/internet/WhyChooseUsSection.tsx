import React from "react";
import { DollarSign, Activity, Award } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Affordable Price",
    description:
      "We're the first ever fiber internet provider of Pakistan. We brought lightning-fast internet to Lahore 30 years ago and continue to deliver the fastest internet in Lahore and soon across Pakistan, going above and beyond the boundaries of speed and service.",
  },
  {
    icon: Activity,
    title: "Real-Time Service Monitoring",
    description:
      "Explore our budget-friendly plans designed to fit your needs and keep you connected without breaking the bank. This also applies to our custom plans.",
  },
  {
    icon: Award,
    title: "Pioneer in Fiber Internet",
    description:
      "Explore our budget-friendly plans designed to fit your needs and keep you connected without breaking the bank. This also applies to our custom plans.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bn-home py-24 md:py-32 relative overflow-hidden border-t border-[hsl(var(--bn-line)/0.4)]">
      <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-[hsl(var(--bn-violet)/0.3)] rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[hsl(var(--bn-red)/0.2)] rounded-full blur-[120px]" />

      <div className="relative max-w-screen-xl flex gap-12 items-center mx-auto px-5 max-md:flex-col max-md:gap-10">
        <div className="flex-1 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-[hsl(var(--bn-violet)/0.4)] rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <img decoding="async"
              src="/img/builder/9076d65f6215a99e.webp"
              alt="BrainNET fiber network operations"
              loading="lazy"
              className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex-1 max-w-2xl flex flex-col gap-6">
          <span className="bn-eyebrow self-start">Why choose us</span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] bn-display">
            What Makes <span className="bn-display-accent">Us Different?</span>
          </h2>

          <div className="flex flex-col gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="stagger-item">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover-lift group shadow-xl">
                    <div className="flex gap-5 items-start">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                        <div className="relative bg-accent/10 p-4 rounded-2xl">
                          <Icon className="w-8 h-8 text-accent icon-pulse" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-accent font-raleway font-bold text-[24px] leading-tight mb-2.5 max-md:text-[20px]">
                          {feature.title}
                        </h3>
                        <p className="text-white font-lato font-normal text-[16px] leading-6 max-md:text-[14px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
