import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/internet/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 1,
        y: offset.y,
        x: offset.x,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              transition: {
                duration,
                delay,
                ease: [0.4, 0, 0.2, 1] as const,
              },
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
