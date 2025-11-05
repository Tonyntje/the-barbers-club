"use client";

import { nl } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";
import type React from "react";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function CalendarForm({
  className,
  classNames: classes,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const isPastDay = (day: Date) => day <= new Date();
  const disabledPastDays = (day: Date) => isPastDay(day);

  return (
    <DayPicker
      locale={nl}
      mode="single"
      showOutsideDays={showOutsideDays}
      disabled={[{ dayOfWeek: [0] }, disabledPastDays]}
      classNames={{
        ...classNames,
        selected: "bg-primary-700 font-bold text-white",
        day: "rounded-lg font-normal aria-selected:opacity-100 hover:bg-primary-100 hover:text-black",
        disabled:
          "text-neutral-500 opacity-50 bg-neutral-100 rounded-lg hover:bg-neutral-100",
        outside: "text-neutral-300",
        hidden: "invisible",
        today: "font-bold",
        ...classes,
      }}
      {...props}
    />
  );
}

CalendarForm.displayName = "Calendar";

export { CalendarForm };
