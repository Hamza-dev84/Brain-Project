import React from "react";
import { MessageSquare, CreditCard, Award, ArrowRight } from "lucide-react";

export const Process: React.FC = () => {
  const steps = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/303cb58da7f9aa12b6e313ca69ab67dea2f4602e?placeholderIfAbsent=true",
      title: "Free Consultation",
      description:
        "Discuss your website requirements with our team before starting the project.",
      icon: MessageSquare,
      number: 1,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/4568950fa6fc0093b33b874bb7e08de62e9acc97?placeholderIfAbsent=true",
      title: "Flexible Payment Options",
      description:
        "Businesses can begin development with payment plans designed for startups and growing companies.",
      icon: CreditCard,
      number: 2,
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/d30fc0041abca97cd4e9b89d417dedad18554cc3?placeholderIfAbsent=true",
      title: "Full Website Ownership",
      description:
        "Once the project is complete, you have complete ownership and control of your website.",
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
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
            BrainSOFT
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
                <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-border">
                  {/* Image wrapper — GROUP MOVED HERE */}
                  <div className="relative group w-full overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[1.49] object-contain w-full"
                      loading="lazy"
                    />

                    {/* Image hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ArrowRight className="w-8 h-8 text-brand-dark" />
                      </div>
                    </div>
                  </div>

                  {/* Content — NO HOVER EFFECT */}
                  <div className="px-8 pb-8 pt-4 text-center">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3 font-raleway">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed font-lato">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-brand-secondary
                              transform scale-x-0 group-hover:scale-x-100
                              transition-transform duration-300 origin-left"
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
