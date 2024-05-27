import { LogoInstagram } from "@carbon/icons-react";

export const Copyright = () => {
  return (
    <div className="w-full bg-neutral-900 border-t border-t-stone-700 text-white relative">
      <div className="text-sm max-w-screen-2xl flex justify-between mx-auto p-6">
        <span>The Barbers Club 2023 - 2024 © alle rechten voorbehouden</span>
        <span className="flex items-center gap-2">
          Volg ons op{" "}
          <a href="https://www.instagram.com/thebarbersclub.nl?igsh=MWJzN3pwNjU4cDdiZA==">
            {<LogoInstagram />}
          </a>{" "}
          - Made with ❤️ by Huijs Digital
        </span>
      </div>
    </div>
  );
};
