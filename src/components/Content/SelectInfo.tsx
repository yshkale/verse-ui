import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Design/select";

import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const SelectInfo = () => {
  const selectInfo = `
    import { Select } from "@/components/ui/select";
    export function SelectDemo() {
      return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
      );
    }`;

  return (
    <>
      <Breadcrumb links={["Components", "Select"]} />
      <Intro
        title="Select"
        description="Aesthetically designed select or a component that looks like an select."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        }
        code={selectInfo}
      />

      <InstallationShowcase componentName="Select" />
    </>
  );
};
