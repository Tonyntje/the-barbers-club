import { createElement, FC, ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

type HeadingProps = {
  level: number;
  children: ReactNode;
  noSpace?: boolean;
};

export const Heading: FC<HeadingProps> = ({ level, children, noSpace }) => {
  const HeadingTag = `h${level}` as keyof IntrinsicElements;

  return createElement(HeadingTag, null, children);
};

export default Heading;
