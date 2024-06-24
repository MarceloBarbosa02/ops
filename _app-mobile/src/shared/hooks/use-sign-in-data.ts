import { MMKV } from 'react-native-mmkv';
import { OneSignal } from 'react-native-onesignal';
import { EnumStorageSignIn } from '../enum';
import { api, queryClient } from '../services';
import { useAuthStore } from '../store';
import { IStorageProps } from './store.types';
import { useFetchMe } from '../queries';

const storage = new MMKV();
const appId = '2644607d-a870-4bec-8f2f-cb6558048243';

export function useSignInData() {
  const { data: userData, refetch: refetchUser } = useFetchMe();
  const { handleSetToken } = useAuthStore((store) => {
    return {
      handleSetToken: store.handleSetToken,
    };
  });

  const handleInitialOneSignal = (uuid: string) => {
    const isCheckPermission = storage.getBoolean(
      EnumStorageSignIn.CHECK_PERMISSION
    );

    OneSignal.initialize(appId);
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
    refetchUser();

    handleSaveStorage(data);
    handleInitialOneSignal(data.uuid);
    handleSetToken(data?.token);

    // if (!userData?.isFormCompleted) {
    //   handleSetInitialParams();
    //   return router.push('/(private)/(stack)/(lead-capture)/online-sales');
    // }
  };

  return {
    loadDataOff,
    handleSignInStorage,
  };
}
