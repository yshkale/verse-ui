"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";
import { X, Info, AlertTriangle, AlertCircle } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] transition-all duration-150 text-sm",
  {
    variants: {
      variant: {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        destructive: "bg-red-50 border-red-200 text-red-900",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const alertIconVariants = cva("h-4 w-4 shrink-0", {
  variants: {
    variant: {
      info: "text-blue-600",
      warning: "text-amber-600",
      destructive: "text-red-600",
    },
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, dismissible, onDismiss, children, ...props }, ref) => {
    const getIcon = () => {
      switch (variant) {
        case "warning":
          return <AlertTriangle className={alertIconVariants({ variant })} />;
        case "destructive":
          return <AlertCircle className={alertIconVariants({ variant })} />;
        default:
          return <Info className={alertIconVariants({ variant })} />;
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-start gap-3">
          {getIcon()}
          <div className="flex-1 space-y-1">{children}</div>
          {dismissible && (
            <button
              onClick={onDismiss}
              className="shrink-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
