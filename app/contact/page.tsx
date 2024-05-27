import { Column, Heading, Section, Spacer } from "@/app/components";
import Image from "next/image";
import { ShopTimes } from "@/app/components/blocks/ShopTimes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact op met The barbers Club",
};

export default async function Page() {
  return (
    <main>
      <Section spacing={16}>
        <Column cols={2} gaps="none">
          <div className="bg-white p-12">
            <Heading level={1}>Contact</Heading>
            <div className="font-bold">Informatie</div>
            <p>
              Stalpaert van der Wieleweg 45, 2612 SV Delft
              <br />
              🗺️{" "}
              <a href="https://maps.app.goo.gl/KWxpXH4QcPzE2apq6">
                Routebeschrijving
              </a>
            </p>
            <p>
              Tel: <a href="tel:+31639132769">+31 6 391 327 69</a>
            </p>
            <Spacer type="line" height={8} />
            <Heading level={4}>Openingstijden</Heading>
            <ShopTimes mode="light" />
          </div>
          <Image
            priority
            alt="Het interieur van The Barbers Club"
            src="/static/the-barbers-club-interior-from-the-inside.jpg"
            quality={100}
            width={1000}
            height={200}
            className="h-full"
            style={{
              objectFit: "cover",
            }}
          />
        </Column>
      </Section>
    </main>
  );
}
