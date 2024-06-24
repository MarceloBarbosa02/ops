import React, { useEffect, useMemo } from "react";
import { BackHandler } from "react-native";
import { useTheme } from "styled-components";
import { useRoute } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import LogoDark from "@shared/assets/images/svg/dark_kirvano.svg";
import LogoLight from "@shared/assets/images/svg/light_kirvano.svg";
import { SignInCards } from "@modules/SignIn/components/Cards/SignIn";
import { SignUpCards } from "@modules/SignIn/components/Cards/SignUp";
import { DropDDIModal } from "@modules/SignIn/components/Modals/DropDDI";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { useCheckInviteValidity } from "@modules/SignIn/hooks/useRegisterUser";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { showToast } from "@shared/store/useToastStore";
import { TOptionSelectMain } from "@shared/types/entities/User/types";

import * as S from "./styles";

const option_button = ["Login", "Nova conta"];

interface RouteParams {
  params: {
    ref: string;
  };
}

export const SignInScreen = () => {
  const theme = useTheme();
  const { params } = useRoute() as RouteParams;
  const { mutate, isLoading } = useCheckInviteValidity();
  const { optionMain, showModalDDI, handleSetParam, handleSelectOptionMain } =
    useCurrentUserStore((store) => {
      return {
        optionMain: store.optionMain,
        showModalDDI: store.showModalDDI,
        handleSetParam: store.handleSetParam,
        handleSelectOptionMain: store.handleSelectOptionMain,
      };
    });

  const _logo = useMemo(() => {
    if (theme.theme === "dark") {
      return <LogoLight width={200} />;
    } else {
      return <LogoDark width={200} />;
    }
  }, [theme.theme]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  useEffect(() => {
    if (params?.ref) {
      mutate(params?.ref, {
        onSuccess() {
          handleSelectOptionMain("Nova conta");
          handleSetParam(params?.ref);
        },
        onError() {
          showToast({
            type: "error",
            message: "Convite inválido.",
          });
          handleSelectOptionMain("Login");
          handleSetParam("");
        },
      });
    }
  }, [params?.ref]);

  const form_ = useMemo(() => {
    return optionMain === "Login" ? <SignInCards /> : <SignUpCards />;
  }, [optionMain]);

  return (
    <BodyLayout routeParam={() => {}}>
      <S.Wrapper>
        <S.Container>
          <S.WrapperImg>{_logo}</S.WrapperImg>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color={theme.colors.color_neutral_100}
            />
          ) : (
            <S.Form>
              <S.WrapperHeader>
                {option_button.map((item) => (
                  <S.BtnHeader
                    key={item}
                    active={item === optionMain}
                    onPress={() =>
                      handleSelectOptionMain(item as TOptionSelectMain)
                    }
                  >
                    <S.TitleBtn>{item}</S.TitleBtn>
                  </S.BtnHeader>
                ))}
              </S.WrapperHeader>

              {form_}
            </S.Form>
          )}
        </S.Container>
      </S.Wrapper>
      <DropDDIModal isShow={showModalDDI} />
    </BodyLayout>
  );
};
