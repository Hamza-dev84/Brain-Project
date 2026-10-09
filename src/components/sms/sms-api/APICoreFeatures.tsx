import React from "react";
import { Languages, Webhook, BookOpen, CheckCircle2 } from "lucide-react";
import IconContainer from "@/components/sms/common/IconContainer";

const APICoreFeatures = () => {
  const features = [
    {
      title: "Unicode & Long Messages",
      description:
        "Support for SMS in Urdu and English coupled with extended text messages, which makes sure clear communication, Perfect for Pakistan's audiences.",
      icon: Languages,
    },
    {
      title: "Custom Webhooks",
      description:
        "Get instant updates with flexible webhooks, which informs you in real-time about the status of your SMS campaigns and automates your process.",
      icon: Webhook,
    },
    {
      title: "User-Friendly Docs",
      description:
        "Clear guides with practical examples to help your developers integrate our SMS API with ease.",
      icon: BookOpen,
    },
    {
      title: "Delivery Reports (DLR)",
      description: "Track every message with Transaction ID-matched status updates.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background" aria-labelledby="core-features">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            id="core-features"
            className="text-primary text-4xl md:text-5xl font-bold font-raleway mb-4"
          >
            Core Features
          </h2>
          <h3 className="text-primary text-2xl md:text-3xl font-semibold font-raleway">
            of Our SMS API in Pakistan
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <article key={index} className="group relative">
              <div className="relative bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-border hover:border-accent">
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <IconContainer
                      icon={feature.icon}
                      size="large"
                      className="group-hover:scale-110"
                    />
                  </div>

                  <h4 className="text-primary text-xl font-bold font-raleway mb-3">
                    {feature.title}
                  </h4>

                  <p className="text-muted-foreground text-base font-lato leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APICoreFeatures;
