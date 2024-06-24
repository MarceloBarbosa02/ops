import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { ActivityIndicator } from "@shared/components/Buttons/Switch/styles";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { useFetchSettingsEmailValidation } from "@modules/Settings/hooks/useProfile";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useSignInData } from "@shared/hooks/useSignInData";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

interface RouteParams {
  params: {
    token?: string;
  };
}

export const SettingsEmailValidationScreen = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { params } = useRoute() as RouteParams;
  const { mutate } = useFetchSettingsEmailValidation();
  const { loadDataOff } = useSignInData();
  const { refetch: refetchUser } = useFetchMe();

  const handleValidation = () => {
    loadDataOff();
    refetchUser();
    setTimeout(() => {
      navigation.navigate("SettingsRoutes", { screen: "SettingsScreen" });
      setIsLoading(false);
    }, 1000);
  };

  const handleFetchConfirmEmail = (uuid: string) => {
    mutate(uuid, {
      onSuccess: () => {
        handleValidation();
        showToast({
          type: "success",
          message: `E-mail confirmado com sucesso!`,
        });
      },
      onError(error: any) {
        handleValidation();

        if (error?.response?.data?.error === "No User found") {
          showToast({ type: "error", message: "Usuário não encontrado" });
        } else {
          showToast({
            type: "error",
            message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
          });
        }
      },
    });
  };

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
      if (params?.token) {
        handleFetchConfirmEmail(params?.token);
      }
    }
  }, [isFocused, params?.token]);

  return (
    <BodyLayout>
      <S.Wrapper>
        <S.Container>
          {theme.theme === "dark" ? (
            <S.ImgLogo source={logo} resizeMode="contain" />
          ) : (
            <S.ImgLogo source={logo_dark} resizeMode="contain" />
          )}
          {isLoading && (
            <S.Form>
              <ActivityIndicator
                size={"large"}
                color={theme.colors.color_neutral_100}
              />
            </S.Form>
          )}
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
