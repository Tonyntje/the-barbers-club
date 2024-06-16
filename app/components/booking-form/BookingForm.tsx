"use client";

import { Calendar, Subtract } from "@carbon/icons-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BookingStatus } from "@/app/components/booking-form/BookingStatus";
import TheBarberClubLogo from "@/public/TheBarbersClubLogo.svg";
import Image from "next/image";
import { useStore } from "@/app/machine/machine";
import { DatumTijd } from "@/app/components/booking-form/helpers/steps/DatumTijd";
import { Informatie } from "@/app/components/booking-form/helpers/steps/Informatie";
import { Betalen } from "@/app/components/booking-form/helpers/steps/Betalen";
import phoneIcon from "@/public/phone--incoming.svg";
import whatsappIcon from "@/public/whatsapp-white.svg";

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
  const isDev = useStore((state) => state.isDev);

  const setBookingStatus = useStore((state) => state.setBookingStatus);

  return (
    <>
      {isOpen ? (
        <form className="top-slide">
          <div className="fixed border rounded-lg shadow-2xl right-6 p-12 bottom-6 bg-neutral-100 w-full max-w-[450px] min-w-[200px]">
            <div
              onClick={() => setBookingStatus(isOpen)}
              className="bg-neutral-100 rounded-lg inline-block absolute right-2 top-2 cursor-pointer"
            >
              <Subtract size={24} />
            </div>

            {isDev ? (
              <div className="top-slide-slow">
                <div className="mx-auto w-fit mb-6">
                  <Image
                    width="200"
                    src={TheBarberClubLogo}
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
            ) : (
              <div className="top-slide-slow text-center">
                <div className="mx-auto w-fit mb-6">
                  <Image
                    width="200"
                    src={TheBarberClubLogo}
                    alt="The Barbers Club Logo"
                  />
                </div>
                <b>Wilt u alvast een afspraak maken?</b>
                <br />
                <span>Bel of whatsApp naar de Barbers Club.</span>
                <div className="flex gap-4">
                  <a
                    className="flex mt-3 gap-4 text-lg px-6 py-2 text-white items-center justify-center bg-primary-700 hover:bg-primary-600 transition-colors rounded-xl"
                    href="tel:+31639132769"
                  >
                    <div className="bg-primary-800 rounded-full p-2">
                      <Image width="18" src={phoneIcon} alt="Bel ons" />
                    </div>
                    Bellen
                  </a>
                  <a
                    className="flex mt-3 gap-4 text-lg px-6 py-2 text-white items-center justify-center bg-primary-700 hover:bg-primary-600 transition-colors rounded-xl"
                    href="https://wa.me/31639132769?text=Beste%20Barbersclub%20ik%20zou%20graag%20een%20afspraak%20willen%20maken"
                  >
                    <div className="bg-primary-800 rounded-full p-2">
                      <Image width="18" src={whatsappIcon} alt="WhatsApp" />
                    </div>
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </form>
      ) : (
        <div
          onClick={() => setBookingStatus(isOpen)}
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
