import { ReactNode } from "react";
import classNames from "classnames";

export const Column = ({ cols, children }: ColumnType) => {
  return (
    <div
      className={classNames("grid w-full gap-6", {
        "grid-cols-2": cols === 2,
        "grid-cols-3": cols === 3,
        "grid-cols-4": cols === 4,
      })}
    >
      {children}
    </div>
  );
};

type ColumnType = {
  readonly cols: 2 | 3 | 4;
  readonly children: ReactNode;
};
