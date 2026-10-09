import FeatureSection from "./FeatureSection";
import { Wallet } from "lucide-react";

const CreditPlansSection = () => {
  return (
    <FeatureSection
      id="credit-management"
      title="Credit Management – Track Your SMS Usage"
      description="Monitor your SMS bucket status and usage in real-time"
      variant="highlighted"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl p-8 border-2 border-border shadow-elegant hover:shadow-strong transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-raleway text-foreground">Bucket History</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-muted-foreground">Consumed Credits</span>
                <span className="font-semibold text-foreground">45,820 SMS (45.8%)</span>
              </div>
              <div className="w-full bg-border/20 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                  style={{ width: "45.8%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Remaining Credits</p>
                <p className="text-2xl font-bold text-primary">54,180 SMS</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Expires On</p>
                <p className="text-lg font-semibold text-foreground">April 30, 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Service Rate</p>
                <p className="text-lg font-semibold text-foreground">PKR 0.45/SMS</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Bucket</p>
                <p className="text-lg font-semibold text-foreground">100,000 SMS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureSection>
  );
};

export default CreditPlansSection;
