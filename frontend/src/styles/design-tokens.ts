// Design System Tokens
// All reusable constants for maintaining consistency across the SMS Portal

export const spacing = {
  sectionVertical: "py-20",
  sectionVerticalCompact: "py-16",
  sectionVerticalMobile: "py-12",
  containerHorizontal: "px-6 lg:px-12",
  cardPadding: "p-6",
  cardPaddingLarge: "p-8 md:p-10",
  contentGap: "space-y-8",
  contentGapSmall: "space-y-3",
  contentGapCompact: "space-y-4",
  gridGap: "gap-8",
  gridGapLarge: "gap-12",
  buttonGap: "gap-2",
} as const;

export const typography = {
  heroH1: "font-heading font-bold text-4xl md:text-5xl lg:text-6xl",
  sectionH2: "font-heading font-bold text-3xl md:text-5xl",
  sectionH2Secondary: "font-heading font-semibold text-2xl md:text-3xl",
  cardH3: "font-heading font-bold text-2xl",
  cardH3Large: "font-heading font-bold text-xl",
  bodyText: "font-body text-base leading-relaxed",
  bodyTextLarge: "font-body text-lg leading-relaxed",
  buttonText: "font-body font-semibold text-base",
  buttonTextHeading: "font-heading font-bold text-lg",
  smallText: "font-body text-sm",
  uppercaseLabel: "font-body font-medium text-sm uppercase tracking-wider",
} as const;

export const colors = {
  primary: "text-primary",
  primaryForeground: "text-primary-foreground",
  accent: "text-accent",
  background: "bg-background",
  backgroundPrimary: "bg-primary",
  backgroundSecondary: "bg-secondary",
  backgroundAccent: "bg-accent",
  backgroundCard: "bg-card",
  foreground: "text-foreground",
  muted: "text-muted-foreground",
  border: "border-border",
} as const;

export const shadows = {
  card: "shadow-md",
  elevated: "shadow-lg",
  strong: "shadow-xl",
  elegant: "shadow-elegant",
  glow: "shadow-glow",
} as const;

export const transitions = {
  all: "transition-all duration-300",
  colors: "transition-colors duration-300",
  transform: "transition-transform duration-300",
  opacity: "transition-opacity duration-300",
} as const;

export const borderRadius = {
  button: "rounded-lg",
  card: "rounded-xl",
  cardLarge: "rounded-2xl",
  pill: "rounded-full",
} as const;

export const container = {
  standard: "max-w-7xl mx-auto",
  narrow: "max-w-4xl mx-auto",
  text: "max-w-3xl mx-auto",
  heroDescription: "max-w-2xl",
} as const;

export const button = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300",
  secondary: "bg-secondary text-primary hover:bg-secondary/80 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
  outline:
    "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
  outlineWhite:
    "border-2 border-white bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
  sizeLarge: "h-14 px-10 py-4 text-lg",
  sizeMedium: "h-11 px-6 py-3 text-base",
  fullWidth: "w-full",
} as const;

export const animations = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  scaleIn: "animate-scale-in",
  floatDiagonal: "animate-float-diagonal",
  floatVertical: "animate-float-vertical",
  floatSlow: "animate-float-slow",
  rotateSlow: "animate-rotate-slow",
  pulseGlow: "animate-pulse-glow",
  hoverLift: "hover-lift",
  hoverGlow: "hover-glow",
} as const;

export const grid = {
  twoColumn: "grid grid-cols-1 lg:grid-cols-2",
  threeColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  fourColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
} as const;

export const iconSizes = {
  small: 16,
  medium: 18,
  large: 20,
  feature: "w-14 h-14",
  step: "w-28 h-28",
} as const;
