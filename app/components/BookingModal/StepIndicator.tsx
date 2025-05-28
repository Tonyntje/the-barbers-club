import React from "react";
import { cn } from "@/app/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              index + 1 <= currentStep
                ? "bg-primary scale-110"
                : "bg-muted scale-100",
            )}
          />
          {index < totalSteps - 1 && (
            <div
              className={cn(
                "h-0.5 w-4",
                index + 1 < currentStep ? "bg-primary" : "bg-muted",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
