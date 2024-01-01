"use client";

import { Heading, SelectInput, TextInput } from "@/app/components";
import { Subtract } from "@carbon/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const services = [
  { value: "wash", label: "Wash Hair", details: "Details for washing" },
  { value: "cut", label: "Cut Hair", details: "Details for cutting" },
  { value: "shave", label: "Shave Beard", details: "Details for shaving" },
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
];

export const BookingForm = () => {
  const { control, handleSubmit } = useForm();
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="fixed rounded-lg shadow-2xl right-12 p-12 bottom-6 bg-neutral-100 min-h-[400px] min-w-[200px]">
      <div className="bg-neutral-400 rounded-lg inline-block">
        <Subtract />
      </div>
      <Heading level={3}>Afspraak maken ✂️</Heading>
      <TextInput label="Uw Naam" name="name" control={control}></TextInput>
      <SelectInput
        label="kies een dienst"
        name="service"
        control={control}
        options={services}
      ></SelectInput>
      {/*const handleServiceChange = (e) => {*/}
      {/*  setSelectedService(e.target.value);*/}
      {/*};*/}
      {/*const handleDateChange = (date) => {*/}
      {/*  setSelectedDate(date);*/}
      {/*};*/}
      {/*const handleTimeChange = (e) => {*/}
      {/*  setSelectedTime(e.target.value);*/}
      {/*};*/}
      <div>
        {/*<ServiceSelection*/}
        {/*  selectedService={selectedService}*/}
        {/*  onServiceChange={handleServiceChange}*/}
        {/*  services={services}*/}
        {/*/>*/}
        {/* Date picker and time selection components go here */}
      </div>
    </div>
  );
};
