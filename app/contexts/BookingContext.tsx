"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { BookingDetails, Service, BookingProviderProps } from "@/lib/types";
import { services } from "@/app/lib/constants";

interface BookingContextType {
  currentStep: number;
  bookingDetails: BookingDetails;
  isLoading: boolean;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateUserInfo: (field: string, value: string) => void;
  updateDateTime: (field: "date" | "time", value: any) => void;
  getServiceDetails: () => Service | null;
  resetBooking: () => void;
}

const defaultBookingDetails: BookingDetails = {
  userInfo: {
    name: "",
    email: "",
    phone: "",
    service: "",
  },
  date: null,
  time: null,
  serviceDetails: null,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<BookingProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(
    defaultBookingDetails,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Update service details when service selection changes
  useEffect(() => {
    if (bookingDetails.userInfo.service) {
      const selectedService =
        services.find((s) => s.value === bookingDetails.userInfo.service) ||
        null;

      setBookingDetails((prev) => ({
        ...prev,
        serviceDetails: selectedService,
      }));
    }
  }, [bookingDetails.userInfo.service]);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateUserInfo = (field: string, value: string) => {
    setBookingDetails((prev) => ({
      ...prev,
      userInfo: {
        ...prev.userInfo,
        [field]: value,
      },
    }));
  };

  const updateDateTime = (field: "date" | "time", value: any) => {
    setBookingDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getServiceDetails = (): Service | null => {
    return bookingDetails.serviceDetails;
  };

  const resetBooking = () => {
    setBookingDetails(defaultBookingDetails);
    setCurrentStep(1);
  };

  return (
    <BookingContext.Provider
      value={{
        currentStep,
        bookingDetails,
        isLoading,
        setCurrentStep,
        nextStep,
        prevStep,
        updateUserInfo,
        updateDateTime,
        getServiceDetails,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
