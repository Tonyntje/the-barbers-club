import {
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
import Placeholder1 from "@/public/photos/the-barbers-club-buitenkant-ingang.jpg";
import Placeholder2 from "@/public/photos/the-barbers-club-interior-design.jpg";
import Placeholder3 from "@/public/photos/the-barbers-club-interior-from-the-inside.jpg";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Section spacing={8}>
        <Column cols={3}>
          <SubBlock title="Vakmanschap" image={Placeholder1} />
          <SubBlock title="The Barbershop" image={Placeholder2} />
          <SubBlock title="Tools" image={Placeholder3} />
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
        </Column>
        <Spacer height={16} type="line" />
        <CallToActionSection />
      </Section>
    </>
  );
}
