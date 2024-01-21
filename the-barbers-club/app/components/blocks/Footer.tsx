"use client";

import Image from "next/image";
import TheBarbersClubFooterLogo from "../../../public/TheBarbersClubFooterLogo.svg";
import { Column } from "@/app/components/utilities/Column";
import Heading from "@/app/components/content/Heading";
import { Copyright } from "@/app/components/blocks/Copyright";
import { Button } from "@/app/components/interaction/Button";
import { useBookingStore } from "@/app/machine";
import FooterImage from "@/public/mooi-houte-afwerking-meubilair-the-barbers-club.jpg";

const shopTimes = [
  { time: "10:00 - 16:00", label: "Maandag" },
  { time: "09:00 - 17:00", label: "Dinsdag" },
  { time: "10:00 - 21:00", label: "Woensdag" },
  { time: "09:00 - 21:00", label: "Donderdag" },
  { time: "09:00 - 18:00", label: "Vrijdag" },
  { time: "08:00 - 18:00", label: "Zaterdag" },
  { time: "Gesloten", label: "Zondag" },
];

export const Footer = () => {
  const isOpen = useBookingStore((state) => state.isOpen);
  const setBookingStatus = useBookingStore((state) => state.setBookingStatus);

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
      <div className="max-w-screen-2xl flex justify-between mx-auto px-6 py-24 relative">
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
          <div className="col-span-2 relative px-6">
            <Heading level={3}>Openingstijden</Heading>
            <ul className="mb-8 grid grid-cols-2 gap-x-8">
              {shopTimes.map(({ time, label }) => (
                <li
                  className="w-full group hover:border-neutral-400 flex justify-between border-b border-neutral-700 py-2"
                  key={label}
                >
                  <span className="text-accent-200">{label}</span>{" "}
                  <span>{time}</span>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant="primary"
              label="Afspraak maken"
              onClick={() => setBookingStatus(isOpen)}
            />
          </div>
        </Column>
      </div>
      <Copyright />
    </footer>
  );
};
