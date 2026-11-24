import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const MiniTable = () => {
  const logs = [
    { date: "Mar 15", number: "+92 300 1234567", mask: "MYSTORE", status: "Delivered" },
    { date: "Mar 15", number: "+92 321 9876543", mask: "MYSTORE", status: "Failed" },
    { date: "Mar 14", number: "+92 333 5551234", mask: "SHOPX", status: "Delivered" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-lg border border-border/30">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by number, mask, or status..."
          className="flex-1 bg-transparent text-xs outline-hidden text-foreground placeholder:text-muted-foreground"
          disabled
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-border/30">
        <table className="w-full text-xs">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-2 font-semibold text-muted-foreground">Date</th>
              <th className="text-left p-2 font-semibold text-muted-foreground">Number</th>
              <th className="text-left p-2 font-semibold text-muted-foreground">Mask</th>
              <th className="text-left p-2 font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i} className="border-t border-border/20 hover:bg-primary/5 transition-colors">
                <td className="p-2">{log.date}</td>
                <td className="p-2 font-mono">{log.number}</td>
                <td className="p-2">
                  <Badge variant="outline" className="text-[10px]">
                    {log.mask}
                  </Badge>
                </td>
                <td className="p-2">
                  <Badge
                    className={
                      log.status === "Delivered"
                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                        : "bg-red-500/10 text-red-600 border-red-500/20"
                    }
                  >
                    {log.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiniTable;
