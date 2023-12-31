import { ReactNode } from "react";
import classNames from "classnames";

export const Section = ({
  children,
  background,
  spacing,
}: {
  readonly children: ReactNode;
  readonly background?: "grey";
  readonly spacing?: 8 | 16 | 32;
}) => {
  return (
    <section
      className={classNames("w-full border-b-2", {
        "bg-neutral-100": !background,
        "bg-neutral-200": background === "grey",
      })}
    >
      <div
        className={classNames("max-w-screen-2xl mx-auto px-6 ", {
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
