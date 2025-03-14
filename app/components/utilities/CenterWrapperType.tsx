import type { ReactNode } from "react";

export const CenterWrapper = ({ children }: CenterWrapper) => {
	return <div className="max-w-screen-md text-center mx-auto">{children}</div>;
};

type CenterWrapper = {
	readonly children: ReactNode;
};
