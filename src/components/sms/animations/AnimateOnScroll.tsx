import React, { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "slide-up";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

/**
 * Fail-visible scroll reveal: content is always rendered at full opacity and
 * the animation class is layered on once the element enters the viewport.
 */
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const animationClasses = {
    "fade-up": "animate-fade-up",
    "fade-down": "animate-fade-down",
    "fade-left": "animate-fade-left",
    "fade-right": "animate-fade-right",
    "scale-in": "animate-scale-in",
    "slide-up": "animate-slide-up",
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(isVisible && animationClasses[animation], className)}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
