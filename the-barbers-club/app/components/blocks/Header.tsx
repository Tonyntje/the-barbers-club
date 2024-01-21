"use client";

import Image from "next/image";
import TheBarberClubLogo from "../../../public/TheBarbersClubLogo.svg";
import { Nav } from "@/app/components/navigation/Nav";
import { TopBar } from "@/app/components/blocks/TopBar";
import { useBookingStore } from "@/app/machine/machine";

export const Header = () => {
  const isOpen = useBookingStore((state) => state.isOpen);
  const setBookingStatus = useBookingStore((state) => state.setBookingStatus);

  return (
    <header className="w-full bg-white border border-b-2 ">
      <TopBar />
      <div className="max-w-screen-2xl flex justify-between mx-auto p-6">
        <a href="/">
          <Image
            width="200"
            src={TheBarberClubLogo}
            alt="The Barbers Club Logo"
          />
        </a>
        <Nav isOpen={isOpen} setBookingForm={setBookingStatus} />
      </div>
    </header>
  );
};
