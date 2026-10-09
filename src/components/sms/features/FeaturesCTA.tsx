import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Headphones, TrendingUp, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";

const FeaturesCTA = () => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield className="absolute top-20 left-10 w-16 h-16 text-white/10 animate-float-vertical" />
        <TrendingUp className="absolute top-32 right-20 w-12 h-12 text-white/10 animate-float-diagonal" />
        <MessageSquare
          className="absolute bottom-20 left-32 w-14 h-14 text-white/10 animate-float-vertical"
          style={{ animationDelay: "0.5s" }}
        />
        <Zap
          className="absolute bottom-32 right-40 w-10 h-10 text-white/10 animate-float-diagonal"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 font-raleway">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of businesses managing their SMS campaigns with BSMS
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => setIsPlannerOpen(true)}
              variant="secondary"
              className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outlined"
              asChild
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all font-semibold"
            >
              <Link to="/services/sms/contact">Schedule a Demo</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-center">
            <Badge className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 px-4 py-2 text-sm backdrop-blur-xs">
              <Shield className="w-4 h-4 mr-2" />
              PTA Approved
            </Badge>
            <Badge className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 px-4 py-2 text-sm backdrop-blur-xs">
              <Zap className="w-4 h-4 mr-2" />
              99.9% Uptime
            </Badge>
            <Badge className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 px-4 py-2 text-sm backdrop-blur-xs">
              <Headphones className="w-4 h-4 mr-2" />
              24/7 Support
            </Badge>
          </div>
        </div>
      </div>

      <SMSCampaignPlannerDialog open={isPlannerOpen} onOpenChange={setIsPlannerOpen} />
    </section>
  );
};

export default FeaturesCTA;
