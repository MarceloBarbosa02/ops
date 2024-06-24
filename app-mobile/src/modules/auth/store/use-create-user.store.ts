import { create } from 'zustand';
import { TCreateUserContext } from './use-create-user.types';

export const useCreateUserStore = create<TCreateUserContext>((set) => ({
  user: {},
  handleSetNewUser: (data) => set({ user: data }),
}));
