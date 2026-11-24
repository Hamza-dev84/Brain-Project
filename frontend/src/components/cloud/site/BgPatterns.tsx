/**
 * Decorative SVG backgrounds — pure CSS/SVG, no asset files.
 * Place inside a `relative` parent; they render absolute and pointer-events-none.
 */

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={"pointer-events-none absolute inset-0 h-full w-full " + className}
    >
      <defs>
        <pattern id="dot-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}

export function CircuitPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={"pointer-events-none absolute inset-0 h-full w-full " + className}
    >
      <defs>
        <pattern id="circuit-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M10 10h30v30h30M40 40v30M10 40h30M70 10v30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="40" cy="40" r="2" fill="currentColor" />
          <circle cx="70" cy="40" r="2" fill="currentColor" />
          <circle cx="40" cy="70" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}
