import FeatureSection from "./FeatureSection";
import DetailedFeatureCard from "./DetailedFeatureCard";
import { Layers, History } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TemplatesLogsSection = () => {
  const templates = [
    {
      name: "Promo - 20% Off",
      preview: "Exclusive 20% discount just for you!",
      lastUsed: "2 days ago",
      selected: true,
    },
    {
      name: "Alert - Service Down",
      preview: "Our services will be down for maintenance...",
      lastUsed: "1 week ago",
      selected: false,
    },
    {
      name: "Reminder - Appointment",
      preview: "This is a reminder for your appointment...",
      lastUsed: "3 days ago",
      selected: false,
    },
    {
      name: "Welcome - New Customer",
      preview: "Welcome to our service! We're excited...",
      lastUsed: "5 days ago",
      selected: false,
    },
  ];

  const campaigns = [
    { name: "Spring Sale 2024", date: "Mar 15, 2024", status: "Completed", recipients: "25,430" },
    { name: "Payment Reminder", date: "Mar 16, 2024", status: "Scheduled", recipients: "1,200" },
    { name: "Order Updates", date: "Mar 14, 2024", status: "In Progress", recipients: "8,941" },
  ];

  return (
    <FeatureSection
      title="Templates & Logs – Save Time & Track Everything"
      description="Streamline your workflow with reusable templates and detailed campaign history"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <DetailedFeatureCard
          icon={Layers}
          title="Pre-Saved Templates"
          description="Create and manage reusable message templates for common campaigns"
          variant="detailed"
        >
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {templates.map((template, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  template.selected
                    ? "bg-primary/10 border-primary/40 shadow-md"
                    : "bg-card/50 border-border/30 hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">{template.name}</h4>
                  {template.selected && (
                    <Badge className="bg-primary text-primary-foreground text-xs">Selected</Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                  {template.preview}
                </p>
                <p className="text-xs text-muted-foreground">Last used: {template.lastUsed}</p>
              </div>
            ))}
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={History}
          title="Campaign Logs"
          description="View complete campaign history with detailed metrics and timestamps"
          variant="detailed"
        >
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {["All", "Group", "Scheduled", "Dynamic"].map((tab, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                disabled
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {campaigns.map((campaign, i) => (
              <div
                key={i}
                className="p-4 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{campaign.name}</h4>
                    <p className="text-xs text-muted-foreground">{campaign.date}</p>
                  </div>
                  <Badge
                    className={
                      campaign.status === "Completed"
                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                        : campaign.status === "Scheduled"
                          ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                          : "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-muted-foreground">
                    Recipients:{" "}
                    <span className="font-semibold text-foreground">{campaign.recipients}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DetailedFeatureCard>
      </div>
    </FeatureSection>
  );
};

export default TemplatesLogsSection;
