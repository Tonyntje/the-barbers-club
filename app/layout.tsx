"use client";

import type { ReactNode } from "react";
import { Suspense } from "react";
import "./globals.css";
import Image from "next/image";
import Logo from "../public/TheBarbersClubLogo.svg";
import phoneIcon from "../public/phone--incoming.svg";
import { BookingForm, Footer, Header } from "@/app/components";
import { FacebookPixelEvents } from "@/app/components/pixel-events";
import { Warning } from "@carbon/icons-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootLayout = ({ children }: { readonly children: ReactNode }) => {
  const isDev = false;
  const siteNotice = false;

  return (
    <html lang="en">
      <head>
        <title>The Barbers Club</title>
        <meta
          name="facebook-domain-verification"
          content="h5rdh5rmyb7zbwfparykyqjgveptvz"
        />
      </head>
      <body>
        {siteNotice && (
          <div className="flex w-full items-center justify-center gap-4 bg-amber-400 p-6 text-center">
            <Warning size={30} />
            <p>
              Beste bezoekers. Helaas zijn we in het weekend van{" "}
              <b>16 & 17 november</b> gesloten.
            </p>
          </div>
        )}

        {!isDev ? (
          <>
            <Header />
            <Suspense fallback={null}>
              <main>{children}</main>
            </Suspense>
            <Footer />
            <Suspense fallback={null}>
              <FacebookPixelEvents />
              <QueryClientProvider client={queryClient}>
                <BookingForm />
              </QueryClientProvider>
            </Suspense>
          </>
        ) : (
          <main className="flex min-h-screen min-w-screen items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgb(63_201_99_/_40%)_0%,rgb(79_139_27)_100%)]">
            <div className="border-primary-200 max-w-[600px] p-6 text-center text-white sm:rounded-2xl sm:border sm:p-12 sm:shadow-2xl">
              <Image className="mx-auto mb-10" src={Logo} alt={"logo"} />
              <h1 className="drop-shadow-xl">
                Website komt binnenkort online!
              </h1>
              <h4 className="text-[20px] font-light sm:text-xl">
                We zijn nog druk aan de slag met de website. <br /> Nog een
                klein beetje geduld alstublieft!
              </h4>

              <div className="mt-10 flex w-full flex-col rounded-2xl bg-white p-6 text-center text-neutral-800">
                <b>Wilt u alvast een afspraak maken?</b>
                <span>Bel of whatsApp naar</span>
                <a
                  className="bg-primary-700 hover:bg-primary-600 mt-3 flex items-center justify-center gap-4 rounded-xl px-6 py-4 text-xl text-white transition-colors"
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
