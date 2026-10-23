import React from "react";
import {
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
  Type,
  TrendingUp,
  LucideIcon,
  Send,
  Zap,
  Code2,
  Users,
  Hash,
} from "lucide-react";
import IconContainer from "@/components/sms/common/IconContainer";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";

interface FeatureCardProps {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  example?: string;
  features?: string[];
  imageAlt: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  icon,
  title,
  example,
  features,
  description,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 p-6 rounded-xl bg-card hover-lift hover:shadow-elegant transition-all h-full w-full">
      <img
        src={image}
        alt={imageAlt}
        // className="w-full md:w-48 h-56 object-cover rounded-lg shadow-md"
        className="w-full md:w-48 h-56 object-cover rounded-lg shadow-md flex-shrink-0"
      />
      <div className="flex-1 space-y-3">
        <IconContainer icon={icon} size="medium" />
        <h3 className="text-primary text-2xl font-heading font-bold">
          {title}
        </h3>
        {/* main description */}
        <p className="text-foreground font-body text-base leading-relaxed">
          {description}
        </p>

        {/* example box (highlighted) */}
        {example && (
          <div className="bg-muted border-l-4 border-primary p-3 rounded-r-md text-sm italic">
            {example}
          </div>
        )}

        {/* bullets */}
        {features && (
          <ul className="list-disc pl-5 space-y-1 text-foreground font-body text-base">
            {features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
const Features: React.FC = () => {
  const features = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/dc0a218ffe6320b77b398790b79c5d210a9e35d8?placeholderIfAbsent=true",
      icon: Send,
      title: "Bulk Branded SMS Pakistan",
      description:(
        <>
        Send thousands of messages in seconds with your brand name as the sender. Perfect for 
          <a
                href="/services/sms/sms-marketing-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
        {" "} promotions, {" "}
        </a>
        sale announcements, event invites, and seasonal campaigns. This includes Eid, Ramadan, Independence Day, and more.
        </>
      ),
      imageAlt:
        "BSMS team reviewing PTA and DND compliance dashboard for its Branded SMS service in Pakistan.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/909ca2960a99fcd892b6fb1003822b58e78ec7dd?placeholderIfAbsent=true",
      icon: Zap,
      title: "Transactional SMS & OTP Verification",
      description:
        "Order confirmed? Payment received? OTP required? Our SMS gateway sends messages in real time with very low latency. It's made for banks, fintech apps, and e-commerce sites that need quick delivery.",
      imageAlt:
        "Smiling businessman in office receiving Branded SMS notification on smartphone.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/07acffd471a6033bd647e3d3238c10d105f2db9f?placeholderIfAbsent=true",
      icon: Code2,
      title: "SMS API Pakistan",
      description:(
      <>
      Add SMS to your 
          <a
                href="/services/software/web-development-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
        {" "} website, {" "}
        </a>
          <a
                href="/services/software/mobile-app-developers-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
        {" "} mobile app,{" "}
</a>
        CRM, or 
          <a
                href="/services/software/erp-software-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
        {" "} ERP system {" "}
        </a>
        with our simple REST-based HTTP SMS API. Free with every account.
        </>  
        ),
      features: [
        "Supports PHP, Python, Node.js, Java, and .NET",
        "JSON response format with real-time delivery reports",
        "Webhook support for instant delivery callbacks",
        "Sandbox and test environments are available",
        "Ready-made plugins for WooCommerce, Shopify, and WHMCS",
      ],
      imageAlt:
        "Nationwide Coverage of Branded SMS Service in Pakistan Displayed by a BSMS Professional",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/0086d9d83e7081ec92c75e77b3dde4a93898e45e?placeholderIfAbsent=true",
      icon: Hash,
      title: "Short Code SMS Service in Pakistan",

      description:
        "Get a dedicated 4–6 digit short code for your brand. Enable two-way communication — your customers can SMS you, and you can reply.",

      example: "Text WIN to 8080 to enter our lucky draw",

      features: [
        "Both shared and dedicated short codes are available depending on your requirements",
      ],

      imageAlt:
        "Laptop and phone showing engagement rate analytics and promotional branded SMS examples.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/5e0ce357902e465698cec931fbe28c36/36d895570968464b6154ac15176fe0ce06e19576?placeholderIfAbsent=true",
      icon: Users,
      title: "SMS Reseller Panel Pakistan",
      description:
        "Launch your own SMS business under your own brand. Our white-label reseller portal lets you take charge. You can set your own prices, manage clients, and work without supervision.",
      imageAlt:
        "Workspace with coffee, notebook of SMS campaign ideas, and phone displaying branded text messages.",
    },
  ];
  return (
    <section id="services" className="container mx-auto px-6 lg:px-12 py:8 md:py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-primary font-heading font-semibold text-2xl md:text-3xl mb-2">
            What We Offer
          </p>
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl">
            Branded SMS Service in Pakistan?
          </h2>
        </div>
      </AnimateOnScroll>
      <StaggeredGrid
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch"
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
export default Features;