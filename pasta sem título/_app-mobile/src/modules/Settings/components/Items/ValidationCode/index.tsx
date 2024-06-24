import React, { useRef, useCallback, useMemo } from "react";
import { ActivityIndicator, TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import ErrorIcon from "@shared/assets/icons/svg/editionProfile/error.svg";
import { PinCode } from "@shared/components/TextFields/PinCode";
import { useUpdateContact } from "@shared/store/useUpdateContact";
import { useSendUpdateCode } from "@modules/Settings/hooks/useProfile";

import { useUpdatePhone } from "../../Cards/UpdatePhoneNumber/hook/useUpdatePhone";
import { useUpdateEmail } from "../../Cards/UpdateEmail/hooks/useUpdateEmail";
import * as S from "./styles";

interface ValidationCodeProps {
  type: "PHONE" | "EMAIL";
}

export function ValidationCode({ type }: ValidationCodeProps) {
  const theme = useTheme();
  const pinRef = useRef<TextInput>(null);
  const { isLoading } = useSendUpdateCode();
  const { seconds, isError, handleSendCode, handleVerifyCode } =
    useUpdatePhone();
  const {
    isErrorEmail,
    secondsEmail,
    handleSendCodeEmail,
    handleVerifyCodeEmail,
  } = useUpdateEmail();
  const { code, phoneNumber, emailCurrent, handleChangeCode } =
    useUpdateContact((store) => {
      return {
        code: store.code,
        phoneNumber: store.phoneNumber,
        emailCurrent: store.emailCurrent,
        handleChangeCode: store.handleChangeCode,
      };
    });

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        pinRef.current?.focus();
      }, 300);
    }, [])
  );

  const verifyCode = () => {
    if (code.length === 4) {
      type === "PHONE" ? handleVerifyCode(code) : handleVerifyCodeEmail(code);
    }
  };

  const secondsStart = useMemo(() => {
    return seconds < 10 ? `0${seconds}` : seconds;
  }, [seconds]);

  const secondsStartEmail = useMemo(() => {
    return secondsEmail < 10 ? `0${secondsEmail}` : secondsEmail;
  }, [secondsEmail]);

  return (
    <S.Container>
      <S.Content>
        <S.WrapperInput>
          {type === "PHONE" ? (
            <S.Label>
              Digite o código que enviamos para o seu número final{" "}
              <S.ChangeContactTexBold>
                {(phoneNumber || "")?.replace(/\D/g, "").slice(-4)}.
              </S.ChangeContactTexBold>
            </S.Label>
          ) : (
            <S.Label>
              Digite o código que enviamos para o seu novo e-mail.
            </S.Label>
          )}
          {isError || isErrorEmail ? (
            <S.WrapperLabel>
              <ErrorIcon width={16} height={16} style={{ marginBottom: 8 }} />
              <S.Label error={isError || isErrorEmail}>
                O código está incorreto
              </S.Label>
            </S.WrapperLabel>
          ) : (
            <S.Label error={isError || isErrorEmail}>
              Código de verificação
            </S.Label>
          )}
          <S.ContentInput>
            <PinCode
              sizePin={RFPercentage(6)}
              textPinRef={pinRef}
              changeCode={handleChangeCode}
              pin={code === ""}
              isError={isError || isErrorEmail}
              keyboardType="number-pad"
            />
          </S.ContentInput>

          {seconds > 1 || secondsEmail > 1 ? (
            <S.WrapperResend>
              <S.Description color={theme.colors.color_neutral_70}>
                Reenviar código em 00:
                {type === "PHONE" ? secondsStart : secondsStartEmail}
              </S.Description>
            </S.WrapperResend>
          ) : (
            <S.WrapperResend>
              <S.ResendCodeButton
                onPress={() =>
                  type === "PHONE"
                    ? handleSendCode(phoneNumber)
                    : handleSendCodeEmail(emailCurrent)
                }
              >
                <S.Description color={theme.colors.color_blue_40}>
                  Reenviar código
                </S.Description>
              </S.ResendCodeButton>
            </S.WrapperResend>
          )}
        </S.WrapperInput>
        <S.ButtonVerifyCode
          onPress={verifyCode}
          disabled={code.length !== 4}
          activeOpacity={0.6}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <S.TextVerifyCode>Verificar código</S.TextVerifyCode>
          )}
        </S.ButtonVerifyCode>
      </S.Content>
    </S.Container>
  );
}
