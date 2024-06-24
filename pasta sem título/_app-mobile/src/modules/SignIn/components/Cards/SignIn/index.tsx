import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { useForm } from "react-hook-form";
import { MMKV } from "react-native-mmkv";
import { Keyboard } from "react-native";

import ArrowRight from "@shared/assets/icons/svg/arrow_right.svg";
import { ButtonMaster } from "@shared/components/Buttons/ButtonMaster";
import { Checkbox } from "@shared/components/Selects";
import { ValidateEmail, ValidatePassword } from "@shared/utils/validations";
import { useFetchLogin } from "@modules/SignIn/hooks/useSignIn";
import { EnumStorageSignIn, IUserData } from "@shared/types";
import { useSignInData } from "@shared/hooks/useSignInData";
import { showToast } from "@shared/store/useToastStore";
import { app } from "@shared/constants/generics";

import { InputSignInMaster } from "../../InputsLocais/InputText";
import * as S from "./styles";

const storage = new MMKV();

export const SignInCards = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { control, setValue, handleSubmit, watch } = useForm<IUserData>();
  const [optionSignIn, setOptionSignIn] = useState<string>("email");
  const [isActive, setIsActive] = useState<boolean>(false);
  const { mutate, isLoading } = useFetchLogin();
  const { handleSignIn } = useSignInData();
  const jsonUser = storage.getString(EnumStorageSignIn.USER_REMEMBER);
  const user = jsonUser ? JSON.parse(jsonUser as string) : null;

  const _email = watch("email");
  const _password = watch("password");

  const handleNavigationPasswordCard = () => {
    if (user) {
      if (user?.email === _email) {
        setOptionSignIn("password");
        return;
      }
      setValue("password", "");
      setOptionSignIn("password");
    } else {
      setValue("password", "");
      setOptionSignIn("password");
    }
  };

  const handleRememberMe = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    const userJson = storage.getString(EnumStorageSignIn.USER_REMEMBER);

    const user = userJson ? JSON.parse(userJson as string) : null;

    if (user) {
      setValue("email", user?.email);
      setValue("password", user?.password);
      handleRememberMe();
    }
  }, []);

  const onSubmitSignIn = (dataUser: IUserData) => {
    Keyboard.dismiss();

    const payload = {
      ...dataUser,
      source: app,
    };

    mutate(payload, {
      onSuccess({ data }) {
        if (data) {
          if (data?.permissions?.length > 2) {
            handleSignIn({
              token: data.token,
              refreshToken: data?.refreshToken,
              uuid: data?.uuid,
            });

            if (isActive) {
              storage.set(
                EnumStorageSignIn.USER_REMEMBER,
                JSON.stringify(dataUser)
              );
            } else {
              storage.delete(EnumStorageSignIn.USER_REMEMBER);
            }
          } else {
            navigate("AccessNotPermitted");
          }
        }
      },
      onError(error: any) {
        if (error?.response?.data?.message === "Internal Server Error") {
          showToast({
            type: "error",
            message: "Ops! Algo deu errado.",
          });
        } else {
          showToast({
            type: "error",
            message: error?.response?.data?.message || "Ops! Algo deu errado.",
          });
        }
      },
    });
  };

  const isValidEmail = useMemo(() => {
    return ValidateEmail(_email);
  }, [_email]);

  const isValidPassword = useMemo(() => {
    return ValidatePassword(_password);
  }, [_password]);

  return (
    <S.Wrapper>
      <S.Title>Acesse sua conta</S.Title>
      {optionSignIn === "email" ? (
        <>
          <InputSignInMaster
            label="E-mail"
            name="email"
            keyboardType="email-address"
            placeholder="Seu e-mail"
            control={control}
            type="email"
          />
          <ButtonMaster
            title="Próximo"
            variant="primary"
            icon={
              <ArrowRight
                width={24}
                height={24}
                stroke={
                  !isValidEmail
                    ? theme.color_buttons.disabled_text
                    : theme.color_buttons.bg_outlined
                }
              />
            }
            positionIcon="right"
            disabled={!isValidEmail}
            onPress={handleNavigationPasswordCard}
          />
        </>
      ) : (
        <>
          <S.WrapperEmail>
            <S.WrapperInfo>
              <S.WrapperLabel>
                <S.Label>E-mail</S.Label>
              </S.WrapperLabel>
              <S.TitleEmail>
                {_email.length > 24 ? `${_email.substring(0, 24)}...` : _email}
              </S.TitleEmail>
            </S.WrapperInfo>
            <S.Button onPress={() => setOptionSignIn("email")}>
              <S.TitleBtn>Trocar</S.TitleBtn>
            </S.Button>
          </S.WrapperEmail>
          <InputSignInMaster
            label="Senha"
            name="password"
            placeholder="Sua senha"
            control={control}
            maxLength={30}
            type="password"
            secureTextEntry
          />
          <ButtonMaster
            title="Acessar minha conta"
            variant="primary"
            disabled={!isValidPassword || isLoading}
            isLoading={isLoading}
            onPress={handleSubmit(onSubmitSignIn)}
          />
          <S.WrapperFooter>
            <Checkbox
              title="Lembrar-me"
              active={isActive}
              onPress={handleRememberMe}
            />
          </S.WrapperFooter>
        </>
      )}
    </S.Wrapper>
  );
};
