import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Zap, BarChart3 } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const FeaturesHero = () => {
  const scrollToFeatures = () => {
    const firstSection = document.getElementById("dashboard-overview");
    firstSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <TrendingUp className="absolute top-20 left-10 w-16 h-16 text-primary/10 animate-float-vertical" />
        <Zap className="absolute top-40 right-20 w-12 h-12 text-accent/20 animate-float-diagonal" />
        <BarChart3
          className="absolute bottom-32 left-20 w-20 h-20 text-primary/15 animate-float-vertical"
          style={{ animationDelay: "1s" }}
        />
        <Shield
          className="absolute bottom-20 right-32 w-14 h-14 text-accent/15 animate-float-diagonal"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Complete SMS Campaign Management
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  BSMS Client Portal
                </span>{" "}
                <span className="text-primary">Features</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary/80 font-raleway">
                Take Total Control Over SMS Campaigns
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empower your business with powerful analytics, automated workflows, and real-time
                campaign management. Everything you need to succeed in one intuitive platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToFeatures}>
                Explore Features
              </Button>
              <Button variant="outlined" size="lg" asChild>
                <a href="https://cp.bsms.pk/login/" target="_blank" rel="noopener noreferrer">
                  Login to Portal
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Real-Time Analytics
              </Badge>
              <Badge className="bg-accent/10 text-primary border-accent/30">
                Automated Workflows
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Advanced Reporting
              </Badge>
            </div>
          </div>

          <div>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
