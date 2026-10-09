import React from 'react';
import { useScrollReveal, AnimationType } from '@/hooks/software/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animationType = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const { elementRef, animationClass } = useScrollReveal({
    animationType,
    delay,
    threshold,
  });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};
