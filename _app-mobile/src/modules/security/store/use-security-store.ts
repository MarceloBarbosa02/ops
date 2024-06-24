import { create } from 'zustand';
import { TSecurityContext } from './use-security-store.types';
import { TContactTypes } from '@/shared/queries/user/sign-in.types';

export const useSecurityStore = create<TSecurityContext>((set) => ({
  contact: 'EMAIL' as TContactTypes,
  uuidCode: '',
  uuidMethod: '',
  handleSetContact: (data) => set({ contact: data }),
  handleSetUUIDCode: (data) => set({ uuidCode: data }),
  handleSetUUIDMethod: (data) => set({ uuidMethod: data }),
}));
