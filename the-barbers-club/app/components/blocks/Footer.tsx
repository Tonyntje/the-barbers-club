"use client";

import Image from "next/image";
import TheBarbersClubFooterLogo from "../../../public/TheBarbersClubFooterLogo.svg";
import { Column } from "@/app/components/utilities/Column";
import Heading from "@/app/components/content/Heading";
import { Copyright } from "@/app/components/blocks/Copyright";
import { Button } from "@/app/components/interaction/Button";

const shopTimes = [
  { time: "10:00 - 16:00", label: "Maandag" },
  { time: "09:00 - 17:00", label: "Dinsdag" },
  { time: "10:00 - 21:00", label: "Woensdag" },
  { time: "09:00 - 21:00", label: "Donderdag" },
  { time: "09:00 - 18:00", label: "Vrijdag" },
  { time: "08:00 - 18:00", label: "Zaterdag" },
  { time: "Gesloten", label: "Zondag" },
];

export const Footer = ({
  isOpen,
  setBookingForm,
}: {
  readonly isOpen: boolean;
  readonly setBookingForm: (state: boolean) => void;
}) => {
  return (
    <footer className="w-full bg-neutral-800 text-white">
      <div className="max-w-screen-2xl flex justify-between mx-auto px-6 py-24">
        <Column cols={3}>
          <div className="flex flex-col gap-6">
            <Image
              src={TheBarbersClubFooterLogo}
              alt="The Barbers Club logo in footer"
            />
            <p>
              Vind ons op [Adres], bel ons via <a href="tel:+3107012345678"></a>
              , of stuur een e-mail naar{" "}
              <a href="mailto:info@thebarbersclub.nl">info@thebarbersclub.nl</a>
              .
            </p>
          </div>

          <div className="col-span-2">
            <Heading level={3}>Openingstijden</Heading>
            <ul className="mb-8 grid grid-cols-2 gap-x-8">
              {shopTimes.map(({ time, label }) => (
                <li
                  className="w-full flex justify-between border-b border-neutral-700 py-2"
                  key={label}
                >
                  <span className="text-accent-200">{label}</span> {time}
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant="primary"
              label="Afspraak maken"
              onClick={() => setBookingForm(isOpen)}
            />
          </div>
        </Column>
      </div>
      <Copyright />
    </footer>
  );
};
