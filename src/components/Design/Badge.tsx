import { cn } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Badge = ({ children, className }: any) => {
  return (
    <div
      className={cn(
        "border border-neutral-200 rounded-full py-1.5 px-4 text-xs shadow-sm pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};
