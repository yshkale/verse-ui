import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonText,
} from "../Design/skeleton";

export const SkeletonInfo = () => {
  const skeletonCode = `
    import { Skeleton } from "@/components/ui/skeleton";
    export function SkeletonDemo() {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 lg:min-w-44">
              <SkeletonCard />
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="soft" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="soft" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="soft" className="w-3/4" />
                    <SkeletonText variant="soft" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="accent" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="accent" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="accent" className="w-3/4" />
                    <SkeletonText variant="accent" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }`;

  const componentSourceCode = `
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
          width: typeof width === "number" ? "{width}px" : width,
          height: typeof height === "number" ? "{height}px" : height,
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
    `;

  return (
    <>
      <Breadcrumb links={["Components", "Skeleton"]} />
      <Intro
        title="Skeleton"
        description="Aesthetically designed accent skeletons or a component that looks like a skeleton."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 lg:min-w-44">
              <SkeletonCard />
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="soft" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="soft" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="soft" className="w-3/4" />
                    <SkeletonText variant="soft" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="accent" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="accent" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="accent" className="w-3/4" />
                    <SkeletonText variant="accent" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        code={skeletonCode}
      />

      <InstallationShowcase
        componentName="Skeleton"
        componentCode={componentSourceCode}
        dependencies={["class-variance-authority", "@/lib/utils"]}
      />
    </>
  );
};
