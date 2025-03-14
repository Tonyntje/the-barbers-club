"use client";

import Image from "next/image";
import TheBarberClubLogo from "../../../public/TheBarbersClubLogo.svg";
import { Nav } from "@/app/components/navigation/Nav";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  TopBar,
} from "@/app/components";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    getWindowWidth();

    if (typeof window !== "undefined")
      window.addEventListener("resize", () => getWindowWidth());
  }, []);

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <header className="w-full border-b-2 border-gray-300 bg-white">
      <TopBar />
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-6">
        <Link href="/">
          <Image
            width="200"
            src={TheBarberClubLogo}
            alt="The Barbers Club Logo"
            priority
          />
        </Link>
        {isMobile ? (
          <Sheet key="left">
            <SheetTrigger>
              <div className="flex items-center gap-4 text-xl font-bold">
                Menu <MenuIcon />
              </div>
            </SheetTrigger>
            <SheetContent className="flex w-[400px] flex-col gap-8 sm:w-[540px]">
              <SheetHeader>
                <Link className="mx-auto mt-10" href="/">
                  <Image
                    width="200"
                    src={TheBarberClubLogo}
                    alt="The Barbers Club Logo"
                  />
                </Link>
              </SheetHeader>
              <Nav />
            </SheetContent>
          </Sheet>
        ) : (
          <Nav />
        )}
      </div>
    </header>
  );
};
