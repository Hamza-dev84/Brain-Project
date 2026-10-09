import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  spacing,
  typography,
  shadows,
  borderRadius,
  animations,
} from "@/styles/design-tokens";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  variant?: "centered" | "left";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  iconClassName,
  variant = "centered",
}) => {
  if (variant === "centered") {
    return (
      <article
        className={cn(
          "flex flex-col items-center gap-5 flex-1 p-6 rounded-xl bg-card",
          animations.hoverLift,
          "hover:shadow-elegant transition-all",
          className
        )}
      >
        {icon && (
          <div className={cn("flex items-center justify-center", iconClassName)}>{icon}</div>
        )}

        <div className="flex flex-col items-start gap-4 w-full">
          <h3 className={cn(typography.cardH3, "text-primary text-center w-full")}>{title}</h3>
          <p className={cn(typography.bodyText, "text-foreground text-justify w-full")}>
            {description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "flex flex-col gap-4",
        spacing.cardPadding,
        borderRadius.card,
        shadows.card,
        animations.hoverLift,
        "hover:shadow-elegant",
        "bg-card",
        className
      )}
    >
      {icon && <div className={cn("w-14 h-14", iconClassName)}>{icon}</div>}

      <div className="flex flex-col gap-3">
        <h3 className={cn(typography.cardH3Large, "text-primary")}>{title}</h3>
        <p className={cn(typography.bodyText, "text-foreground")}>{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
