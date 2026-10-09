import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className,
}: CountUpProps) {
  const { ref, value } = useCountUp({
    end,
    start,
    duration,
    decimals,
    suffix,
    prefix,
  });

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={cn('tabular-nums', className)}>
      {value}
    </span>
  );
}
