"use client";

import { Box, Button, Column, Section } from "@/app/components";
import { useSearchParams } from "next/navigation";
import { Calendar } from "@carbon/icons-react";
import Image from "next/image";
import BedanktImage from "../../public/IMG_9910.jpg";
import Heading from "@/app/components/content/Heading";
import { useEffect } from "react";

function formatWithOffset(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}+02:00`;
}

interface PostCalendar {
  time: string;
  date: string;
  duration: string;
  service: string;
  name: string;
}

const postCalendar = async ({
  time,
  date,
  duration,
  service,
  name,
}: PostCalendar) => {
  const newDate = Date.parse(`${date}`);

  // Parse time
  const [hours, minutes] = time.split(":").map(Number);

  // Create base date and set time (adjust for UTC+2)
  const startDate = new Date(newDate);
  startDate.setUTCHours(hours - 2, minutes, 0, 0); // Adjust for +02:00

  // Create end date by adding duration
  const endDate = new Date(startDate.getTime() + Number(duration) * 60 * 1000);

  // Helper function to format date with +02:00

  // Format both
  const startFormatted = formatWithOffset(startDate);
  const endFormatted = formatWithOffset(endDate);

  const body = {
    summary: `Afspraak met ${name}`,
    description: `${service} om ${time}`,
    start: {
      dateTime: startFormatted,
      timeZone: "Europe/Amsterdam",
    },
    end: {
      dateTime: endFormatted,
      timeZone: "Europe/Amsterdam",
    },
    status: "confirmed",
  };

  const currentHost = "http://" + window.location.host + "/api/events/";

  try {
    const getDates = await fetch(currentHost);
    const jsonDates = await getDates.json();

    const alreadyBooked = jsonDates.some(
      (date: { start: { dateTime: string } }) => {
        return date.start.dateTime === startFormatted;
      },
    );

    if (alreadyBooked) throw new Error("Already Booked");

    const response = await fetch(currentHost, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error && error.message);
  }
};

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const duration = searchParams.get("length");
  const service = searchParams.get("service");

  const hasUserinfo = name || date || time || duration;

  useEffect(() => {
    if (time && date && duration && service)
      postCalendar({ time, date, duration, service, name });
  }, []);

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
