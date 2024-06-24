import { OneSignal } from 'react-native-onesignal';
import { MMKV } from 'react-native-mmkv';

import { EnumStorageSignIn } from '../enum';
import { useAuthStore } from '../store';
import { api } from '../services/api';
import { queryClient } from '../services/queryClient';
import { IStorageProps } from './hooks.types';

const storage = new MMKV();
const appId = process.env.EXPO_PUBLIC_APP_ID_ONE_SIGNAL;

export function useSignInData() {
  const { handleSetToken, handleSetUserData } = useAuthStore((store) => {
    return {
      handleSetToken: store.handleSetToken,
      handleSetUserData: store.handleSetUserData,
    };
  });

  const handleInitialOneSignal = (uuid: string) => {
    const isCheckPermission = storage.getBoolean(
      EnumStorageSignIn.CHECK_PERMISSION
    );

    OneSignal.initialize(appId as string);
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
      handleSignInStorage({ token, refreshToken, uuid });
      return;
    }
  };

  const handleSaveStorage = (data: IStorageProps) => {
    storage.set(EnumStorageSignIn.ACCESS, data?.token);
    storage.set(EnumStorageSignIn.REFRESH, data?.refreshToken);
    storage.set(EnumStorageSignIn.USER_UUID, data?.uuid);
  };

  const handleSignInStorage = (data: IStorageProps) => {
    api.defaults.headers.Authorization = `Bearer ${data?.token}`;

    queryClient.clear();
    // refetchUser();

    handleInitialOneSignal(data.uuid);
    handleSaveStorage(data);
    handleSetToken(data?.token);
    handleSetUserData(data);
  };

  return {
    loadDataOff,
    handleSignInStorage,
  };
}
