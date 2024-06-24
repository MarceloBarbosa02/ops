import React, { useCallback, useContext, useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { OneSignal } from "react-native-onesignal";

import { ScreenLayout, SwitchButton } from "@shared/components";
import { showToast, useToastStore } from "@shared/store";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useSendNotification } from "@modules/Notification/hook/useNotification";
import { StateContext } from "@shared/context/StateContext";

import * as S from "./styles";

export const NotificationGeneralScreen = () => {
  const isFocused = useIsFocused();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(false);
  const { appStateVisible } = useContext(StateContext);
  const { goBack } = useNavigation();
  const { mutate: mutateNotification, isLoading: isLoadingNotification } =
    useSendNotification();
  const { data: userData, refetch: refetchUser } = useFetchMe();
  const { messages, hideToast } = useToastStore((store) => {
    return {
      messages: store.messages,
      hideToast: store.hideToast,
    };
  });

  useEffect(() => {
    setIsLoadingScreen(true);

    const timer = setTimeout(() => {
      if (isFocused && appStateVisible === "active") {
        OneSignal.Notifications.permissionNative().then((permission) => {
          if (permission === 2) {
            hideToast(messages[0]?.id);
            setIsActive(userData?.allowAppNotification ?? false);
            if (userData?.allowAppNotification) {
              OneSignal.login(userData?.uuid as string);
            }
          } else {
            setIsActive(false);
            showToast({
              type: "info",
              message:
                "Para receber notificações, verifique as configurações do dispositivo",
              delay: 15000,
              isSettings: true,
            });
          }
          setIsLoadingScreen(false);
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isFocused, appStateVisible]);

  const sendNotification = useCallback(async (value: boolean) => {
    OneSignal.Notifications.permissionNative().then((permission) => {
      if (permission === 2) {
        mutateNotification(value, {
          onSuccess() {
            OneSignal.login(userData?.uuid as string);
            setIsActive(value);
            refetchUser();
            goBack();
            showToast({
              type: "success",
              message: "Notificações atualizadas com sucesso!",
            });
          },
          onError(error: any) {
            showToast({
              type: "error",
              message:
                error?.response?.data?.message ?? "Ops! Algo deu errado.",
            });
          },
        });
      } else {
        setIsActive(false);
        showToast({
          type: "info",
          message:
            "Para receber notificações de vendas em tempo real, verifique sua configuração de permissão",
          delay: 15000,
          isSettings: true,
        });
      }
    });
  }, []);

  const handleNavigation = () => {
    hideToast(messages[0]?.id);
    goBack();
  };

  return (
    <ScreenLayout title="Notificações" routeParam={handleNavigation} left>
      <S.Wrapper>
        <S.WrapperItem>
          <S.Title>Geral</S.Title>
          <SwitchButton
            active={isActive}
            loading={isLoadingNotification || isLoadingScreen}
            onPress={() => sendNotification(!isActive)}
          />
        </S.WrapperItem>
      </S.Wrapper>
    </ScreenLayout>
  );
};
