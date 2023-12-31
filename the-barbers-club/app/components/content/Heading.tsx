import { createElement, FC, ReactNode } from "react";

type HeadingProps = {
  level: number;
  children: ReactNode;
};

export const Heading: FC<HeadingProps> = ({ level, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return createElement(HeadingTag, null, children);
};

export default Heading;
