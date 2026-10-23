import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold font-lato transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary shadow-lg hover:shadow-xl hover:scale-105 hover:bg-primary/10",
        secondary: "bg-secondary text-primary shadow-lg hover:shadow-xl hover:scale-105 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        premium: "card-premium text-primary shadow-xl hover:shadow-2xl hover:scale-105",
        hero: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105",
      },
      size: {
        default: "h-14 px-10 py-4 text-lg",
        sm: "h-11 px-6 py-3 text-base",
        lg: "h-14 px-10 py-4 text-lg",
        icon: "h-14 w-14",
        hero: "h-14 px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
