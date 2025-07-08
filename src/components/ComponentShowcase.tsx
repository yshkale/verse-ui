import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState, type ReactElement } from "react";

interface Props {
  preview: ReactElement;
  code: string;
  className?: string;
}

export const ComponentShowcase = ({ preview, code, className = "" }: Props) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <div className="mb-4 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-2 text-sm font-medium",
              activeTab === "preview"
                ? "text-neutral-950 border-b border-indigo-600"
                : "text-neutral-600 hover:text-neutral-900"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-4 py-2 text-sm font-medium",
              activeTab === "code"
                ? "text-neutral-950 border-b border-indigo-600"
                : "text-neutral-600 hover:text-neutral-900"
            )}
          >
            Code
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
        {activeTab === "preview" ? (
          <div className="p-2 md:p-12 flex items-center justify-center min-h-[300px] bg-gradient-to-br from-neutral-50 to-white">
            <div className="flex flex-col items-center gap-4">{preview}</div>
          </div>
        ) : (
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-1 bg-neutral-50 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <button
                onClick={handleCopy}
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
            <div className="p-2 md:px-6 md:py-4 overflow-x-auto">
              <pre className="text-sm text-neutral-800 leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
