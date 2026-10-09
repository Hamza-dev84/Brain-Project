import React from "react";
import { BadgeCheck, ShieldCheck, CheckCircle2, Type, TrendingUp, LucideIcon } from "lucide-react";
import IconContainer from "@/components/sms/common/IconContainer";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";

interface FeatureCardProps {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, icon, title, description, imageAlt }) => (
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 rounded-xl bg-card hover:shadow-elegant transition-all">
    <img decoding="async"
      src={image}
      alt={imageAlt}
      loading="lazy"
      className="w-full md:w-48 h-56 object-cover rounded-lg shadow-md"
    />
    <div className="flex-1 space-y-3">
      <IconContainer icon={icon} size="medium" />
      <h3 className="text-primary text-2xl font-heading font-bold">{title}</h3>
      <p className="text-foreground font-body text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const BrandedFeatures: React.FC = () => {
  const features = [
    {
      image:
        "/img/builder/909ca2960a99fcd8.webp",
      icon: BadgeCheck,
      title: "Build instant trust",
      description:
        'Create a Professional image for your brand by branding your bulk SMS in pakistan using Custom Masks instead of a shortcode ("Jazz" instead of "8558")',
      imageAlt: "Build instant trust illustration",
    },
    {
      image:
        "/img/builder/dc0a218ffe6320b7.webp",
      icon: ShieldCheck,
      title: "PTA Compliance & Fraud Prevention",
      description:
        "Stay compliant with Pakistan's DND regulations, delivering messages only to opted-in users for ethical outreach while protecting your brand from spoofing.",
      imageAlt: "PTA Compliance illustration",
    },
    {
      image:
        "/img/builder/07acffd471a6033b.webp",
      icon: CheckCircle2,
      title: "Guaranteed delivery",
      description:
        "As a PTA-Approved Operator, We Make Sure Your SMS Campaigns Achieve Maximum Reach Across All Pakistani Networks, Including Ported Numbers (MNP).",
      imageAlt: "Guaranteed delivery illustration",
    },
    {
      image:
        "/img/builder/36d895570968464b.webp",
      icon: Type,
      title: "Tailored Message Formatting",
      description:
        "Craft visually appealing SMS with Unicode support for Urdu or English, making sure that your brand's tone resonates with diverse Pakistani audiences.",
      imageAlt: "Message formatting illustration",
    },
    {
      image:
        "/img/builder/0086d9d83e7081ec.webp",
      icon: TrendingUp,
      title: "Higher Engagement & CTR",
      description:
        "Recognized messages get read and acted upon, improving your campaign ROI.",
      imageAlt: "Higher engagement illustration",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-6 lg:px-12 py-20">
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-2xl md:text-3xl mb-2">
            Why Choose our
          </p>
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
            Branded SMS Service in Pakistan?
          </h2>
        </div>
      </AnimateOnScroll>
      <StaggeredGrid
        className="grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        animation="fade-up"
        staggerDelay={0.15}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </StaggeredGrid>
    </section>
  );
};

export default BrandedFeatures;
