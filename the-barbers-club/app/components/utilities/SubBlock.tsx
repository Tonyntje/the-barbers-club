import { Heading } from "@/app/components";
import Image, { StaticImageData } from "next/image";

export const SubBlock = ({
  image,
  title,
}: {
  readonly image: StaticImageData;
  readonly title: string;
}) => {
  return (
    <div className="bg-neutral-200 top-slide-slow rounded-md overflow-hidden">
      <div className="relative">
        <Image
          alt="The Barbers Club tools"
          src={image}
          placeholder="blur"
          quality={80}
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="overlay w-full h-full absolute opacity-50"></div>
        <div className="relative text-white px-6 pt-6 min-h-[250px] flex flex-col justify-end">
          <Heading level={3}>{title}</Heading>
          <p className="mt-0">Description</p>
        </div>
      </div>
    </div>
  );
};
