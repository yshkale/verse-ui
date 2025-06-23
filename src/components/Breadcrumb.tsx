import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

interface Props {
  links: string[];
}

export const Breadcrumb = ({ links }: Props) => {
  return (
    <div className="text-sm flex gap-1 h-fit">
      {links.map((link: string, index: number) => {
        return (
          <div className="flex items-center gap-1">
            <p
              className={cn(
                "",
                index === links.length - 1 && "text-neutral-500"
              )}
            >
              {link}
            </p>
            {index !== links.length - 1 && (
              <ChevronRightIcon size={14} className="mt-0.5" />
            )}
          </div>
        );
      })}
    </div>
  );
};
