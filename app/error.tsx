"use client"; // Error components must be Client Components

import { Button, Heading } from "../app/components";
import React from "react";

const ErrorNum = () => {
  return (
    <div className="text-8xl font-bold bg-gradient-to-r from-green-800 to-teal-500 bg-clip-text text-transparent">
      500
    </div>
  );
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className=" gap-4 radial-background w-full h-full sm:min-h-[700px] p-28 flex flex-col items-center justify-center">
      <ErrorNum />
      <Heading level={1}>Something went wrong</Heading>
      <div className="flex items-center gap-2">
        <p>
          Er is iets mis gegaan. Refresh de pagina of navigeer naar de
          homepagina.
        </p>
      </div>
      <Button type="button" variant="secondary" label="Keer terug naar home" />
    </div>
  );
}