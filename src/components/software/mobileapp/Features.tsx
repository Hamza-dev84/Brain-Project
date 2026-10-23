import React from "react";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Shield,
  Globe2,
  Zap,
  Sparkles,
} from "lucide-react";

import BusinessSolutionsImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/MobileBusiness.webp";
import StrongProductPlanningImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/StrongProductPlanning.webp";
import DedicatedProjectTeamImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/DedicatedProjectTeam.webp";
import SecureandScalableBuildsImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/SecureandScalableBuilds.webp";
import CrossPlatformSupportImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/CrossPlatformSupport.webp";
import LaunchSupportImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/LaunchSupport.webp";
import MobileAppbgImage from "@/assets/software/BrainSOFT Mobile App Dev Page/MobileApp_webp/MobileAppbgImg.webp";

const Features: React.FC = () => {
  const features = [
    {
      image: BusinessSolutionsImage,
      title: "Business-Focused App Solutions",
      description: (
        <>
          We build apps with clear business goals in mind. Whether you need
          customer engagement, internal workflow support, or
          <a
            href="/services/software/web-development-pakistan"
            className="
    text-[#29206F]
    hover:text-[#3E3296]
    active:text-[#211957]
    transition-colors
  "
          >
            {" "} online selling features, {" "}
          </a>
          we create apps that serve real business use.
        </>
      ),
    },
    {
      image: StrongProductPlanningImage,
      title: "Strong Product Planning",
      description:
        "Before development starts, we study your idea, users, features, and priorities. This helps us build the right app roadmap and avoid costly mistakes later.",
    },
    {
      image: DedicatedProjectTeamImage,
      title: "Dedicated Project Team",
      description:
        "You work with a focused team that stays connected from start to finish. This keeps communication simple and makes updates, reviews, and approvals easier.",
    },
    {
      image: SecureandScalableBuildsImage,
      title: "Secure and Scalable Builds",
      description:
        "We develop mobile apps with clean architecture, stable performance, and room for future growth. Your app is built to handle real users, changing needs, and feature expansion.",
    },
    {
      image: CrossPlatformSupportImage,
      title: "Cross-Platform and Native Support",
      description:
        "Our team builds Android, iOS, and cross-platform mobile apps based on your project needs, budget, and launch goals. We help you choose the right path from day one.",
    },
    {
      image: LaunchSupportImage,
      title: "Launch and Post-Launch Support",
      description:
        "We do not stop at development. We help with testing, deployment, app store submission, updates, and support after launch so your app keeps running smoothly.",
    },
  ];

  return (

    <section className="relative flex w-full flex-col items-center mt-0 px-[60px] max-md:mt-10 max-md:px-5 overflow-hidden">
      {/* Background Image */}
      <img
        src={MobileAppbgImage}
        alt="Mobile App Development Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Decorative Icons */}
      <Sparkles className="absolute top-10 right-10 w-8 h-8 text-brand-secondary/20 animate-pulse-slow z-10" />

      <Shield className="absolute bottom-20 left-10 w-10 h-10 text-brand-primary/20 animate-float z-10" />

      {/* Content */}
      <div className="relative z-10 w-full my-28">
        <div className="text-center mb-4">
          <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-6 py-2 rounded-full font-lato font-semibold text-sm uppercase tracking-wide mb-4">
            Why We Are The Go-To
          </div>

          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-secondary">
              Mobile App Development Company
            </span>
            <br />
            in Pakistan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 max-w-7xl w-full mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
            group 
            bg-white/90 
            backdrop-blur-sm
            rounded-2xl 
            p-8 
            border 
            border-neutral-border 
            hover:border-brand-secondary 
            hover:shadow-xl 
            transition-all 
            duration-300 
            hover:-translate-y-2 
            relative 
            overflow-hidden
          "
            >
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500"></div>

              <div className="w-[120px] h-[120px] mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24"
                />
              </div>

              <h3 className="software-card-title text-center">
                {feature.title}
              </h3>

              <p className="software-card-description text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
