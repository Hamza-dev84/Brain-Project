import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  className?: string;
  variant?: "default" | "single";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  preTitle,
  title,
  className,
  variant = "default",
}) => {
  if (variant === "single") {
    return (
      <div className={cn("text-center mb-16", className)}>
        <h2 className="text-3xl md:text-5xl font-bold font-raleway text-primary">{title}</h2>
      </div>
    );
  }

  return (
    <div className={cn("text-center mb-16", className)}>
      {preTitle && (
        <h2 className="text-2xl md:text-3xl font-semibold font-raleway text-primary mb-2">
          {preTitle}
        </h2>
      )}
      <h3 className="text-3xl md:text-5xl font-bold font-raleway text-primary">{title}</h3>
    </div>
  );
};

export default SectionHeader;
