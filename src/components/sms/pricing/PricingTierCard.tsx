import { useState } from "react";
import { Check, Zap, Star, Award, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "@/lib/router-compat";
import SMSCampaignPlannerDialog from "@/components/sms/campaign-planner/SMSCampaignPlannerDialog";

interface PricingTierCardProps {
  tierName: string;
  smsVolume: string;
  validity: string;
  maskCount: string;
  ratePerSMS?: string;
  features: string[];
  variant?: "standard" | "popular" | "premium" | "ultimate";
  category: string;
}

const PricingTierCard = ({
  tierName,
  smsVolume,
  validity,
  maskCount,
  features,
  variant = "standard",
}: PricingTierCardProps) => {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const getIcon = () => {
    switch (variant) {
      case "ultimate":
        return <Crown className="w-8 h-8" />;
      case "premium":
        return <Award className="w-8 h-8" />;
      case "popular":
        return <Star className="w-8 h-8" />;
      default:
        return <Zap className="w-8 h-8" />;
    }
  };

  const getBadgeText = () => {
    switch (variant) {
      case "ultimate":
        return "Ultimate Power";
      case "premium":
        return "Premium";
      case "popular":
        return "Most Popular";
      default:
        return "Value Plan";
    }
  };

  return (
    <div
      className={cn(
        "relative bg-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 border-2",
        variant === "standard" && "border-border shadow-md hover:shadow-lg",
        variant === "popular" &&
          "border-primary/30 shadow-elegant hover:shadow-strong bg-gradient-to-br from-card to-primary/5",
        variant === "premium" &&
          "border-accent/50 shadow-strong hover:shadow-glow bg-gradient-to-br from-card to-accent/5",
        variant === "ultimate" &&
          "border-primary shadow-glow bg-gradient-to-br from-primary/5 via-card to-accent/5 hover:shadow-xl"
      )}
    >
      {variant !== "standard" && (
        <Badge
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 font-semibold",
            variant === "popular" && "bg-primary text-primary-foreground",
            variant === "premium" && "bg-accent text-accent-foreground",
            variant === "ultimate" &&
              "bg-gradient-to-r from-primary to-accent text-primary-foreground"
          )}
        >
          {variant === "popular" && <Star className="w-3 h-3 mr-1 inline" />}
          {variant === "ultimate" && <Crown className="w-3 h-3 mr-1 inline" />}
          {getBadgeText()}
        </Badge>
      )}

      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={cn(
            "p-4 rounded-full transition-all",
            variant === "standard" && "bg-primary/10 text-primary",
            variant === "popular" && "bg-primary/20 text-primary",
            variant === "premium" && "bg-accent/20 text-primary",
            variant === "ultimate" && "bg-gradient-to-br from-primary/30 to-accent/30 text-primary"
          )}
        >
          {getIcon()}
        </div>

        <h3 className="text-2xl font-bold font-raleway text-foreground">{tierName}</h3>

        <div className="space-y-1">
          <p className="text-4xl md:text-5xl font-bold text-primary font-raleway">{smsVolume}</p>
          <p className="text-sm text-muted-foreground">SMS Messages</p>
        </div>

        <div className="w-full space-y-2 pt-2 border-t border-border/50">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Validity:</span>
            <span className="font-semibold text-foreground">{validity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Sender Masks:</span>
            <span className="font-semibold text-foreground">
              {maskCount} {maskCount === "1" ? "Mask" : "Masks"}
            </span>
          </div>
        </div>

        <ul className="w-full space-y-2 pt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-left">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {variant === "ultimate" ? (
          <Link to="/services/sms/contact" className="w-full">
            <Button
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:shadow-glow"
              size="lg"
            >
              Contact Sales
            </Button>
          </Link>
        ) : (
          <Button
            className="w-full mt-4"
            size="lg"
            variant="outlined"
            onClick={() => setIsPlannerOpen(true)}
          >
            Get Started
          </Button>
        )}
      </div>

      <SMSCampaignPlannerDialog open={isPlannerOpen} onOpenChange={setIsPlannerOpen} />
    </div>
  );
};

export default PricingTierCard;
