import Image from "next/image";
import TreatwellLogo from "./../../../public/TreatwellLogo.svg";
import { StarFilled } from "@carbon/icons-react";

const Stars = () => {
  const size = 20;

  return (
    <div className="flex gap-x-0.5 items-center text-primary-600">
      <StarFilled size={size} />
      <StarFilled size={size} />
      <StarFilled size={size} />
      <StarFilled size={size} />
      <StarFilled size={size} />
    </div>
  );
};

export const TopBar = () => {
  return (
    <div className="w-full bg-neutral-200 text-neutral-700">
      <div className="max-w-screen-2xl sm:flex sm:justify-between mx-auto px-6 p-3">
        <div className="flex gap-2 items-center">
          <Stars />
          <span className="font-black text-sm">(60+)</span>
          <p>sterren op</p>
          <a href="https://www.treatwell.nl/salon/the-scissors-club/">
            <Image src={TreatwellLogo} alt="Treatwell Logo" />
          </a>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Liever direct contact?</p>
          <p>
            Bel of App{" "}
            <a className="font-bold text-primary-600" href="tel:0701234123402">
              +070 1234 1234 02
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
