import { useState } from "react";
import { pricingCategories } from "@/data/pricingData";
import PricingTierCard from "./PricingTierCard";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";
import { Link } from "@/lib/router-compat";

const PricingCategories = () => {
  const [activeCategory, setActiveCategory] = useState("otp");

  const currentCategory = pricingCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="pricing-categories" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-raleway">
              Choose Your SMS Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select the category that best fits your business needs
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {pricingCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:shadow-md"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-raleway">{category.name}</span>
              </button>
            );
          })}
        </div>

        {currentCategory && (
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </div>
        )}

        {currentCategory && (
          <div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-7xl mx-auto">
              <CarouselContent className="-ml-4">
                {currentCategory.tiers.map((tier, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <PricingTierCard
                      tierName={tier.tierName}
                      smsVolume={tier.smsVolume}
                      validity={tier.validity}
                      maskCount={tier.maskCount}
                      ratePerSMS={tier.ratePerSMS ?? ""}
                      features={tier.features}
                      variant={tier.variant}
                      category={currentCategory.id}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <div className="mt-12">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold font-raleway text-primary">
                    Custom Branded SMS Package
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Need a tailored solution? We create custom packages designed specifically for
                    your business needs and preferences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
                    <span>✓ Custom SMS Volumes</span>
                    <span>✓ Flexible Validity</span>
                    <span>✓ Unlimited Masks</span>
                    <span>✓ Volume Discounts</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                      to="/services/sms/contact"
                      className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold"
                    >
                      Contact Sales
                    </Link>
                    <a
                      href="https://wa.me/923276222888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingCategories;
