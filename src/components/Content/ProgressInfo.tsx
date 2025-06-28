import { useState } from "react";
import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/Button";
import { Progress } from "../Design/progress";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const ProgressInfo = () => {
  const progressCode = `
    import { Progress } from "@/components/ui/progress";
    export function ProgressDemo() {
      return (
        <div className="space-y-6 lg:min-w-72">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10%
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10%
                </Button>
              </div>

              <Progress value={progress} showValue />
              <Progress variant="success" value={75} size="sm" />
              <Progress variant="warning" value={30} size="lg" />
            </div>
        </div>
      );
    }`;

  const [progress, setProgress] = useState(45);

  return (
    <>
      <Breadcrumb links={["Components", "Progress"]} />
      <Intro
        title="Progress"
        description="Aesthetically designed progress bar or a component that looks like a progress bar."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="space-y-6 lg:min-w-72">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10%
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10%
                </Button>
              </div>

              <Progress value={progress} showValue />
              <Progress variant="success" value={75} size="sm" />
              <Progress variant="warning" value={30} size="lg" />
            </div>
          </div>
        }
        code={progressCode}
      />

      <InstallationShowcase componentName="Progress" />
    </>
  );
};
