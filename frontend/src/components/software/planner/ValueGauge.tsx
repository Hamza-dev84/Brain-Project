import React, { useEffect, useState } from "react";

interface ValueGaugeProps {
  value: number; // 0-100
}

export const ValueGauge: React.FC<ValueGaugeProps> = ({ value }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const getColor = (val: number) => {
    if (val < 40) return "#ef4444";
    if (val < 70) return "#f59e0b";
    return "#10b981";
  };

  const rotation = (animatedValue / 100) * 180 - 90;

  return (
    <div className="relative w-60 h-60 mx-auto">
      {/* Background circles */}
      <svg className="w-full h-full" viewBox="0 0 240 240">
        {/* Outer arc */}
        <circle
          cx="120"
          cy="120"
          r="100"
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="20"
          strokeDasharray="314 314"
          strokeDashoffset="157"
          transform="rotate(180 120 120)"
        />
        {/* Value arc */}
        <circle
          cx="120"
          cy="120"
          r="100"
          fill="none"
          stroke={getColor(animatedValue)}
          strokeWidth="20"
          strokeDasharray="314 314"
          strokeDashoffset={157 + (314 * (100 - animatedValue)) / 100}
          transform="rotate(180 120 120)"
          className="transition-all duration-[1500ms] ease-out"
          strokeLinecap="round"
        />
        {/* Center circle */}
        <circle cx="120" cy="120" r="70" fill="white" />
        {/* Needle */}
        <line
          x1="120"
          y1="120"
          x2="120"
          y2="50"
          stroke="#1e293b"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${rotation} 120 120)`}
          className="transition-all duration-[1500ms]"
          style={{ transformOrigin: "120px 120px" }}
        />
        {/* Center dot */}
        <circle cx="120" cy="120" r="6" fill="#1e293b" />
      </svg>

      {/* Value display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center mt-8">
          <div className="font-raleway font-bold text-5xl text-brand-dark">
            {Math.round(animatedValue)}%
          </div>
          <div className="font-lato text-sm text-neutral-medium mt-1">
            Project Value
          </div>
        </div>
      </div>
    </div>
  );
};
