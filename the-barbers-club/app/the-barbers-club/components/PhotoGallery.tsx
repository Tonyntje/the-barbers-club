"use client";

import { photos } from "@/app/the-barbers-club/components/photos";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

export const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const photoCollection = photos.map((image, index) => {
    return (
      <div key={index}>
        {/* todo: Need to replace index*/}
        <div
          key={index}
          className="cursor-pointer aspect-auto mb-6 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            alt="The Barbers Club fade"
            src={image}
            placeholder="blur"
            quality={80}
            className="hover:scale-[115%] duration-700 transition-all ease-in-out"
            onClick={() => setIsOpen(index)}
          />
        </div>
        <Image
          alt="The Barbers Club fade"
          src={image}
          placeholder="blur"
          height={800}
          quality={100}
          className={classNames(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 z-30",
            {
              invisible: isOpen !== index,
            },
          )}
        />
      </div>
    );
  });

  return (
    <div className="columns-2 lg:columns-3 gap-6">
      {photoCollection}
      <div
        onClick={() => setIsOpen(null)}
        className={classNames(
          "left-0 top-0 opacity-80 z-20 fixed block bg-neutral-950 w-screen h-screen transition select-none",
          {
            invisible: isOpen === null,
          },
        )}
      />
    </div>
  );
};
