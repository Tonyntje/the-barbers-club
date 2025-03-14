import type {ReactNode} from "react";

export const CenterWrapper = ({ children }: CenterWrapperType) => {
	return <div className="max-w-screen-md text-center mx-auto">{children}</div>;
};

type CenterWrapperType = {
	readonly children: ReactNode;
};
