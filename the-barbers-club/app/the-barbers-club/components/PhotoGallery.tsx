"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import banner from "@/public/photos/the-barbers-club-ingang-hoofdafbeelding.jpg";
import front from "@/public/photos/the-barbers-club-ingang-hoofdafbeelding-header.jpg";
import outside from "@/public/photos/the-barbers-club-interior-design.jpg";
import interior from "@/public/photos/the-barbers-club-interior-from-the-inside.jpg";
import { Heading, Spacer } from "@/app/components";

export const photos = [banner, front, outside, interior];

export const PhotoGallery = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="text-center">
        <Heading level={1}>Neem een blik in The Barbers Club</Heading>
      </div>
      <Spacer height={8} type="line" />
      <PhotoAlbum
        photos={photos}
        layout="rows"
        renderPhoto={NextJsImage}
        targetRowHeight={250}
        onClick={() => setToggler(true)}
      />
    </>
  );
};
