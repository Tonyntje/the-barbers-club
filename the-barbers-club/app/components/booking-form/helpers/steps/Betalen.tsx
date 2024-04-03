import { Box, Button, Heading } from "@/app/components";
import React, { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { services } from "@/app/machine/constants";

export const Betalen = ({
  setStatus,
  orderDetails,
}: {
  readonly setStatus: Dispatch<SetStateAction<number>>;
  readonly orderDetails: {
    service: string;
    name: string;
    date: Date;
    time: string;
  };
}) => {
  const { service, name, date, time } = orderDetails;
  const serviceInfo = services.find(({ value }) => service === value);
  const timeSplit = time.split("");
  const formattedTime =
    timeSplit[0] + timeSplit[1] + ":" + timeSplit[2] + timeSplit[3];

  return (
    <>
      <div className="top-slide">
        <div className="text-center">
          <Heading level={4}>Bijna klaar!</Heading>
        </div>
        <Box size="sm">
          <p className="text-center font-bold mb-4">
            Controleer uw gegevens <br /> voordat u gaat betalen!
          </p>
          <Box>
            <p>
              <b>Naam</b> {name} <br />
              <b>Dienst</b> {serviceInfo?.label} <br />
              <b>Datum</b> {format(date, "PPPP", { locale: nl })} <br />
              <b>Tijd</b> {formattedTime} <br />
              <b>Duur</b> {serviceInfo?.length}min <br />
              <b>Totaal bedrag</b> €{serviceInfo?.price} <br />
            </p>
          </Box>
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
          label="Afrekenen & reserveren"
        />
      </div>
    </>
  );
};
