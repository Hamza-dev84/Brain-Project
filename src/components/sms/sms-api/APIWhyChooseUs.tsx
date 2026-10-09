import React from "react";
import { Network, Rocket, MapPin } from "lucide-react";
import IconContainer from "@/components/sms/common/IconContainer";

const APIWhyChooseUs = () => {
  const reasons = [
    {
      title: "Unrivaled Network Reliability",
      description:
        "Enjoy 99.9% uptime with instant delivery across all major telecom networks of Pakistan, which helps your company's SMS reach millions of numbers in Pakistan with ease.",
      icon: Network,
    },
    {
      title: "Instant Setup, Free Trial",
      description:
        "Want to test our service before you consider us? Test our Reliable SMS API which comes with free credits with thorough support from our SMS experts.",
      icon: Rocket,
    },
    {
      title: "Local Expertise, Global Standards",
      description:
        "With more than a decade of experience, BSMS ensures PTA-compliant messaging with Unicode support for Urdu, which is perfect for Pakistan's audiences.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" aria-labelledby="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="why-choose-us"
            className="text-primary text-4xl md:text-5xl font-bold font-raleway mb-3"
          >
            Why choose our
          </h2>
          <h3 className="text-primary text-3xl md:text-4xl font-bold font-raleway">
            SMS Gateway in Pakistan?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <article key={index} className="group">
              <div className="bg-card rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-accent shadow-lg">
                <div className="mb-6 flex justify-center">
                  <IconContainer
                    icon={reason.icon}
                    size="large"
                    className="group-hover:scale-110"
                  />
                </div>

                <h4 className="text-primary text-2xl font-bold font-raleway mb-4 text-center">
                  {reason.title}
                </h4>

                <p className="text-muted-foreground text-base font-lato leading-relaxed text-center">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIWhyChooseUs;
