"use client";

import React from "react";
import { useBooking } from "@/app/contexts/BookingContext";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { services } from "@/app/lib/constants";
import { formatCurrency } from "@/app/components/BookingModal/utils";

const UserInfoStep: React.FC = () => {
  const { bookingDetails, updateUserInfo } = useBooking();
  const { userInfo } = bookingDetails;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Naam</Label>
        <Input
          id="name"
          value={userInfo.name}
          onChange={(e) => updateUserInfo("name", e.target.value)}
          placeholder="Volledige naam"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={userInfo.email}
          onChange={(e) => updateUserInfo("email", e.target.value)}
          placeholder="email@voorbeeld.nl"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefoonnummer</Label>
        <Input
          id="phone"
          value={userInfo.phone}
          onChange={(e) => updateUserInfo("phone", e.target.value)}
          placeholder="06 12345678"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service</Label>
        <Select
          value={userInfo.service}
          onValueChange={(value) => updateUserInfo("service", value)}
        >
          <SelectTrigger id="service">
            <SelectValue placeholder="Kies een service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                <div className="flex w-full justify-between">
                  <span>{service.label}</span>
                  <span className="text-muted-foreground font-medium">
                    {formatCurrency(service.price)}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {userInfo.service && (
        <div className="bg-muted animate-in fade-in-50 mt-4 rounded-md p-4 duration-300">
          <div className="flex justify-between">
            <span className="font-medium">Gekozen service:</span>
            <span>
              {services.find((s) => s.value === userInfo.service)?.label}
            </span>
          </div>
          <div className="mt-1 flex justify-between">
            <span className="font-medium">Prijs:</span>
            <span>
              {formatCurrency(
                services.find((s) => s.value === userInfo.service)?.price || 0,
              )}
            </span>
          </div>
          <div className="mt-1 flex justify-between">
            <span className="font-medium">Duur:</span>
            <span>
              {services.find((s) => s.value === userInfo.service)?.length}{" "}
              minuten
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoStep;
