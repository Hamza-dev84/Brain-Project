import { motion, Variant } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const directionVariants: Record<string, { hidden: Variant; visible: Variant }> = {
  up: {
    hidden: { opacity: 1, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  down: {
    hidden: { opacity: 1, y: -60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 1, x: 60, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  right: {
    hidden: { opacity: 1, x: -60, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
};

export function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: AnimatedSectionProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
