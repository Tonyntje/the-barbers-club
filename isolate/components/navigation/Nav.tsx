import { Button } from "@/app/components/interaction/Button";
import { ArrowRight } from "@carbon/icons-react";

const NavLink = ({
  label,
  href,
}: {
  readonly label: string;
  readonly href: string;
}) => {
  return (
    <a
      className={[
        "relative font-bold py-3 text-neutral-950",
        'after:transition-all after:opacity-0 after:bg-primary-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:content-[""] after:w-full',
        "hover:after:bottom-1 hover:after:opacity-100",
      ].join(" ")}
      href={href}
    >
      {label}
    </a>
  );
};

export const Nav = ({
  isOpen,
  setBookingForm,
}: {
  readonly isOpen: boolean;
  readonly setBookingForm: (state: boolean) => void;
}) => {
  return (
    <nav className="flex items-center gap-12 text-lg">
      <NavLink label="Over ons" href="/over-ons/" />
      <NavLink label="Contact" href="/contact/" />
      <Button
        variant="primary"
        type="button"
        onClick={() => setBookingForm(isOpen)}
        label="Reserveer"
        icon={<ArrowRight />}
      />
    </nav>
  );
};
