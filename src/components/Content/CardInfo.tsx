import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Design/Card";

import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const CardInfo = () => {
  const cardCode = `
    import { Badge } from "@/components/ui/badge";
    export function BadgeDemo() {
      return (
        <Card>
            <CardHeader>
                <CardTitle>Project Dashboard</CardTitle>
                <CardDescription>Monitor your project metrics and analytics here</CardDescription>
            </CardHeader>
            <CardContent>
                Your content here...
            </CardContent>
            <CardFooter>
                <Button>View Details</Button>
            </CardFooter>
        </Card>
      );
    }`;

  const componentSourceCode = `
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "@/lib/utils";
    import { forwardRef, type HTMLAttributes } from "react";
    
    const cardVariants = cva(
      "rounded-xl border transition-all duration-150 overflow-hidden",
      {
        variants: {
          variant: {
            // Default elevated card with subtle shadows
            default:
              "bg-white border-neutral-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]",
    
            // Flat card with border focus
            flat: "bg-white border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50",
    
            // Highlighted card with indigo accent
            highlighted:
              "bg-gradient-to-br from-indigo-50 to-white border-indigo-200 shadow-[0_1px_3px_0_rgba(99,102,241,0.1),0_1px_2px_0_rgba(99,102,241,0.06)] hover:shadow-[0_4px_6px_-1px_rgba(99,102,241,0.1),0_2px_4px_-1px_rgba(99,102,241,0.06)]",
          },
          size: {
            sm: "p-4",
            default: "p-6",
            lg: "p-8",
          },
        },
        defaultVariants: {
          variant: "highlighted",
          size: "default",
        },
      }
    );
    
    const cardHeaderVariants = cva("flex flex-col space-y-1.5", {
      variants: {
        size: {
          sm: "pb-3",
          default: "pb-4",
          lg: "pb-6",
        },
      },
      defaultVariants: {
        size: "default",
      },
    });
    
    const cardTitleVariants = cva("font-semibold leading-none tracking-tight", {
      variants: {
        size: {
          sm: "text-sm",
          default: "text-base",
          lg: "text-lg",
        },
      },
      defaultVariants: {
        size: "default",
      },
    });
    
    const cardDescriptionVariants = cva("text-neutral-600", {
      variants: {
        size: {
          sm: "text-xs",
          default: "text-sm",
          lg: "text-base",
        },
      },
      defaultVariants: {
        size: "default",
      },
    });
    
    const cardContentVariants = cva("", {
      variants: {
        size: {
          sm: "text-xs",
          default: "text-sm",
          lg: "text-base",
        },
      },
      defaultVariants: {
        size: "default",
      },
    });
    
    const cardFooterVariants = cva("flex items-center", {
      variants: {
        size: {
          sm: "pt-3",
          default: "pt-4",
          lg: "pt-6",
        },
      },
      defaultVariants: {
        size: "default",
      },
    });
    
    export interface CardProps
      extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {}
    
    export interface CardHeaderProps
      extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardHeaderVariants> {}
    
    export interface CardTitleProps
      extends HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof cardTitleVariants> {}
    
    export interface CardDescriptionProps
      extends HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof cardDescriptionVariants> {}
    
    export interface CardContentProps
      extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardContentVariants> {}
    
    export interface CardFooterProps
      extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardFooterVariants> {}
    
    const Card = forwardRef<HTMLDivElement, CardProps>(
      ({ className, variant, size, ...props }, ref) => (
        <div
          ref={ref}
          className={cn(cardVariants({ variant, size, className }))}
          {...props}
        />
      )
    );
    Card.displayName = "Card";
    
    const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
      ({ className, size, ...props }, ref) => (
        <div
          ref={ref}
          className={cn(cardHeaderVariants({ size, className }))}
          {...props}
        />
      )
    );
    CardHeader.displayName = "CardHeader";
    
    const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
      ({ className, size, ...props }, ref) => (
        <h3
          ref={ref}
          className={cn(cardTitleVariants({ size, className }))}
          {...props}
        />
      )
    );
    CardTitle.displayName = "CardTitle";
    
    const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
      ({ className, size, ...props }, ref) => (
        <p
          ref={ref}
          className={cn(cardDescriptionVariants({ size, className }))}
          {...props}
        />
      )
    );
    CardDescription.displayName = "CardDescription";
    
    const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
      ({ className, size, ...props }, ref) => (
        <div
          ref={ref}
          className={cn(cardContentVariants({ size, className }))}
          {...props}
        />
      )
    );
    CardContent.displayName = "CardContent";
    
    const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
      ({ className, size, ...props }, ref) => (
        <div
          ref={ref}
          className={cn(cardFooterVariants({ size, className }))}
          {...props}
        />
      )
    );
    CardFooter.displayName = "CardFooter";
    
    export {
      Card,
      CardHeader,
      CardTitle,
      CardDescription,
      CardContent,
      CardFooter,
      cardVariants,
    };
    `;

  return (
    <>
      <Breadcrumb links={["Components", "Card"]} />
      <Intro
        title="Card"
        description="Aesthetically designed card or a component that looks like a card."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <Card>
            <CardHeader>
              <CardTitle>Project Dashboard</CardTitle>
              <CardDescription>
                Monitor your project metrics and analytics here
              </CardDescription>
            </CardHeader>
            <CardContent>Your content here...</CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        }
        code={cardCode}
      />

      <InstallationShowcase
        componentName="Card"
        componentCode={componentSourceCode}
        dependencies={["class-variance-authority", "@/lib/utils"]}
      />
    </>
  );
};
