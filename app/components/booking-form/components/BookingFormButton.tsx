"use client";

import { ArrowRight } from "@carbon/icons-react";
import React from "react";
import { Button } from "../../interaction/Button";
import { useStore } from "../../../machine/machine";

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
