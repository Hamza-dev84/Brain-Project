import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/software/ui/dialog";
import { InteractivePlannerV2 } from "./InteractivePlannerV2";
import { ServiceConfig } from "@/types/softwarePlanner";

interface PlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ServiceConfig;
  title?: string;
}

export const PlannerModal: React.FC<PlannerModalProps> = ({
  isOpen,
  onClose,
  config,
  title = "Interactive Project Planner",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full md:h-auto overflow-y-auto p-0 gap-0">
        <DialogHeader className="sticky top-0 z-50 bg-white border-b px-6 py-4 shadow-sm">
          <DialogTitle className="font-raleway text-2xl font-bold text-brand-dark">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 py-8 overflow-y-auto">
          <InteractivePlannerV2 config={config} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
