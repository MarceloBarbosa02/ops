import { create } from 'zustand';
import { router } from 'expo-router';
import { OneSignal } from 'react-native-onesignal';
import { MMKV } from 'react-native-mmkv';

import { EnumStorageSignIn } from '@/shared/enum';
import { IUserDataResponse } from '@/shared/queries/user/sign-in.interfaces';

import { TAuthStoreHookProps } from './auth.store.types';

const storage = new MMKV();

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
    OneSignal.logout();
    set({ token: '', userData: {} as IUserDataResponse });
    router.replace('/sign-in');
    storage.delete(EnumStorageSignIn.ACCESS);
    storage.delete(EnumStorageSignIn.REFRESH);
    storage.delete(EnumStorageSignIn.USER_UUID);
  },
}));

export const handleSignOut = () => useAuthStore.getState().handleSignOut();
