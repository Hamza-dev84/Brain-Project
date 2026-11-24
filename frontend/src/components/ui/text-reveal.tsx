import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words' | 'lines';
  immediate?: boolean;
}

/**
 * Text reveal effect.
 *
 * Text renders visible with no entry animation — server-rendered copy must
 * never be hidden behind an animation that may be paused by the browser.
 */
export function TextReveal({ children, className = '', type = 'words' }: TextRevealProps) {
  const text = typeof children === 'string' ? children : '';

  if (!text) return <>{children}</>;

  const segments =
    type === 'chars' ? text.split('') : type === 'words' ? text.split(' ') : text.split('\n');

  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <span key={index} className="inline-block">
          {segment}
          {type === 'words' && index < segments.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}


// Gradient text reveal effect
export function GradientTextReveal({ children, className = '' }: TextRevealProps) {
  return (
    <span
      className={className}
      style={{
        backgroundImage:
          'linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        backgroundPosition: '0% center',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  );
}
