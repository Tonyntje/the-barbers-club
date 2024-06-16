import { Heading, Section, Spacer, SubHeader } from "@/app/components";
import { Metadata } from "next";
import { PhotoGallery } from "./components/PhotoGallery";
import Image from "next/image";
import HeroImage from "@/public/the-barbers-club-ingang-hoofdafbeelding-header.jpg";

export const metadata: Metadata = {
  title: "Foto gallerij",
  description: "Kijk binnen bij The Barbers Club",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <>
      <SubHeader />
      <Section spacing={16}>
        <div className="text-center">
          <Heading level={1}>
            Neem een blik in onze mooie Barbers Club & onze modellen
          </Heading>
        </div>
        <Spacer height={8} type="line" />
        <PhotoGallery />
      </Section>
      <Section spacing={16}>
        <Heading level={2}>The Barbers Club</Heading>
        <p>
          The Barbers Club, waar hairstyling een ervaring wordt die je nergens
          anders vindt. Stap binnen en waan je in de wereld van exclusiviteit en
          vakmanschap, waar klanten niet alleen geknipt worden, maar waar ze
          volledig verwend worden door onze experts op het gebied van
          hairstyling, fade en shaving.
        </p>
        <Heading level={3}>Ambiance</Heading>
        <p>
          Bij The Barbers Club gaat het niet alleen om een knipbeurt; het gaat
          om de totale beleving. Onze barbershop ademt de sfeer van een
          exclusieve club, waar klanten zich speciaal voelen vanaf het moment
          dat ze binnenkomen. De ambiance straalt luxe uit, en de aandacht voor
          detail is ongeëvenaard.
        </p>

        <p>
          Onze deskundige hairstylisten zijn niet zomaar kappers; ze zijn
          meesters in hun vak. Of je nu komt voor een gedurfde nieuwe look, een
          perfecte fade of een zijdezachte scheerbeurt, onze experts staan
          garant voor vakmanschap op het hoogste niveau. Elke snede, elke vorm
          en elke beweging is doordacht en met precisie uitgevoerd, zodat elke
          klant met een zelfverzekerde uitstraling naar buiten stapt.
        </p>
        <Heading level={3}>Niet alleen een knipbeurt</Heading>
        <p>
          Bij The Barbers Club draait het niet alleen om het eindresultaat, maar
          ook om de reis ernaartoe. Neem plaats in onze comfortabele stoelen en
          laat je onderdompelen in de wereld van ontspanning. Geniet van een
          verfrissend drankje terwijl je wacht, en laat je verwennen met de
          beste haarproducten die zorgen voor een gezonde en glanzende coupe.
        </p>
        <p>
          Ervaar de finesse van een knipbeurt bij The Barbers Club, waar elke
          klant behandeld wordt als een VIP. Maak vandaag nog een afspraak en
          ontdek waarom wij de norm stellen als het gaat om exclusieve
          hairstyling. Wij beloven niet alleen een knipbeurt; wij beloven een
          ervaring die je nergens anders zult vinden. Beleef The Barbers Club –
          waar vakmanschap en exclusiviteit samenkomen.
        </p>
        <Image
          priority
          alt="The Barbers Club fade"
          src={HeroImage}
          placeholder="blur"
          quality={100}
        />
      </Section>
    </>
  );
}
