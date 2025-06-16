import type { ReactNode } from "react";
import { Suspense } from "react";
import "./globals.css";
import Image from "next/image";
import Logo from "../public/TheBarbersClubLogo.svg";
import phoneIcon from "../public/phone--incoming.svg";
import { BookingForm, Footer, Header } from "@/app/components";
import { FacebookPixelEvents } from "@/app/components/pixel-events";
import { Warning } from "@carbon/icons-react";
import { google } from "googleapis";

const RootLayout = ({ children }: { readonly children: ReactNode }) => {
  const isDev = false;
  const siteNotice = false;

  const SCOPES = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
  ];

  const calendarId =
    "053ef03502473fc6671b7af3e19476c7a4dd39efc33aaef9bd9139294b5fef70@group.calendar.google.com";

  const initGoogleCalendar = async () => {
    try {
      const credentials = {
        client_id: process.env.CLIENT_ID,
        client_email: process.env.CLIENT_EMAIL,
        project_id: process.env.PROJECT_ID,
        private_key: process.env.PRIVATE_KEY,
      };
      const auth = new google.auth.GoogleAuth({
        credentials: credentials,
        scopes: SCOPES,
      });

      const calendar = google.calendar({ version: "v3", auth });

      console.log("Google Calendar API initialized:");
      return calendar;
    } catch (error) {
      console.error("Error initializing Google Calendar API:", error);
    }
  };

  const getAvailableSlots = async (date: string) => {
    const calendar = await initGoogleCalendar();

    if (!calendar) return;

    const response = await calendar.events.list({
      calendarId: calendarId,
      eventTypes: ["default"],
      singleEvents: true,
      orderBy: "startTime",
    });

    if (!response) return;

    const events = response?.data?.items || [];

    if (!events) return;
    console.log(events);

    // const dateSlots = await buildDateSlots(dayDate);

    // const availableSlots = dateSlots.filter((slot) => {
    //   const slotEnd = add(slot, { minutes: 20 });
    //
    //   // Check if this slot conflicts with any existing event
    //   const hasConflict = events.some((event: googleCalendar.Schema$Event) => {
    //     const eventStart = new Date(event.start?.dateTime || "");
    //     const eventEnd = new Date(event.end?.dateTime || "");
    //     return isBefore(slot, eventEnd) && isAfter(slotEnd, eventStart);
    //   });
    //
    //   return !hasConflict;
    // });

    // Convert available Date objects to string time slots
    // return availableSlots.map((slot) => {
    //   return format(toZonedTime(slot, "Europe/Paris"), "HH:mm");
    // });

    return;
  };

  console.dir(getAvailableSlots());

  return (
    <html lang="en">
      <head>
        <title>The Barbers Club</title>
        <meta
          name="facebook-domain-verification"
          content="h5rdh5rmyb7zbwfparykyqjgveptvz"
        />
      </head>
      <body>
        {siteNotice && (
          <div className="flex w-full items-center justify-center gap-4 bg-amber-400 p-6 text-center">
            <Warning size={30} />
            <p>
              Beste bezoekers. Helaas zijn we in het weekend van{" "}
              <b>16 & 17 november</b> gesloten.
            </p>
          </div>
        )}

        {!isDev ? (
          <>
            <Header />
            <Suspense fallback={null}>
              <main>{children}</main>
            </Suspense>
            <Footer />
            <Suspense fallback={null}>
              <FacebookPixelEvents />
              <BookingForm />
            </Suspense>
          </>
        ) : (
          <main className="flex min-h-screen min-w-screen items-center justify-center bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgb(63_201_99_/_40%)_0%,rgb(79_139_27)_100%)]">
            <div className="border-primary-200 max-w-[600px] p-6 text-center text-white sm:rounded-2xl sm:border sm:p-12 sm:shadow-2xl">
              <Image className="mx-auto mb-10" src={Logo} alt={"logo"} />
              <h1 className="drop-shadow-xl">
                Website komt binnenkort online!
              </h1>
              <h4 className="text-[20px] font-light sm:text-xl">
                We zijn nog druk aan de slag met de website. <br /> Nog een
                klein beetje geduld alstublieft!
              </h4>

              <div className="mt-10 flex w-full flex-col rounded-2xl bg-white p-6 text-center text-neutral-800">
                <b>Wilt u alvast een afspraak maken?</b>
                <span>Bel of whatsApp naar</span>
                <a
                  className="bg-primary-700 hover:bg-primary-600 mt-3 flex items-center justify-center gap-4 rounded-xl px-6 py-4 text-xl text-white transition-colors"
                  href="tel:+31639132769"
                >
                  <Image src={phoneIcon} alt={"Bel ons"} />
                  +31 6 391 327 69
                </a>
              </div>
            </div>
          </main>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
