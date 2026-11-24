import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: "bash" | "json" | "java" | "javascript" | "swift" | "csharp" | "python" | "php";
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language = "bash", showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="relative group">
      <div className="absolute top-3 left-3 px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300 font-semibold uppercase">
        {language}
      </div>

      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>

      <pre className="bg-slate-800 text-slate-200 rounded-lg p-6 pt-12 overflow-x-auto font-mono text-sm leading-relaxed">
        <code>
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="text-slate-600 select-none mr-4 min-w-[2ch] text-right">
                  {index + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
