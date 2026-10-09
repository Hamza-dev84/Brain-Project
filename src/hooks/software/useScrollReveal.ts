import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  animationType?: AnimationType;
  once?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.1,
  delay = 0,
  animationType = 'fade-up',
  once = true,
}: UseScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) {
              observer.disconnect();
            }
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, once]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'fade-up':
          return 'opacity-0 translate-y-8';
        case 'fade-down':
          return 'opacity-0 -translate-y-8';
        case 'fade-left':
          return 'opacity-0 translate-x-8';
        case 'fade-right':
          return 'opacity-0 -translate-x-8';
        case 'scale':
          return 'opacity-0 scale-95';
        case 'fade':
          return 'opacity-0';
        default:
          return 'opacity-0 translate-y-8';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return { elementRef, isVisible, animationClass: getAnimationClass() };
};
