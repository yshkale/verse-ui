import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Badge } from "../Design/badge";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const BadgeIntro = () => {
  const badgeCode = `
    import { Badge } from "@/components/ui/badge";
    export function BadgeDemo() {
      return (
        <div className="flex items-center gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      );
  }`;

  const componentSourceCode = `
  import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// CVA configuration for the badge
const badgeVariants = cva(
  // Base styles with pointer-events-none by default
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-in-out select-none relative overflow-hidden pointer-events-none",
  {
    variants: {
      variant: {
        // Primary with gradient and glow effect
        primary: [
          "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white",
          "shadow-lg shadow-indigo-500/25",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        ],
        // Secondary with subtle border and hover effects
        secondary: [
          "bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-700 border border-neutral-200",
          "hover:bg-gradient-to-br hover:from-neutral-100 hover:to-neutral-200 hover:shadow-md",
          "dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300 dark:border-neutral-700",
        ],
        // Ghost with subtle styling
        ghost: [
          "text-neutral-600 bg-neutral-200/50 hover:bg-neutral-100",
          "dark:text-neutral-400 dark:bg-neutral-800/50 dark:hover:bg-neutral-800",
        ],
      },
      size: {
        sm: "px-2 py-0.5 text-xxs min-h-[1.25rem]",
        default: "px-3 py-1 text-xs min-h-[1.5rem]",
        lg: "px-4 py-1.5 text-sm min-h-[2rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
`;

  return (
    <>
      <Breadcrumb links={["Components", "Badge"]} />
      <Intro
        title="Badge"
        description="Aesthetically designed badge or a component that looks like a badge."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="flex items-center gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        }
        code={badgeCode}
      />

      <InstallationShowcase
        componentName="Badge"
        componentCode={componentSourceCode}
        dependencies={["class-variance-authority", "@/lib/utils"]}
      />
    </>
  );
};
