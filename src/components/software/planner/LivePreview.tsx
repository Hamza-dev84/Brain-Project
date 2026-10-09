import React from "react";

interface LivePreviewProps {
  selectedFeatures: string[];
  projectType: string;
}

export const LivePreview: React.FC<LivePreviewProps> = ({
  selectedFeatures,
  projectType,
}) => {
  return (
    <div className="sticky top-6">
      <div className="w-full max-w-[280px] mx-auto bg-white rounded-2xl border-4 border-neutral-border shadow-xl overflow-hidden">
        {/* Browser Header */}
        <div className="bg-neutral-100 px-3 py-2 flex items-center gap-2 border-b border-neutral-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-2 py-0.5 text-xs text-neutral-medium">
            yoursite.com
          </div>
        </div>

        {/* Preview Content */}
        <div className="h-[400px] bg-gradient-to-b from-neutral-50 to-white p-4 overflow-y-auto">
          <div className="space-y-3">
            {/* Header */}
            <div className="h-12 bg-brand-primary/10 rounded animate-pulse" />

            {/* Hero Section */}
            <div className="h-32 bg-neutral-100 rounded flex items-center justify-center">
              <span className="text-xs text-neutral-medium">
                {projectType || "Select a project type"}
              </span>
            </div>

            {/* Feature Indicators */}
            {selectedFeatures.length > 0 && (
              <div className="space-y-2">
                {selectedFeatures.slice(0, 5).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-16 bg-white border border-neutral-border rounded transition-all duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  />
                ))}
              </div>
            )}

            {selectedFeatures.length === 0 && (
              <div className="text-center py-8 text-xs text-neutral-medium">
                Select features to preview
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feature Count */}
      <div className="text-center mt-4">
        <span className="font-lato text-sm text-neutral-medium">
          {selectedFeatures.length} feature{selectedFeatures.length !== 1 ? "s" : ""} selected
        </span>
      </div>
    </div>
  );
};
