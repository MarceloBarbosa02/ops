import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "@shared/assets/icons/svg/arrowLeft.svg";
import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { ValidatePassword } from "@shared/utils/validations";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { InputTextMaster } from "@shared/components/TextFields/InputText";
import { ButtonDefault } from "@shared/components/Buttons/Default";

import * as S from "./styles";

export const ForgotPasswordScreen = () => {
  const { navigate } = useNavigation();
  const { control, watch, handleSubmit } = useForm();
  const theme = useTheme();

  const _password = watch("password");
  const _password_confirm = watch("password_confirm");
  const _password_actual = watch("password_actual");

  const onSubmitChangePassword = () => {};

  const handleNavigationBack = () => {
    navigate("SignIn");
  };

  const isValidPassword = useMemo(() => {
    if (
      ValidatePassword(_password) &&
      ValidatePassword(_password_actual) &&
      ValidatePassword(_password_confirm)
    )
      return true;
  }, [_password_actual, _password, _password_confirm]);

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
          <S.Form>
            <S.Title>Criar nova senha</S.Title>
            <S.Description>
              Cadastre uma nova senha para acessar sua conta da Kirvano.
            </S.Description>

            <InputTextMaster
              label="Senha atual"
              name="password_actual"
              placeholder="Senha atual"
              control={control}
              secureTextEntry
              type="password"
            />

            <S.Content>
              <S.TitleCard>LEMBRE-SE:</S.TitleCard>
              <S.Info>
                <S.Dot />
                <S.DescriptionCard>Mais de 8 caracteres;</S.DescriptionCard>
              </S.Info>
              <S.Info>
                <S.Dot />
                <S.DescriptionCard>
                  Não utilize nome, sobrenome ou CPF;
                </S.DescriptionCard>
              </S.Info>
              <S.Info>
                <S.Dot />
                <S.DescriptionCard>
                  Não utilize letras ou números sequenciais ou repetidos.
                </S.DescriptionCard>
              </S.Info>
            </S.Content>

            <InputTextMaster
              label="Nova senha"
              name="password"
              placeholder="Nova senha"
              control={control}
              secureTextEntry
              type="password"
            />
            <InputTextMaster
              label="Repita a nova senha"
              name="password_confirm"
              placeholder="Repita a nova senha"
              control={control}
              secureTextEntry
              type="password"
            />
            <ButtonDefault
              title="Criar nova senha"
              variant="info"
              fontSize="large"
              disabled={!isValidPassword}
              onPress={handleSubmit(onSubmitChangePassword)}
            />
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
