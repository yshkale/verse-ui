import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Input } from "../Design/input";

import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const InputInfo = () => {
  const inputInfo = `
    import { Input } from "@/components/ui/input";
    export function InputDemo() {
      return (
        <Input type="email" placeholder="Email" />
      );
    }`;

  return (
    <>
      <Breadcrumb links={["Components", "Input"]} />
      <Intro
        title="Input"
        description="Aesthetically designed input or a component that looks like an input."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={<Input type="email" placeholder="Email" />}
        code={inputInfo}
      />

      <InstallationShowcase componentName="Input" />
    </>
  );
};
