"use client";

import Image from "next/image";
import TheBarberClubLogo from "../../../public/TheBarbersClubLogo.svg";
import { Nav } from "@/app/components/navigation/Nav";
import { TopBar } from "@/app/components/blocks/TopBar";

export const Header = () => {
  return (
    <header className="w-full bg-white border border-b-2 ">
      <TopBar />
      <div className="max-w-screen-2xl flex justify-center items-center sm:justify-between mx-auto p-6">
        <a href="/">
          <Image
            width="200"
            src={TheBarberClubLogo}
            alt="The Barbers Club Logo"
          />
        </a>
        <div className="hidden sm:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};
