import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";

import Warning from "../../../assets/icons/svg/warning.svg";
import Warninng from "../../../assets/icons/svg/_warning.svg";
import WarningStatus from "../../../assets/icons/svg/editionProfile/warning_status.svg";
import { AlertContext } from "../../../context/AlertContext";
import { useFetchBalances } from "../../../../modules/Dashboard/hooks/useBalances";

import * as S from "./styles";

export const HeaderAlert = () => {
  const navigation = useNavigation();
  const {
    biometry,
    company,
    profile,
    availableValue,
    isShowCardBiometry,
    handleCloseAlert,
  } = useContext(AlertContext);
  const theme = useTheme();
  const { isLoading } = useFetchBalances();

  const handleNavigationProfile = () => {
    navigation.navigate("SettingsRoutes", { screen: "SettingsScreen" });
  };

  const handleNavigationBusiness = () => {
    navigation.navigate("SettingsRoutes", { screen: "SettingsScreen" });
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <S.Wrapper
      active={
        !profile ||
        (profile && biometry && !availableValue && company) ||
        (availableValue && biometry && isShowCardBiometry)
      }
      color={
        theme.theme === "dark"
          ? theme.colors.orange_l800_d100
          : theme.colors.orange_l100_d800
      }
    >
      {!profile && (
        <>
          {theme.theme === "dark" ? (
            <Warninng fill={theme.colors.color_neutral_100} />
          ) : (
            <Warning fill={theme.colors.color_yellow_40} />
          )}
          <S.ButtonHeader activeOpacity={0.7} onPress={handleNavigationProfile}>
            <S.Title>
              <S.TitleBold>Etapa 1 de 2:</S.TitleBold> para prosseguir, finalize
              seu cadastro.
            </S.Title>
          </S.ButtonHeader>
        </>
      )}
      {profile && biometry && company && (
        <>
          {theme.theme === "dark" ? (
            <Warninng fill={theme.colors.color_neutral_100} />
          ) : (
            <Warning fill={theme.colors.color_yellow_40} />
          )}
          <S.ButtonHeader
            activeOpacity={0.7}
            onPress={handleNavigationBusiness}
          >
            <S.Title>
              <S.TitleBold>Etapa 2 de 2:</S.TitleBold> registre um negócio para
              começar a vender.
            </S.Title>
          </S.ButtonHeader>
        </>
      )}
      {availableValue && biometry && profile && isShowCardBiometry && (
        <>
          <S.ButtonClose activeOpacity={0.7} onPress={handleCloseAlert}>
            <AntDesign name="close" size={18} color="black" />
          </S.ButtonClose>
          <S.WrapperIcon
            color={
              theme.theme === "dark"
                ? theme.colors.orange_l900_d50
                : theme.colors.orange_l50_d900
            }
          >
            <WarningStatus />
          </S.WrapperIcon>
          <S.ButtonHeader
            activeOpacity={0.7}
            onPress={handleNavigationBusiness}
          >
            <S.Title>
              <S.TitleBold>Aviso: </S.TitleBold>
              para solicitar um saque, é necessário verificar sua identidade no
              seu <S.TitleEmphasis>perfil</S.TitleEmphasis>.
            </S.Title>
          </S.ButtonHeader>
        </>
      )}
    </S.Wrapper>
  );
};
