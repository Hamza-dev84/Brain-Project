import React from "react";
import { Button } from "@/components/software/ui/button";
import { Check, Sparkles } from "lucide-react";

interface ProjectSummaryProps {
  projectType: string;
  selectedFeatures: Array<{ name: string; category: string }>;
  onRequestProposal: () => void;
}

export const ProjectSummary: React.FC<ProjectSummaryProps> = ({
  projectType,
  selectedFeatures,
  onRequestProposal,
}) => {
  // Group features by category
  const featuresByCategory = selectedFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Main Summary Card */}
      <div className="bg-gradient-to-br from-white to-brand-primary/5 rounded-2xl border-2 border-brand-primary/20 p-8 shadow-xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary/80 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-raleway text-2xl font-bold text-brand-dark mb-2">
              Your Project Summary
            </h3>
            <p className="font-lato text-base text-neutral-medium">
              Here's what you've selected for your custom proposal
            </p>
          </div>
        </div>

        {/* Project Type */}
        <div className="mb-6 p-4 bg-white rounded-lg border border-neutral-border">
          <p className="font-lato text-sm text-neutral-medium mb-1">Project Type</p>
          <p className="font-raleway text-xl font-bold text-brand-dark">{projectType}</p>
        </div>

        {/* Features Count */}
        <div className="mb-6 p-4 bg-white rounded-lg border border-neutral-border">
          <p className="font-lato text-sm text-neutral-medium mb-1">Features Selected</p>
          <p className="font-raleway text-xl font-bold text-brand-primary">
            {selectedFeatures.length} {selectedFeatures.length === 1 ? 'Feature' : 'Features'}
          </p>
        </div>

        {/* Features by Category */}
        <div className="space-y-4">
          <p className="font-lato text-sm font-semibold text-neutral-dark">Selected Features:</p>
          {Object.entries(featuresByCategory).map(([category, features]) => (
            <div key={category} className="space-y-2">
              <p className="font-lato text-xs font-medium text-neutral-medium uppercase tracking-wide">
                {category}
              </p>
              <div className="grid gap-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg border border-neutral-border"
                  >
                    <Check className="w-4 h-4 text-brand-primary flex-shrink-0" strokeWidth={3} />
                    <span className="font-lato text-sm text-brand-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h4 className="font-raleway text-2xl font-bold text-brand-dark">
            Ready to Get Started?
          </h4>
          <p className="font-lato text-base text-neutral-medium max-w-2xl mx-auto">
            Submit your project details and receive a custom proposal tailored to your needs
          </p>
        </div>

        <Button
          onClick={onRequestProposal}
          variant="primary"
          size="lg"
          className="min-w-[280px] h-14 text-lg font-bold shadow-xl hover:shadow-2xl"
        >
          Get Your Custom Proposal →
        </Button>

        {/* Trust Signals */}
        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="text-center">
            <p className="font-lato text-sm font-semibold text-brand-dark">Free Consultation</p>
            <p className="font-lato text-xs text-neutral-medium">No commitment required</p>
          </div>
          <div className="w-px h-10 bg-neutral-border" />
          <div className="text-center">
            <p className="font-lato text-sm font-semibold text-brand-dark">2-Hour Response</p>
            <p className="font-lato text-xs text-neutral-medium">Quick turnaround</p>
          </div>
        </div>
      </div>
    </div>
  );
};
