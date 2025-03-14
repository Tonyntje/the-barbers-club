import { Button, CenterWrapper, Heading } from "@/app/components";
import { ArrowRight } from "@carbon/icons-react";

export const PageHeader = () => (
	<CenterWrapper>
		<Heading level={3}>Waar wacht je nog op?</Heading>
		<p>
      Maak vandaag nog een afspraak en ontdek waarom The Barbers Club dé
      bestemming is voor mannen die streven naar stijlvolle perfectie. Laat ons
      jouw look transformeren en ervaar de finesse van echt barbiersvakmanschap.
		</p>
		<Button
			type="button"
			variant="primary"
			label="Maak een afspraak"
			icon={<ArrowRight />}
		/>
	</CenterWrapper>
);
