import { useNavigate } from "react-router";
import { Breadcrumb } from "../Breadcrumb";
import { Intro } from "../MainApp/components/Intro";

export const InstallationInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col">
      <Breadcrumb links={["Docs", "Installation"]} />
      <Intro
        title="Installation"
        description="How to install verse ui components and use it your app."
      />

      <div className="bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm text-neutral-500 -mt-1">
        <span className="font-medium">Note:&nbsp;</span>This UI library is built
        on top of shadcn/ui. check more props and usage of components&nbsp;
        <a
          className="border-b border-neutral-400 cursor-pointer"
          href="https://ui.shadcn.com/docs/components"
          target="_blank"
        >
          here.
        </a>
      </div>

      <div className="mt-12 space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">
          Manual Installation
        </h2>
        <p className="text-base text-neutral-500 max-w-2xl">
          Copy and paste the component code directly into your project. This
          gives you full control over the component and lets you customize it
          however you want.
        </p>
      </div>

      <div className="space-y-3">
        <div className="mt-5">
          <div className="space-y-2">
            <h3 className="text-base font-medium">Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-neutral-500">
              <li>Browse to the component you want to use</li>
              <li>Copy the component code</li>
              <li>
                Create a new file in your components directory (e.g.,{" "}
                <code className="bg-neutral-100 px-1 py-0.5 rounded">
                  components/ui/button.tsx
                </code>
                )
              </li>
              <li>
                Paste the code and install required dependencies mentioned
              </li>
              <li>Import and use the component in your project</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="my-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-4 border border-neutral-200 rounded-lg cursor-pointer"
            onClick={() => navigate("/app/components/alert")}
          >
            <h3 className="font-medium mb-1 text-neutral-700">
              Browse Components
            </h3>
            <p className="text-sm text-neutral-500">
              Explore our collection of aesthetically designed components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
