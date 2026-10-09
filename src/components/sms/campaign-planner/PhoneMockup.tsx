import React from "react";
import { Signal, Wifi, Battery } from "lucide-react";

interface PhoneMockupProps {
  message: string;
  senderId: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ message, senderId }) => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="relative bg-card border-[12px] border-foreground/90 rounded-[3rem] shadow-xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/90 rounded-b-2xl z-10" />
        <div className="bg-background min-h-[500px] flex flex-col">
          <div className="flex justify-between items-center px-6 py-2 text-xs">
            <div className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
            </div>
            <div className="font-semibold">{currentTime}</div>
            <Battery className="w-5 h-3" />
          </div>

          <div className="border-b border-border px-4 py-3">
            <div className="font-semibold text-sm">Messages</div>
          </div>

          <div className="flex-1 px-4 py-6 bg-muted/20">
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground font-semibold">
                {senderId || "BSMS"}
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-tl-none p-3 shadow-xs max-w-[220px]">
                <p className="text-sm text-foreground leading-relaxed break-words">
                  {message || "Your message will appear here..."}
                </p>
                <div className="text-[10px] text-muted-foreground mt-2 text-right">
                  {currentTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
