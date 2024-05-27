import { ReactNode } from "react";
import classNames from "classnames";

export const Box = ({ children, size = "md" }: BoxType) => {
  return (
    <div
      className={classNames("border border-neutral-300 rounded-lg", {
        "p-3": size === "sm",
        "p-6": size === "md",
      })}
    >
      {children}
    </div>
  );
};

type BoxType = {
  readonly children: ReactNode;
  readonly size?: "sm" | "md";
};
