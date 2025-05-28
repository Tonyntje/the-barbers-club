export interface Service {
  value: string;
  label: string;
  price: number;
  length: number;
}

export interface TimeRange {
  from: number;
  to: number;
}

export interface DaySchedule {
  time: TimeRange | string;
  label: string;
}

export type Times = DaySchedule[];

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  service: string;
}

export interface BookingDetails {
  userInfo: UserInfo;
  date: Date | null;
  time: string | null;
  serviceDetails: Service | null;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DayAvailability {
  date: Date;
  slots: TimeSlot[];
}

export interface BookingProviderProps {
  children: React.ReactNode;
}