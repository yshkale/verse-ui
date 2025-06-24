import { Badge } from "@/components/Design/Badge";
import { Button } from "@/components/Design/Button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

export const Hero = () => {
  const navigate = useNavigate();

  const handleBrowseCollections = () => {
    navigate(`/app/components/button`);
  };

  const handleDocs = () => {
    navigate("/app/getting-started/introduction");
  };

  return (
    <section className="my-28 lg:my-44 flex flex-col space-y-4 items-center">
      <Badge>Built by @yashkale</Badge>
      <h1 className="text-4xl lg:text-7xl tracking-tighter font-semibold text-center">
        UI library for <br /> Design Engineers
      </h1>
      <p className="text-neutral-500 max-w-sm lg:max-w-lg text-center text-sm lg:text-base">
        A collection of 15+ beautifully crafted, open-source UI components and
        effects. Built using React, TypeScript, Tailwind CSS, and Motion.
      </p>

      <div className="flex items-center gap-4">
        <Button
          className="flex items-center my-4 gap-1"
          variant="primary"
          onClick={handleDocs}
        >
          Get started
          <ChevronRight size={16} className="pt-0.5" />
        </Button>
        <Button
          className="flex items-center my-4 gap-1"
          variant="secondary"
          onClick={handleBrowseCollections}
        >
          Browse components
        </Button>
      </div>
    </section>
  );
};
