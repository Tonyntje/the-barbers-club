import HeroImage from "../../../public/the-barbers-club-ingang-hoofdafbeelding-header.jpg";
import Image from "next/image";

export const SubHeader = () => {
  return (
    <div className="relative h-40 hidden sm:block">
      <div className="bg-gradient h-full w-full absolute left-0 top-0 z-10"></div>
      <Image
        priority
        alt="The Barbers Club fade"
        src={HeroImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="(max-width: 1920px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};
