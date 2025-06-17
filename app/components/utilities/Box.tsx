import type { ReactNode } from "react";
import classNames from "classnames";

export const Box = ({ children, size = "md", className }: BoxType) => {
  return (
    <div
      className={
        className +
        classNames("rounded-lg border border-neutral-300", {
          "p-3": size === "sm",
          "p-6": size === "md",
        })
      }
    >
      {children}
    </div>
  );
};

type BoxType = {
  readonly children: ReactNode;
  readonly size?: "sm" | "md";
  readonly className?: string;
};
