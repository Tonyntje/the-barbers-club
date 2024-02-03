import { CenterWrapper, Heading } from "@/app/components";
import { BookingFormButton } from "@/app/components/interaction/BookingFormButton";

export const CallToActionSection = () => (
  <CenterWrapper>
    <Heading level={3}>Kan je niet wachten om te shinen? ✨</Heading>
    <p>
      Maak vandaag nog een afspraak en ontdek waarom The Barbers Club dé
      bestemming is voor mannen die streven naar stijlvolle perfectie. Laat ons
      jouw look transformeren en ervaar de finesse van echt barbiersvakmanschap.
    </p>
    <BookingFormButton />
  </CenterWrapper>
);
