import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface VariantShowcaseProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

interface VariantItemProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const VariantShowcase = ({
  title = "Variants",
  description,
  children,
  className,
}: VariantShowcaseProps) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="-space-y-1">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">{title}</h3>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>

      {/* Light aesthetic border */}
      <div className="border-t border-neutral-200" />

      {/* Variants grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>
    </div>
  );
};

const VariantItem = ({ title, children, className }: VariantItemProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="text-center">
        <h3 className="text-sm font-medium text-neutral-700 uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {/* Clean preview area */}
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl">
        {children}
      </div>
    </div>
  );
};

export { VariantShowcase, VariantItem };
