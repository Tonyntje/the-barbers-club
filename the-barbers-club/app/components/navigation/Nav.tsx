"use client";

import { BookingFormButton } from "@/app/components/interaction/BookingFormButton";
import Link from "next/link";

const NavLink = ({
  label,
  href,
}: {
  readonly label: string;
  readonly href: string;
}) => {
  return (
    <Link
      className={[
        "relative font-bold py-3 text-neutral-950",
        'after:transition-all after:opacity-0 after:bg-primary-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:content-[""] after:w-full',
        "hover:after:bottom-1 hover:after:opacity-100",
      ].join(" ")}
      href={href}
    >
      {label}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="flex items-center gap-12 text-lg">
      <div className="flex items-center gap-12 absolute -top-[200px] sm:top-0 sm:relative ">
        <NavLink label="Prijzenlijst" href="/prijzen/" />
        <NavLink label="The barbers Club" href="/the-barbers-club/" />
        <NavLink label="Contact" href="/contact/" />
      </div>
      <BookingFormButton />
    </nav>
  );
};
