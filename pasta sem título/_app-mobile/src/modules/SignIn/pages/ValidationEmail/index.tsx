import React from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "@shared/assets/icons/svg/arrowLeft.svg";
import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import Check from "@shared/assets/icons/svg/check_email.svg";
import { useSelectOption } from "@modules/SignIn/hooks/useRegisterUser";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { ButtonDefault } from "@shared/components/Buttons/Default";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

export const ValidationEmailScreen = () => {
  const theme = useTheme();
  const { mutate } = useSelectOption();
  const { navigate } = useNavigation();
  const { currentUser, uuidRegister, handleSelectOptionMain } =
    useCurrentUserStore((store) => {
      return {
        currentUser: store.currentUser,
        uuidRegister: store.uuidRegister,
        handleSelectOptionMain: store.handleSelectOptionMain,
      };
    });

  const handleNavigationBack = () => {
    handleSelectOptionMain("Login");
    navigate("SignIn");
  };

  const handleFetchConfirmEmail = () => {
    const payload = {
      uuid: uuidRegister,
      contactType: "EMAIL" as "EMAIL" | "PHONE" | "WHATSAPP",
      contact: currentUser.new_email,
    };

    mutate(payload, {
      onSuccess: () => {
        navigate("ValidationEmail");
        showToast({
          type: "success",
          message: "E-mail reenviado com sucesso.",
        });
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  return (
    <BodyLayout routeParam={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperHeader>
          <S.BtnHeader activeOpacity={0.7} onPress={handleNavigationBack}>
            <ArrowLeft
              stroke={theme.colors.color_blue_40}
              width={28}
              height={28}
            />
            <S.TitleHeader>Voltar</S.TitleHeader>
          </S.BtnHeader>
        </S.WrapperHeader>
        <S.Container>
          {theme.theme === "dark" ? (
            <S.ImgLogo source={logo} resizeMode="contain" />
          ) : (
            <S.ImgLogo source={logo_dark} resizeMode="contain" />
          )}
          <S.Form>
            <S.WrapperHeaderCard>
              <Check />
              <S.Title>
                Falta só a confirmação para validar sua conta Kirvano
              </S.Title>
            </S.WrapperHeaderCard>
            <S.Description>
              Para confirmar seu cadastro siga as instruções que foram enviadas
              para:{" "}
              <S.DescriptionBold>{currentUser.new_email}</S.DescriptionBold>
            </S.Description>
            <S.ContentCard>
              <S.DescriptionCard>
                <S.TitleCard>DICA: </S.TitleCard>
                caso não encontre na sua caixa de entrada, verifique sua caixa
                de spam ou lixo eletrônico.
              </S.DescriptionCard>
            </S.ContentCard>
            <S.WrapperResend>
              <S.DescriptionNotEmail>
                Não recebeu o e-mail?
              </S.DescriptionNotEmail>
              <ButtonDefault
                onPress={handleFetchConfirmEmail}
                title="Reenviar e-mail"
                variant="info"
              />
            </S.WrapperResend>
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
