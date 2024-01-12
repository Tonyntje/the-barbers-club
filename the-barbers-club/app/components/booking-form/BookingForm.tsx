"use client";

import {
  Box,
  Button,
  DateInput,
  Heading,
  SelectInput,
  TextInput,
} from "@/app/components";
import { Calendar, Subtract } from "@carbon/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BookingStatus } from "@/app/components/booking-form/BookingStatus";
import TheBarberClubLogo from "@/public/TheBarbersClubLogo.svg";
import Image from "next/image";
import { createTransaction } from "@/app/api/services/createTransaction";

const services = [
  { value: "wash", label: "🌊 Haar wassen", details: "Details for washing" },
  { value: "cut", label: "✂️ Haar knippen", details: "Details for cutting" },
  { value: "shave", label: "🪒 Baard scheren", details: "Details for shaving" },
];

export const BookingForm = ({
  isOpen,
  setBookingForm,
}: {
  readonly isOpen: boolean;
  readonly setBookingForm: (state: boolean) => void;
}) => {
  const [stepStatus, setStepStatus] = useState(1);
  const { control, handleSubmit, getValues, setValue } = useForm();

  const submitHandler = async () => {
    const transaction = await createTransaction({ method: "ideal" });
    console.log(transaction);
  };

  return (
    <>
      {isOpen ? (
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="fixed border rounded-lg shadow-2xl right-6 p-12 bottom-6 bg-neutral-100 w-full max-w-[450px] min-w-[200px]">
            <div
              onClick={() => setBookingForm(isOpen)}
              className="bg-neutral-400 rounded-lg inline-block absolute right-2 top-2 cursor-pointer"
            >
              <Subtract size={24} />
            </div>
            <div className="top-slide">
              <div className="mx-auto w-fit mb-6">
                <Image
                  width="200"
                  src={TheBarberClubLogo}
                  alt="The Barbers Club Logo"
                />
              </div>
              <BookingStatus status={stepStatus} />
              {stepStatus === 1 && (
                <>
                  <div className="top-slide">
                    <div className="text-center">
                      <Heading level={4}>Tijd voor een fris kapsel?</Heading>
                    </div>
                    <Box>
                      <TextInput
                        label="Uw Naam"
                        name="name"
                        control={control}
                      />
                      <SelectInput
                        label="Kies een dienst"
                        name="service"
                        control={control}
                        options={services}
                      />
                    </Box>
                  </div>
                  <div className="flex mt-4 justify-end">
                    <Button
                      onClick={() => setStepStatus(2)}
                      type="button"
                      variant="primary"
                      label="Datum & Tijd kiezen"
                    />
                  </div>
                </>
              )}
              {stepStatus === 2 && (
                <>
                  <div className="top-slide">
                    <div className="text-center">
                      <Heading level={4}>Kies een tijd & datum</Heading>
                    </div>
                    <Box>
                      <DateInput
                        name="date"
                        label="Kies een datum"
                        setValue={setValue}
                        control={control}
                      />
                    </Box>
                    <div className="flex mt-4 justify-between">
                      <Button
                        onClick={() => setStepStatus(1)}
                        type="button"
                        variant="secondary"
                        label="Terug"
                      />
                      <Button
                        onClick={() => setStepStatus(3)}
                        type="button"
                        variant="primary"
                        label="Datum & Tijd kiezen"
                      />
                    </div>
                  </div>
                </>
              )}
              {stepStatus === 3 && (
                <>
                  <div className="top-slide">
                    <div className="text-center">
                      <Heading level={4}>Bijna klaar!</Heading>
                    </div>
                    <Box>
                      <></>
                    </Box>
                  </div>
                  <div className="flex mt-4 justify-between">
                    <Button
                      onClick={() => setStepStatus(2)}
                      type="button"
                      variant="secondary"
                      label="Terug"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      label="Datum & Tijd kiezen"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
      ) : (
        <div
          onClick={() => setBookingForm(isOpen)}
          className="cursor-pointer fixed rounded-lg shadow-2xl right-12 px-6 py-3 bottom-6 bg-primary-700"
        >
          <span className="text-white flex items-center gap-2">
            Afspraak maken <Calendar />
          </span>
        </div>
      )}
    </>
  );
};
