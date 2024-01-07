"use client";

import "./globals.css";
import { Header } from "@/app/components/blocks/Header";
import { Footer } from "@/app/components/blocks/Footer";
import { ReactNode } from "react";
import { BookingForm } from "@/app/components/booking-form/BookingForm";

import { create } from "zustand";
import { BearState } from "@/app/constants";

const store = create<BearState>()((set) => ({
  isOpen: false,
  setBookingForm: (state: boolean) => set({ isOpen: !state }),
}));

export default function RootLayout({ children }: { children: ReactNode }) {
  const isOpen = store((state) => state.isOpen);
  const setBookingForm = store((state) => state.setBookingForm);

  const bookingFormStore = { isOpen, setBookingForm };

  return (
    <html lang="en">
      <body>
        <Header {...bookingFormStore} />
        {children}
        <Footer {...bookingFormStore} />
        <BookingForm {...bookingFormStore} />
      </body>
    </html>
  );
}
