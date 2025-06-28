import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-neutral-100 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)]",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        warning: "",
      },
      size: {
        sm: "h-1.5",
        default: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-out shadow-[0_1px_0_0_rgba(255,255,255,0.3)]",
  {
    variants: {
      variant: {
        default: "bg-indigo-500",
        success: "bg-green-500",
        warning: "bg-amber-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  showValue?: boolean;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    { className, variant, size, value = 0, max = 100, showValue, ...props },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className="w-full space-y-2">
        {showValue && (
          <div className="flex justify-between text-sm text-neutral-600">
            <span>Progress</span>
            <span>{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          ref={ref}
          className={cn(progressVariants({ variant, size }), className)}
          {...props}
        >
          <div
            className={cn(progressIndicatorVariants({ variant }))}
            style={{
              transform: `translateX(-${100 - percentage}%)`,
            }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress, progressVariants };
