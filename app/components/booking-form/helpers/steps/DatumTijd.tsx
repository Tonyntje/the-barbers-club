"use client";

import { Box, Button, Heading } from "@/app/components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/booking-form/components/popover";
import { getTimesForWeekDay } from "@/app/components/booking-form/helpers/getTimesForWeekDay";
import { ButtonCn } from "@/app/components/button";
import { CalendarForm } from "@/app/components/form/calendar";
import classNames from "classnames";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { services } from "@/app/machine/constants";

export const DatumTijd = ({
  date,
  time,
  setDate,
  setTime,
  setStatus,
  blockedDates,
  service,
}: {
  readonly date: Date;
  readonly time: string;
  readonly setDate: Dispatch<SetStateAction<Date>>;
  readonly setTime: Dispatch<SetStateAction<string>>;
  readonly setStatus: Dispatch<SetStateAction<number>>;
  readonly blockedDates: string[];
  readonly service: string;
}) => {
  const times = getTimesForWeekDay(date);

  if (!times) return "fetching times";

  const [open, setOpen] = useState(false);

  const serviceInfo = services.find(({ value }) => service === value);
  const slotOffset = Number(serviceInfo?.length) / 15 - 1;
  const offsetIndexes = Array.from({ length: slotOffset }, (_, i) => i + 1);

  return (
    <div className="top-slide">
      <div className="text-center">
        <Heading level={4}>Kies een tijd & datum</Heading>
      </div>
      <Box>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <ButtonCn
              variant={"outline"}
              className={classNames(
                "mb-4 w-full justify-start text-left font-normal",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? (
                format(date, "PPPP", { locale: nl })
              ) : (
                <span>Kies een datum</span>
              )}
            </ButtonCn>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarForm
              required
              mode="single"
              selected={date}
              onDayClick={() => setOpen(false)}
              // @ts-ignore -- Works supposedly
              onSelect={setDate}
            />
          </PopoverContent>
        </Popover>
        <div className="grid grid-cols-4 gap-1 text-sm">
          {date &&
            times?.map(({ flat, normal }, index) => {
              const isBooked = blockedDates.includes(flat);

              const offsetCalc = offsetIndexes.some((offset) => {
                const offsetindex = index + offset;
                return (
                  times[offsetindex] &&
                  blockedDates.includes(times[offsetindex]?.flat)
                );
              });

              return (
                <div
                  className="group relative inline"
                  key={flat}
                  onClick={() => setTime(flat)}
                  onKeyDown={() => {}}
                >
                  <input
                    type="radio"
                    onChange={(e) => setTime(e.target.value)}
                    value={flat}
                    id={flat}
                    name={flat}
                    className="disable:bg-black hidden"
                    checked={flat === time}
                    disabled={isBooked}
                  />
                  <label
                    className={classNames(
                      "block h-full w-full rounded-lg border-2 text-center text-sm hover:outline-1",
                      {
                        "border-primary-700 bg-primary-700 text-white hover:outline-emerald-700":
                          flat === time,
                        "hover:bg-neutral-200 hover:outline-emerald-700":
                          flat !== time,
                        "cursor-pointer": !isBooked && !offsetCalc,
                        "cursor-not-allowed opacity-25": isBooked,
                        "bg-accent-100 text-accent-800 cursor-not-allowed opacity-50":
                          offsetCalc && !isBooked,
                      },
                    )}
                    htmlFor={flat}
                  >
                    {normal}
                  </label>
                </div>
              );
            })}
        </div>
        <p className="bg-accent-100 text-accent-800 mt-2 rounded-lg border-2 p-1 text-center text-sm">
          This timeslot is not available because of the next appointment
        </p>
      </Box>
      <div className="mt-4 flex justify-between">
        <Button
          onClick={() => setStatus(1)}
          type="button"
          variant="secondary"
          label="Terug"
        />
        <Button
          onClick={() => time && setStatus(3)}
          type="button"
          disabled={!time}
          variant="primary"
          label="Reserveren"
        />
      </div>
    </div>
  );
};
