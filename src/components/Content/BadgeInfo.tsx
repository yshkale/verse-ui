import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Badge } from "../Design/Badge";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const BadgeIntro = () => {
  const badgeCode = `
    import { Badge } from "@/components/ui/badge";
    export function BadgeDemo() {
      return (
        <div className="flex items-center gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      );
  }`;

  return (
    <>
      <Breadcrumb links={["Components", "Badge"]} />
      <Intro
        title="Badge"
        description="Aesthetically designed badge or a component that looks like a badge."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="flex items-center gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        }
        code={badgeCode}
      />

      <InstallationShowcase componentName="Badge" />
    </>
  );
};
