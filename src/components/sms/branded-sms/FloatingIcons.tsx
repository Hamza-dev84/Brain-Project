import React from "react";
import {
  MessageSquare,
  Send,
  Zap,
  Shield,
  CheckCircle,
  TrendingUp,
  BarChart,
  Users,
  Smartphone,
  Bell,
} from "lucide-react";

const FloatingIcons: React.FC = () => {
  const icons = [
    {
      Icon: MessageSquare,
      className: "top-[10%] left-[5%] text-primary/10",
      size: 60,
      animation: "animate-float-diagonal",
    },
    {
      Icon: Send,
      className: "top-[20%] right-[10%] text-accent/15",
      size: 80,
      animation: "animate-float-vertical delay-2",
    },
    {
      Icon: Zap,
      className: "top-[40%] left-[15%] text-primary/10",
      size: 50,
      animation: "animate-float-slow delay-4",
    },
    {
      Icon: Shield,
      className: "top-[60%] right-[8%] text-primary/10",
      size: 100,
      animation: "animate-float-diagonal delay-6",
    },
    {
      Icon: CheckCircle,
      className: "top-[15%] left-[45%] text-accent/10",
      size: 70,
      animation: "animate-float-vertical delay-3",
    },
    {
      Icon: TrendingUp,
      className: "top-[70%] left-[10%] text-primary/15",
      size: 55,
      animation: "animate-float-slow",
    },
    {
      Icon: BarChart,
      className: "top-[35%] right-[20%] text-primary/10",
      size: 65,
      animation: "animate-float-diagonal delay-5",
    },
    {
      Icon: Users,
      className: "top-[80%] right-[25%] text-accent/10",
      size: 90,
      animation: "animate-float-vertical delay-1",
    },
    {
      Icon: Smartphone,
      className: "top-[25%] left-[25%] text-primary/10",
      size: 45,
      animation: "animate-rotate-slow delay-2",
    },
    {
      Icon: Bell,
      className: "top-[50%] right-[35%] text-primary/10",
      size: 55,
      animation: "animate-float-diagonal delay-7",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {icons.map(({ Icon, className, size, animation }, index) => (
        <div key={index} className={`absolute ${className} ${animation}`}>
          <Icon size={size} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
