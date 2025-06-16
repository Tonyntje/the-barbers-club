"use client";

import { Box, Button, Column, Section } from "@/app/components";
import { useSearchParams } from "next/navigation";
import { Calendar } from "@carbon/icons-react";
import Image from "next/image";
import BedanktImage from "../../public/IMG_9910.jpg";
import Heading from "@/app/components/content/Heading";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  const hasUserinfo = name && date && time;

  if (!hasUserinfo) return null;

  return (
    <Section spacing={16} className="max-w-screen-xl">
      <Column cols={2} center>
        <Image
          alt="The Barbers Club fade"
          src={BedanktImage}
          placeholder="blur"
          quality={80}
          className="h-[200px] w-full rounded-t-2xl object-cover transition-all duration-700 ease-in-out sm:h-full sm:rounded-lg"
        />

        <div className="col-span-1 sm:-ml-16">
          <Box className="border-0-t -mt-12 min-h-fit border-0 bg-white shadow-2xl sm:relative sm:z-20 sm:my-4 sm:mt-0 sm:rounded-xl sm:p-12">
            <Heading level={3}>
              ✂️ Bedankt voor je reservering, {name}!{" "}
            </Heading>
            <p>Je afspraak bij The Barbers Club is succesvol ingepland.</p>
            <p>
              📅 Datum: {date} <br />⏰ Tijd: {time} <br />
              📍 Locatie:{" "}
              <a href="https://maps.app.goo.gl/KWxpXH4QcPzE2apq6">
                The Barbers Club
              </a>
            </p>
            <p>
              <Button
                type="button"
                onClick={() => {
                  console.log("test");
                }}
                variant="primary"
                label="Klik hier om dit toe te voegen aan je agena"
                icon={<Calendar />}
              />
            </p>
            <p>
              <b>Nog vragen?</b> Je kunt altijd contact met ons opnemen via{" "}
              <br />
              <a href="mailto:info@thebarbersclub.nl">
                info@thebarbersclub.nl
              </a>{" "}
              of bellen naar <a href="tel:+31 6 39 13 2769">+31 6 39 13 2769</a>
              .
            </p>
            <p>
              Tot snel in de stoel! <br /> Team The Barbers Club
            </p>
          </Box>
        </div>
      </Column>
    </Section>
  );
}
