import { Button } from "@/app/components/interaction/Button";
import { ArrowRight } from "@carbon/icons-react";
import HeroImage from "../../../public/the-barbers-club-ingang-hoofdafbeelding-header.jpg";
import Image from "next/image";

export const HeroBanner = () => {
  return (
    <section className="w-full border-b-2 bg-neutral-200">
      <div className="relative">
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
        <div className="overlay w-full h-full absolute"></div>
        <div className="max-w-screen-2xl mx-auto px-6 py-40 relative">
          <h1 className="text-7xl drop-shadow-md text-white top-slide">
            Let your hair <br /> do the talking
          </h1>
          <div className="h-0.5 w-24 bg-white mb-8"></div>
          <Button
            type="button"
            variant="primary"
            label="Maak een afspraak"
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </section>
  );
};
