import React from "react";
import { Button } from "@/components/software/ui/button";
import { Zap } from "lucide-react";

interface Preset {
  name: string;
  featureIds: string[];
}

interface QuickPresetsProps {
  presets: Preset[];
  onSelectPreset: (featureIds: string[]) => void;
}

export const QuickPresets: React.FC<QuickPresetsProps> = ({
  presets,
  onSelectPreset,
}) => {
  if (!presets || presets.length === 0) return null;

  return (
    <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-200 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-raleway text-lg font-bold text-brand-dark">
            Quick Start Packages
          </h4>
          <p className="font-lato text-sm text-neutral-medium">
            Select a preset to get started faster
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {presets.map((preset, index) => (
          <Button
            key={index}
            onClick={() => onSelectPreset(preset.featureIds)}
            variant="outline"
            className="font-lato text-sm font-medium border-2 border-amber-300 bg-white hover:bg-amber-100 hover:border-amber-400 transition-all duration-200"
          >
            {preset.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
