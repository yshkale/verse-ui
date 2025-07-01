import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Design/tooltip";

import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const TooltipInfo = () => {
  const tooltipInfo = `
    import { Tooltip } from "@/components/ui/tooltip";
    export function TooltipDemo() {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      );
    }`;

  return (
    <>
      <Breadcrumb links={["Components", "Tooltip"]} />
      <Intro
        title="Tooltip"
        description="Aesthetically designed tooltip or a component that looks like an tooltip."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        }
        code={tooltipInfo}
      />

      <InstallationShowcase componentName="Tooltip" />
    </>
  );
};
