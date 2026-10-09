import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Package {
  id: string;
  badge: string;
  speed?: string;
  name?: string;
  features: string[];
  price: number;
  taxNote?: string;
}

interface PackageComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packages: Package[];
  onSelectPackage?: (packageId: string) => void;
}

export const PackageComparisonModal = ({
  open,
  onOpenChange,
  packages,
  onSelectPackage,
}: PackageComparisonModalProps) => {
  if (packages.length === 0) return null;

  const allFeatures = Array.from(new Set(packages.flatMap((pkg) => pkg.features)));
  const hasFeature = (pkg: Package, feature: string) => pkg.features.includes(feature);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[900px] max-h-[90vh] bg-gradient-to-br from-primary via-secondary to-primary border-2 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-raleway font-bold text-white text-center">
            Compare Packages
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-full max-h-[70vh] w-full">
          <div className="min-w-full overflow-x-auto pb-4">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-3 md:p-4 text-left text-white/70 font-semibold border-b border-white/10 sticky top-0 bg-secondary/95 backdrop-blur-sm z-10 text-sm md:text-base min-w-[120px]">
                    Feature
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.id}
                      className="p-3 md:p-4 text-center border-b border-white/10 sticky top-0 bg-secondary/95 backdrop-blur-sm z-10 min-w-[150px]"
                    >
                      <div className="space-y-2">
                        <span className="text-accent text-xs font-bold uppercase tracking-wide">{pkg.badge}</span>
                        <div className="text-white font-raleway font-bold text-lg md:text-2xl">
                          {pkg.speed || pkg.name}
                        </div>
                        <div className="text-accent font-lato text-xs md:text-sm">
                          Rs {pkg.price.toLocaleString()}
                          {pkg.taxNote && <div className="text-xs">{pkg.taxNote}</div>}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-3 md:p-4 text-white/80 font-lato text-xs md:text-sm">{feature}</td>
                    {packages.map((pkg) => (
                      <td key={pkg.id} className="p-3 md:p-4 text-center">
                        {hasFeature(pkg, feature) ? (
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 md:w-6 md:h-6 text-white/20 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td className="p-3 md:p-4"></td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3 md:p-4">
                      <Button
                        onClick={() => {
                          onSelectPackage?.(pkg.id);
                          onOpenChange(false);
                        }}
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 md:py-3 rounded-full transition-all text-sm md:text-base"
                      >
                        Select Plan
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </ScrollArea>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => onOpenChange(false)}
          aria-label="Close comparison"
        >
          <X className="w-5 h-5" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PackageComparisonModal;
