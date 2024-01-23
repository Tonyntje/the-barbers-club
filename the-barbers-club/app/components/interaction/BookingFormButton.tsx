"use client";

import { useBookingStore } from "@/app/machine/machine";
import { Button } from "@/app/components";
import { ArrowRight } from "@carbon/icons-react";

export const BookingFormButton = ({
  label = "Maak een afspraak",
}: {
  readonly label?: string;
}) => {
  const isOpen = useBookingStore((state) => state.isOpen);
  const setBookingStatus = useBookingStore((state) => state.setBookingStatus);
  const setForm = () => setBookingStatus(isOpen);

  return (
    <Button
      type="button"
      onClick={setForm}
      variant="primary"
      label={label}
      icon={<ArrowRight />}
    />
  );
};
