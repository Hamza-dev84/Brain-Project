import React, { useState } from "react";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/sms/branded-sms/BrowserMockup";
import FloatingIcons from "@/components/sms/branded-sms/FloatingIcons";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";

const SMSMarketingHero: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <FloatingIcons />
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                #1 SMS Marketing Platform in Pakistan
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway text-primary leading-tight">
              Dominate The Market with High Impact
              <span className="block text-accent mt-2">SMS Marketing in Pakistan</span>
            </h1>

            <p className="text-lg text-muted-foreground font-lato leading-relaxed max-w-xl">
              In a market as dynamic as Pakistan, where mobile penetration is immense, cutting
              through the digital noise is your biggest challenge. With a{" "}
              <strong className="text-primary">near-100% open rate</strong>, SMS delivers your
              message directly to the pocket of your customer — the most direct and trusted channel
              to drive action.
            </p>

            <div className="flex flex-wrap gap-6">
              {["98% Open Rate", "3-5 Second Delivery", "Urdu Support", "All Pakistani Networks"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-lato text-muted-foreground">{item}</span>
                  </div>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button onClick={() => setIsPlannerOpen(true)} size="lg">
                <MessageSquare size={20} />
                <span>Start Your Campaign Now</span>
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
              {[
                { value: "500K+", label: "Messages Sent Daily" },
                { value: "2000+", label: "Active Campaigns" },
                { value: "98%", label: "Average Open Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-raleway font-bold text-3xl text-primary">{stat.value}</div>
                  <div className="font-lato text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            <BrowserMockup altText="Overview of the BSMS dashboard used for SMS marketing in Pakistan, showing campaign performance and delivery insights." />
          </div>
        </div>
      </div>

      <SMSCampaignPlannerDialog open={isPlannerOpen} onOpenChange={setIsPlannerOpen} />
    </section>
  );
};

export default SMSMarketingHero;
