import {Box, Button, Heading} from "@/app/components";
import {Popover, PopoverContent, PopoverTrigger} from "@/app/components/interaction/popover";
import {ButtonCn} from "@/app/components/button";
import classNames from "classnames";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {nl} from "date-fns/locale";
import {CalendarForm} from "@/app/components/form/calendar";
import {RadioGroup, RadioGroupItem} from "@/app/components/form/radio-group";
import {Dispatch, SetStateAction} from "react";
import {getTimesForWeekDay} from "@/app/components/booking-form/helpers/getTimesForWeekDay";
import {Control, FieldValues} from "react-hook-form";

export const DatumTijd = ({
    date,
    time,
    setDate,
    setTime,
    setStatus,
  control
  }: {
    readonly date: Date;
    readonly time: string;
    readonly setDate: Dispatch<SetStateAction<Date>>
    readonly setTime: Dispatch<SetStateAction<string>>
    readonly setStatus: Dispatch<SetStateAction<number>>
    readonly control:  Control<FieldValues, any>
  }) => {
  const times = getTimesForWeekDay(date);

  return (
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
                "justify-start text-left font-normal mb-4 w-full",
                !date && "text-muted-foreground",
              )}>
              <CalendarIcon className="mr-2 h-4 w-4"/>
              {date ? (format(date, "PPPP", {locale: nl})) : (<span>Kies een datum</span>)}
            </ButtonCn>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarForm mode="single"  selected={date} onSelect={() => setDate} initialFocus />
          </PopoverContent>
        </Popover>
        <div className="grid-cols-4 gap-1 grid text-sm">
          {date && times?.map(({flat, normal}) => {
            return (
              <div className="inline" key={flat}>
                <input type="radio"
                  onChange={(e) => setTime(e.target.value)}
                  value={flat}
                  id="times" name={flat}
                  className="hidden"
                  checked={flat === time}
                />
                <label
                  className={classNames(
                    "hover:bg-neutral-200 text-sm block border-2 w-full h-full bg-white rounded-lg text-center hover:cursor-pointer hover:outline-1 hover:outline-emerald-700",
                    { 'border-primary-700 ': flat === time })} htmlFor={flat}>
                  {normal}
                </label>
              </div>
            );
          })}
        </div>
      </Box>
      <div className="flex mt-4 justify-between">
        <Button
          onClick={() => setStatus(1)}
          type="button"
          variant="secondary"
          label="Terug"
        />
        <Button
          onClick={() => setStatus(3)}
          type="button"
          variant="primary"
          label="Reserveren"
        />
      </div>
    </div>
  )
}