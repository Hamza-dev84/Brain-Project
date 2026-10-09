const MiniChart = () => {
  const data = [
    { day: "1", sent: 45, failed: 5 },
    { day: "5", sent: 65, failed: 3 },
    { day: "10", sent: 55, failed: 7 },
    { day: "15", sent: 75, failed: 4 },
    { day: "20", sent: 70, failed: 6 },
    { day: "25", sent: 85, failed: 2 },
    { day: "30", sent: 90, failed: 3 },
  ];

  const maxValue = Math.max(...data.map((d) => d.sent + d.failed));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">Total Sent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-muted-foreground">Failed</span>
        </div>
      </div>

      <div className="h-32 flex items-end justify-between gap-2">
        {data.map((item, i) => {
          const sentHeight = (item.sent / maxValue) * 100;
          const failedHeight = (item.failed / maxValue) * 100;

          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col-reverse gap-0.5">
                <div
                  className="w-full bg-gradient-to-t from-primary to-primary/70 rounded-t transition-all hover:from-primary hover:to-accent"
                  style={{ height: `${sentHeight}px` }}
                />
                <div
                  className="w-full bg-destructive/70 rounded-t transition-all hover:bg-destructive"
                  style={{ height: `${failedHeight}px` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{item.day}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-border/30">
        <span className="text-xs text-muted-foreground">Date Range:</span>
        <div className="flex-1 px-3 py-1 bg-primary/5 rounded-md border border-primary/20 text-xs text-primary">
          Last 30 Days
        </div>
      </div>
    </div>
  );
};

export default MiniChart;
