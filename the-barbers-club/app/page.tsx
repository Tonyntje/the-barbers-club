import {
  Box,
  Button,
  CenterWrapper,
  Column,
  Heading,
  HeroBanner,
  Section,
  Spacer,
} from "@/app/components";
import { ArrowRight } from "@carbon/icons-react";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Section spacing={8}>
        <Column cols={3}>
          <div className="bg-neutral-200 min-h-[250px] p-6 top-slide-slow">
            <Heading level={3}> Subheading</Heading>
          </div>
          <div className="bg-neutral-200 min-h-[250px] p-6 top-slide-slow">
            <Heading level={3}> Subheading</Heading>
          </div>
          <div className="bg-neutral-200 min-h-[250px] p-6 top-slide-slow">
            <Heading level={3}> Subheading</Heading>
          </div>
        </Column>
      </Section>
      <Section spacing={16}>
        <CenterWrapper>
          <Heading level={2}>Welkom bij The Barbers Club</Heading>
          <p>
            Dé plek waar stijl en vakmanschap samenkomen voor een ongeëvenaarde
            grooming-ervaring. Onze ervaren barbers staan klaar om jouw look
            naar een hoger niveau te tillen, terwijl je geniet van een relaxte
            sfeer en persoonlijke service.
          </p>
        </CenterWrapper>
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
        </Column>
        <Spacer height={16} type="line" />
        <CenterWrapper>
          <Heading level={3}>Waar wacht je nog op?</Heading>
          <p>
            Maak vandaag nog een afspraak en ontdek waarom The Barbers Club dé
            bestemming is voor mannen die streven naar stijlvolle perfectie.
            Laat ons jouw look transformeren en ervaar de finesse van echt
            barbiersvakmanschap.
          </p>
          <Button
            type="button"
            variant="primary"
            label="Maak een afspraak"
            icon={<ArrowRight />}
          />
        </CenterWrapper>
      </Section>
    </main>
  );
}
