import { create } from "zustand";
import { MMKV } from "react-native-mmkv";
import { OneSignal } from "react-native-onesignal";

import { EnumStorageSignIn } from "../types/enum";

type IAuthStoreHookProps = {
  token: string;
  isSPlashShow: boolean;

  handleSetIsSplashShow(bool: boolean): void;
  handleSetToken(token: string): void;
  handleSignOut(): void;
};

const storage = new MMKV();

export const useAuthStore = create<IAuthStoreHookProps>()((set) => ({
  token: "",
  isSPlashShow: false,
  handleSetIsSplashShow: (bool: boolean) => set({ isSPlashShow: bool }),
  handleSetToken: (token: string) => set({ token: token }),
  handleSignOut: () => {
    OneSignal.logout();
    set({ token: "", isSPlashShow: false });
    storage.delete(EnumStorageSignIn.ACCESS);
    storage.delete(EnumStorageSignIn.REFRESH);
    storage.delete(EnumStorageSignIn.USER_UUID);
  },
}));

export const handleSignOut = () => useAuthStore.getState().handleSignOut();
