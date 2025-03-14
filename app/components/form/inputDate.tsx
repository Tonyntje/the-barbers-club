"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateInput = ({
	label,
	name,
	control,
	setValue,
}: {
  readonly label: string;
  readonly name: string;
  readonly control: Control<FieldValues> | undefined;
  readonly setValue: any;
}) => {
	return (
		<div className="flex flex-col gap-2 mb-4">
			<label className="font-bold" htmlFor={name}>
				{label}
			</label>
			<Controller
				control={control}
				name="date"
				defaultValue={null}
				render={({ field }) => (
					<DatePicker
						selected={field.value}
						onChange={(date: Date | null) => {
							setValue("date", date);
						}}
						dateFormat="yyyy-MM-dd"
						className="border-neutral-200 px-2 py-1 border rounded"
					/>
				)}
			/>
		</div>
	);
};
