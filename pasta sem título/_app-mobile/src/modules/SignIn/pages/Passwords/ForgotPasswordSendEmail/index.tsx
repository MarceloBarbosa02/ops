import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "@shared/assets/icons/svg/arrowLeft.svg";
import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { showToast } from "@shared/store/useToastStore";
import { ValidateEmail } from "@shared/utils/validations";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { InputTextMaster } from "@shared/components/TextFields/InputText";
import { ButtonDefault } from "@shared/components/Buttons/Default";

import * as S from "./styles";

type UserProps = {
  email: string;
};

export const ForgotPasswordSendEmailScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [steps, setSteps] = useState<string>("send");
  const { navigate } = useNavigation();
  const { control, handleSubmit, watch } = useForm<UserProps>();
  const theme = useTheme();
  const _email = watch("email");

  const onSubmitForgotPassword = async (data: UserProps) => {
    showToast({
      type: "success",
      message: "Sucesso no envio do email.",
    });
  };

  const handleNavigationBack = () => {
    navigate("SignIn");
  };

  const isValidEmail = useMemo(() => {
    return ValidateEmail(_email);
  }, [_email]);

  return (
    <BodyLayout>
      <S.Wrapper>
        <S.WrapperHeader>
          <S.BtnHeader activeOpacity={0.7} onPress={handleNavigationBack}>
            <ArrowLeft
              stroke={theme.colors.color_blue_40}
              width={28}
              height={28}
            />
            <S.TitleHeader>Voltar para o login</S.TitleHeader>
          </S.BtnHeader>
        </S.WrapperHeader>
        <S.Container>
          {theme.theme === "dark" ? (
            <S.ImgLogo source={logo} resizeMode="contain" />
          ) : (
            <S.ImgLogo source={logo_dark} resizeMode="contain" />
          )}
          {steps === "send" ? (
            <S.Form>
              <S.Title>Esqueceu sua senha?</S.Title>
              <S.Description>
                Não se preocupe, nós vamos te ajudar. Digite o e-mail cadastrado
                para redefinir a sua senha.
              </S.Description>
              <InputTextMaster
                label="E-mail"
                name="email"
                placeholder="Seu e-mail"
                control={control}
                type="email"
              />
              <ButtonDefault
                title="Recuperar"
                variant="info"
                fontSize="large"
                disabled={!isValidEmail || isLoading}
                isLoading={isLoading}
                onPress={handleSubmit(onSubmitForgotPassword)}
              />
            </S.Form>
          ) : (
            <S.Form>
              <S.TitleRecover>Recuperação de senha</S.TitleRecover>
              <S.DescriptionRecover>
                Enviamos um link de recuperação para o e-mail{" "}
                <S.DescriptionRecoverBold>{_email}</S.DescriptionRecoverBold>
              </S.DescriptionRecover>
              <S.Content>
                <S.DescriptionCard>
                  <S.TitleCard>DICA: </S.TitleCard>
                  caso não encontre na sua caixa de entrada, verifique sua caixa
                  de spam ou lixo eletrônico.
                </S.DescriptionCard>
              </S.Content>
            </S.Form>
          )}
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
