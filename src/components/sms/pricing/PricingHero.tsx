import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Shield, Package, Tag, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";
import AnimateOnScroll from "@/components/sms/animations/AnimateOnScroll";

const FloatingIcon = ({ icon: Icon, className }: { icon: LucideIcon; className: string }) => (
  <div className={`absolute ${className} opacity-10`} aria-hidden>
    <Icon className="w-16 h-16 text-primary" />
  </div>
);

const PricingHero = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const scrollToPlans = () => {
    document.getElementById("pricing-categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 py-20">
      <FloatingIcon icon={Package} className="top-20 left-10 animate-float-vertical" />
      <FloatingIcon icon={Tag} className="top-32 right-20 animate-float-diagonal" />
      <FloatingIcon icon={TrendingUp} className="bottom-20 left-20 animate-float-slow" />
      <FloatingIcon icon={Zap} className="bottom-32 right-10 animate-float-vertical" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="px-6 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway text-foreground">
              SMS Pricing Plans for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Every Business Need
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-lato max-w-3xl mx-auto">
              Choose from flexible packages tailored to your communication requirements
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No setup charges. Just transparent,
              <a
                href="/services/sms"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
                {" "}
                scalable SMS solutions{" "}
              </a>
              designed to grow with your business.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>PTA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Flexible Validity</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow"
              >
                View Pricing Plans
              </Button>
              <Button size="lg" variant="outlined" onClick={() => setIsPlannerOpen(true)}>
                Talk to Sales
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <SMSCampaignPlannerDialog open={isPlannerOpen} onOpenChange={setIsPlannerOpen} />
    </section>
  );
};

export default PricingHero;
