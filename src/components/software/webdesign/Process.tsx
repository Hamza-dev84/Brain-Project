import React from "react";
import { MessageSquare, CreditCard, Award } from "lucide-react";

export const Process: React.FC = () => {
  const steps = [
    {
      image:
        "/img/builder/303cb58da7f9aa12.webp",
      title: "Free Consultation",
      description: "Share your idea → Get a mockup + quote in 24 hours.",
      icon: MessageSquare,
      number: 1,
    },
    {
      image:
        "/img/builder/4568950fa6fc0093.webp",
      title: "Flexible Payments",
      description: "30% upfront, 70% on delivery.",
      icon: CreditCard,
      number: 2,
    },
    {
      image:
        "/img/builder/d30fc0041abca97c.webp",
      title: "Lifetime Ownership",
      description: "Full design files + code handed over.",
      icon: Award,
      number: 3,
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-neutral-50 max-md:py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-16 max-md:mb-10">
          <span className="block text-2xl font-medium text-brand-dark mb-2 font-lato">
            Start Your Project with
          </span>
          <span className="block text-5xl font-bold text-foreground font-raleway max-md:text-4xl">
            BrainSOFT Today!
          </span>
        </h2>

        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-border"
                >
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Image */}
                  <div className="w-full pt-6">
                    <img decoding="async"
                      src={step.image}
                      alt={step.title}
                      className="aspect-[1.49] object-contain w-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8 pt-4 text-center">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3 font-raleway">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed font-lato">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
