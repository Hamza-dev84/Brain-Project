import React from "react";
import { Target, Bell, Clock, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GoalStepProps {
  selectedGoal: string;
  onSelectGoal: (goal: string) => void;
  onNext: () => void;
}

const goals = [
  { id: "promotional", icon: Target, label: "Promotional Sale", description: "Drive sales & promotions" },
  { id: "alert", icon: Bell, label: "Alert/Notification", description: "Send important alerts" },
  { id: "reminder", icon: Clock, label: "Customer Reminder", description: "Appointment & reminder messages" },
  { id: "welcome", icon: Hand, label: "Welcome Series", description: "Onboarding & welcome messages" },
];

const GoalStep: React.FC<GoalStepProps> = ({ selectedGoal, onSelectGoal, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold font-raleway text-foreground">
          What's your campaign goal?
        </h2>
        <p className="text-muted-foreground font-lato">
          Choose the primary objective for your SMS campaign
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selectedGoal === goal.id;

          return (
            <button
              key={goal.id}
              onClick={() => onSelectGoal(goal.id)}
              className={`group p-6 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg font-raleway text-foreground mb-1">
                    {goal.label}
                  </h3>
                  <p className="text-sm text-muted-foreground font-lato">{goal.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <Button
          size="lg"
          onClick={onNext}
          disabled={!selectedGoal}
          className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default GoalStep;
