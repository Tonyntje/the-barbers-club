"use client";

import { Calendar, Subtract } from "@carbon/icons-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BookingStatus } from "./BookingStatus";
import Image from "next/image";
import { useStore } from "../../machine/machine";
import { DatumTijd } from "./helpers/steps/DatumTijd";
import { Informatie } from "./helpers/steps/Informatie";
import { Betalen } from "./helpers/steps/Betalen";

export const BookingForm = () => {
  const [stepStatus, setStepStatus] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("");
  const { control, getValues } = useForm();

  const service = getValues("service") ?? "men-cut";
  const name = getValues("name");
  const email = getValues("email");

  const orderDetails = {
    service,
    name,
    email,
    date,
    time,
  };

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow);
  }, []);

  const isOpen = useStore((state) => state.isOpen);
  const setBookingStatus = useStore((state) => state.setBookingStatus);

  return (
    <>
      {isOpen ? (
        <form className="top-slide">
          <div className="fixed border rounded-lg shadow-2xl right-6 p-12 bottom-6 bg-neutral-100 w-full max-w-[450px] min-w-[200px]">
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: Bad practice applied */}
            <div
              onClick={() => setBookingStatus(isOpen)}
              className="bg-neutral-100 rounded-lg inline-block absolute right-2 top-2 cursor-pointer"
            >
              <Subtract size={24} />
            </div>
            <div className="top-slide-slow">
              <div className="mx-auto w-fit mb-6">
                <Image
                  width="200"
                  src="/static/TheBarbersClubLogo.svg"
                  alt="The Barbers Club Logo"
                />
              </div>
              <BookingStatus status={stepStatus} />
              {stepStatus === 1 && (
                <Informatie
                  control={control}
                  setStatus={setStepStatus}
                  name={name}
                />
              )}
              {stepStatus === 2 && (
                <DatumTijd
                  date={date}
                  time={time}
                  setDate={setDate}
                  setTime={setTime}
                  setStatus={setStepStatus}
                />
              )}
              {stepStatus === 3 && (
                <Betalen
                  setStatus={setStepStatus}
                  orderDetails={orderDetails}
                />
              )}
            </div>
          </div>
        </form>
      ) : (
        // biome-ignore lint/a11y/useKeyWithClickEvents: Bad practice applied
        <div
          onClick={() => setBookingStatus(isOpen)}
          className="cursor-pointer fixed rounded-lg shadow-2xl right-12 px-6 py-3 bottom-6 bg-primary-700"
        >
          <span className="text-white flex items-center gap-2">
            Afspraak maken <Calendar />S
          </span>
        </div>
      )}
    </>
  );
};
