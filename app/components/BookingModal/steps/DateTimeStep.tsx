"use client";

import React, { useState, useEffect } from "react";
import { useBooking } from "@/app/contexts/BookingContext";
import { Calendar } from "@/app/components/ui/calendar";
import { Button } from "@/app/components/ui/button";
import { format, addDays, isSameDay } from "date-fns";
import { nl } from "date-fns/locale";
import { cn } from "@/app/lib/utils";
import {
  formatDateForDisplay,
  generateAvailabilityForDateRange,
} from "@/app/lib/booking-utils";
import { DayAvailability, TimeSlot } from "@/app//lib/types";
import { WEEKDAYS } from "@/app/lib/constants";
import { Loader2 } from "lucide-react";

const DateTimeStep: React.FC = () => {
  const { bookingDetails, updateDateTime, getServiceDetails } = useBooking();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    bookingDetails.date || undefined,
  );
  const [availability, setAvailability] = useState<DayAvailability[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const serviceDetails = getServiceDetails();
  const serviceLength = serviceDetails?.length || 30;

  useEffect(() => {
    if (selectedDate && serviceDetails) {
      fetchAvailability(selectedDate);
    }
  }, [selectedDate, serviceDetails]);

  const fetchAvailability = async (date: Date) => {
    if (!serviceDetails) return;

    setIsLoading(true);
    try {
      const availabilityData = await generateAvailabilityForDateRange(
        date,
        7, // Fetch availability for the next 7 days
        serviceLength,
      );
      setAvailability(availabilityData);
    } catch (error) {
      console.error("Error fetching availability:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      updateDateTime("date", date);
      updateDateTime("time", null); // Reset time when date changes
    }
  };

  const handleTimeSelect = (time: string) => {
    updateDateTime("time", time);
  };

  const getAvailableSlotsForDate = (date: Date | null): TimeSlot[] => {
    if (!date) return [];

    const dayAvailability = availability.find(
      (day) => day.date && isSameDay(day.date, date),
    );

    return dayAvailability?.slots || [];
  };

  // Function to disable dates in the calendar
  const disableDate = (date: Date) => {
    const dayOfWeek = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Disable past dates
    if (date < today) return true;

    // Disable Sundays (assuming index 0 is Sunday)
    if (dayOfWeek === 0) return true;

    return false;
  };

  const availableTimeSlots = getAvailableSlotsForDate(selectedDate || null);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-medium">Kies een datum</h3>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          disabled={disableDate}
          locale={nl}
          className="rounded-md border p-2"
          fromDate={new Date()}
          toDate={addDays(new Date(), 30)}
        />
      </div>

      {selectedDate && (
        <div className="space-y-3">
          <h3 className="text-lg font-medium">
            Beschikbare tijden voor {formatDateForDisplay(selectedDate)}
          </h3>

          {isLoading ? (
            <div className="flex justify-center py-6">
              <Loader2 className="text-primary h-8 w-8 animate-spin" />
            </div>
          ) : availableTimeSlots.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {availableTimeSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={
                    bookingDetails.time === slot.time ? "default" : "outline"
                  }
                  className={cn(
                    "transition-all",
                    !slot.available && "cursor-not-allowed opacity-50",
                  )}
                  disabled={!slot.available}
                  onClick={() => handleTimeSelect(slot.time)}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground py-4 text-center">
              Geen beschikbare tijden voor deze datum. Kies een andere datum.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DateTimeStep;
