"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { BookingProvider } from "@/app/contexts/BookingContext";
import BookingForm from "./BookingForm";
import { Scissors } from "lucide-react";

interface BookingModalProps {
  triggerText?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  triggerText = "Maak een afspraak",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <BookingProvider>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 transition-all duration-300"
          >
            <Scissors className="h-4 w-4" />
            {triggerText}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-white sm:max-w-[550px]">
          <BookingForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </BookingProvider>
  );
};

export default BookingModal;
