import {LogoInstagram} from "@carbon/icons-react";

export const Copyright = () => {
  return <div className='w-full bg-neutral-700 text-white'>
    <div className='text-sm max-w-screen-2xl flex justify-between mx-auto p-6'>
      <p>The Barbers Club 2023 - 2024 © alle rechten voorbehouden</p>
      <p className='flex items-center gap-2'>Volg ons op {<LogoInstagram/>}</p>
    </div>
  </div>
}