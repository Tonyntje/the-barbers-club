"use client";

import { Control, Controller, FieldValues } from "react-hook-form";

export const SelectInput = ({
	label,
	name,
	control,
	options,
}: {
  readonly label: string;
  readonly name: string;
  readonly control: Control<FieldValues> | undefined;
  readonly options: { value: string; label: string }[];
}) => {
	return (
		<div className="flex flex-col gap-2 mb-4">
			<label className="font-bold" htmlFor={name}>
				{label}
			</label>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<select
						className="border-neutral-200 px-2 py-1 border rounded"
						{...field}
					>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				)}
			/>
		</div>
	);
};
