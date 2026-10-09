import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { pricingCategories, type PricingTier } from "@/data/pricingData";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageStepProps {
  selectedPackage: PricingTier | null;
  selectedCategory: string;
  onPackageSelect: (pkg: PricingTier | null, category: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const PackageStep: React.FC<PackageStepProps> = ({
  selectedPackage,
  selectedCategory,
  onPackageSelect,
  onNext,
  onBack,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold font-raleway text-foreground">
          Select SMS Package
        </h2>
        <p className="text-muted-foreground font-lato">
          Choose the package that fits your campaign needs
        </p>
      </div>

      <Tabs value={selectedCategory} onValueChange={(val) => onPackageSelect(null, val)}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto p-1">
          {pricingCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.id.toUpperCase()}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {pricingCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {category.tiers.map((tier) => {
                const isSelected =
                  selectedPackage?.tierName === tier.tierName && selectedCategory === category.id;

                return (
                  <Card
                    key={tier.tierName}
                    className={cn(
                      "relative cursor-pointer transition-all border-2 hover:shadow-lg",
                      isSelected
                        ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20"
                        : "border-border hover:border-primary/30"
                    )}
                    onClick={() => onPackageSelect(tier, category.id)}
                  >
                    <CardContent className="p-5 space-y-3">
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg font-bold font-raleway text-foreground">
                          {tier.tierName}
                        </h3>
                        {tier.ratePerSMS && (
                          <div className="text-2xl font-bold text-primary mt-1">
                            {tier.ratePerSMS}
                          </div>
                        )}
                      </div>

                      <div className="space-y-1.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SMS Volume:</span>
                          <span className="font-semibold text-foreground">{tier.smsVolume}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Validity:</span>
                          <span className="font-semibold text-foreground">{tier.validity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Masks:</span>
                          <span className="font-semibold text-foreground">{tier.maskCount}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <div className="text-xs font-semibold text-muted-foreground mb-2">
                          Top Features:
                        </div>
                        <ul className="space-y-1">
                          {tier.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs">
                              <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-between pt-4">
        <Button variant="outlined" onClick={onBack} size="lg">
          Back
        </Button>
        <Button
          size="lg"
          onClick={onNext}
          disabled={!selectedPackage}
          className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PackageStep;
