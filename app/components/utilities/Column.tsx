import { ReactNode } from "react";
import classNames from "classnames";

export const Column = ({ cols, children, gaps }: ColumnType) => {
  return (
    <div
      className={classNames("grid w-full", {
        "sm:grid-cols-2": cols === 2,
        "sm:grid-cols-3": cols === 3,
        "sm:grid-cols-4": cols === 4,
        "gap-6": !gaps,
        "gap-12": gaps === "sm",
        "gap-16": gaps === "md",
      })}
    >
      {children}
    </div>
  );
};

type ColumnType = {
  readonly cols: 2 | 3 | 4;
  readonly gaps?: "none" | "sm" | "md";
  readonly children: ReactNode;
};
