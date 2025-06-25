import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/Button";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const ButtonIntro = () => {
  const buttonCode = `
    import { Button } from "@/components/ui/button";
    export function ButtonDemo() {
      return (
        <div className="flex items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      );
  }`;

  return (
    <>
      <Breadcrumb links={["Components", "Button"]} />
      <Intro
        title="Button"
        description="Aesthetically designed button or a component that looks like a button."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="flex items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        }
        code={buttonCode}
      />

      <InstallationShowcase componentName="Button" />
    </>
  );
};
