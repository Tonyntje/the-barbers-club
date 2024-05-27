"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  TopBar,
  Nav,
} from "../../components";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import React from "react";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);
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
    <header className="w-full bg-white border border-b-2 ">
      <TopBar />
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-6 w-full">
        <a href="/">
          <Image
            height={50}
            width={200}
            src="/static/TheBarbersClubLogo.svg"
            alt="The Barbers Club Logo"
          />
        </a>
        {isMobile ? (
          <Sheet key="left">
            <SheetTrigger>
              <div className="flex gap-4 font-bold text-xl items-center">
                Menu <MenuIcon />
              </div>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] flex flex-col gap-8">
              <SheetHeader>
                <a className="mx-auto mt-10" href="/">
                  <Image
                    width="200"
                    src="/static/TheBarbersClubLogo.svg"
                    alt="The Barbers Club Logo"
                  />
                </a>
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
