import React from "react";
import { CheckCircle2, ShieldCheck, FileLock2, Clock } from "lucide-react";

const items = [
  { icon: CheckCircle2, label: "Free Consultation" },
  { icon: ShieldCheck, label: "7-Day Money-Back Guarantee" },
  { icon: FileLock2, label: "NDA on Request" },
  { icon: Clock, label: "24-Hour Response" },
];

export const HeroTrustStrip: React.FC = () => (
  <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
    {items.map(({ icon: Icon, label }) => (
      <li
        key={label}
        className="inline-flex items-center gap-2 text-white/85 font-lato text-xs md:text-sm"
      >
        <Icon className="w-4 h-4 text-brand-secondary shrink-0" />
        <span>{label}</span>
      </li>
    ))}
  </ul>
);

export default HeroTrustStrip;
