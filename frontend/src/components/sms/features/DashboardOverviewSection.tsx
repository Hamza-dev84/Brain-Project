import FeatureSection from "./FeatureSection";
import DetailedFeatureCard from "./DetailedFeatureCard";
import { Activity, Calendar, Search, PieChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MiniTable from "./MiniTable";
import MiniChart from "./MiniChart";

const DashboardOverviewSection = () => {
  return (
    <FeatureSection
      id="dashboard-overview"
      title="Dashboard Overview – Monitor Everything in Real-Time"
      description="Get instant insights into your SMS campaigns with comprehensive analytics and reporting"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <DetailedFeatureCard
          icon={Activity}
          title="Real-Time Metrics"
          description="Track your SMS bucket status at a glance with live updates"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10">
              <span className="text-sm font-medium">Consumed SMS</span>
              <Badge className="bg-primary text-primary-foreground">45,820</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
              <span className="text-sm font-medium">Remaining SMS</span>
              <Badge className="bg-accent/20 text-primary border-accent/30">54,180</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10">
              <span className="text-sm font-medium">Scheduled SMS</span>
              <Badge className="bg-primary/20 text-primary border-primary/30">12,500</Badge>
            </div>
          </div>
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={Calendar}
          title="30-Day Analytics"
          description="Comprehensive trend analysis with customizable date filters"
        >
          <MiniChart />
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={Search}
          title="Message Logs"
          description="Search and filter messages by number, mask, status, or date range"
        >
          <MiniTable />
        </DetailedFeatureCard>

        <DetailedFeatureCard
          icon={PieChart}
          title="Comprehensive Reports"
          description="Export detailed campaign reports in multiple formats for deeper analysis"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">PDF</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Campaign Summary Report</p>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">CSV</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Detailed Message Logs</p>
                <p className="text-xs text-muted-foreground">Custom date range</p>
              </div>
            </div>
          </div>
        </DetailedFeatureCard>
      </div>
    </FeatureSection>
  );
};

export default DashboardOverviewSection;
