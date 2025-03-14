"use client";

import classNames from "classnames";
import type {CarbonIconProps} from "@carbon/icons-react/es/CarbonIcon";

export const Button = ({
	type,
	variant,
	label,
	icon,
	onClick,
	disabled,
}: ButtonType) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={classNames("rounded-md transition-all", {
				"text-neutral-100 border-2 border-primary-700 bg-primary-700 hover:bg-primary-600 font-light":
					variant === "primary" && !disabled,
				"text-neutral-950 border-2 hover:bg-neutral-200 font-bold":
					variant === "secondary" && !disabled,
				"bg-neutral-400 border-2 border-neutral-200 text-neutral-200 font-light":
					disabled,
			})}
		>
			<div
				className={classNames("py-2 px-4 sm:px-6 flex items-center gap-2 ", {
					"transition-all hover:px-4 hover:gap-6": icon,
				})}
			>
				{label}
				{icon && <>{icon}</>}
			</div>
		</button>
	);
};

type ButtonType = {
	readonly disabled?: boolean;
	readonly type: "submit" | "button";
	readonly variant: "primary" | "secondary";
	readonly label: string;
	readonly onClick?: () => void;
	readonly icon?: CarbonIconProps;
};
