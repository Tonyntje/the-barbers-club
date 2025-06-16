import { ReactNode } from "react";
import classNames from "classnames";

export const Section = ({
  children,
  background,
  spacing,
  className,
}: {
  readonly children: ReactNode;
  readonly background?: "grey";
  readonly spacing?: 8 | 16 | 32;
  readonly className?: string;
}) => {
  return (
    <section
      className={classNames("relative w-full border-b-2", {
        "bg-neutral-100": !background,
        "bg-neutral-200": background === "grey",
      })}
    >
      <div
        className={classNames(className + " mx-auto max-w-screen-2xl px-6", {
          "py-8": spacing === 8,
          "py-16": spacing === 16,
          "py-32": spacing === 32,
        })}
      >
        {children}
      </div>
    </section>
  );
};
