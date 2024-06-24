import { create } from 'zustand';
import { TCreateUserContext } from './use-create-user.types';
import { ICreateUserDataRequest } from '@/shared/queries/user/sign-in.interfaces';

export const useCreateUserStore = create<TCreateUserContext>((set) => ({
  user: {} as ICreateUserDataRequest,
  uuid: '',
  handleSetNewUser: (data) => set({ user: data }),
  handleSetUUID: (data) => set({ uuid: data }),
}));
