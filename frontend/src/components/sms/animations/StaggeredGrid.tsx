import React, { ReactNode, Children } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

interface StaggeredGridProps {
  children: ReactNode;
  staggerDelay?: number;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "slide-up";
  className?: string;
  itemClassName?: string;
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  staggerDelay = 0.1,
  animation = "fade-up",
  className,
  itemClassName,
}) => {
  const childArray = Children.toArray(children);

  return (
    <div className={cn("grid", className)}>
      {childArray.map((child, index) => (
        <AnimateOnScroll
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          className={itemClassName}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  );
};

export default StaggeredGrid;
