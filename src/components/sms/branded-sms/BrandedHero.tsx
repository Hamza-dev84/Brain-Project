import React, { useState } from "react";
import { ArrowRight, Shield, Zap, CheckCircle, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/sms/branded-sms/BrowserMockup";
import FloatingIcons from "@/components/sms/branded-sms/FloatingIcons";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";
import AnimatedCounter from "@/components/sms/animations/AnimatedCounter";
import GetStartedPopup from "@/components/sms/Popup-Form/GetStartedPopup";

const Hero: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-background">
      <FloatingIcons />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2 text-sm font-body text-muted-foreground">
              <Shield size={16} className="text-primary" />
              <span>PTA Approved SMS Service Provider</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-raleway">
              Branded SMS Service in Pakistan —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Send SMS
              </span>{" "}
              With Your Brand Name
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground font-lato leading-relaxed max-w-2xl">
              Pakistan's top SMS service lets you send messages from your
              company name, not a random number. Reach every customer on Jazz,
              Telenor, Zong, Ufone, and SCOM with a 98% open rate. PTA-approved,
              direct carrier routes, and live 24 hours.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Zap size={18} className="text-primary" />
                <span>99.9% Delivery Rate</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield size={18} className="text-primary" />
                <span>PTA Compliant</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle size={18} className="text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              {/* <Button
                className="w-full sm:w-auto"
                onClick={() => setIsPlannerOpen(true)}
                size="lg"
              >
                <MessageSquare size={20} />
                <span>Start Sending Branded SMS Today</span>
                <ArrowRight size={20} />
              </Button> */}
              {/* <Button onClick={() => setIsPopupOpen(true)} size="lg"> */}
              <Button onClick={() => setIsPlannerOpen(true)} size="lg">
                <MessageSquare size={20} />
                <span>Start Sending Branded SMS Today</span>
                <ArrowRight size={20} />
              </Button>

              <a
                href="https://wa.me/923276222888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  className="w-full sm:w-auto"
                  variant="outlined"
                  size="lg"
                >
                  <Phone size={20} />
                  <span>Talk to An Expert</span>
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={100}
                  suffix="+"
                  className="font-raleway font-bold text-2xl sm:text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">
                  SMS Sent Monthly
                </div>
              </div>

              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={1000}
                  suffix="+"
                  className="font-raleway font-bold text-2xl sm:text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">
                  Happy Clients
                </div>
              </div>

              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={99.9}
                  decimals={1}
                  suffix="%"
                  className="font-raleway font-bold text-2xl sm:text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">
                  Uptime Guarantee
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative hidden md:block lg:block animate-slide-up">
            <BrowserMockup altText="Dashboard displaying SMS analytics and reports for Branded SMS service in Pakistan." />
          </div>
        </div>
      </div>

      {/* Dialog */}
      <SMSCampaignPlannerDialog
        open={isPlannerOpen}
        onOpenChange={setIsPlannerOpen}
      />

      {/* <GetStartedPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} /> */}
    </section>
  );
};

export default Hero;