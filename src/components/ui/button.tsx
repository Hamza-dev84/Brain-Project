import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useMagneticEffect } from "@/hooks/useMagneticEffect"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 state-layer touch-target transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:elevated-1 active:elevated-0 rounded-full [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        filled: "bg-primary text-primary-foreground hover:elevated-1 active:elevated-0 rounded-full [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        tonal: "bg-accent text-accent-foreground hover:elevated-1 rounded-full [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        outlined: "border border-neutral-400 text-primary bg-transparent hover:bg-primary/5 rounded-full [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        text: "text-primary hover:bg-primary/5 rounded-full bg-transparent [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        destructive: "bg-destructive text-destructive-foreground hover:elevated-1 rounded-full [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/80 rounded-full [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        ghost: "hover:bg-card text-foreground rounded-lg [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
        link: "text-primary underline-offset-4 hover:underline bg-transparent [transition:all_var(--md-sys-motion-duration-short)_var(--md-sys-motion-easing-standard)]",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-11 w-11 p-0",
        "icon-sm": "h-9 w-9 p-0",
        "icon-lg": "h-14 w-14 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  magnetic?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, magnetic = false, ...props }, ref) => {
    const magneticEffect = useMagneticEffect(0.25);
    const Comp = asChild ? Slot : "button"
    
    if (magnetic && !asChild) {
      return (
        <motion.button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={(node) => {
            magneticEffect.ref.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          onMouseMove={magneticEffect.handleMouseMove as any}
          onMouseLeave={magneticEffect.handleMouseLeave}
          animate={{
            x: magneticEffect.position.x,
            y: magneticEffect.position.y,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          {...(props as any)}
        />
      );
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
