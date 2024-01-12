"use client";

import { Button, Heading } from "@/app/components";

const ErrorNum = () => {
  return (
    <div className="text-8xl font-bold bg-gradient-to-r from-green-800 to-teal-500 bg-clip-text text-transparent">
      404
    </div>
  );
};

export default function NotFound() {
  // const pathname = window.location.pathname;

  return (
    <div className=" gap-4 radial-background w-full h-full sm:min-h-[700px] p-28 flex flex-col items-center justify-center">
      <ErrorNum />
      <Heading level={1}>Page Not Found</Heading>
      <div className="flex items-center gap-2">
        <p>De pagina</p>
        <p className="border py-0.5 px-2 text-neutral-600 border-neutral-300 bg-neutral-100 rounded-lg">
          {/*{pathname}*/}
        </p>
        <p>is niet gevonden</p>
      </div>
      <Button type="button" variant="secondary" label="Keer terug naar home" />
    </div>
  );
}
