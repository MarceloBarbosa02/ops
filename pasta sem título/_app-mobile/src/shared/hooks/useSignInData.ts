import { OneSignal } from "react-native-onesignal";
import { MMKV } from "react-native-mmkv";

import { queryClient } from "../services/queryClient";
import { api } from "../services/api";
import { useAuthStore } from "../store/useAuthStore";
import { EnumStorageSignIn, IStorageProps } from "../types";

export interface ISignInData {
  loadDataOff(): void;
  handleSignIn(data: IStorageProps): void;
}

const storage = new MMKV();

export function useSignInData(): ISignInData {
  const { handleSetToken } = useAuthStore((store) => {
    return {
      handleSetToken: store.handleSetToken,
    };
  });

  const handleInitialOneSignal = (uuid: string) => {
    const isCheckPermission = storage.getBoolean(
      EnumStorageSignIn.CHECK_PERMISSION
    );

    OneSignal.login(uuid);

    if (!isCheckPermission) {
      OneSignal.Notifications.requestPermission(true).then(() => {
        storage.set(EnumStorageSignIn.CHECK_PERMISSION, true);
      });
    }
  };

  const loadDataOff = async () => {
    const token = storage.getString(EnumStorageSignIn.ACCESS);
    const refreshToken = storage.getString(EnumStorageSignIn.REFRESH);
    const uuid = storage.getString(EnumStorageSignIn.USER_UUID);

    if (token && refreshToken && uuid) {
      handleSignInStorage({
        token,
        refreshToken,
        uuid,
      });
      return;
    }
  };

  const handleSignInStorage = (data: IStorageProps) => {
    queryClient.clear();

    api.defaults.headers.Authorization = `Bearer ${data?.token}`;

    handleSetToken(data?.token);

    storage.set(EnumStorageSignIn.ACCESS, data?.token);
    storage.set(EnumStorageSignIn.REFRESH, data?.refreshToken);
    storage.set(EnumStorageSignIn.USER_UUID, data?.uuid);
  };

  const handleSignIn = (data: IStorageProps) => {
    handleInitialOneSignal(data.uuid);
    handleSignInStorage(data);
  };

  return {
    loadDataOff,
    handleSignIn,
  };
}
