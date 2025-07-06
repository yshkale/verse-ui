import { cn } from "@/lib/utils";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface InstallationShowcaseProps {
  componentName: string;
  className?: string;
  componentCode: string; // Pass the actual source code as string
  dependencies?: string[];
}

export const InstallationShowcase = ({
  className = "",
  componentCode,
  dependencies = [],
}: InstallationShowcaseProps) => {
  const [activeTab, setActiveTab] = useState("manual");
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Clean up the code formatting - remove leading/trailing whitespace and normalize indentation
  const cleanCode = componentCode.trim();
  const codeLines = cleanCode.split("\n");

  // Remove common leading whitespace to normalize indentation
  const minIndent = codeLines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const leadingSpaces = line.match(/^ */)?.[0].length || 0;
      return Math.min(min, leadingSpaces);
    }, Infinity);

  const normalizedCode = codeLines
    .map((line) => line.slice(minIndent))
    .join("\n");

  const previewLines = 8; // Show first 8 lines
  const shouldShowExpand = codeLines.length > previewLines;
  const displayCode = isExpanded
    ? normalizedCode
    : normalizedCode.split("\n").slice(0, previewLines).join("\n");

  const installationOptions = {
    manual: {
      title: "Manual",
      description:
        "Copy the component code below and paste it into your project",
      code: normalizedCode,
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
    <div className={cn("my-10 max-w-4xl mx-auto", className)}>
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
                    ? "text-neutral-950 border-b-2 border-indigo-600"
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
        <div className="px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-lg">
          <p className="text-indigo-800 text-sm">
            {currentOption?.description}
          </p>
        </div>

        {/* Command/Code Block */}
        <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">
                {codeLines.length} lines
              </span>
              <button
                onClick={() => handleCopy(currentOption?.code || "")}
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
          </div>

          <div className="relative">
            <div className="px-6 py-4 overflow-x-auto">
              <pre className="text-sm text-neutral-800 leading-relaxed whitespace-pre-wrap font-mono">
                <code>{displayCode}</code>
              </pre>
            </div>

            {!isExpanded && shouldShowExpand && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>

          {shouldShowExpand && (
            <div className="border-t border-neutral-200 px-4 py-2 bg-neutral-50">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors w-full justify-center py-1"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show more ({codeLines.length - previewLines} more lines)
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Dependencies Section */}
        {activeTab === "manual" && dependencies.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <h4 className="font-medium text-amber-800 mb-2 text-sm">
              Required Dependencies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {dependencies.map((dep, index) => (
                <code
                  key={index}
                  className="bg-amber-100 px-2 py-1 rounded text-xs font-mono text-amber-800"
                >
                  {dep}
                </code>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
