import React, { useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { useForm } from "react-hook-form";

import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { useSelectOption } from "@modules/SignIn/hooks/useRegisterUser";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { InputTextMaster } from "@shared/components/TextFields";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

export const ConfirmEmailScreen = () => {
  const theme = useTheme();
  const emailRef = useRef<TextInput>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const { mutate } = useSelectOption();
  const { navigate } = useNavigation();
  const { currentUser, uuidRegister, updateCurrentUser } = useCurrentUserStore(
    (store) => {
      return {
        currentUser: store.currentUser,
        uuidRegister: store.uuidRegister,
        updateCurrentUser: store.updateCurrentUser,
      };
    }
  );
  const { control, getValues, setValue } = useForm();

  const _email = getValues("new_email");

  const handleChangeOption = () => {
    setValue("new_email", "");
    setIsActive((prev) => !prev);
    setTimeout(() => {
      emailRef.current?.focus();
    }, 100);
  };

  const handleChangeEmail = () => {
    setIsActive((prev) => !prev);
    updateCurrentUser({
      ...currentUser,
      new_email: getValues("new_email"),
    });
    setValue("new_email", "");
  };

  const handleFetchConfirmEmail = () => {
    const payload = {
      uuid: uuidRegister,
      contactType: "EMAIL" as "EMAIL" | "PHONE" | "WHATSAPP",
      contact: _email ? _email : currentUser.new_email,
    };

    mutate(payload, {
      onSuccess: () => {
        navigate("ValidationEmail");
        showToast({
          type: "success",
          message: "Código enviado por e-mail. Verifique sua caixa de entrada.",
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

  const emailCurrent = useMemo(() => {
    return currentUser?.new_email?.length > 24
      ? `${currentUser?.new_email?.substring(0, 24)}...`
      : currentUser?.new_email;
  }, [currentUser]);

  const toggleInput = useMemo(() => {
    return isActive ? (
      <>
        <S.WrapperEmail>
          <S.WrapperInfo>
            <S.WrapperLabel>
              <S.Label>E-mail</S.Label>
            </S.WrapperLabel>
            <S.TitleEmail>{emailCurrent}</S.TitleEmail>
          </S.WrapperInfo>
          <S.Button onPress={handleChangeOption}>
            <S.TitleBtn>Trocar</S.TitleBtn>
          </S.Button>
        </S.WrapperEmail>
      </>
    ) : (
      <>
        <S.WrapperEmailInput>
          <InputTextMaster
            textRef={emailRef}
            control={control}
            name="new_email"
            property="Filled"
            label="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </S.WrapperEmailInput>
      </>
    );
  }, [isActive]);

  const toggleTitle = useMemo(() => {
    return isActive && !_email ? "Confirmar por e-mail" : "Alterar e-mail";
  }, [isActive]);

  const toggleFunc = useMemo(() => {
    return isActive && !_email ? handleFetchConfirmEmail : handleChangeEmail;
  }, [isActive]);

  return (
    <BodyLayout routeParam={() => {}}>
      <S.Wrapper>
        <S.Container>
          {theme.theme === "dark" ? (
            <S.ImgLogo source={logo} resizeMode="contain" />
          ) : (
            <S.ImgLogo source={logo_dark} resizeMode="contain" />
          )}
          <S.Form>
            <S.Title>
              Falta só confirmar seu e-mail para validar sua conta Kirvano
            </S.Title>
            <S.Description>
              Clicando no botão abaixo, você aceita que a Kirvano envie um
              e-mail com instruções para confirmação para:
            </S.Description>
            {toggleInput}
            <S.Content>
              <S.ButtonSend onPress={toggleFunc} activeOpacity={0.7}>
                <S.TitleButton>{toggleTitle}</S.TitleButton>
              </S.ButtonSend>
            </S.Content>
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
