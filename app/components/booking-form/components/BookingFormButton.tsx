"use client";

import { useStore } from "@/app/machine/machine";
import { Button } from "@/app/components";
import { ArrowRight } from "@carbon/icons-react";

export const BookingFormButton = ({
  label = "Maak een afspraak",
}: {
  readonly label?: string;
}) => {
  const isOpen = useStore((state) => state.isOpen);
  const setBookingStatus = useStore((state) => state.setBookingStatus);
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
