import { create } from 'zustand';
import { TAuthStoreHookProps, TUserSecurity } from './auth.store.types';
import { router } from 'expo-router';
import { queryClient } from '@/shared/services/queryClient';
import { IUserDataResponse } from '@/shared/queries/user/auth.interfaces';

export const useAuthStore = create<TAuthStoreHookProps>()((set) => ({
  token: '',
  userData: {} as IUserDataResponse,
  handleSetToken: (token: string) => {
    set({ token: token });
  },
  handleSetUserData: (data) => {
    set({ userData: data });
  },
  handleSignOut: () => {
    set({ token: '', userData: {} as IUserDataResponse });
    router.replace('/(auth)/welcome');
    queryClient.clear();
  },
}));

export const handleSignOut = () => useAuthStore.getState().handleSignOut();
