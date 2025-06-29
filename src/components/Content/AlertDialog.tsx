import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";

import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../Design/alert-dialog";
import { Button } from "../Design/Button";

export const AlertDialogInfo = () => {
  const alertInfo = `
    import { AlertDialog } from "@/components/ui/alert-dialog";
    export function AlertDialogDemo() {
      return (
            <section className="flex justify-around gap-6">
                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="primary">Show Info Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent variant="default">
                    <AlertDialogHeader>
                    <AlertDialogTitle variant="default">
                        Confirm Action
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will update your profile settings. Are you sure
                        you want to continue?
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent variant="destructive">
                    <AlertDialogHeader>
                    <AlertDialogTitle variant="destructive">
                        Delete Account
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete
                        your account and remove your data from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                        Delete Account
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="secondary">Unsaved Changes</Button>
                </AlertDialogTrigger>
                <AlertDialogContent variant="warning">
                    <AlertDialogHeader>
                    <AlertDialogTitle variant="warning">
                        Unsaved Changes
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        You have unsaved changes that will be lost if you continue.
                        Do you want to save your changes before proceeding?
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Go Back</AlertDialogCancel>
                    <AlertDialogAction className="bg-amber-500 hover:bg-amber-600">
                        Continue Without Saving
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
            </section>
      );
    }`;

  return (
    <>
      <Breadcrumb links={["Components", "Alert Dialog"]} />
      <Intro
        title="Alert Dialog"
        description="Aesthetically designed alert dialog or a component that looks like an alert dialog."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <section className="flex justify-around gap-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="primary">Show Info Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent variant="default">
                <AlertDialogHeader>
                  <AlertDialogTitle variant="default">
                    Confirm Action
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will update your profile settings. Are you sure
                    you want to continue?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent variant="destructive">
                <AlertDialogHeader>
                  <AlertDialogTitle variant="destructive">
                    Delete Account
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">Unsaved Changes</Button>
              </AlertDialogTrigger>
              <AlertDialogContent variant="warning">
                <AlertDialogHeader>
                  <AlertDialogTitle variant="warning">
                    Unsaved Changes
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes that will be lost if you continue.
                    Do you want to save your changes before proceeding?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go Back</AlertDialogCancel>
                  <AlertDialogAction className="bg-amber-500 hover:bg-amber-600">
                    Continue Without Saving
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </section>
        }
        code={alertInfo}
      />

      <InstallationShowcase componentName="AlertDialog" />
    </>
  );
};
