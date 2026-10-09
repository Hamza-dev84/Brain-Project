import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/software/ui/dialog";
import { Input } from "@/components/software/ui/input";
import { Textarea } from "@/components/software/ui/textarea";
import { Button } from "@/components/software/ui/button";
import { FormData } from "@/types/softwarePlanner";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { brainSoftProjectPlanerFormApi } from "@/pages/services/brainSoftFormsApi";

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: Partial<FormData>;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const totalSteps = 2;

  const preFilledMessage = `I'm interested in ${projectData.serviceName || "a service"} - ${projectData.projectType || "a project"} with the following features:

${projectData.selectedFeatures?.map((f, i) => `${i + 1}. ${f}`).join("\n") || "N/A"}

Please send me a custom proposal with pricing and timeline details.`;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentStep < totalSteps) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    try {
      const apiResponse = await brainSoftProjectPlanerFormApi({
        ...projectData,
        name: formData.name,
        email: formData.email,
        message: preFilledMessage,
        hearAboutUs: "Interactive Project Planner",
        selectedFeatures: projectData.selectedFeatures ?? [],
      });

       if (apiResponse.success) {
         setIsSuccess(true);
         toast.success("Request received!", {
        description: "Our team will reach out within 24 hours.",
      });
      setFormData({ name: "", email: "" });
      } else {
        toast.error("Error while sending proposal",{
          description: "Please try again later or call us directly.",
        });
      }
     
      
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong", {
        description: "Please try again or email muhammad@brain.net.pk directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setCurrentStep(1);
    setFormData({ name: "", email: "" });
    onClose();
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name.trim() !== "" && formData.email.trim() !== "";
    }
    return true;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-raleway text-2xl text-brand-dark">
                Get Your Custom Proposal
              </DialogTitle>
              <DialogDescription className="font-lato text-neutral-medium">
                {currentStep === 1 ? "Just 2 quick fields to get your custom proposal" : "Review your project details"}
              </DialogDescription>
              
              {/* Progress Bar */}
              <div className="mt-4 h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              {/* Step 1: Name & Email */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="h-12"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="font-lato font-semibold text-sm text-brand-dark mb-2 block">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/20">
                    <span className="text-xl">⚡</span>
                    <p className="text-xs text-neutral-medium font-lato leading-relaxed">
                      <strong className="text-brand-dark">Quick & Easy:</strong> That's all we need! We'll send your custom proposal within 2 business hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Confirm & Submit */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-lg p-5 border border-brand-primary/20">
                    <h4 className="font-lato font-semibold text-brand-dark mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                      Your Selected Project
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                        <span className="text-sm font-lato text-neutral-medium">Project Type:</span>
                        <span className="text-sm font-lato font-semibold text-brand-dark">{projectData.projectType}</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                        <span className="text-sm font-lato text-neutral-medium">Features:</span>
                        <span className="text-sm font-lato font-semibold text-brand-primary">{projectData.selectedFeatures?.length || 0} selected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-lato text-neutral-medium">Service:</span>
                        <span className="text-sm font-lato font-semibold text-brand-dark">{projectData.serviceName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-lato font-semibold text-brand-dark mb-2">Your Contact Info</h4>
                    <div className="space-y-1 text-sm font-lato text-neutral-medium">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <p className="text-sm font-lato font-semibold text-green-800 mb-1">
                        Ready to receive your proposal!
                      </p>
                      <p className="text-xs font-lato text-green-700">
                        Our team will analyze your requirements and send a detailed proposal within 2 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 h-12 font-lato font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                
                <Button
                  type="submit"
                  disabled={!isStepValid() || (currentStep === totalSteps && isSubmitting)}
                  className={`h-12 bg-gradient-to-r from-brand-primary to-brand-primary/90 hover:from-brand-primary/90 hover:to-brand-primary text-white font-lato font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ${currentStep === 1 ? 'w-full' : 'flex-1'}`}
                >
                  {currentStep === totalSteps ? (
                    isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Send My Proposal
                      </>
                    )
                  ) : (
                    <>
                      Continue to Review
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4 animate-scale-in" />
            <DialogTitle className="font-raleway text-2xl text-brand-dark mb-2">
              Thank You!
            </DialogTitle>
            <DialogDescription className="font-lato text-neutral-medium mb-4">
              We're preparing your custom proposal
            </DialogDescription>
            <p className="font-lato text-sm text-neutral-medium mb-6">
              Estimated response time: <strong>Within 2 business hours</strong>
            </p>
            <Button onClick={handleClose} variant="outline" className="mx-auto">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
