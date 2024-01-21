"use client";

import { Column, Heading, Section } from "@/app/components";
import FooterImage from "@/public/mooi-houte-afwerking-meubilair-the-barbers-club.jpg";
import Image from "next/image";

export default async function Page() {
  return (
    <main>
      <Section spacing={16}>
        <Column cols={2} gaps="none">
          <div className="bg-white p-12">
            <Heading level={1}>Liever direct contact?</Heading>
            <div>
              Bezoek ons op Stalpaert van der Wieleweg 45, Delft, bel ons via ,
              of stuur een e-mail naar info@thebarbersclub.nl.
            </div>
          </div>
          <Image
            priority
            alt="The Barbers Club footer achtergrond"
            src={FooterImage}
            placeholder="blur"
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </Column>
      </Section>
    </main>
  );
}
