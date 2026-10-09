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
        "BSMS is powered by Brain Telecommunication Ltd., founded and overlooked by the minds who first uncovered and exposed the world's First PC virus, which is the reason why so many industries trust us with their sensitive OTP SMS.",
      icon: <IconContainer icon={Award} size="large" />,
    },
    {
      title: "Instant OTP Delivery Guaranteed",
      description:
        "Our OTP SMS in specific Verifies users in milliseconds as it goes through dedicated high-priority telecom routes, so our OTPs arrive Instantly, making our OTP SMS service in Pakistan truly premium.",
      icon: <IconContainer icon={Zap} size="large" />,
    },
    {
      title: "Elite Security",
      description:
        "Elite Security for our OTP SMS which has TLS-Encryption and full compliance of PTA's Cyber-threat detection and incident reporting (CTDISR) with regular third-party audits.",
      icon: <IconContainer icon={ShieldCheck} size="large" />,
    },
    {
      title: "Elastic Scalability",
      description:
        "Our SMS Portal auto-scales up and down with your SMS Needs accordingly in real-time, leaving you relaxed with no pre-provisioning, no delays, and no downtime.",
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
