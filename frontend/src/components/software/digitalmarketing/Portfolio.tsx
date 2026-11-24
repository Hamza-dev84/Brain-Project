import React from "react";
import { Eye, UserCheck, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/software/animations/StaggerContainer";

const goals = [
  { icon: Eye, title: "Increasing Visibility", description: "Get your brand seen by the right audience across search and social." },
  { icon: UserCheck, title: "Attracting Qualified Leads", description: "Target potential customers who are actively looking for your services." },
  { icon: TrendingUp, title: "Improving Long-Term Brand Growth", description: "Build sustainable online presence that compounds over time." },
];

export const Portfolio: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
              Our Impact
            </div>
            <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              See How Businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                Grow with Our Marketing
              </span>
            </h2>
            <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto">
              BrainSOFT has partnered with various companies, including those in e-commerce, local services, and real estate. We focus our marketing campaigns on three key goals:
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <StaggerItem key={index}>
              <div className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500" />
                <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <goal.icon className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="font-raleway font-bold text-xl text-brand-dark mb-3">{goal.title}</h3>
                <p className="font-lato text-neutral-medium text-sm">{goal.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto text-center mt-12">
            Many businesses in Pakistan want a digital marketing agency that knows local and global trends. Our experience allows us to build strategies that perform well in competitive markets.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
