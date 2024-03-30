"use client";

import { Box, Button, Heading, SelectInput, TextInput } from "@/app/components";
import { Calendar, Subtract } from "@carbon/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BookingStatus } from "@/app/components/booking-form/BookingStatus";
import TheBarberClubLogo from "@/public/TheBarbersClubLogo.svg";
import Image from "next/image";
import { useBookingStore } from "@/app/machine/machine";
import phoneIcon from "@/public/phone--incoming.svg";
import { services } from "@/app/machine/constants";
import { RadioGroup, RadioGroupItem } from "@/app/components/form/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/interaction/popover";
import classNames from "classnames";
import { CalendarIcon } from "lucide-react";
import { ButtonCn } from "@/app/components/button";
import { CalendarForm } from "@/app/components/form/calendar";
import { format } from "date-fns";

export const BookingForm = () => {
  const [stepStatus, setStepStatus] = useState(1);
  const { control, handleSubmit, setValue, getValues, watch } = useForm();
  const [date, setDate] = useState<Date>();

  const isOpen = useBookingStore((state) => state.isOpen);
  const setBookingStatus = useBookingStore((state) => state.setBookingStatus);

  const submitHandler = () => {
    console.log(stepStatus);
    return false;
  };

  const isDev = false;

  return (
    <>
      {isOpen ? (
        <form className="top-slide" onSubmit={handleSubmit(submitHandler)}>
          <div className="fixed border rounded-lg shadow-2xl right-6 p-12 bottom-6 bg-neutral-100 w-full max-w-[450px] min-w-[200px]">
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
                  src={TheBarberClubLogo}
                  alt="The Barbers Club Logo"
                />
              </div>

              {!isDev ? (
                <>
                  <BookingStatus status={stepStatus} />
                  {stepStatus === 1 && (
                    <>
                      <div className="top-slide">
                        <div className="text-center">
                          <Heading level={4}>
                            Tijd voor een fris kapsel?
                          </Heading>
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
                          <Popover>
                            <PopoverTrigger asChild>
                              <ButtonCn
                                variant={"outline"}
                                className={classNames(
                                  "w-[280px] justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? (
                                  format(date, "PPP")
                                ) : (
                                  <span>Kies een datum</span>
                                )}
                              </ButtonCn>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <CalendarForm
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          {date && (
                            <RadioGroup className="top-slide">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="option-one"
                                  id="option-one"
                                />
                                <label htmlFor="option-one">Option One</label>
                              </div>
                            </RadioGroup>
                          )}
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
                            label="Reserveren"
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
                </>
              ) : (
                <div className="flex flex-col bg-white text-center text-neutral-800 mt-10 p-6 rounded-2xl w-full">
                  <b>Wilt u alvast een afspraak maken?</b>
                  <span>Bel of whatsApp naar</span>
                  <a
                    className="flex mt-3 gap-4 text-xl px-6 py-4 text-white items-center justify-center bg-primary-700 hover:bg-primary-600 transition-colors rounded-xl"
                    href="tel:+31639132769"
                  >
                    <Image src={phoneIcon} alt={"Bel ons"} />
                    +31 6 391 327 69
                  </a>
                </div>
              )}
            </div>
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
