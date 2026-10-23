import React from "react";
import SectionHeader from "@/components/sms/common/SectionHeader";
import FeatureCard from "@/components/sms/common/FeatureCard";
import CTAButton from "@/components/sms/common/CTAButton";
import { spacing, container } from "@/styles/design-tokens";
import { cn } from "@/lib/utils";
import IconContainer from "@/components/sms/common/IconContainer";
import { Award, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";
// import {Link} from "react-router-dom";
import { Link } from "@/lib/router-compat";

const OTPFeatures = () => {

  const features = [
    {
      title: "40+ Years of Trust",
      description:
        "BSMS provides stable OTP SMS services in Pakistan backed by experienced telecom infrastructure. Businesses depend on our platform for reliable mobile number verification online Pakistan systems.",
      icon: <IconContainer icon={Award} size="large" />,
    },
    {
      title: "Instant OTP Delivery",
      description:
        "We designed our infrastructure for rapid OTP code delivery in Pakistan. Customers receive verification codes in seconds when they enter their OTP to log in or sign up.",
      icon: <IconContainer icon={Zap} size="large" />,
    },
    {
      title: "Enterprise Security",
      description:
        "BSMS keeps user accounts safe with secure OTP verification. This stops unauthorized access and boosts authentication security.",
      icon: <IconContainer icon={ShieldCheck} size="large" />,
    },
    {
      title: "Scalable Messaging Platform",
      description:
        "No matter if you send hundreds or millions of OTPs daily, BSMS handles growth with ease. It's perfect for apps that need OTP SMS services or real-time verification.",
      icon: <IconContainer icon={TrendingUp} size="large" />,
    },
  ];

  return (
    <section className={cn("w-full", spacing.sectionVertical)}>
      <div className={cn(container.standard, spacing.containerHorizontal)}>
        <SectionHeader
          title="Why Pakistan's Top Enterprises Choose Us for OTP SMS Services"
          variant="single"
        />

        <StaggeredGrid
          className="flex items-start justify-center gap-8 w-full flex-wrap lg:flex-nowrap"
          animation="fade-up"
          staggerDelay={0.15}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="centered"
            />
          ))}
        </StaggeredGrid>

        <div className="flex justify-center mt-12">
          <Link to="/services/sms/contact">
            <CTAButton variant="secondary" size="large" className="cursor-pointer">
              See How It Works →
            </CTAButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OTPFeatures;
