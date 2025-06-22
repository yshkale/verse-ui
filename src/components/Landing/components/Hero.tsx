import { Badge } from "@/components/Design/Badge";
import { Button } from "@/components/Design/Button";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="my-44 flex flex-col space-y-4 items-center">
      <Badge>Built by @yshkale</Badge>
      <h1 className="text-7xl tracking-tighter font-semibold text-center">
        UI library for <br /> Design Engineers
      </h1>
      <p className="text-neutral-500 max-w-lg text-center">
        A collection of 15+ beautifully crafted, open-source UI components and
        effects. Built using React, TypeScript, Tailwind CSS, and Framer Motion.
      </p>

      <div className="flex items-center gap-4">
        <Button className="flex items-center my-4 gap-1" variant="primary">
          Browse components
          <ChevronRight size={16} className="pt-0.5" />
        </Button>
        <Button className="flex items-center my-4 gap-1" variant="secondary">
          Installation
        </Button>
      </div>
    </section>
  );
};
