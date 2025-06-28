/* eslint-disable @typescript-eslint/no-explicit-any */
// Import other content components as needed
// import { Installation } from "../Content/installation";
// import { Button } from "../Content/button";
// import { Badge } from "../Content/badge";

import { AlertInfo } from "@/components/Content/AlertInfo";
import { BadgeIntro } from "@/components/Content/BadgeInfo";
import { ButtonIntro } from "@/components/Content/ButtonIntro";
import { CardInfo } from "@/components/Content/CardInfo";
import { Introduction } from "@/components/Content/introduction";

export const ContentRenderer = ({ type, section }: any) => {
  // Component mapping for better maintainability
  const componentMap: any = {
    introduction: Introduction,
    alert: AlertInfo,
    button: ButtonIntro,
    badge: BadgeIntro,
    card: CardInfo,
  };

  const Component = componentMap[type];

  if (Component) {
    return <Component />;
  }

  // Default content when no specific component is found
  if (type === "default" && section) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {section.replace("-", " ")}
        </h1>
        <p className="text-neutral-600">
          Select a topic from the navigation to get started.
        </p>
      </div>
    );
  }

  // Fallback for unknown routes
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
      <p className="text-neutral-600">
        The requested content could not be found.
      </p>
    </div>
  );
};
