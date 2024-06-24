import React, { useCallback, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTimer } from "react-timer-hook";
import { TextInput, View } from "react-native";
import { cleanMask } from "masks-br";

import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import Alert from "@shared/assets/icons/svg/alert.svg";
import {
  useFetchSendCode,
  useSelectOption,
} from "@modules/SignIn/hooks/useRegisterUser";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { PinCode } from "@shared/components/TextFields/PinCode";
import { ButtonDefault } from "@shared/components/Buttons/Default";
import { showToast } from "@shared/store/useToastStore";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";

import * as S from "./styles";

export const VerifyPinCodeScreen = () => {
  const theme = useTheme();
  const pinRef = useRef<TextInput>(null);
  const [pinCode, setPinCode] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isRestart, setIsRestart] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const { mutate } = useFetchSendCode();
  const { mutate: mutateSelect } = useSelectOption();
  const {
    currentUser,
    optionSelect,
    uuidRegister,
    selectedDDI,
    uuidLogsTokenUuid,
    handleUuidLogsTokenUuid,
    handleOptionSelect,
  } = useCurrentUserStore((store) => {
    return {
      currentUser: store.currentUser,
      uuidRegister: store.uuidRegister,
      optionSelect: store.optionSelect,
      selectedDDI: store.selectedDDI,
      uuidLogsTokenUuid: store.uuidLogsTokenUuid,
      handleUuidLogsTokenUuid: store.handleUuidLogsTokenUuid,
      handleOptionSelect: store.handleOptionSelect,
    };
  });

  console.log({ uuidLogsTokenUuid });

  useFocusEffect(
    useCallback(() => {
      setPinCode("");
      setTimeout(() => {
        pinRef.current?.focus();
      }, 300);
    }, [])
  );

  const getSeconds = () => {
    const time = new Date();

    time.setSeconds(time.getSeconds() + 45);

    return time;
  };

  const { seconds, restart, pause } = useTimer({
    expiryTimestamp: getSeconds(),
    autoStart: true,
  });

  const handleNavigationBack = () => {
    navigate("SelectedPhone");
  };

  const handleResendCode = (option: "EMAIL" | "PHONE" | "WHATSAPP") => {
    const payload = {
      uuid: uuidRegister,
      contactType: option,
      contact: `${selectedDDI.dialCode}${cleanMask(currentUser.phone)}`,
    };

    mutateSelect(payload, {
      onSuccess: (response: any) => {
        setIsRestart(true);
        handleUuidLogsTokenUuid(response?.registerLogsTokenUuid);
        handleOptionSelect(option);
        showToast({
          type: "success",
          message: response?.message,
        });
        setTimeout(() => {
          restart(getSeconds());
          setPinCode("");
          setIsRestart(false);
        }, 800);
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  const handleSendCode = () => {
    const payload = {
      uuid: uuidLogsTokenUuid,
      code: pinCode,
    };

    mutate(payload, {
      onSuccess: (response: any) => {
        pause();
        navigate("ValidationPhone");
        setPinCode("");
        showToast({
          type: "success",
          message: response?.message || "Código validado com sucesso.",
        });
      },
      onError(error: any) {
        setPinCode("");
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
          pinRef.current?.focus();
        }, 4000);
      },
    });
  };

  const secondsStart = useMemo(() => {
    return seconds < 10 ? `0${seconds}` : seconds;
  }, [seconds]);

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
              Digite o código que enviamos por{" "}
              {optionSelect === "PHONE" ? "SMS" : "WhatsApp"}
            </S.Title>
            {isError ? (
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Alert />
                <S.Description color={theme.colors.color_red_40}>
                  O Código está incorreto
                </S.Description>
              </View>
            ) : (
              <S.Description
                color={theme.colors.color_neutral_80}
                style={{ textAlign: "center" }}
              >
                Código enviado para o número com final{" "}
                {currentUser?.phone.split("-")[1] || ""}
              </S.Description>
            )}
            <S.Content>
              <S.ContainerInput>
                <PinCode
                  textPinRef={pinRef}
                  changeCode={setPinCode}
                  pin={pinCode === ""}
                  isError={isError}
                  keyboardType="numeric"
                />
                <S.Content>
                  {isRestart ? (
                    <S.Description color={theme.colors.color_green_40}>
                      Código reenviado
                    </S.Description>
                  ) : (
                    <>
                      {seconds > 1 ? (
                        <S.WrapperResend>
                          <S.Description color={theme.colors.color_neutral_70}>
                            Reenviar código em 00:{secondsStart}
                          </S.Description>
                        </S.WrapperResend>
                      ) : (
                        <S.BtnResend onPress={() => handleResendCode("PHONE")}>
                          <S.Description color={theme.colors.color_blue_40}>
                            Reenviar código
                          </S.Description>
                        </S.BtnResend>
                      )}
                    </>
                  )}
                </S.Content>
              </S.ContainerInput>
            </S.Content>
            <ButtonDefault
              onPress={handleSendCode}
              title="Confirmar código"
              variant="info"
            />
            <S.BtnBack onPress={handleNavigationBack}>
              <S.DescriptionBack color={theme.colors.color_blue_40}>
                Escolher outro método
              </S.DescriptionBack>
            </S.BtnBack>
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
