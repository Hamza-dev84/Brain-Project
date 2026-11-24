// import React, { useEffect, useRef, useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Check } from "lucide-react";
// import GoalStep from "./steps/GoalStep";
// import MessageStep from "./steps/MessageStep";
// import PackageStep from "./steps/PackageStep";
// import ReviewStep from "./steps/ReviewStep";
// import SuccessScreen from "./SuccessScreen";
// import type { PricingTier } from "@/data/pricingData";
// import { toast } from "@/components/ui/sonner";
// import { bsmsCompaignFormApi } from "@/pages/services/bsmsFormsApi";

// export interface CampaignData {
//   goal: string;
//   message: string;
//   senderId: string;
//   messageParts: number;
//   encodingType: "GSM-7" | "UCS-2";
//   selectedPackage: PricingTier | null;
//   selectedCategory: string;
//   name: string;
//   email: string;
//   company: string;
//   phone: string;
//   purpose: string;
//   subscribeToTips: boolean;
// }

// interface SMSCampaignPlannerDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const emptyCampaign: CampaignData = {
//   goal: "",
//   message: "",
//   senderId: "Brand Name",
//   messageParts: 1,
//   encodingType: "GSM-7",
//   selectedPackage: null,
//   selectedCategory: "otp",
//   name: "",
//   email: "",
//   company: "",
//   phone: "",
//   purpose: "",
//   subscribeToTips: false,
// };

// const SMSCampaignPlannerDialog: React.FC<SMSCampaignPlannerDialogProps> = ({
//   open,
//   onOpenChange,
// }) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [campaignData, setCampaignData] = useState<CampaignData>(emptyCampaign);
//   const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const steps = [
//     { number: 1, label: "Goal" },
//     { number: 2, label: "Message" },
//     { number: 3, label: "Package" },
//     { number: 4, label: "Review" },
//   ];

//   const handleNext = () => setCurrentStep((s) => Math.min(4, s + 1));
//   const handleBack = () => setCurrentStep((s) => Math.max(1, s - 1));

//   const resetCampaign = () => {
//     setShowSuccess(false);
//     onOpenChange(false);
//     setCurrentStep(1);
//     setCampaignData(emptyCampaign);
//   };

//   useEffect(() => {
//     return () => {
//       if (successTimeoutRef.current) {
//         clearTimeout(successTimeoutRef.current);
//       }
//     };
//   }, []);

//   const handleSubmit = async () => {
//     if (isSubmitting) return;

//     try {
//       setIsSubmitting(true);
//       const apiResponse = await bsmsCompaignFormApi(campaignData);
//       if (apiResponse.success) {
//         setShowSuccess(true);
//         successTimeoutRef.current = setTimeout(resetCampaign, 5000);
//       } else {
//         toast.error("Error sending message", {
//           description: "Please try again later or call us directly.",
//         });
//       }
//     } catch (error) {
//       toast.error("Error sending message", {
//         description: "Please try again later or call us directly.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const updateCampaignData = (field: keyof CampaignData, value: unknown) => {
//     setCampaignData((prev) => ({ ...prev, [field]: value }) as CampaignData);
//   };

//   if (showSuccess) {
//     return (
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent className="max-w-2xl border-2 border-primary/20">
//           <DialogHeader className="sr-only">
//             <DialogTitle>Campaign plan complete</DialogTitle>
//           </DialogHeader>
//           <SuccessScreen onClose={resetCampaign} />
//         </DialogContent>
//       </Dialog>
//     );
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto border-2 border-primary/20 p-0">
//         <div className="border-b border-border px-8 py-6 bg-secondary/30">
//           <DialogHeader className="mb-4">
//             <DialogTitle className="text-2xl md:text-3xl font-bold font-raleway text-center">
//               Plan Your SMS Campaign
//             </DialogTitle>
//           </DialogHeader>
//           <div className="flex items-center justify-center gap-2 md:gap-4">
//             {steps.map((step, index) => (
//               <React.Fragment key={step.number}>
//                 <div className="flex items-center gap-2">
//                   <div
//                     className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-all duration-300 ${
//                       step.number <= currentStep
//                         ? "bg-primary text-primary-foreground"
//                         : "bg-muted text-muted-foreground"
//                     } ${step.number === currentStep ? "ring-4 ring-primary/20" : ""}`}
//                   >
//                     {step.number < currentStep ? <Check className="w-4 h-4" /> : step.number}
//                   </div>
//                   <span
//                     className={`hidden sm:block text-sm font-medium transition-colors ${
//                       step.number <= currentStep ? "text-foreground" : "text-muted-foreground"
//                     }`}
//                   >
//                     {step.label}
//                   </span>
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div
//                     className={`h-0.5 w-8 md:w-16 transition-all duration-300 ${
//                       step.number < currentStep ? "bg-primary" : "bg-border"
//                     }`}
//                   />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         <div className="p-8">
//           {currentStep === 1 && (
//             <GoalStep
//               selectedGoal={campaignData.goal}
//               onSelectGoal={(goal) => updateCampaignData("goal", goal)}
//               onNext={handleNext}
//             />
//           )}
//           {currentStep === 2 && (
//             <MessageStep
//               message={campaignData.message}
//               senderId={campaignData.senderId}
//               messageParts={campaignData.messageParts}
//               encodingType={campaignData.encodingType}
//               onMessageChange={(msg) => updateCampaignData("message", msg)}
//               onSenderIdChange={(id) => updateCampaignData("senderId", id)}
//               onMessagePartsChange={(parts) => updateCampaignData("messageParts", parts)}
//               onEncodingTypeChange={(enc) => updateCampaignData("encodingType", enc)}
//               onNext={handleNext}
//               onBack={handleBack}
//             />
//           )}
//           {currentStep === 3 && (
//             <PackageStep
//               selectedPackage={campaignData.selectedPackage}
//               selectedCategory={campaignData.selectedCategory}
//               onPackageSelect={(pkg, cat) => {
//                 updateCampaignData("selectedPackage", pkg);
//                 updateCampaignData("selectedCategory", cat);
//               }}
//               onNext={handleNext}
//               onBack={handleBack}
//             />
//           )}
//           {currentStep === 4 && (
//             <ReviewStep
//               campaignData={campaignData}
//               onUpdateField={updateCampaignData}
//               onBack={handleBack}
//               onSubmit={handleSubmit}
//               isSubmitting={isSubmitting}
//             />
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default SMSCampaignPlannerDialog;



import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/sms/ui/dialog";
import { X, Check } from "lucide-react";
import GoalStep from "./steps/GoalStep";
import MessageStep from "./steps/MessageStep";
import PackageStep from "./steps/PackageStep";
import ReviewStep from "./steps/ReviewStep";
import SuccessScreen from "./SuccessScreen";
import { PricingTier } from "@/data/pricingData";
import { useToast } from "@/hooks/use-toast";
import { bsmsCompaignFormApi } from "@/pages/services/bsmsFormsApi";

export interface CampaignData {
  goal: string;
  message: string;
  senderId: string;
  messageParts: number;
  encodingType: "GSM-7" | "UCS-2";
  selectedPackage: PricingTier | null;
  selectedCategory: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  purpose: string;
  subscribeToTips: boolean;
}

interface SMSCampaignPlannerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SMSCampaignPlannerDialog: React.FC<SMSCampaignPlannerDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();
  const [errors, setErrors] = useState<
    Partial<Record<keyof CampaignData, string>>
  >({});
  const [campaignData, setCampaignData] = useState<CampaignData>({
    goal: "",
    message: "",
    senderId: "Brand Name",
    messageParts: 1,
    encodingType: "GSM-7",
    selectedPackage: null,
    selectedCategory: "otp",
    name: "",
    email: "",
    company: "",
    phone: "",
    purpose: "",
    subscribeToTips: false,
  });

  const steps = [
    { number: 1, label: "Goal" },
    { number: 2, label: "Message" },
    { number: 3, label: "Package" },
    { number: 4, label: "Review" },
  ];

  const validateField = (field: keyof CampaignData, value: string) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 3)
          error = "Name must be at least 3 characters";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email address";
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\d+$/.test(value)) {
          error = "Phone number must contain only digits";
        } else if (!value.startsWith("923")) {
          error = "Phone number must start with 923";
        } else if (value.length !== 12) {
          error = "Phone number must be exactly 12 digits";
        }
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const apiResponse = await bsmsCompaignFormApi(campaignData);
      if (apiResponse.success) {
        setShowSuccess(true);
        // Auto-close after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
          onOpenChange(false);
          setCurrentStep(1);
          setCampaignData({
            goal: "",
            message: "",
            senderId: "Brand Name",
            messageParts: 1,
            encodingType: "GSM-7",
            selectedPackage: null,
            selectedCategory: "otp",
            name: "",
            email: "",
            company: "",
            phone: "",
            purpose: "",
            subscribeToTips: false,
          });
        }, 5000);
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later or call us directly.",
          //   variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or call us directly.",
        //  variant: "destructive",
      });
    }
  };

  const updateCampaignData = (field: keyof CampaignData, value: any) => {
    setCampaignData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (typeof value === "string") {
      validateField(field, value);
    }
  };

  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="brand-sms max-w-2xl border-2 border-primary/20">
          <SuccessScreen onClose={() => onOpenChange(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="brand-sms max-w-5xl max-h-[90vh] overflow-y-auto border-2 border-primary/20 p-0">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-50"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {/* Progress Indicator */}
        <div className="border-b border-border px-8 py-6 bg-secondary/30">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl md:text-3xl font-bold font-raleway text-center">
              Plan Your SMS Campaign
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center gap-2">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-all duration-300 ${
                      step.number < currentStep
                        ? "bg-primary text-primary-foreground"
                        : step.number === currentStep
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.number < currentStep ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`hidden sm:block text-sm font-medium transition-colors ${
                      step.number <= currentStep
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-8 md:w-16 transition-all duration-300 ${
                      step.number < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-8 animate-fade-in">
          {currentStep === 1 && (
            <GoalStep
              selectedGoal={campaignData.goal}
              onSelectGoal={(goal) => updateCampaignData("goal", goal)}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <MessageStep
              message={campaignData.message}
              senderId={campaignData.senderId}
              messageParts={campaignData.messageParts}
              encodingType={campaignData.encodingType}
              onMessageChange={(msg) => updateCampaignData("message", msg)}
              onSenderIdChange={(id) => updateCampaignData("senderId", id)}
              onMessagePartsChange={(parts) =>
                updateCampaignData("messageParts", parts)
              }
              onEncodingTypeChange={(enc) =>
                updateCampaignData("encodingType", enc)
              }
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 3 && (
            <PackageStep
              selectedPackage={campaignData.selectedPackage}
              selectedCategory={campaignData.selectedCategory}
              onPackageSelect={(pkg, cat) => {
                updateCampaignData("selectedPackage", pkg);
                updateCampaignData("selectedCategory", cat);
              }}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 4 && (
            <ReviewStep
              campaignData={campaignData}
              errors={errors}
              onUpdateField={updateCampaignData}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SMSCampaignPlannerDialog;
