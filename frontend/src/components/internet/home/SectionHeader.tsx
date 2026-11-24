import React from 'react';
import { ScrollReveal } from '@/components/internet/animations/ScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  kicker?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  kicker,
  align = 'center',
  className = '',
}) => {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <ScrollReveal>
      <div className={`flex flex-col gap-5 ${alignCls} ${className}`}>
        {eyebrow && <span className="bn-eyebrow">{eyebrow}</span>}
        <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.05] bn-display max-w-4xl">
          {title}
        </h2>
        {kicker && (
          <p className="font-dm text-[hsl(var(--bn-ink-soft))] text-base md:text-lg max-w-2xl">
            {kicker}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionHeader;
