import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const alertContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
  {
    variants: {
      variant: {
        default:
          "bg-white border border-neutral-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.05)] rounded-xl p-4 backdrop-blur-sm",
        destructive:
          "bg-white border border-red-200 shadow-[0_4px_6px_-1px_rgba(239,68,68,0.1),0_2px_4px_-1px_rgba(239,68,68,0.06),0_0_0_1px_rgba(239,68,68,0.05)] rounded-xl p-4 backdrop-blur-sm",
        warning:
          "bg-white border border-amber-200 shadow-[0_4px_6px_-1px_rgba(245,158,11,0.1),0_2px_4px_-1px_rgba(245,158,11,0.06),0_0_0_1px_rgba(245,158,11,0.05)] rounded-xl p-4 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertDialogContentProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>,
    VariantProps<typeof alertContentVariants> {}

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(({ className, variant, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(alertContentVariants({ variant, className }))}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const alertHeaderVariants = cva(
  "flex flex-col space-y-2 text-center sm:text-left mb-4",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        warning: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertDialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertHeaderVariants> {}

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertHeaderVariants({ variant, className }))}
    {...props}
  />
));
AlertDialogHeader.displayName = "AlertDialogHeader";

const alertTitleVariants = cva(
  "text-base font-semibold leading-none tracking-tight flex items-center gap-2",
  {
    variants: {
      variant: {
        default: "text-neutral-900",
        destructive: "text-red-600",
        warning: "text-amber-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertDialogTitleProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>,
    VariantProps<typeof alertTitleVariants> {}

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, variant, children, ...props }, ref) => {
  const getIcon = () => {
    switch (variant) {
      case "destructive":
        return (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 border border-red-100">
            <svg
              className="h-5 w-5 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 border border-amber-100">
            <svg
              className="h-5 w-5 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 border border-indigo-100">
            <svg
              className="h-5 w-5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn(alertTitleVariants({ variant, className }))}
      {...props}
    >
      {getIcon()}
      <span>{children}</span>
    </AlertDialogPrimitive.Title>
  );
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-600 leading-relaxed ml-1", className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex justify-end space-x-3 pt-4 border-t border-neutral-100 mt-4",
      className
    )}
    {...props}
  />
));
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      // Using your button styles for consistency
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
      "bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)]",
      "py-1.5 px-4",
      className
    )}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      // Using your secondary button styles for consistency
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
      "bg-neutral-50 hover:bg-white text-neutral-950 font-normal shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)]",
      "py-1.5 px-4",
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
