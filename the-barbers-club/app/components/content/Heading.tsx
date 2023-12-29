import {FC, ReactNode} from 'react';
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

type HeadingProps = {
	level: number;
	children: ReactNode;
};

const Heading: FC<HeadingProps> = ({level, children}) => {
	const HeadingTag = `h${level}` as keyof IntrinsicElements;

	return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
