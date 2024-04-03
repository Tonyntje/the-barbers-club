"use client";

import { BookingFormButton } from "@/app/components/booking-form/components/BookingFormButton";
import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";

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
        "relative font-bold py-3 text-neutral-950 flex justify-between items-center sm:block",
        'after:transition-all after:opacity-0 after:bg-primary-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:content-[""] after:w-full',
        "hover:after:bottom-1 hover:after:opacity-100",
        "border rounded-lg p-4 mb-6 sm:rounded-none sm:px-0 sm:border-none sm:mb-0",
        "sm:text-sm lg:text-lg",
      ].join(" ")}
      href={href}
    >
      {label}
      <span className="block sm:hidden">
        <ArrowRight />
      </span>
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12 text-lg">
      <div className="flex flex-col sm:items-center sm:gap-6 lg:gap-12 sm:flex-row">
        <NavLink label="Prijzenlijst" href="/prijzen/" />
        <NavLink label="The barbers Club" href="/the-barbers-club/" />
        <NavLink label="Contact" href="/contact/" />
      </div>
      <BookingFormButton />
    </nav>
  );
};
