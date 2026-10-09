import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  scaleOnHover?: number;
}

export const AnimatedCard = ({
  children,
  className = '',
  tiltAmount = 5,
  scaleOnHover = 1.02,
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: scaleOnHover,
        rotateX: tiltAmount,
        rotateY: tiltAmount,
        transition: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1] as const,
        },
      }}
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
