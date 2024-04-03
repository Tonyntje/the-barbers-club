import { Box, Button, Heading, SelectInput, TextInput } from "@/app/components";
import { services } from "@/app/machine/constants";
import React, { Dispatch, SetStateAction } from "react";
import { Control, FieldValues } from "react-hook-form";

export const Informatie = ({
  setStatus,
  control,
}: {
  readonly setStatus: Dispatch<SetStateAction<number>>;
  readonly control: Control<FieldValues, any>;
}) => {
  const handleInformationSubmit = () => {
    setStatus(2);
  };

  return (
    <>
      <div className="top-slide">
        <div className="text-center">
          <Heading level={4}>Tijd voor een fris kapsel?</Heading>
        </div>
        <Box>
          <TextInput label="Uw Naam" name="name" control={control} />
          <SelectInput
            label="Kies een dienst"
            name="service"
            control={control}
            options={services}
          />
        </Box>
      </div>
      <div className="flex mt-4 justify-end">
        <Button
          onClick={handleInformationSubmit}
          type="button"
          variant="primary"
          label="Datum & Tijd kiezen"
        />
      </div>
    </>
  );
};
