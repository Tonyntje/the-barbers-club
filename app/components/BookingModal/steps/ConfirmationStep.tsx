"use client";

import React, { useState } from "react";
import { useBooking } from "@/app/contexts/BookingContext";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { formatDateForDisplay } from "@/app/lib/booking-utils";
import { formatCurrency } from "@/app/components/BookingModal/utils";
import { createPayment } from "@/app/lib/payment";
import { CheckCircle, Loader2 } from "lucide-react";

interface ConfirmationStepProps {
  onSuccess: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ onSuccess }) => {
  const { bookingDetails, getServiceDetails, resetBooking } = useBooking();
  const { userInfo, date, time } = bookingDetails;
  const serviceDetails = getServiceDetails();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!serviceDetails || !date || !time) return;

    setIsProcessing(true);
    setPaymentStatus("processing");

    try {
      const bookingData = {
        userInfo,
        date: date.toISOString(),
        time,
        service: serviceDetails.value,
        serviceName: serviceDetails.label,
        price: serviceDetails.price,
        length: serviceDetails.length,
      };

      const paymentData = await createPayment(
        serviceDetails.price,
        serviceDetails.label,
        bookingData,
      );

      if (paymentData && paymentData.checkout?.url) {
        setPaymentUrl(paymentData.checkout.url);
        setPaymentStatus("success");
      } else {
        throw new Error("Payment creation failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus("error");
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentStatus === "success" && paymentUrl) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-4 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-bold">Betaling gestart</h3>
        <p className="text-muted-foreground">
          Je wordt doorgestuurd naar de betaalpagina om je boeking te voltooien.
        </p>
        <Button
          className="mt-4 w-full"
          onClick={() => {
            window.open(paymentUrl, "_blank");
            onSuccess();
            resetBooking();
          }}
        >
          Ga naar betaalpagina
        </Button>
      </div>
    );
  }

  if (paymentStatus === "error") {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-4 text-center">
        <div className="rounded-full bg-red-100 p-3">
          <div className="rounded-full bg-red-200 p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-300">
              <span className="text-xl font-bold text-red-600">!</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold">Betaling mislukt</h3>
        <p className="text-muted-foreground">
          Er is iets misgegaan met het verwerken van je betaling. Probeer het
          later opnieuw.
        </p>
        <Button
          className="mt-4 w-full"
          onClick={() => setPaymentStatus("idle")}
        >
          Probeer opnieuw
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-primary text-primary-foreground p-4">
            <h3 className="text-lg font-semibold">Jouw boeking</h3>
          </div>
          <div className="space-y-4 p-4">
            <div className="space-y-1">
              <h4 className="font-medium">Persoonlijke gegevens</h4>
              <p className="text-sm">{userInfo.name}</p>
              <p className="text-sm">{userInfo.email}</p>
              <p className="text-sm">{userInfo.phone}</p>
            </div>

            <div className="space-y-1">
              <h4 className="font-medium">Afspraak details</h4>
              <p className="text-sm">
                <span className="font-medium">Service: </span>
                {serviceDetails?.label}
              </p>
              <p className="text-sm">
                <span className="font-medium">Datum: </span>
                {date ? formatDateForDisplay(date) : ""}
              </p>
              <p className="text-sm">
                <span className="font-medium">Tijd: </span>
                {time}
              </p>
              <p className="text-sm">
                <span className="font-medium">Duur: </span>
                {serviceDetails?.length} minuten
              </p>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="font-bold">Totaalbedrag:</span>
              <span className="font-bold">
                {formatCurrency(serviceDetails?.price || 0)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        className="bg-primary hover:bg-primary/90 w-full py-6 text-lg transition-all duration-300"
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <div className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Betaling verwerken...
          </div>
        ) : (
          `Betaal ${formatCurrency(serviceDetails?.price || 0)}`
        )}
      </Button>

      <p className="text-muted-foreground text-center text-xs">
        Door te betalen ga je akkoord met onze algemene voorwaarden en
        privacybeleid.
      </p>
    </div>
  );
};

export default ConfirmationStep;
