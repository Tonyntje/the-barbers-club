import { ReactNode } from "react";

export const Box = ({ children }: BoxType) => {
  return (
    <div className="p-6 border border-neutral-300 rounded-lg">{children}</div>
  );
};

type BoxType = {
  readonly children: ReactNode;
};
