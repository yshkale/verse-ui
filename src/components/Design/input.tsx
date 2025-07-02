import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "w-full rounded-lg border border-neutral-300 bg-white px-4 py-1.5 text-base text-neutral-900 shadow-sm",

        // Interaction
        "transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1",

        // Placeholder + disabled
        "placeholder:text-neutral-400 placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-50",

        // Selection + file input fallback
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",

        className
      )}
      {...props}
    />
  );
}

export { Input };
