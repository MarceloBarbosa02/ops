import { create } from 'zustand';
import { TContactContextProps } from './profile.types';

export const useContactStore = create<TContactContextProps>((set) => ({
  type: 'PHONE',
  email: '',
  phone: '',
  uuid: '',
  setToggleType: (data) =>
    set({
      type: data,
    }),
  setToggleEmail: (email) => set({ email: email }),
  setTogglePhone: (phone) => set({ phone: phone }),
  setToggleUUID: (uuid) => set({ uuid: uuid }),
}));
