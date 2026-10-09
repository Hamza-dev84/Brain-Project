import React, { useState } from "react";
import { ArrowRight, Shield, Zap, CheckCircle, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/sms/branded-sms/BrowserMockup";
import FloatingIcons from "@/components/sms/branded-sms/FloatingIcons";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";
import AnimatedCounter from "@/components/sms/animations/AnimatedCounter";

const BrandedHero: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <FloatingIcons />
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2 text-sm font-body text-muted-foreground">
              <Shield size={16} className="text-primary" />
              <span>PTA Approved SMS Service Provider</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway leading-tight">
              Build Trust &amp; Drive Engagement with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Branded SMS
              </span>{" "}
              in Pakistan
            </h1>

            <p className="text-lg text-muted-foreground font-lato leading-relaxed max-w-2xl">
              In today's digital landscape, Pakistani customers crave authenticity in marketing
              offers. Our Branded SMS Service in Pakistan displays your registered company name,
              instantly building recognition and trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Zap size={18} className="text-primary" />
                <span>99.9% Delivery Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Shield size={18} className="text-primary" />
                <span>PTA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <CheckCircle size={18} className="text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button onClick={() => setIsPlannerOpen(true)} size="lg">
                <MessageSquare size={20} />
                <span>Start Sending Branded SMS Today</span>
                <ArrowRight size={20} />
              </Button>
              <a href="https://wa.me/923276222888" target="_blank" rel="noopener noreferrer">
                <Button variant="outlined" size="lg">
                  <Phone size={20} />
                  <span>Talk to An Expert</span>
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={100}
                  suffix="+"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">SMS Sent Monthly</div>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={1000}
                  suffix="+"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={99.9}
                  decimals={1}
                  suffix="%"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <BrowserMockup altText="Overview of the BSMS dashboard used for managing branded SMS in Pakistan." />
          </div>
        </div>
      </div>

      <SMSCampaignPlannerDialog open={isPlannerOpen} onOpenChange={setIsPlannerOpen} />
    </section>
  );
};

export default BrandedHero;
