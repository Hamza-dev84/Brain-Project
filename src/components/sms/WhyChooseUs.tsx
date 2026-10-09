import React from "react";
import IconContainer from "@/components/sms/common/IconContainer";
import {
  PackageCheck,
  DollarSign,
  Filter,
  Settings,
  Database,
  TrendingUp,
  Headset,
  CalendarCheck,
} from "lucide-react";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import StaggeredGrid from "@/components/sms/animations/StaggeredGrid";

const WhyChooseUs = () => {
  const features = [
    {
      title: "99.9% Delivery Assurance",
      description: "Guaranteed reach across all networks, including ported numbers (MNP).",
      icon: <IconContainer icon={PackageCheck} size="large" />,
    },
    {
      title: "Affordable Pricing Plans",
      description: "We go as low as Rs. 2.7/SMS (cheaper than competitors).",
      icon: <IconContainer icon={DollarSign} size="large" />,
    },
    {
      title: "PTA-Compliant Routes",
      description:
        "We're an official PTA-Licensed SMS Gateway in Pakistan, this keeps you safe from any legal issues when it comes to sending Bulk SMS in Pakistan.",
      icon: <IconContainer icon={Filter} size="large" />,
    },
    {
      title: "Feature-Rich Client Portal",
      description:
        "Our self-developed SMS management portal for clients provides all the features you need, be it basic features like campaign scheduling to advanced AI-powered Analytics.",
      icon: <IconContainer icon={Settings} size="large" />,
    },
  ];

  const additionalFeatures = [
    {
      title: "Powered by Local Data Centers",
      description: (
        <>
          our SMS Services in pakistan are Hosted on Our own
          <a
            href="/services/cloud/data-center-solutions-pakistan"
            className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
          >
            {" "} Local Data Centers in Pakistan, {" "}
          </a>
          coupled with multiple upstream connectivity which makes sure that your SMSes are delivered even at peak network hours.
        </>
      ),
      icon: <IconContainer icon={Database} size="large" />,
    },
    {
      title: "Scalable solutions",
      description:
        "From 1,000 SMS to more than 10 Million SMS, our platform scales up with you as per your needs without any disruptions.",
      icon: <IconContainer icon={TrendingUp} size="large" />,
    },
    {
      title: "24/7 Enterprise Support",
      description:
        "We don't make fake 24/7 support claims, our support is truly 24/7 backed by phone, email, and WhatsApp with strict SLAs and maximum availability of our experts.",
      icon: <IconContainer icon={Headset} size="large" />,
    },
    {
      title: "Free Consultation",
      description:
        "We have a 40-year IT and telecom experience, and are well versed in providing different guidance for different industries. That's where our seasoned experts come in and help you optimize your SMS plan.",
      icon: <IconContainer icon={CalendarCheck} size="large" />,
    },
  ];

  const renderCards = (items: typeof features) =>
    items.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 group border border-border hover:border-primary/20 hover:-translate-y-1"
      >
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        <h3 className="text-lg font-raleway font-bold text-primary mb-3">{feature.title}</h3>
        <p className="text-muted-foreground font-lato text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    ));

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4 font-raleway">
              Many reasons why we are the go-to
              <br />
              SMS service provider in Pakistan
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggeredGrid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {renderCards(features)}
        </StaggeredGrid>

        <div className="my-16" />

        <StaggeredGrid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {renderCards(additionalFeatures)}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default WhyChooseUs;
