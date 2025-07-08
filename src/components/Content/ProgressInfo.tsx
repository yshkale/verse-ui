import { useState } from "react";
import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/button";
import { Progress } from "../Design/progress";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const ProgressInfo = () => {
  const progressCode = `
    import { Progress } from "@/components/ui/progress";
    export function ProgressDemo() {
      return (
        <div className="space-y-6 lg:min-w-72">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10%
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10%
                </Button>
              </div>

              <Progress value={progress} showValue />
              <Progress variant="success" value={75} size="sm" />
              <Progress variant="warning" value={30} size="lg" />
            </div>
        </div>
      );
    }`;

  const [progress, setProgress] = useState(45);

  const componentSourceCode = `
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
                transform: "translateX(-{100 - percentage}%)",
              }}
            />
          </div>
        </div>
      );
    }
  );
  
  Progress.displayName = "Progress";
  
  export { Progress, progressVariants };
  `;

  return (
    <>
      <Breadcrumb links={["Components", "Progress"]} />
      <Intro
        title="Progress"
        description="Aesthetically designed progress bar or a component that looks like a progress bar."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="space-y-6 w-[240px] lg:min-w-72">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10%
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10%
                </Button>
              </div>

              <Progress value={progress} showValue />
              <Progress variant="success" value={75} size="sm" />
              <Progress variant="warning" value={30} size="lg" />
            </div>
          </div>
        }
        code={progressCode}
      />

      <InstallationShowcase
        componentName="Progress"
        componentCode={componentSourceCode}
        dependencies={["@/lib/utils", "class-variance-authority"]}
      />
    </>
  );
};
