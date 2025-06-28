import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

const skeletonVariants = cva("animate-pulse rounded-lg bg-gradient-to-r", {
  variants: {
    variant: {
      default: "from-neutral-200 via-neutral-100 to-neutral-200 bg-neutral-200",
      soft: "from-neutral-100 via-neutral-50 to-neutral-100 bg-neutral-100",
      accent: "from-indigo-100 via-indigo-50 to-indigo-100 bg-indigo-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, style, ...props }, ref) => {
    const inlineStyles = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant }), className)}
        style={inlineStyles}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Preset skeleton components
const SkeletonText = forwardRef<HTMLDivElement, Omit<SkeletonProps, "height">>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} className={cn("h-4", className)} {...props} />
  )
);
SkeletonText.displayName = "SkeletonText";

const SkeletonAvatar = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <Skeleton
      ref={ref}
      className={cn("h-10 w-10 rounded-full", className)}
      {...props}
    />
  )
);
SkeletonAvatar.displayName = "SkeletonAvatar";

const SkeletonCard = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div className="space-y-3">
      <Skeleton ref={ref} className={cn("h-48 w-full", className)} {...props} />
      <div className="space-y-2">
        <SkeletonText className="w-3/4" />
        <SkeletonText className="w-1/2" />
      </div>
    </div>
  )
);
SkeletonCard.displayName = "SkeletonCard";

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  skeletonVariants,
};
