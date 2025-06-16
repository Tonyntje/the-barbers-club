"use client";

import classNames from "classnames";
import type { CarbonIconProps } from "@carbon/icons-react/es/CarbonIcon";

export const Button = ({
  type,
  variant,
  label,
  icon,
  onClick,
  disabled,
}: ButtonType) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNames("cursor-pointer rounded-md transition-all", {
        "border-primary-700 bg-primary-700 hover:bg-primary-600 border-2 font-light text-neutral-100":
          variant === "primary" && !disabled,
        "border-2 font-bold text-neutral-950 hover:bg-neutral-200":
          variant === "secondary" && !disabled,
        "border-2 border-neutral-200 bg-neutral-400 font-light text-neutral-200":
          disabled,
      })}
    >
      <div
        className={classNames("flex items-center gap-2 px-4 py-2 sm:px-6", {
          "transition-all hover:gap-6 hover:px-4": icon,
        })}
      >
        {label}
        {icon && <>{icon}</>}
      </div>
    </button>
  );
};

type ButtonType = {
  readonly disabled?: boolean;
  readonly type: "submit" | "button";
  readonly variant: "primary" | "secondary";
  readonly label: string;
  readonly onClick?: () => void;
  readonly icon?: CarbonIconProps;
};
