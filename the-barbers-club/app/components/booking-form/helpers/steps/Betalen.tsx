import {Box, Button, Heading} from "@/app/components";
import React, {Dispatch, SetStateAction} from "react";


export const Betalen = ({ setStatus }: {
  readonly setStatus: Dispatch<SetStateAction<number>>
}) => {
  return (
    <>
      <div className="top-slide">
        <div className="text-center">
          <Heading level={4}>Bijna klaar!</Heading>
        </div>
        <Box>
          <></>
        </Box>
      </div>
      <div className="flex mt-4 justify-between">
        <Button
          onClick={() => setStatus(2)}
          type="button"
          variant="secondary"
          label="Terug"
        />
        <Button
          type="submit"
          variant="primary"
          label="Datum & Tijd kiezen"
        />
      </div>
    </>
  )
}