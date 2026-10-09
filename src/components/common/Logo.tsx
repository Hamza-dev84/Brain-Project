import { useEffect, useState } from 'react';
import { useTheme } from '@/components/providers/theme-provider';
import brainTelecomWhite from '@/assets/logos/braintel-logo-white.png';
import brainTelecomBlue from '@/assets/logos/braintel-logo-blue.png';

interface LogoProps {
  className?: string;
  height?: string;
}

export function Logo({ className = "h-8 w-auto", height }: LogoProps) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');

  useEffect(() => {
    if (theme === 'system') {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setIsDark(theme === 'dark');
    }
  }, [theme]);
  
  return (
    <img loading="eager" decoding="async" fetchPriority="high" 
      src={isDark ? brainTelecomWhite : brainTelecomBlue}
      alt="BrainTEL - Brain Telecommunication Ltd." 
      className={height || className}
    />
  );
}
