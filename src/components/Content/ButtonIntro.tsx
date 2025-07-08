import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/button";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const ButtonIntro = () => {
  const buttonCode = `
    import { Button } from "@/components/ui/button";
    export function ButtonDemo() {
      return (
        <div className="flex items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      );
  }`;

  const componentSourceCode = `
  import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        // This is your PRIMARY button styles
        primary:
          "bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)]",

        // This is your SECONDARY button styles
        secondary:
          "bg-neutral-50 hover:bg-white text-neutral-950 font-normal shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)]",

        // You can add more variants if you want
        destructive:
          "bg-red-500 hover:bg-red-600 text-white shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)]",
      },
      size: {
        default: "py-1.5 px-4",
        sm: "py-1 px-3 text-xs",
        lg: "py-2 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

  `;

  return (
    <>
      <Breadcrumb links={["Components", "Button"]} />
      <Intro
        title="Button"
        description="Aesthetically designed button or a component that looks like a button."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        }
        code={buttonCode}
      />

      <InstallationShowcase
        componentName="Button"
        componentCode={componentSourceCode}
        dependencies={[
          "@radix-ui/react-slot",
          "class-variance-authority",
          "@/lib/utils",
        ]}
      />
    </>
  );
};
