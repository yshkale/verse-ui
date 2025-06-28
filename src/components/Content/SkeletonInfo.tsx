import { Breadcrumb } from "../Breadcrumb";
import { ComponentShowcase } from "../ComponentShowcase";
import { InstallationShowcase } from "../InstallationShowcase";
import { Intro } from "../MainApp/components/Intro";
import {
  Skeleton,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonText,
} from "../Design/skeleton";

export const SkeletonInfo = () => {
  const skeletonCode = `
    import { Skeleton } from "@/components/ui/skeleton";
    export function SkeletonDemo() {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 lg:min-w-44">
              <SkeletonCard />
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="soft" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="soft" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="soft" className="w-3/4" />
                    <SkeletonText variant="soft" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="accent" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="accent" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="accent" className="w-3/4" />
                    <SkeletonText variant="accent" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }`;

  return (
    <>
      <Breadcrumb links={["Components", "Skeleton"]} />
      <Intro
        title="Skeleton"
        description="Aesthetically designed accent skeletons or a component that looks like a skeleton."
        className="mt-4 space-y-1.5"
      />

      <ComponentShowcase
        preview={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 lg:min-w-44">
              <SkeletonCard />
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="soft" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="soft" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="soft" className="w-3/4" />
                    <SkeletonText variant="soft" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-3">
                <Skeleton variant="accent" height={200} />
                <div className="flex items-center space-x-3">
                  <SkeletonAvatar variant="accent" />
                  <div className="space-y-2 flex-1">
                    <SkeletonText variant="accent" className="w-3/4" />
                    <SkeletonText variant="accent" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        code={skeletonCode}
      />

      <InstallationShowcase componentName="Skeleton" />
    </>
  );
};
