import { Box, Column, Heading, Section } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservering is voltooid",
  description: "Bevesting van een reservering pagina",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  // const orderNumber = searchParams?.ordernummer;
  // const data = orderNumber && (await fetchDataUserData(orderNumber));
  // const { id, name, phone, service} = data

  return (
    <Section spacing={16}>
      <Column cols={2}>
        <div className="flex items-center">
          <Heading level={1}>Bedankt voor je reservering!</Heading>
        </div>
        <div id="emitter"></div>
        <Box>
          <p>
            <strong>Uw ordernummer</strong>
          </p>
          <p>
            <strong>Uw naam</strong>
          </p>
          <p>
            <strong>Uw telefoon nummer</strong>
          </p>
          <p>
            <strong>Uw gekozen dienst</strong>
          </p>
        </Box>
      </Column>
    </Section>
  );
}

type DataType = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly service: string;
};
