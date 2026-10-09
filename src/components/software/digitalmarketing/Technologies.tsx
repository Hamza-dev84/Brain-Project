import React from "react";
import { BarChart3, Search, Globe, Megaphone, Facebook, Linkedin, FileText, ShoppingBag, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/software/animations/StaggerContainer";

const categories = [
  {
    title: "Search & Analytics",
    tools: [
      { icon: BarChart3, name: "Google Analytics" },
      { icon: Search, name: "Google Search Console" },
      { icon: Globe, name: "SEMrush" },
    ],
  },
  {
    title: "Advertising Platforms",
    tools: [
      { icon: Megaphone, name: "Google Ads" },
      { icon: Facebook, name: "Facebook Ads" },
      { icon: Linkedin, name: "LinkedIn Ads" },
    ],
  },
  {
    title: "Content & Media",
    tools: [
      { icon: FileText, name: "WordPress" },
      { icon: ShoppingBag, name: "Shopify" },
      { icon: Wrench, name: "Content Marketing Tools" },
    ],
  },
];

export const Technologies: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-brand-dark text-center py-20 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide">
            Technology Stack
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-brand-dark">Technologies & Platforms </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              We Work With
            </span>
          </h2>
          <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto">
            Our team uses modern marketing tools and platforms to manage campaigns efficiently.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {categories.map((category, catIndex) => (
          <StaggerItem key={catIndex}>
            <div className="bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-raleway font-bold text-xl text-brand-dark mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="group flex items-center gap-3 p-3 rounded-xl border-2 border-brand-dark/10 hover:border-brand-secondary transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="font-raleway font-bold text-sm text-brand-dark">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
