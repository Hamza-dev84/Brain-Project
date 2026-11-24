import React from "react";
import { Search, Share2, Target, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/software/animations/StaggerContainer";

export const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Search visibility is essential for business growth. BrainSOFT helps websites show up on Google when people search for services in Lahore. We focus on keyword research, technical upgrades, and content strategy to boost organic traffic.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "We are a social media marketing agency in Lahore. We manage brand presence on Facebook, Instagram, LinkedIn, and more. Social media helps businesses stay visible and connect with customers daily.",
    },
    {
      icon: Target,
      title: "Digital Advertising Campaigns",
      description:
        "Our team manages paid advertising campaigns across Google Ads and social platforms. BrainSOFT creates targeted ads to reach the right customers and generate leads in a short amount of time.",
    },
    {
      icon: Globe,
      title: "Website Marketing & Optimization",
      description:
        "A website should work as a business asset. We enhance website structure, speed, and content to help visitors stay longer and take action.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
              Our Services
            </div>
            <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                Digital Marketing Services
              </span>{" "}
              in Lahore
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-brand-secondary relative overflow-hidden h-full">
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500" />
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
