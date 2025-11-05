"use client";

import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

export const TextInput = ({
  label,
  name,
  control,
}: {
  readonly label: string;
  readonly name: string;
  readonly control: Control | undefined;
}) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <label className="font-bold" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input type="email" className="rounded border px-2 py-1" {...field} />
        )}
      />
    </div>
  );
};
