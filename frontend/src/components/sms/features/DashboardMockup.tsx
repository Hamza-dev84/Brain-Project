import { Activity, BarChart3, MessageSquare, Settings } from "lucide-react";

const DashboardMockup = () => {
  return (
    <div className="relative animate-float-vertical">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative bg-gradient-to-br from-card/50 to-card border border-border/50 rounded-2xl shadow-strong backdrop-blur-xs overflow-hidden hover:shadow-glow transition-all duration-300">
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 px-4 py-3 flex items-center gap-2 border-b border-border/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 ml-4 bg-background/30 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2">
            <span className="text-green-500">🔒</span>
            portal.bsms.com.pk/dashboard
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-background/95 to-background/80">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-border/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-sm">BSMS Portal</span>
            </div>
            <Settings className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Consumed", value: "45,820" },
              { label: "Remaining", value: "54,180" },
              { label: "Scheduled", value: "12,500" },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-3 border border-primary/20"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-3 h-3 text-primary" />
                  <span className="text-xs text-muted-foreground">{m.label}</span>
                </div>
                <p className="text-lg font-bold text-primary">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-lg p-4 border border-border/30">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold">30-Day Analytics</span>
            </div>

            <div className="h-20 flex items-end gap-1">
              {[40, 65, 45, 70, 55, 80, 60, 75, 85, 70, 90, 95].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-primary/60 to-accent/40 rounded-t transition-all hover:from-primary hover:to-accent"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default DashboardMockup;
