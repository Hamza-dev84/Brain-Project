import React from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  MessageSquare,
  Phone,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/sms/branded-sms/BrowserMockup";
import FloatingIcons from "@/components/sms/branded-sms/FloatingIcons";
import AnimatedCounter from "@/components/sms/animations/AnimatedCounter";

const APIHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <FloatingIcons />
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2 text-sm font-body text-muted-foreground">
              <Shield size={16} className="text-primary" />
              <span>PTA Certified SMS API Provider</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway leading-tight">
              Our Developer-Friendly{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SMS API in Pakistan
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-lato leading-relaxed max-w-2xl">
              Power your Enterprise with instant messaging using Pakistan's Most Comprehensive SMS
              API Solution. Our SMS API in Pakistan connects Any Custom App, Website, or CRMs with
              the ability to deliver to millions instantly, reliably, and securely via
              PTA-Compliant Communication.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Activity size={18} className="text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <Zap size={18} className="text-primary" />
                <span>&lt; 2s Integration</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-lato text-foreground">
                <ShieldCheck size={18} className="text-primary" />
                <span>PTA Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("api-documentation")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <MessageSquare size={20} />
                <span>Get API Documentation</span>
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
                  end={5}
                  suffix="M+"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">
                  API Calls Monthly
                </div>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={10}
                  suffix="K+"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">
                  Active Developers
                </div>
              </div>
              <div className="text-center lg:text-left">
                <AnimatedCounter
                  end={99.9}
                  decimals={1}
                  suffix="%"
                  className="font-raleway font-bold text-3xl text-primary"
                />
                <div className="font-lato text-sm text-muted-foreground mt-1">API Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <BrowserMockup altText="BSMS web portal dashboard demonstrating SMS API in Pakistan for developers and businesses." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIHeroSection;
