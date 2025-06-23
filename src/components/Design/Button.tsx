import { cn } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Button = ({ children, className, variant, onClick }: any) => {
  return (
    <>
      {(!variant || variant === "primary") && (
        <button
          className={cn(
            "bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-1.5 px-4 text-sm rounded-lg transition-all duration-150 shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)] active:translate-y-px",
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}

      {variant === "secondary" && (
        <button
          className={cn(
            "bg-neutral-50 hover:bg-white text-neutral-950 font-normal py-1.5 px-4 text-sm rounded-lg transition-all duration-150 shadow-[0_1px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] hover:shadow-[0_2px_0_0_rgba(22,29,37,0.05),inset_0_1px_0_0_hsla(0,0%,100%,0.25)] active:shadow-[inset_0_1px_0_0_hsla(0,0%,100%,0.25)] border border-[rgba(0,0,0,0.05)] active:translate-y-px",
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};
