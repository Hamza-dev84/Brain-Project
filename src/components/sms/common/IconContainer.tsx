import React from "react";
import { LucideIcon } from "lucide-react";

interface IconContainerProps {
  icon: LucideIcon;
  size?: "small" | "medium" | "large";
  className?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
  icon: Icon,
  size = "medium",
  className = "",
}) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-20 h-20",
  };

  const iconSizes = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-10 h-10",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl flex items-center justify-center transition-transform duration-300 ${className}`}
    >
      <Icon className={`${iconSizes[size]} text-primary`} />
    </div>
  );
};

export default IconContainer;
