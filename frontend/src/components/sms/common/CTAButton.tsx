import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-white";
  size?: "large" | "medium" | "full";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className,
  icon,
  type = "button",
}) => {
  const variantMap = {
    primary: "default" as const,
    secondary: "secondary" as const,
    outline: "outlined" as const,
    "outline-white": "outlined" as const,
  };

  const sizeMap = {
    large: "lg" as const,
    medium: "default" as const,
    full: "default" as const,
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variantMap[variant]}
      size={sizeMap[size]}
      className={cn(
        variant === "outline-white" && "border-white text-white hover:bg-white/10",
        size === "full" && "w-full",
        className
      )}
    >
      {children}
      {icon && icon}
    </Button>
  );
};

export default CTAButton;
