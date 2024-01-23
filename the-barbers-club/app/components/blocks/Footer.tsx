"use client";

import Image from "next/image";
import TheBarbersClubFooterLogo from "../../../public/TheBarbersClubFooterLogo.svg";
import { Column } from "@/app/components/utilities/Column";
import Heading from "@/app/components/content/Heading";
import { Copyright } from "@/app/components/blocks/Copyright";
import FooterImage from "@/public/photos/mooi-houte-afwerking-meubilair-the-barbers-club.jpg";
import { ShopTimes } from "@/app/components/blocks/ShopTimes";
import { BookingFormButton } from "@/app/components/interaction/BookingFormButton";

export const Footer = () => {
  return (
    <footer className="w-full text-white relative">
      <Image
        priority
        alt="The Barbers Club footer achtergrond"
        src={FooterImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="overlay w-full h-full absolute"></div>
      <div className="max-w-screen-2xl sm:flex sm:justify-between sm:mx-auto px-6 py-24 relative">
        <Column cols={3}>
          <div className="flex flex-col gap-6 p-6 text-center border rounded-3xl border-neutral-400">
            <Image
              className="mx-auto"
              src={TheBarbersClubFooterLogo}
              alt="The Barbers Club logo in footer"
            />
            <span>
              Bezoek ons op{" "}
              <a
                className="text-primary-500 underline"
                href="https://maps.app.goo.gl/KWxpXH4QcPzE2apq6"
              >
                Stalpaert van der Wieleweg 45, Delft
              </a>
              , bel ons via <a href="tel:+3107012345678"></a>, of stuur een
              e-mail naar{" "}
              <a
                className="text-primary-500 underline"
                href="mailto:info@thebarbersclub.nl"
              >
                info@thebarbersclub.nl
              </a>
              .
            </span>
          </div>
          <div className="sm:col-span-2 relative px-6">
            <Heading level={3}>Openingstijden</Heading>
            <ShopTimes />
            <BookingFormButton />
          </div>
        </Column>
      </div>
      <Copyright />
    </footer>
  );
};
