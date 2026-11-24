import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ImageHoverProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  scaleIntensity?: number;
  type?: 'tilt' | 'scale' | 'lift' | 'glow';
}

export function ImageHover({
  children,
  className = '',
  tiltIntensity = 15,
  scaleIntensity = 1.05,
  type = 'tilt',
}: ImageHoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (type === 'scale') {
    return (
      <motion.div
        ref={ref}
        className={className}
        whileHover={{ scale: scaleIntensity }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'lift') {
    return (
      <motion.div
        ref={ref}
        className={className}
        whileHover={{ 
          y: -10,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'glow') {
    return (
      <motion.div
        ref={ref}
        className={className}
        whileHover={{ 
          scale: 1.02,
          filter: 'brightness(1.1)',
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          boxShadow: '0 0 0 rgba(79, 70, 229, 0)',
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Default: tilt effect
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
