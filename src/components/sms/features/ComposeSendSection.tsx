import FeatureSection from "./FeatureSection";
import DetailedFeatureCard from "./DetailedFeatureCard";
import { Zap, Users, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ComposeSendSection = () => {
  return (
    <FeatureSection
      title="Compose & Send – Multiple Ways to Reach Your Audience"
      description="Choose the perfect sending method for your campaign needs"
      variant="highlighted"
    >
      <div className="grid md:grid-cols-3 gap-8">
        <DetailedFeatureCard
          icon={Zap}
          title="Quick SMS"
          description="Send individual messages instantly with just a few clicks"
        >
          <div className="space-y-3 p-4 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-lg border border-yellow-500/10">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">To:</label>
              <input
                type="text"
                placeholder="+92 300 1234567"
                className="w-full px-3 py-2 bg-background/50 rounded-lg border border-border/30 text-sm"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Mask:</label>
              <input
                type="text"
                placeholder="MYSTORE"
                className="w-full px-3 py-2 bg-background/50 rounded-lg border border-border/30 text-sm"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Message:</label>
              <textarea
                placeholder="Type your message..."
                className="w-full px-3 py-2 bg-background/50 rounded-lg border border-border/30 text-sm resize-none"
                rows={3}
                disabled
              />
            </div>
            <Button className="w-full" size="sm" disabled tabIndex={-1} aria-hidden="true">
              <Zap className="w-4 h-4 mr-2" />
              Send Now
            </Button>
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={Users}
          title="Group SMS"
          description="Send bulk messages to saved contact lists with one click"
        >
          <div className="space-y-3 p-4 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/10">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Contact List:</label>
              <select
                className="w-full px-3 py-2 bg-background/50 rounded-lg border border-border/30 text-sm"
                disabled
              >
                <option>VIP Customers</option>
              </select>
            </div>
            <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-xs text-muted-foreground mb-1">Recipients Selected:</p>
              <p className="text-2xl font-bold text-primary">5,241</p>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Message:</label>
              <textarea
                placeholder="Compose your group message..."
                className="w-full px-3 py-2 bg-background/50 rounded-lg border border-border/30 text-sm resize-none"
                rows={2}
                disabled
              />
            </div>
            <Button className="w-full" variant="default" size="sm" disabled tabIndex={-1} aria-hidden="true">
              <Users className="w-4 h-4 mr-2" />
              Send to Group
            </Button>
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={Code2}
          title="Dynamic SMS"
          description="Personalize messages using variables for each recipient"
        >
          <div className="space-y-3 p-4 bg-gradient-to-br from-accent/5 to-transparent rounded-lg border border-accent/10">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Message Template:</label>
              <div className="p-3 bg-background/50 rounded-lg border border-border/30 text-sm font-mono leading-relaxed">
                Hi{" "}
                <Badge className="inline-flex mx-1 bg-accent/20 text-primary border-accent/30 text-xs">
                  Name
                </Badge>
                ! Your order{" "}
                <Badge className="inline-flex mx-1 bg-accent/20 text-primary border-accent/30 text-xs">
                  OrderID
                </Badge>{" "}
                is ready for pickup at{" "}
                <Badge className="inline-flex mx-1 bg-accent/20 text-primary border-accent/30 text-xs">
                  Location
                </Badge>
                .
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Preview for John Doe:</p>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 text-sm">
                Hi John Doe! Your order #12345 is ready for pickup at Downtown Store.
              </div>
            </div>
            <Button className="w-full" variant="secondary" size="sm" disabled tabIndex={-1} aria-hidden="true">
              <Code2 className="w-4 h-4 mr-2" />
              Configure Variables
            </Button>
          </div>
        </DetailedFeatureCard>
      </div>
    </FeatureSection>
  );
};

export default ComposeSendSection;
