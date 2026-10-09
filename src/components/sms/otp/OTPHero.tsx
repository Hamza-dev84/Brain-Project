import React, { useState } from "react";
import { ArrowRight, Shield, Zap, CheckCircle, MessageSquare, Phone } from "lucide-react";
import BrowserMockup from "@/components/sms/branded-sms/BrowserMockup";
import FloatingIcons from "@/components/sms/branded-sms/FloatingIcons";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";
import AnimatedCounter from "@/components/sms/animations/AnimatedCounter";

const OTPHero: React.FC = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <FloatingIcons />
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2 text-sm font-body text-muted-foreground">
              <Shield size={16} className="text-primary" />
              <span>PTA Compliant OTP Solution</span>
            </div>
            {/* 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway leading-tight">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OTP SMS Service in Pakistan
              </span>{" "}
              - Affordable, yet powerful
            </h1>

            <p className="text-lg text-muted-foreground font-lato leading-relaxed max-w-2xl">
              Facing Troubles with OTP Delays or Failures During Critical Business Operations? Our
              Enterprise OTP SMS Service in Pakistan Delivers OTP SMS in a Mere Instant Backed by
              Infrastructure Built to Handle 10M+ Daily Verifications — So Your Customers Never Face
              OTP Verification Delays.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Zap size={18} className="text-primary" />
                <span>3-Second Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Shield size={18} className="text-primary" />
                <span>99.5% Success Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <CheckCircle size={18} className="text-primary" />
                <span>PTA Approved</span>
              </div>
            </div> */}

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway leading-tight">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OTP SMS Service in Pakistan
              </span>{" "}
              - Fast, Reliable Verification
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground font-lato leading-relaxed max-w-2xl">
              Run secure OTP SMS verification for your
              <a
                href="/services/software/mobile-app-developers-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
                {" "} apps, {" "}
              </a>
              <a
                href="/services/software/web-development-pakistan"
                className="
    text-[#9F1239]
    hover:text-[#E11D48]
    active:text-[#4C0519]
    transition-colors
  "
              >
                {" "}websites,{" "}
              </a>
              and platforms with BSMS. Our OTP SMS service in Pakistan lets businesses send verification codes fast. It ensures timely delivery. It works on any mobile network.
              BSMS provides mobile number verification in Pakistan. For login confirmation or transaction security, it sends OTP codes in seconds. Plus, it ensures high delivery reliability.
              Made for businesses, startups, and online platforms in Pakistan. They need a quick and reliable OTP SMS service.

            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Zap size={18} className="text-primary" />
                <span>Instant SMS OTP delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Shield size={18} className="text-primary" />
                <span>Secure SMS OTP verification system</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <CheckCircle size={18} className="text-primary" />
                <span>PTA-compliant messaging infrastructure</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => setIsPlannerOpen(true)}
                className="bg-primary text-primary-foreground font-lato font-semibold text-base px-8 py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <MessageSquare size={20} />
                <span>Start Sending OTPs Today!</span>
                <ArrowRight size={20} />
              </button>
              <a href="https://wa.me/923276222888" target="_blank" rel="noopener noreferrer">
                <button className="group border-2 border-border text-foreground font-lato font-semibold text-base px-8 py-4 rounded-lg hover:bg-muted transition-all flex items-center gap-2">
                  <Phone size={20} className="text-primary" />
                  <span>Talk to An Expert</span>
                </button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={50}
                  suffix="M+"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">
                  OTP Messages Sent
                </div>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={99.5}
                  decimals={1}
                  suffix="%"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">Delivery Success</div>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={3}
                  prefix="<"
                  suffix="s"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">Average Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <BrowserMockup altText="BSMS OTP SMS Service Pakistan dashboard showing real-time delivery reports, message status, and performance analytics for secure OTP verification" />
          </div>
        </div>
      </div>

      <SMSCampaignPlannerDialog open={isPlannerOpen} onOpenChange={setIsPlannerOpen} />
    </section>
  );
};

export default OTPHero;
