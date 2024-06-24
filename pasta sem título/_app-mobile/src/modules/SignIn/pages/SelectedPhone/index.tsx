import React from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { cleanMask } from "masks-br";

import ArrowLeft from "@shared/assets/icons/svg/arrowLeft.svg";
import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { ButtonCustom } from "@modules/SignIn/components/ButtonCustom";
import { useSelectOption } from "@modules/SignIn/hooks/useRegisterUser";
import { BodyLayout } from "@shared/components/Layouts/BodyLayout";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

export const SelectedPhoneScreen = () => {
  const theme = useTheme();
  const { mutate } = useSelectOption();
  const { navigate } = useNavigation();
  const {
    currentUser,
    uuidRegister,
    selectedDDI,
    handleOptionSelect,
    handleUuidLogsTokenUuid,
  } = useCurrentUserStore((store) => {
    return {
      currentUser: store.currentUser,
      uuidRegister: store.uuidRegister,
      selectedDDI: store.selectedDDI,
      handleOptionSelect: store.handleOptionSelect,
      handleUuidLogsTokenUuid: store.handleUuidLogsTokenUuid,
    };
  });

  const handleNavigationBack = () => {
    navigate("SignIn");
  };

  const handleSelectOption = (option: "EMAIL" | "PHONE" | "WHATSAPP") => {
    const payload = {
      uuid: uuidRegister,
      contactType: option,
      contact: `${selectedDDI.dialCode}${cleanMask(currentUser.phone)}`,
    };

    mutate(payload, {
      onSuccess: ({ data }) => {
        if (data) {
          handleUuidLogsTokenUuid(data?.registerLogsTokenUuid);
          handleOptionSelect(option);
          navigate("VerifyPinCode");
          showToast({
            type: "success",
            message: data?.message || "Código enviado com sucesso.",
          });
        }
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
    <BodyLayout routeParam={() => {}}>
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
            <S.Title>
              Selecione um método de verificação para confirmar seu telefone
            </S.Title>
            <S.Content>
              <ButtonCustom
                type="PHONE"
                onPress={() => handleSelectOption("PHONE")}
              />
            </S.Content>
            <S.Description>
              Vamos enviar um código para o telefone informado, terminado em{" "}
              {currentUser?.phone.split("-")[1]}
            </S.Description>
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
