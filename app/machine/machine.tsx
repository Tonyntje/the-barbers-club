import {create} from "zustand";

export interface BearState {
	isOpen: boolean;
	isDev: boolean;
	setBookingStatus: (state: boolean) => void;
}

export const useStore = create<BearState>()((set) => ({
	isOpen: false,
	isDev: false,
	setBookingStatus: (state: boolean) => set({ isOpen: !state }),
}));
