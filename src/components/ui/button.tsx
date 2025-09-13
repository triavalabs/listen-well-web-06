import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--primary-600))] text-[hsl(var(--text-inv))] hover:bg-[hsl(var(--primary-700))] focus-visible:ring-[hsl(var(--ring))] shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
        outline: "border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--text-900))] hover:bg-[hsl(var(--primary-100))] focus-visible:ring-[hsl(var(--ring))]",
        secondary: "bg-[hsl(var(--primary-100))] text-[hsl(var(--text-900))] hover:bg-[hsl(var(--primary-100))] hover:opacity-80 focus-visible:ring-[hsl(var(--ring))]",
        ghost: "text-[hsl(var(--text-700))] hover:bg-[hsl(var(--primary-100))] hover:text-[hsl(var(--text-900))] focus-visible:ring-[hsl(var(--ring))]",
        link: "text-[hsl(var(--accent-600))] underline-offset-4 hover:underline hover:text-[hsl(var(--accent-600))] hover:opacity-80 focus-visible:ring-[hsl(var(--ring))]",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-xl text-sm",
        sm: "h-9 px-3 py-1.5 rounded-lg text-sm",
        lg: "h-12 px-6 py-3 rounded-2xl text-base",
        icon: "h-10 w-10 rounded-xl",
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
