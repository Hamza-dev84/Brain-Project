import React from "react";
import dashboardImage from "@/assets/sms/dashboard-preview.webp";

interface BrowserMockupProps {
  altText?: string;
}

const BrowserMockup: React.FC<BrowserMockupProps> = ({
  altText = "Overview of the BSMS dashboard used for managing branded SMS in Pakistan.",
}) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl" />
      <div className="relative bg-gradient-to-br from-card to-card/80 rounded-xl shadow-elegant border border-border/50 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        <div className="bg-muted/50 border-b border-border/50 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/50 rounded-sm px-3 py-1 text-xs text-muted-foreground flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>https://brain.net.pk/sms/</span>
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-background to-muted/30 p-1">
          <img width={1920} height={1442} loading="lazy" decoding="async" src={dashboardImage} alt={altText} className="w-full h-auto rounded-b-lg shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none rounded-b-lg" />
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
