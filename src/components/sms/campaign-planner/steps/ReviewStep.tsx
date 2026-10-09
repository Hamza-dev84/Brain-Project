import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import type { CampaignData } from "../SMSCampaignPlannerDialog";
import { Target, MessageSquare, Package } from "lucide-react";

interface ReviewStepProps {
  campaignData: CampaignData;
  onUpdateField: (field: keyof CampaignData, value: unknown) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const goalLabels: Record<string, string> = {
  promotional: "Promotional Sale",
  alert: "Alert/Notification",
  reminder: "Customer Reminder",
  welcome: "Welcome Series",
};

const ReviewStep: React.FC<ReviewStepProps> = ({
  campaignData,
  onUpdateField,
  onBack,
  onSubmit,
  isSubmitting,
}) => {
  const isFormValid =
    campaignData.name.trim() &&
    campaignData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campaignData.email);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold font-raleway text-foreground">
          Review & Complete
        </h2>
        <p className="text-muted-foreground font-lato">
          Review your campaign and provide your contact information
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-raleway text-foreground mb-4">
            Campaign Summary
          </h3>

          <div className="space-y-4 bg-card border-2 border-border rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">Goal</div>
                <div className="font-semibold text-foreground">
                  {goalLabels[campaignData.goal] || "Not selected"}
                </div>
              </div>
            </div>

            <div className="divider-gradient" />

            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Message</div>
                <div className="font-medium text-foreground bg-muted p-3 rounded-lg mt-2">
                  <div className="text-xs text-muted-foreground mb-1">
                    From: {campaignData.senderId} • {campaignData.messageParts} part(s) •{" "}
                    {campaignData.encodingType}
                  </div>
                  {campaignData.message || "No message yet"}
                </div>
              </div>
            </div>

            <div className="divider-gradient" />

            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">Selected Package</div>
                {campaignData.selectedPackage ? (
                  <>
                    <div className="font-semibold text-foreground">
                      {campaignData.selectedCategory.toUpperCase()} —{" "}
                      {campaignData.selectedPackage.tierName}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {campaignData.selectedPackage.smsVolume} SMS •{" "}
                      {campaignData.selectedPackage.validity}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {campaignData.selectedPackage.maskCount} Masks
                      {campaignData.selectedPackage.ratePerSMS
                        ? ` • ${campaignData.selectedPackage.ratePerSMS}`
                        : ""}
                    </div>
                  </>
                ) : (
                  <div className="font-semibold text-foreground">No package selected</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-raleway text-foreground mb-4">
            Your Information
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={campaignData.name}
                onChange={(e) => onUpdateField("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={campaignData.email}
                onChange={(e) => onUpdateField("email", e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={campaignData.company}
                onChange={(e) => onUpdateField("company", e.target.value)}
                placeholder="Your Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={campaignData.phone}
                onChange={(e) => onUpdateField("phone", e.target.value)}
                placeholder="+92 300 1234567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">I need this for</Label>
              <Select
                value={campaignData.purpose}
                onValueChange={(value) => onUpdateField("purpose", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="tips"
                checked={campaignData.subscribeToTips}
                onCheckedChange={(checked) => onUpdateField("subscribeToTips", checked)}
              />
              <label htmlFor="tips" className="text-sm text-muted-foreground cursor-pointer">
                Get SMS marketing tips & best practices
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outlined" onClick={onBack} size="lg">
          Back
        </Button>
        <Button
          size="lg"
          onClick={onSubmit}
          disabled={!isFormValid || isSubmitting}
          className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8"
        >
          {isSubmitting ? "Sending..." : "Complete Campaign Plan"}
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
