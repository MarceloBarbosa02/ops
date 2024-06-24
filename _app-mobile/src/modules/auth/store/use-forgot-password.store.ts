import { create } from 'zustand';
import { TForgotPasswordContext } from './use-create-user.types';

export const useForgotPasswordStore = create<TForgotPasswordContext>((set) => ({
  email: '',
  handleSetEmail: (data) => set({ email: data }),
}));
