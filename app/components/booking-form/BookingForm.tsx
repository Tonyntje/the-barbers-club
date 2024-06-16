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
          <div className="fixed border rounded-lg shadow-2xl right-2 bottom-2 sm:right-6 p-4 sm:p-12 sm:bottom-6 bg-neutral-100 w-full max-w-[96vw] sm:max-w-[450px] min-w-[200px]">
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
                <div className="flex gap-2 sm:gap-4">
                  <a
                    className="flex mt-3 gap-4 text-lg px-6 py-2 text-white items-center justify-center bg-primary-700 hover:bg-primary-600 transition-colors rounded-xl"
                    href="tel:+31639132769"
                  >
                    <div className="bg-primary-800 rounded-full p-2">
                      <svg
                        id="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 32 32"
                      >
                        <path
                          className="cls-1"
                          d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.7612,3.0088Q5.88,3,6,3h5.27a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.36,9.36,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5a1,1,0,0,0-1.0032.9968q0,.0417.0032.0832C5.46,12,8.41,26,25.94,27a1,1,0,0,0,1.0582-.9382Q27,26.0309,27,26V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z"
                          transform="translate(0)"
                          style={{ fill: "rgb(255, 255, 255)" }}
                        />
                        <polygon
                          className="cls-1"
                          points="27 13 27 11 22.414 11 29 4.414 27.586 3 21 9.586 21 5 19 5 19 13 27 13"
                          style={{ fill: "rgb(255, 255, 255)" }}
                        />
                      </svg>
                    </div>
                    Bellen
                  </a>
                  <a
                    className="flex mt-3 gap-4 text-lg px-6 py-2 text-white items-center justify-center bg-primary-700 hover:bg-primary-600 transition-colors rounded-xl"
                    href="https://wa.me/31639132769?text=Beste%20Barbersclub%20ik%20zou%20graag%20een%20afspraak%20willen%20maken"
                  >
                    <div className="bg-primary-800 rounded-full p-2">
                      <svg
                        fill="#000000"
                        height="18px"
                        width="18px"
                        version="1.1"
                        id="Layer_1"
                        viewBox="0 0 308 308"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <g id="XMLID_468_">
                          <path
                            id="XMLID_469_"
                            d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156&#10;&#9;&#9;c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687&#10;&#9;&#9;c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887&#10;&#9;&#9;c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153&#10;&#9;&#9;c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348&#10;&#9;&#9;c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802&#10;&#9;&#9;c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922&#10;&#9;&#9;c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0&#10;&#9;&#9;c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458&#10;&#9;&#9;C233.168,179.508,230.845,178.393,227.904,176.981z"
                            style={{ fill: "rgb(255, 255, 255)" }}
                          />
                          <path
                            id="XMLID_470_"
                            d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716&#10;&#9;&#9;c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396&#10;&#9;&#9;c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z&#10;&#9;&#9; M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188&#10;&#9;&#9;l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677&#10;&#9;&#9;c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867&#10;&#9;&#9;C276.546,215.678,222.799,268.994,156.734,268.994z"
                            style={{ fill: "rgb(255, 255, 255)" }}
                          />
                        </g>
                      </svg>
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
