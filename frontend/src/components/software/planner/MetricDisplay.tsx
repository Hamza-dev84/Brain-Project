import React, { useEffect, useState } from "react";

interface MetricDisplayProps {
  icon: string;
  label: string;
  value: string;
  delay?: number;
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({
  icon,
  label,
  value,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return (
    <div
      className={`flex flex-col items-center p-6 bg-white rounded-xl border border-neutral-border transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-3">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="font-lato text-sm text-neutral-medium mb-1 text-center">
        {label}
      </div>
      <div className="font-raleway font-bold text-2xl text-brand-dark text-center">
        {value}
      </div>
    </div>
  );
};
