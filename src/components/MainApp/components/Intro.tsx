import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  className?: string;
}

export const Intro = ({ title, description, className }: Props) => {
  return (
    <div className={cn("my-8 space-y-2", className)}>
      <h2 className="text-4xl font-semibold tracking-tighter">{title}</h2>
      <p className="text-base text-neutral-600 max-w-2xl">{description}</p>
    </div>
  );
};
