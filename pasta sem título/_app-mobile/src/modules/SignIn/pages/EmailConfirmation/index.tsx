import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MMKV } from "react-native-mmkv";

import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { useFetchEmailValidation } from "@modules/SignIn/hooks/useRegisterUser";
import { ActivityIndicator } from "@shared/components/Buttons/Switch/styles";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { ButtonDefault } from "@shared/components/Buttons/Default";
import { EnumStorageSignIn } from "@shared/types/enum";
import { useSignInData } from "@shared/hooks/useSignInData";
import { useAuthStore } from "@shared/store/useAuthStore";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

const storage = new MMKV();

interface RouteParams {
  params: {
    token?: string;
  };
}

export const EmailConfirmationScreen = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [respError, setRespError] = useState<string>("");
  const { params } = useRoute() as RouteParams;
  const { navigate } = useNavigation();
  const { mutate } = useFetchEmailValidation();
  const { handleSignIn } = useSignInData();
  const { handleSetIsSplashShow } = useAuthStore((store) => {
    return {
      handleSetIsSplashShow: store.handleSetIsSplashShow,
    };
  });
  const _token = storage.getString(EnumStorageSignIn.ACCESS);

  const handleNavigation = useCallback(() => {
    handleSetIsSplashShow(false);
    navigate("SignIn");
  }, [_token]);

  const handleFetchConfirmEmail = (uuid: string) => {
    mutate(uuid, {
      onSuccess: async ({ data }) => {
        showToast({
          type: "success",
          message: `Bem-vindo(a), ${data?.name}!`,
        });
        await handleSignIn({
          token: data.accessToken,
          refreshToken: data?.refreshToken,
          uuid: data?.uuid,
        });
        setIsLoading(false);
      },
      onError(error: any) {
        setRespError(error?.response?.data?.message);
        setIsLoading(false);
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
          <S.Form>
            {isLoading ? (
              <ActivityIndicator
                size={"large"}
                color={theme.colors.color_neutral_100}
              />
            ) : (
              <>
                {respError && (
                  <>
                    <S.Title>Não foi possível confirmar seu e-mail</S.Title>
                    <S.Description>{respError}</S.Description>
                    <S.Description>Verifique sua caixa de e-mail</S.Description>
                    <S.Content>
                      <ButtonDefault
                        variant="info"
                        title="Entendi"
                        onPress={handleNavigation}
                      />
                    </S.Content>
                  </>
                )}
              </>
            )}
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
