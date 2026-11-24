import { FormData } from "@/types/softwarePlanner";
import { toast } from "sonner";

export const submitProjectPlanner = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Structure data for submission
    const payload = {
      ...data,
      timestamp: new Date().toISOString(),
      source: "interactive_planner",
      // Calculate summary metrics
      featureCount: data.selectedFeatures.length,
      projectValue: data.estimatedValue,
    };

    console.log("Project Planner Submission:", payload);

    // TODO: Replace with actual API endpoint
    // For now, simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success toast
    toast.success("Proposal request received!", {
      description: "We'll get back to you within a Maximum of 24 working hours.",
    });

    return {
      success: true,
      message: "Proposal request received successfully",
    };
  } catch (error) {
    console.error("Error submitting project planner:", error);

    toast.error("Submission failed", {
      description: "Please try again or contact us directly.",
    });

    return {
      success: false,
      message: "Submission failed. Please try again.",
    };
  }
};
