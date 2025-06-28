import { useState } from "react";
import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Alert, AlertDescription, AlertTitle } from "../Design/alert";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const AlertInfo = () => {
  const alertInfo = `
    import { Alert } from "@/components/ui/alert";
    export function AlertDemo() {
      return (
        <div className="grid gap-4">
            <Alert
                variant="info"
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with a dismiss button.
                </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This is a warning alert to grab your attention.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </div>
      );
    }`;

  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <Breadcrumb links={["Components", "Alert"]} />
      <Intro
        title="Alert"
        description="Aesthetically designed alert or a component that looks like a alert."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="grid gap-4">
            {showAlert && (
              <Alert
                variant="info"
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with a dismiss button.
                </AlertDescription>
              </Alert>
            )}

            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This is a warning alert to grab your attention.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        }
        code={alertInfo}
      />

      <InstallationShowcase componentName="Alert" />
    </>
  );
};
