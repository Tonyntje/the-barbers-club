import { Box, Column, Heading, Section } from "@/app/components";
import { fetchDataUserData } from "@/app/api/services/fetchDataUserData";
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
  const orderNumber = searchParams?.ordernummer;
  const data = orderNumber && (await fetchDataUserData(orderNumber));

  return (
    <Section spacing={16}>
      <Column cols={2}>
        <div className="flex items-center">
          <Heading level={1}>Bedankt voor je reservering!</Heading>
        </div>
        <div id="emitter"></div>
        <Box>
          <p>
            <strong>Uw ordernummer</strong> {data.id}
          </p>
          <p>
            <strong>Uw naam</strong> {data.name}
          </p>
          <p>
            <strong>Uw telefoon nummer</strong> {data.phone}
          </p>
          <p>
            <strong>Uw gekozen dienst</strong> {data.service}
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
