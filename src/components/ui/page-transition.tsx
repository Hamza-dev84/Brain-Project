import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Page wrapper for route content.
 *
 * Intentionally renders content visible with no entry animation: the app is
 * server-rendered, and any animation that starts from opacity 0 leaves the
 * page blank whenever the browser pauses animations (background tab,
 * throttled preview iframe).
 */
export function PageTransition({ children }: PageTransitionProps) {
  return <div>{children}</div>;
}
