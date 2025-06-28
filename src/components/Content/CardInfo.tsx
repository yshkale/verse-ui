import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { Button } from "../Design/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Design/Card";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";

export const CardInfo = () => {
  const cardCode = `
    import { Badge } from "@/components/ui/badge";
    export function BadgeDemo() {
      return (
        <Card>
            <CardHeader>
                <CardTitle>Project Dashboard</CardTitle>
                <CardDescription>Monitor your project metrics and analytics here</CardDescription>
            </CardHeader>
            <CardContent>
                Your content here...
            </CardContent>
            <CardFooter>
                <Button>View Details</Button>
            </CardFooter>
        </Card>
      );
    }`;

  return (
    <>
      <Breadcrumb links={["Components", "Card"]} />
      <Intro
        title="Card"
        description="Aesthetically designed card or a component that looks like a card."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <Card>
            <CardHeader>
              <CardTitle>Project Dashboard</CardTitle>
              <CardDescription>
                Monitor your project metrics and analytics here
              </CardDescription>
            </CardHeader>
            <CardContent>Your content here...</CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        }
        code={cardCode}
      />

      <InstallationShowcase componentName="Card" />
    </>
  );
};
