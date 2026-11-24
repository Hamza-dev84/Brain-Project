import React from "react";
import { Building2, ShoppingCart, MapPin, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/software/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/software/animations/StaggerContainer";

const industries = [
  {
    icon: Building2,
    title: "Real Estate Businesses",
    description:
      "Real estate companies rely heavily on online visibility to attract buyers and investors. Brain Soft helps property businesses connect with potential clients using search engines, advertising campaigns, and social media promotion.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Stores",
    description:
      "Online stores depend on traffic and conversions. We help eCommerce brands boost search visibility, run targeted ads, and increase sales. Our focus is on smart digital media marketing in Lahore.",
  },
  {
    icon: MapPin,
    title: "Local Service Businesses",
    description:
      "Local companies need to show up in search results to help customers find nearby services. Brain Soft helps businesses boost their local visibility and draw in more customers.",
  },
  {
    icon: Rocket,
    title: "Growing Businesses & Startups",
    description:
      "Many startups in Lahore seek affordable digital marketing services to grow online. Brain Soft helps growing businesses with scalable marketing strategies to boost traffic, leads, and brand awareness.",
  },
];

export const Industries: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
              Industries We Serve
            </div>
            <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Digital Marketing for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
                Every Industry
              </span>
            </h2>
            <p className="font-lato text-lg text-neutral-medium max-w-3xl mx-auto">
              BrainSOFT offers digital marketing services to help businesses boost their online visibility and grow their customer base over time.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <StaggerItem key={index}>
              <div className="group bg-white rounded-2xl p-8 border border-neutral-border hover:border-brand-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500" />
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="card-title">{industry.title}</h3>
                <p className="card-description">{industry.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
