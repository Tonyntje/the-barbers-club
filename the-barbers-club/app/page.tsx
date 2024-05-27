import {
  BookingForm,
  Box,
  CallToActionSection,
  CenterWrapper,
  Column,
  Heading,
  HeroBanner,
  Section,
  Spacer,
  SubBlock,
} from "@/app/components";
import Placeholder1 from "../public/the-barbers-club-buitenkant-ingang.jpg";
import Placeholder2 from "../public/the-barbers-club-interior-design.jpg";
import Placeholder3 from "../public/the-barbers-club-interior-from-the-inside.jpg";
import HeroImage from "../public/the-barbers-club-ingang-hoofdafbeelding-header.jpg";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const isDev = searchParams.dev === "25322";

  return (
    <>
      <HeroBanner />
      <Section spacing={8}>
        <Column cols={3}>
          <SubBlock
            title="Prijzen"
            image={Placeholder1}
            description={
              <Link
                href="/prijzen/"
                className="bg-white px-4 py-2 rounded-lg no-underline"
              >
                Bekijk nu
              </Link>
            }
          />
          <SubBlock
            title="The Barbershop"
            image={Placeholder2}
            description={
              <a
                href="/the-barbers-club/"
                className="bg-white px-4 py-2 rounded-lg no-underline"
              >
                Werp een blik
              </a>
            }
          />
          <SubBlock
            title="Contact"
            image={Placeholder3}
            description={
              <a
                className="bg-white px-4 py-2 rounded-lg no-underline"
                href="/contact/"
              >
                Routebeschrijving
              </a>
            }
          />
        </Column>
      </Section>
      <Section spacing={16}>
        <CenterWrapper>
          <Heading level={2}>Welkom bij The Barbers Club</Heading>
          <p>
            Bij The Barbers Club draait het om <b>creativiteit</b> en{" "}
            <b>kwaliteit</b>! Sinds 2016 zijn we dé hotspot in Den Haag, waar
            mannen dol zijn op onze <b>strakke fades</b>, <b>baard reshapes</b>{" "}
            en <b>trendy makeovers</b>. Ontdek ook ons uitgebreide assortiment
            haar- en baardproducten om fris en scherp te blijven na onze
            behandelingen. Kom langs voor een ervaring die je look naar een
            hoger niveau tilt!
          </p>
        </CenterWrapper>
        <Spacer height={8} />
        <Heading level={2}>Onze Kwaliteiten</Heading>
        <Column cols={2}>
          <Box>
            <Heading level={3}>Klassiek Vakmanschap</Heading>
            <p>
              Laat je verwennen door onze deskundige barbers, gespecialiseerd in
              klassieke herenkapsels en baardverzorging. Of je nu gaat voor een
              strakke fade, een traditionele scheerbeurt of een trendy snit, wij
              hebben de skills en passie om jouw stijl tot leven te brengen.
            </p>
          </Box>
          <Box>
            <Heading level={3}> Moderne Trends</Heading>
            <p>
              Bij The Barbers Club omarmen we de laatste trends en technieken op
              het gebied van herenstyling. Ontdek de nieuwste looks en vertrouw
              op onze barbers om jou een eigentijdse uitstraling te geven die
              perfect past bij jouw persoonlijkheid en levensstijl.
            </p>
          </Box>
          <Box>
            <Heading level={3}>Onze Belofte</Heading>
            <p>
              Bij ons gaat het niet alleen om het knippen van haar; het gaat om
              het creëren van een ervaring die je niet snel zult vergeten. Onze
              toewijding aan kwaliteit, klanttevredenheid en hygiëne staat
              garant voor een bezoek waarbij jij je op je best voelt.
            </p>
          </Box>
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              priority
              alt="The Barbers Club fade"
              src={HeroImage}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </Column>
        <Spacer height={16} type="line" />
        <CallToActionSection />
        {isDev && (
          <Suspense fallback={null}>
            <BookingForm />{" "}
          </Suspense>
        )}
      </Section>
    </>
  );
}
