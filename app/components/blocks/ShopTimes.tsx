import { shopTimes } from "@/app/machine/constants";
import classNames from "classnames";

export const ShopTimes = ({ mode }: { readonly mode?: "light" }) => (
	<ul className="mb-8 grid sm:grid-cols-2 gap-x-8">
		{shopTimes.map(({ time, label }) => (
			<li
				className="w-full group hover:border-neutral-400 flex justify-between border-b border-neutral-700 py-2"
				key={label}
			>
				<span
					className={classNames("", {
						"text-primary-700": mode === "light",
						"text-accent-200": !mode,
					})}
				>
					{label}
				</span>{" "}
				<span>
					{time === "Gesloten" ? "Gesloten" : `${time.from}:00 - ${time.to}:00`}
				</span>
			</li>
		))}
	</ul>
);
