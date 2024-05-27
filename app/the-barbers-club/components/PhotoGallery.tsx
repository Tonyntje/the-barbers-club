"use client";

import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import dynamic from "next/dynamic";

export const photos = [
  "/IMG_1572.jpg",
  "/IMG_1638.jpg",
  "/IMG_1639.jpg",
  "/IMG_1641.jpg",
  "/IMG_1129.jpg",
  "/IMG_1642.jpg",
  "/IMG_1753.jpg",
  "/IMG_1755.jpg",
  "/IMG_1851.jpg",
  "/IMG_9909.jpg",
  "/IMG_9910.jpg",
];

const blurLocations = "/blur.jpg";

export const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const photoCollection = photos.map((image, index) => {
    return (
      <div key={image}>
        <div className="cursor-pointer aspect-auto mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            alt="The Barbers Club fade"
            src={`/static${image}`}
            priority
            quality={60}
            placeholder="blur"
            blurDataURL={blurLocations}
            width={500}
            height={500}
            className="hover:scale-[115%] duration-700 transition-all ease-in-out"
            onClick={() => setIsOpen(index)}
          />
        </div>
        <Image
          alt="The Barbers Club fade"
          src={`/static${image}`}
          loading="lazy"
          width={1000}
          height={1000}
          quality={100}
          className={classNames(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 z-30",
            {
              invisible: isOpen !== index,
            }
          )}
        />
      </div>
    );
  });

  return (
    <div className="columns-2 lg:columns-3 gap-6">
      {photoCollection}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={() => setIsOpen(null)}
        className={classNames(
          "left-0 top-0 opacity-80 z-20 fixed block bg-neutral-950 w-screen h-screen transition select-none",
          {
            invisible: isOpen === null,
          }
        )}
      />
    </div>
  );
};
