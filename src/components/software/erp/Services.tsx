import React, { useEffect, useRef } from "react";
import { ServiceCardUnified } from "@/components/software/ui/ServiceCardUnified";

interface ServicesProps {
  onOpenPlanner?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenPlanner }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-scale-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      image: "/img/builder/08bdb872e8eaaf27.webp",
      title: "ERP Implementation Planning",
      description: "Risk‑Aware Roadmaps with phased rollouts and clear checkpoints for successful deployment.",
    },
    {
      image: "/img/builder/db48e5ce87c1d944.webp",
      title: "Oracle EBS Implementation",
      description: "End‑to‑End Configuration for Finance, SCM, HR, Procurement, and more modules aligned with local compliance and industry-specific standards.",
    },
    {
      image: "/img/builder/e4d96af9fc0b7ebc.webp",
      title: "ERP Sustaining & Customization",
      description: "Ongoing Optimization with real‑time KPI dashboards and IoT integrations for continuous improvement.",
    },
    {
      image: "/img/builder/ac0ca20b25c3f00b.webp",
      title: "ERP Training",
      description: "Role‑Based Workshops from shop floor users to executive dashboards for complete team enablement.",
    },
    {
      image: "/img/builder/d5d02ed2eb82cf27.webp",
      title: "Business Process Re-Engineering",
      description: "Lean Workflows that simplify approval Management, automate routine tasks, and cut-short extra processes.",
    },
    {
      image: "/img/builder/03ddd690d1db78aa.webp",
      title: "ERP Consulting",
      description: "Strategic Alignment with scalability blueprints and roadmap for sustainable business growth.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-6 md:px-8 lg:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            OUR SERVICES
          </div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Precision ERP
            </span>{" "}
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCardUnified {...service} onClick={onOpenPlanner} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
