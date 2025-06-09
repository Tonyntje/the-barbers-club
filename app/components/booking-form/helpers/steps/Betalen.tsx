import { Box, Button, Heading } from "@/app/components";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { services } from "@/app/machine/constants";
import { createPayment } from "@/app/components/booking-form/services/createPayment";
import { redirect } from "next/navigation";

export const Betalen = ({
  orderDetails,
}: {
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

  const timeCorrect = timeSplit.length === 3 && [0, ...timeSplit];

  const formattedTime =
    timeCorrect[0] + timeCorrect[1] + ":" + timeCorrect[2] + timeCorrect[3];

  const getPayment = () => {
    if (!serviceInfo?.label || !serviceInfo?.price) return;

    createPayment(serviceInfo.price, serviceInfo.label).then((redirectUrl) => {
      redirectUrl && redirect(redirectUrl);
    });
  };

  return (
    <>
      <div className="top-slide">
        <div className="text-center">
          <Heading level={4}>Bijna klaar!</Heading>
        </div>
        <Box size="sm">
          <p className="mb-4 text-center font-bold">
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
      <div className="mt-4 flex justify-between">
        <Button
          type="button"
          onClick={getPayment}
          variant="primary"
          label="Afrekenen & reserveren"
        />
      </div>
    </>
  );
};
