import classNames from "classnames";

export const Spacer = ({ height, type }: SpacerType) => {
	return (
		<div
			className={classNames("h-0.5", {
				"my-8": height === 8,
				"my-16": height === 16,
				"my-24": height === 24,
				"my-32": height === 32,
				"bg-neutral-200": type === "line",
			})}
		/>
	);
};

type SpacerType = {
	readonly height: 8 | 16 | 24 | 32;
	readonly type?: "line";
};
