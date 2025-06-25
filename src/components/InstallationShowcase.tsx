import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface InstallationShowcaseProps {
  componentName: string;
  className?: string;
}

export const InstallationShowcase = ({
  componentName,
  className = "",
}: InstallationShowcaseProps) => {
  const [activeTab, setActiveTab] = useState("cli");
  const [copied, setCopied] = useState(false);

  const installationOptions = {
    manual: {
      title: "Manual",
      description: "Copy and paste the component code",
      code: `// Copy the component code from above
// Paste into your components/ui/${componentName.toLowerCase()}.tsx`,
    },
    package: {
      title: "Package",
      description: "Install as npm package",
      code: `npm install @verse/ui 
import { ${componentName} } from "@verse/ui";`,
    },
  };

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const currentOption =
    installationOptions[activeTab as keyof typeof installationOptions];

  return (
    <div className={cn("my-12 max-w-4xl mx-auto", className)}>
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Installation
        </h3>
      </div>

      {/* Tab Navigation */}
      <div className="mb-4 border-b border-neutral-200">
        <div className="flex items-center gap-6">
          {Object.entries(installationOptions).map(([key, option]) => {
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  activeTab === key
                    ? "text-neutral-950 border-b border-indigo-600"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                {option.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-4">
        {/* Description */}
        <div className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-lg">
          <p className="text-indigo-800 text-sm">
            {currentOption?.description}
          </p>
        </div>

        {/* Command/Code Block */}
        <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
          <div className="flex items-center justify-between px-4 py-1 bg-neutral-50 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <button
              onClick={() => handleCopy(currentOption?.code)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white rounded-md transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="px-6 py-4 overflow-x-auto">
            <pre className="text-sm text-neutral-800 leading-relaxed whitespace-pre-wrap">
              <code>{currentOption?.code}</code>
            </pre>
          </div>
        </div>

        {activeTab === "manual" && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <h4 className="font-medium text-amber-800 mb-1 text-xs">
              Required Dependencies:
            </h4>
            <div className="text-sm text-amber-700 space-y-1">
              <code className="bg-amber-100 px-2 py-1 rounded text-xs">
                @radix-ui/react-slot
              </code>
              <code className="bg-amber-100 px-2 py-1 rounded text-xs ml-2">
                class-variance-authority
              </code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
