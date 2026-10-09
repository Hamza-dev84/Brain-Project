import React, { useState, useEffect } from "react";
import { Button } from "@/components/software/ui/button";
import { ProjectTypeCardV2 } from "./ProjectTypeCardV2";
import { FeatureCardV2 } from "./FeatureCardV2";
import { ProjectSummary } from "./ProjectSummary";
import { QuickPresets } from "./QuickPresets";
import { ProposalModal } from "./ProposalModal";
import { ServiceConfig, Feature } from "@/types/softwarePlanner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractivePlannerV2Props {
  config: ServiceConfig;
}

export const InteractivePlannerV2: React.FC<InteractivePlannerV2Props> = ({
  config,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [showProposalModal, setShowProposalModal] = useState(false);

  // Set initial project type to the popular one
  useEffect(() => {
    const popularType = config.projectTypes.find((pt) => pt.isPopular);
    if (popularType) {
      setSelectedProjectType(popularType.id);
      
      // Auto-select recommended features
      const features = config.features[popularType.id] || [];
      const recommendedFeatureIds = features
        .filter((f) => f.recommended)
        .map((f) => f.id);
      setSelectedFeatures(recommendedFeatureIds);
    }
  }, [config]);

  // Get current features based on selected project type
  const currentFeatures = selectedProjectType
    ? config.features[selectedProjectType] || []
    : [];

  // Get popular/recommended features (shown by default)
  const displayedFeatures = currentFeatures.filter(
    (f) => f.popular || f.recommended
  );

  // Group features by category
  const featuresByCategory = currentFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  const handleProjectTypeSelect = (projectTypeId: string) => {
    setSelectedProjectType(projectTypeId);
    
    // Auto-select recommended features for the new project type
    const features = config.features[projectTypeId] || [];
    const recommendedFeatureIds = features
      .filter((f) => f.recommended)
      .map((f) => f.id);
    setSelectedFeatures(recommendedFeatureIds);
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSelectPreset = (featureIds: string[]) => {
    setSelectedFeatures(featureIds);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedToStep2 = selectedProjectType !== "";
  const canProceedToStep3 = selectedFeatures.length > 0;

  const getSelectedFeaturesWithDetails = () => {
    return selectedFeatures
      .map((id) => currentFeatures.find((f) => f.id === id))
      .filter((f): f is Feature => f !== undefined);
  };

  const handleOpenProposalModal = () => {
    const projectType = config.projectTypes.find(
      (pt) => pt.id === selectedProjectType
    );
    const features = getSelectedFeaturesWithDetails();

    setShowProposalModal(true);
  };

  // Progress calculation
  const getStepProgress = () => {
    if (currentStep === 1) return canProceedToStep2 ? 33 : 0;
    if (currentStep === 2) return canProceedToStep3 ? 66 : 33;
    return 100;
  };

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-raleway font-bold text-lg transition-all duration-300",
                    currentStep >= step
                      ? "bg-brand-primary text-white shadow-lg scale-110"
                      : "bg-neutral-light text-neutral-medium"
                  )}
                >
                  {step}
                </div>
                <p
                  className={cn(
                    "font-lato text-xs md:text-sm font-medium transition-colors duration-300",
                    currentStep >= step ? "text-brand-primary" : "text-neutral-medium"
                  )}
                >
                  {step === 1 && "Project Type"}
                  {step === 2 && "Features"}
                  {step === 3 && "Summary"}
                </p>
              </div>
              {step < 3 && (
                <div className="flex-1 h-1 mx-2 bg-neutral-light rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full bg-brand-primary transition-all duration-500",
                      currentStep > step ? "w-full" : "w-0"
                    )}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-primary to-brand-primary/80 transition-all duration-500"
            style={{ width: `${getStepProgress()}%` }}
          />
        </div>
      </div>

      {/* Step 1: Project Type Selection */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <h3 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark">
              Choose Your Project Type
            </h3>
            <p className="font-lato text-base md:text-lg text-neutral-medium max-w-2xl mx-auto">
              Select the type of project that best matches your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {config.projectTypes.map((projectType) => (
              <ProjectTypeCardV2
                key={projectType.id}
                icon={projectType.icon}
                title={projectType.title}
                description={projectType.description}
                isSelected={selectedProjectType === projectType.id}
                onClick={() => handleProjectTypeSelect(projectType.id)}
                isPopular={projectType.isPopular}
              />
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Button
              onClick={goToNextStep}
              disabled={!canProceedToStep2}
              variant="primary"
              size="lg"
              className="min-w-[200px]"
            >
              Continue to Features
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Feature Selection */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <h3 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark">
              Select Your Features
            </h3>
            <p className="font-lato text-base md:text-lg text-neutral-medium max-w-2xl mx-auto">
              Choose the features you need for your project
            </p>
          </div>

          {/* Quick Presets */}
          {config.quickPresets && config.quickPresets[selectedProjectType] && (
            <QuickPresets
              presets={config.quickPresets[selectedProjectType]}
              onSelectPreset={handleSelectPreset}
            />
          )}

          {/* Features by Category */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {Object.entries(featuresByCategory).map(([category, features]) => {
              const isExpanded = expandedCategories[category];
              const displayFeatures = isExpanded
                ? features
                : features.filter((f) => f.popular || f.recommended);
              const hasMoreFeatures = features.length > displayFeatures.length;

              return (
                <div key={category} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-raleway text-xl font-bold text-brand-dark">
                      {category}
                    </h4>
                    {hasMoreFeatures && (
                      <Button
                        onClick={() => toggleCategory(category)}
                        variant="ghost"
                        size="sm"
                        className="font-lato text-sm text-brand-primary hover:text-brand-primary/80"
                      >
                        {isExpanded ? "Show Less" : `+${features.length - displayFeatures.length} More`}
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-3">
                    {displayFeatures.map((feature) => (
                      <FeatureCardV2
                        key={feature.id}
                        name={feature.name}
                        description={feature.description}
                        isSelected={selectedFeatures.includes(feature.id)}
                        onClick={() => handleFeatureToggle(feature.id)}
                        isRecommended={feature.recommended}
                        isPopular={feature.popular}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Count Display */}
          <div className="text-center p-4 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
            <p className="font-lato text-sm text-neutral-medium">
              <span className="font-bold text-brand-primary text-lg">
                {selectedFeatures.length}
              </span>{" "}
              {selectedFeatures.length === 1 ? "feature" : "features"} selected
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button
              onClick={goToPreviousStep}
              variant="outline"
              size="lg"
              className="min-w-[150px]"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <Button
              onClick={goToNextStep}
              disabled={!canProceedToStep3}
              variant="primary"
              size="lg"
              className="min-w-[150px]"
            >
              Review Summary
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Project Summary */}
      {currentStep === 3 && (
        <div className="animate-fade-in">
          <div className="text-center space-y-2 mb-8">
            <h3 className="font-raleway text-3xl md:text-4xl font-bold text-brand-dark">
              Review Your Selection
            </h3>
            <p className="font-lato text-base md:text-lg text-neutral-medium max-w-2xl mx-auto">
              Everything looks good? Let's get your custom proposal
            </p>
          </div>

          <ProjectSummary
            projectType={
              config.projectTypes.find((pt) => pt.id === selectedProjectType)
                ?.title || ""
            }
            selectedFeatures={getSelectedFeaturesWithDetails().map((f) => ({
              name: f.name,
              category: f.category,
            }))}
            onRequestProposal={handleOpenProposalModal}
          />

          <div className="flex justify-center pt-8">
            <Button
              onClick={goToPreviousStep}
              variant="outline"
              size="lg"
              className="min-w-[150px]"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Features
            </Button>
          </div>
        </div>
      )}

      {/* Proposal Modal */}
      <ProposalModal
        isOpen={showProposalModal}
        onClose={() => setShowProposalModal(false)}
        projectData={{
          serviceName: config.serviceName,
          projectType:
            config.projectTypes.find((pt) => pt.id === selectedProjectType)
              ?.title || "",
          selectedFeatures: getSelectedFeaturesWithDetails().map((f) => f.name),
          serviceName: config.serviceName,
        }}
      />
    </div>
  );
};
