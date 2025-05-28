"use client";

import React from "react";
import { useBooking } from "@/app/contexts/BookingContext";
import { Button } from "@/app/components/ui/button";
import UserInfoStep from "./steps/UserInfoStep";
import DateTimeStep from "./steps/DateTimeStep";
import ConfirmationStep from "./steps/ConfirmationStep";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";
import StepIndicator from "./StepIndicator";

interface BookingFormProps {
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose }) => {
  const { currentStep, nextStep, prevStep, isLoading } = useBooking();

  const steps = [
    {
      title: "Persoonlijke gegevens",
      description: "Vul je gegevens in en kies een service",
      component: <UserInfoStep />,
    },
    {
      title: "Datum & tijd",
      description: "Kies een beschikbare datum en tijd",
      component: <DateTimeStep />,
    },
    {
      title: "Bevestiging & betaling",
      description: "Controleer je boeking en betaal",
      component: <ConfirmationStep onSuccess={onClose} />,
    },
  ];

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="flex h-full flex-col">
      <DialogHeader className="space-y-4 pb-4">
        <DialogTitle className="text-center text-2xl font-bold">
          {currentStepData.title}
        </DialogTitle>
        <DialogDescription className="text-center">
          {currentStepData.description}
        </DialogDescription>
        <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
      </DialogHeader>

      <div className="flex-1 py-4">{currentStepData.component}</div>

      <div className="flex justify-between border-t pt-4">
        {currentStep > 1 ? (
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={isLoading}
            className="transition-all duration-300"
          >
            Vorige stap
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={onClose}
            className="transition-all duration-300"
          >
            Annuleren
          </Button>
        )}

        {currentStep < 3 && (
          <Button
            onClick={nextStep}
            disabled={isLoading}
            className="bg-primary hover:bg-primary/90 transition-all duration-300"
          >
            Volgende stap
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
