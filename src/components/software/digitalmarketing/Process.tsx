import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";

const steps = [
  {
    title: "Business Analysis",
    description: "We first understand the business model, target audience, and competitors. This helps us identify opportunities where digital marketing can bring the most value.",
  },
  {
    title: "Market & Keyword Research",
    description: "Our team studies how customers search online. This research shows the best keywords. It also identifies top platforms. These help Lahore businesses connect with potential clients.",
  },
  {
    title: "Strategy Development",
    description: "We create a marketing plan based on research. It may include SEO, social media marketing, and advertising campaigns.",
  },
  {
    title: "Campaign Execution",
    description: "Our marketing team launches campaigns across search engines and social platforms. This ensures consistent visibility and brand awareness.",
  },
  {
    title: "Performance Tracking & Improvement",
    description: "Analytics tools watch every campaign. Data helps us improve marketing performance and increase results over time.",
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <ScrollReveal animationType="fade-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
              <img loading="lazy" decoding="async"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital Marketing Process"
                className="relative w-full rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal animationType="fade-right">
            <div>
              <div className="mb-8">
                <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
                  Our Process
                </div>
                <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                    Our Digital Marketing
                  </span>{" "}
                  Process
                </h2>
                <p className="font-lato text-lg text-neutral-medium max-w-3xl">
                  Every business has different marketing goals. That is why BrainSOFT follows a clear process before launching any campaign. This approach helps businesses get better results and avoid wasting time or budget.
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-0.5 flex items-center gap-2">
                      <span className="font-raleway font-bold text-brand-secondary text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-brand-secondary group-hover/item:text-brand-primary group-hover/item:scale-110 transition-all" />
                    </div>
                    <div>
                      <h4 className="font-raleway font-bold text-brand-dark group-hover/item:text-brand-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="font-lato text-sm text-neutral-medium leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
