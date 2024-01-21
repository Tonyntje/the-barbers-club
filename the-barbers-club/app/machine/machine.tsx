import { create } from "zustand";

type CartStore = {
  cart: number;
  add: () => void;
  remove: () => void;
  removeAll: () => void;
};

export interface BearState {
  isOpen: boolean;
  setBookingStatus: (state: boolean) => void;
}

export const useBookingStore = create<BearState>()((set) => ({
  isOpen: false,
  isDev: false,
  setBookingStatus: (state: boolean) => set({ isOpen: !state }),
}));
