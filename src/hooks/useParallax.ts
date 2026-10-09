import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax(
  ref?: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
): MotionValue<number> {
  const { speed = 0.5, direction = 'up' } = options;
  
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const multiplier = direction === 'up' ? -speed : speed;
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * multiplier]);

  return y;
}

export function useParallaxLayers() {
  const { scrollY } = useScroll();

  return {
    slowLayer: useTransform(scrollY, [0, 1000], [0, 300]),     // 0.3x speed
    mediumLayer: useTransform(scrollY, [0, 1000], [0, 500]),   // 0.5x speed
    fastLayer: useTransform(scrollY, [0, 1000], [0, 700]),     // 0.7x speed
  };
}
