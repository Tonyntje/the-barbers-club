import {
  CallToActionSection,
  Heading,
  Section,
  Spacer,
} from "@/app/components";
import { services } from "@/app/machine/constants";
import Image from "next/image";
import FooterImage from "@/public/mooi-houte-afwerking-meubilair-the-barbers-club.jpg";

export default async function Page() {
  return (
    <>
      <Section spacing={16}>
        <Image
          priority
          alt="The Barbers Club footer achtergrond"
          src={FooterImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="overlay w-full top-0 left-0 h-full absolute"/>
        <div className="relative text-white">
          <Heading level={1}>Prijzenlijst</Heading>
          <ul className="mb-8 sm:grid-cols-2 grid gap-4 sm:gap-0 sm:gap-x-8 border-2 p-6 sm:p-12 rounded-3xl">
            {services.map(({ label, price }) => (
              <li
                className="w-full group hover:border-neutral-400 flex justify-between border-b border-neutral-700 py-2"
                key={label}
              >
                <span className="text-accent-200 sm:text-xl sm:font-bold">
                  {label}
                </span>{" "}
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Spacer height={8} />
      <CallToActionSection />
      <Spacer height={8} />
    </>
  );
}
