import React from "react";
import { UserPlus, BookOpen, TrendingDown, ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface StartCard {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  features: string[];
  cta: string;
  link?: string;
  external?: boolean;
  internal?: boolean;
  scrollTo?: string;
}

const cards: StartCard[] = [
  {
    title: "Free Sign-Up",
    description:
      "Open a free account in minutes and start sending messages right away with complimentary credits.",
    icon: UserPlus,
    link: "https://cp.bsms.pk/login/",
    badge: "FREE",
    features: ["✓ No Credit Card Required", "✓ Instant Activation", "✓ Full API Access"],
    cta: "Get Free Credits",
    external: true,
  },
  {
    title: "Developer-Friendly Documentation",
    description:
      "Access our step-by-step PDF guide built for developers, complete with best practices for integrating and using our SMS API in Pakistan.",
    icon: BookOpen,
    badge: "PDF + Online",
    scrollTo: "api-documentation",
    features: ["1. Quick Start (5 min)", "2. API Reference", "3. Code Examples", "4. Best Practices"],
    cta: "View Documentation",
  },
  {
    title: "Flexible, Affordable Pricing",
    description:
      "We provide competitive rates with scalable, volume-based discounts, and are known for giving cost-effective solutions tailored towards enterprise needs.",
    icon: TrendingDown,
    badge: "Volume Discounts",
    internal: true,
    features: ["Starter: 5K SMS", "Growth: 50K SMS", "Enterprise: Custom"],
    cta: "View Pricing",
  },
];

const CardContent = ({ card }: { card: StartCard }) => {
  const Icon = card.icon;
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {card.badge}
        </div>
      </div>

      <div className="relative p-8 pt-12">
        <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-accent/20">
          <Icon className="w-10 h-10 text-primary" />
        </div>
      </div>

      <div className="p-8">
        <h4 className="text-primary text-2xl font-bold font-raleway mb-3 transition-colors duration-300">
          {card.title}
        </h4>

        <p className="text-muted-foreground text-base font-lato leading-relaxed mb-6">
          {card.description}
        </p>

        <div className="space-y-2 mb-6 pb-6 border-b border-border">
          {card.features.map((feature, i) => (
            <div key={i} className="text-sm text-muted-foreground font-lato">
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-primary font-semibold font-raleway group-hover:gap-3 transition-all duration-300 bg-primary/10 rounded-lg py-3">
          <span>{card.cta}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </>
  );
};

const cardClasses =
  "block bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-accent relative";

const APIStartWithBSMS = () => {
  return (
    <section className="py-20 bg-background" aria-labelledby="start-with-bsms">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            id="start-with-bsms"
            className="text-primary text-4xl md:text-5xl font-bold font-raleway"
          >
            Start with BSMS Today
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <article key={index} className="group">
              {card.internal ? (
                <Link to="/services/sms/pricing" className={cardClasses}>
                  <CardContent card={card} />
                </Link>
              ) : card.scrollTo ? (
                <button
                  onClick={() => {
                    document
                      .getElementById(card.scrollTo as string)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${cardClasses} w-full text-left`}
                >
                  <CardContent card={card} />
                </button>
              ) : (
                <a
                  href={card.link}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={cardClasses}
                >
                  <CardContent card={card} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIStartWithBSMS;
