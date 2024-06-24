import {
  showToast,
  useToastStore,
} from '@/shared/components/toast/use-toast-store';
import { useFetchMe, useRequestNotification } from '@/shared/queries';
import { useIsFocused } from '@react-navigation/native';
import { router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { OneSignal } from 'react-native-onesignal';

export const useNotification = () => {
  const methods = useForm();
  const isFocused = useIsFocused();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(false);
  const { data: userData, refetch: refetchUser } = useFetchMe();
  const { mutate: mutateNotification, isPending: isLoadingNotification } =
    useRequestNotification();
  const { messages, hideToast } = useToastStore((store) => {
    return {
      messages: store.messages,
      hideToast: store.hideToast,
    };
  });

  useEffect(() => {
    setIsLoadingScreen(true);

    const timer = setTimeout(() => {
      if (isFocused) {
        OneSignal.Notifications.permissionNative().then((permission) => {
          if (permission === 2) {
            hideToast(String(messages[0]?.id));
            setIsActive(userData?.allowAppNotification ?? false);
            if (userData?.allowAppNotification) {
              OneSignal.login(userData?.uuid as string);
            }
          } else {
            setIsActive(false);
            showToast({
              type: 'info',
              message:
                'Para receber notificações, verifique as configurações do dispositivo',
              delay: 15000,
              isSettings: true,
            });
          }
          setIsLoadingScreen(false);
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isFocused]);

  const handleSendNotification = useCallback(async (value: boolean) => {
    OneSignal.Notifications.permissionNative().then((permission) => {
      if (permission === 2) {
        mutateNotification(value, {
          onSuccess() {
            OneSignal.login(userData?.uuid as string);
            setIsActive(value);
            refetchUser();
            router.back();
            showToast({
              type: 'success',
              message: 'Notificações atualizadas com sucesso!',
            });
          },
          onError(error: any) {
            showToast({
              type: 'error',
              message:
                error?.response?.data?.message ?? 'Ops! Algo deu errado.',
            });
          },
        });
      } else {
        setIsActive(false);
        showToast({
          type: 'info',
          message:
            'Para receber notificações de vendas em tempo real, verifique sua configuração de permissão',
          delay: 15000,
          isSettings: true,
        });
      }
    });
  }, []);

  const handleNavigation = () => {
    hideToast(String(messages[0]?.id));
    router.navigate('/(private)/(tabs)/plus');
  };

  return {
    methods,
    isActive,
    isLoadingScreen,
    isLoadingNotification,
    handleNavigation,
    handleSendNotification,
  };
};
