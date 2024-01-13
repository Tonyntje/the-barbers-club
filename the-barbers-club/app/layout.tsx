import { ReactNode } from "react";
import "./globals.css";
import Image from "next/image";
import Logo from "./../public/TheBarbersClubLogo.svg";
import phoneIcon from "./../public/phone--incoming.svg";
import { Manrope } from "next/font/google";
import { BearState } from "@/app/constants";
import { create } from "zustand";
import { Footer, Header } from "@/app/components";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { readonly children: ReactNode }) => {
  const store = create<BearState>()((set) => ({
    isOpen: false,
    isDev: false,
    setBookingForm: (state: boolean) => set({ isOpen: !state }),
  }));

  const isOpen = store((state) => state.isOpen);
  const isDev = store((state) => state.isOpen);
  const setBookingForm = store((state) => state.setBookingForm);

  const bookingFormStore = { isOpen, setBookingForm };
  console.log(isDev ? "Is Dev" : "Is live");

  return (
    <html lang="en">
      <body>
        {isDev ? (
          <main>
            <Header {...bookingFormStore} />
            {children}
            <Footer {...bookingFormStore} />
            {/*<BookingForm {...bookingFormStore} />*/}
          </main>
        ) : (
          <main
            className={`flex items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgb(63_201_99_/_40%)_0%,rgb(79_139_27)_100%)] min-h-screen min-w-screen ${manrope.className} `}
          >
            <div className="border-primary-200 sm:shadow-2xl text-center text-white sm:border p-6 sm:p-12 sm:rounded-2xl max-w-[600px]">
              <Image className="mx-auto mb-10" src={Logo} alt={"logo"} />
              <h1 className="drop-shadow-xl">
                Website komt binnenkort online!
              </h1>
              <h4 className="font-light text-[20px] sm:text-xl">
                We zijn nog druk aan de slag met de website. <br /> Nog een
                klein beetje geduld alstublieft!
              </h4>

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
            </div>
          </main>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
