/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bug, WandSparkles } from "lucide-react";

export const RightNav = () => {
  const navItems = [
    {
      label: "Contribute",
      subItems: [
        {
          icon: <Bug size={15} className="text-neutral-500" />,
          label: "Report an issue",
          href: "https://github.com/yshkale/verse-ui/issues/new?title=%5Bbug%5D%3A",
        },
        {
          icon: <WandSparkles size={15} className="text-neutral-500" />,
          label: "Request a feature",
          href: "https://github.com/yshkale/verse-ui/issues/new?title=%5Bfeat%5D%3A",
        },
      ],
    },
  ];
  return (
    <div className="hidden md:block">
      {navItems.map((item: any) => {
        return (
          <div>
            <h4 className="text-sm font-medium">{item.label}</h4>

            <div className="space-y-1.5 mt-3">
              {item.subItems.map((subItem: any) => {
                return (
                  <a
                    className="flex items-center gap-2"
                    href={subItem.href}
                    target="_blank"
                  >
                    {subItem.icon}
                    <p className="text-sm text-neutral-500">{subItem.label}</p>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
