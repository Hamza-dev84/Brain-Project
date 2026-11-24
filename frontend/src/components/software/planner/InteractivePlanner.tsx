import React, { useState, useCallback, useEffect } from "react";
import { ServiceConfig, ProjectType, Feature, CalculationMetrics } from "@/types/softwarePlanner";
import { ProjectTypeCard } from "./ProjectTypeCard";
import { FeatureToggle } from "./FeatureToggle";
import { ValueGauge } from "./ValueGauge";
import { MetricDisplay } from "./MetricDisplay";
import { LivePreview } from "./LivePreview";
import { ProposalModal } from "./ProposalModal";
import { calculateProjectValue } from "@/utils/software/valueCalculator";
import { Button } from "@/components/software/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface InteractivePlannerProps {
  config: ServiceConfig;
}

export const InteractivePlanner: React.FC<InteractivePlannerProps> = ({ config }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [metrics, setMetrics] = useState<CalculationMetrics>({
    totalValue: 0,
    trafficImpact: "",
    leadImpact: "",
    timeSavings: "",
    roiEstimate: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const currentFeatures = selectedProjectType 
    ? config.features[selectedProjectType.id] || []
    : [];

  const displayedFeatures = showAllFeatures 
    ? currentFeatures 
    : currentFeatures.filter(f => f.popular || f.recommended);

  const featuresByCategory = displayedFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  useEffect(() => {
    const popularType = config.projectTypes.find(pt => pt.isPopular);
    if (popularType && !selectedProjectType) {
      setSelectedProjectType(popularType);
      
      const recommendedFeatures = config.features[popularType.id]
        ?.filter(f => f.recommended)
        .slice(0, 3) || [];
      
      if (recommendedFeatures.length > 0) {
        setSelectedFeatures(recommendedFeatures);
      }
      
      const firstCategory = config.features[popularType.id]?.[0]?.category;
      if (firstCategory) {
        setExpandedCategories({ [firstCategory]: true });
      }
    }
  }, [config]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newMetrics = calculateProjectValue(selectedProjectType, selectedFeatures, config);
      setMetrics(newMetrics);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedProjectType, selectedFeatures, config]);

  const handleProjectTypeSelect = (projectType: ProjectType) => {
    setSelectedProjectType(projectType);
    setSelectedFeatures([]);
    setShowAllFeatures(false);
    setExpandedCategories({});
    setCurrentStep(2);
  };

  const handleFeatureToggle = (feature: Feature, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, feature]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(f => f.id !== feature.id));
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    });
  };

  const handleSelectAllInCategory = (category: string) => {
    const categoryFeatures = featuresByCategory[category] || [];
    const newFeatures = [...selectedFeatures];
    
    categoryFeatures.forEach(feature => {
      if (!newFeatures.some(f => f.id === feature.id)) {
        newFeatures.push(feature);
      }
    });
    
    setSelectedFeatures(newFeatures);
  };

  const handleDeselectAllInCategory = (category: string) => {
    const categoryFeatures = featuresByCategory[category] || [];
    const categoryFeatureIds = categoryFeatures.map(f => f.id);
    const newFeatures = selectedFeatures.filter(f => !categoryFeatureIds.includes(f.id));
    
    setSelectedFeatures(newFeatures);
  };

  const isCategoryFullySelected = (category: string) => {
    const categoryFeatures = featuresByCategory[category] || [];
    return categoryFeatures.length > 0 && 
           categoryFeatures.every(feature => selectedFeatures.some(f => f.id === feature.id));
  };

  const handleOpenModal = () => {
    if (!selectedProjectType) {
      return;
    }
    setIsModalOpen(true);
  };

  const goToNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStepProgress = () => {
    return (currentStep / 4) * 100;
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-raleway font-bold text-sm transition-all duration-300 ${
                    currentStep >= step
                      ? "bg-brand-primary text-white"
                      : "bg-neutral-200 text-neutral-medium"
                  }`}
                >
                  {step}
                </div>
                <span className={`text-xs font-lato mt-2 text-center ${currentStep >= step ? "text-brand-dark font-semibold" : "text-neutral-medium"}`}>
                  {step === 1 && "Project Type"}
                  {step === 2 && "Features"}
                  {step === 3 && "Review"}
                  {step === 4 && "Proposal"}
                </span>
              </div>
              {step < 4 && (
                <div
                  className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${
                    currentStep > step ? "bg-brand-primary" : "bg-neutral-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-500"
            style={{ width: `${getStepProgress()}%` }}
          />
        </div>
      </div>

      {/* Step 1: Project Type Selection */}
      {currentStep === 1 && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full font-lato font-semibold text-xs uppercase tracking-wide mb-3">
              Step 1 of 4
            </div>
            <h3 className="font-raleway font-bold text-3xl text-brand-dark mb-3">
              Choose Your Project Type
            </h3>
            <p className="font-lato text-neutral-medium text-lg">
              Select the category that best matches your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.projectTypes.map((projectType) => (
              <ProjectTypeCard
                key={projectType.id}
                icon={projectType.icon}
                title={projectType.title}
                description={projectType.description}
                isSelected={selectedProjectType?.id === projectType.id}
                onClick={() => handleProjectTypeSelect(projectType)}
                isPopular={projectType.isPopular}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Feature Selection */}
      {currentStep === 2 && selectedProjectType && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full font-lato font-semibold text-xs uppercase tracking-wide mb-3">
              Step 2 of 4
            </div>
            <h3 className="font-raleway font-bold text-3xl text-brand-dark mb-3">
              Select Key Features
            </h3>
            <p className="font-lato text-neutral-medium text-lg">
              {showAllFeatures ? 'All available features' : 'Popular features for your project'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <div className="space-y-4">
              {Object.entries(featuresByCategory).map(([category, features]) => (
                <div key={category} className="border border-neutral-border rounded-lg overflow-hidden bg-white">
                  <div className="flex items-center justify-between p-4 bg-neutral-50">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-2 hover:text-brand-primary transition-colors flex-1"
                    >
                      <h4 className="font-lato font-semibold text-lg text-brand-dark">
                        {category}
                      </h4>
                      {expandedCategories[category] ? (
                        <ChevronUp className="w-5 h-5 text-brand-dark" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-dark" />
                      )}
                    </button>
                    
                    <div className="flex gap-2">
                      {isCategoryFullySelected(category) ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeselectAllInCategory(category);
                          }}
                          className="text-xs h-8 px-3"
                        >
                          Deselect All
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectAllInCategory(category);
                          }}
                          className="text-xs h-8 px-3"
                        >
                          Select All
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {expandedCategories[category] && (
                    <div className="p-4 space-y-3">
                      {features.map((feature) => (
                        <FeatureToggle
                          key={feature.id}
                          name={feature.name}
                          description={feature.description}
                          impactMetric={feature.impactMetric}
                          isSelected={selectedFeatures.some(f => f.id === feature.id)}
                          onChange={(checked) => handleFeatureToggle(feature, checked)}
                          popular={feature.popular}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <LivePreview
                selectedFeatures={selectedFeatures.map(f => f.name)}
                projectType={selectedProjectType.title}
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="font-lato font-medium"
            >
              {showAllFeatures ? '← Show Popular Features Only' : 'Show All Features →'}
            </Button>
            <p className="text-xs text-neutral-medium mt-2 font-lato">
              {showAllFeatures 
                ? 'Viewing all available features' 
                : `Showing ${displayedFeatures.length} popular features • ${currentFeatures.length - displayedFeatures.length} more available`
              }
            </p>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={goToPreviousStep} className="px-8">
              ← Previous
            </Button>
            <Button 
              onClick={goToNextStep} 
              className="px-8 bg-brand-primary hover:bg-brand-primary/90"
              disabled={selectedFeatures.length === 0}
            >
              Continue →
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Review & Calculate */}
      {currentStep === 3 && selectedProjectType && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full font-lato font-semibold text-xs uppercase tracking-wide mb-3">
              Step 3 of 4
            </div>
            <h3 className="font-raleway font-bold text-3xl text-brand-dark mb-3">
              Review Your Project Value
            </h3>
            <p className="font-lato text-neutral-medium text-lg">
              See the estimated impact and ROI of your selected features
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-border shadow-xl p-8 mb-8">
            <div className="mb-8">
              <h4 className="font-raleway font-bold text-xl text-brand-dark mb-4">Project Summary</h4>
              <div className="bg-neutral-50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="font-lato text-neutral-medium">Project Type:</span>
                  <span className="font-lato font-semibold text-brand-dark">{selectedProjectType.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-lato text-neutral-medium">Features Selected:</span>
                  <span className="font-lato font-semibold text-brand-dark">{selectedFeatures.length}</span>
                </div>
              </div>
              
              {selectedFeatures.length > 0 && (
                <div className="mt-4">
                  <h5 className="font-lato font-semibold text-brand-dark mb-2">Selected Features:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedFeatures.map((feature) => (
                      <span
                        key={feature.id}
                        className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full text-sm font-lato"
                      >
                        {feature.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-8">
              <ValueGauge value={metrics.totalValue} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricDisplay
                icon="📈"
                label="Business Impact"
                value={metrics.trafficImpact}
                delay={0}
              />
              <MetricDisplay
                icon="⚡"
                label="Efficiency Gain"
                value={metrics.leadImpact}
                delay={100}
              />
              <MetricDisplay
                icon="💰"
                label="ROI Estimate"
                value={metrics.roiEstimate}
                delay={200}
              />
            </div>

            {metrics.timeSavings && metrics.timeSavings !== "No time savings yet" && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary/20 rounded-full">
                  <span className="text-2xl">⏱️</span>
                  <span className="font-lato font-semibold text-brand-dark">
                    {metrics.timeSavings}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={goToPreviousStep} className="px-8">
              ← Previous
            </Button>
            <Button 
              onClick={goToNextStep} 
              className="px-8 bg-brand-primary hover:bg-brand-primary/90"
            >
              Continue to Proposal →
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Get Proposal */}
      {currentStep === 4 && selectedProjectType && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full font-lato font-semibold text-xs uppercase tracking-wide mb-3">
              Step 4 of 4
            </div>
            <h3 className="font-raleway font-bold text-3xl text-brand-dark mb-3">
              Get Your Custom Proposal
            </h3>
            <p className="font-lato text-neutral-medium text-lg">
              We'll prepare a detailed proposal based on your selections
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-2xl border border-brand-primary/20 shadow-xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="font-raleway font-bold text-2xl text-brand-dark mb-4">
                Ready to Get Started?
              </h4>
              <p className="font-lato text-neutral-medium mb-6 text-lg">
                Click below to receive your customized proposal with detailed pricing, timeline, and project roadmap.
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-raleway font-bold text-brand-primary">{metrics.totalValue}%</div>
                    <div className="text-sm font-lato text-neutral-medium">Value Score</div>
                  </div>
                  <div>
                    <div className="text-3xl font-raleway font-bold text-brand-primary">{selectedFeatures.length}</div>
                    <div className="text-sm font-lato text-neutral-medium">Features</div>
                  </div>
                  <div>
                    <div className="text-3xl font-raleway font-bold text-brand-primary">2hrs</div>
                    <div className="text-sm font-lato text-neutral-medium">Response Time</div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleOpenModal}
                size="lg"
                className="h-16 px-16 bg-gradient-to-r from-brand-primary to-brand-primary/90 hover:from-brand-primary/90 hover:to-brand-primary text-white font-lato font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Your Custom Proposal →
              </Button>
              <p className="font-lato text-sm text-neutral-medium mt-4">
                Free consultation • No commitment required
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={goToPreviousStep} className="px-8">
              ← Previous
            </Button>
          </div>
        </div>
      )}

      {/* Proposal Modal */}
      <ProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectData={{
          projectType: selectedProjectType?.title || "",
          selectedFeatures: selectedFeatures.map(f => f.name),
          estimatedValue: metrics.totalValue,
          metrics,
          serviceName: config.serviceName,
        }}
      />
    </div>
  );
};
