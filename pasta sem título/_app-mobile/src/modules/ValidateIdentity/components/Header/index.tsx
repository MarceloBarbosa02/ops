import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "@shared/assets/icons/svg/header/arrow_left.svg";
import { useBiometricNavigation } from "@shared/store/useBiometricNavigation";
import { TypographyTextMaster } from "@shared/components/Typography";

import * as S from "./styles";

interface HeaderProps {
  left?: boolean;
  right?: boolean;
  handleNavigation(): void;
}

export const HeaderBiometric = ({
  left = false,
  right = true,
  handleNavigation,
}: HeaderProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { route } = useBiometricNavigation((store) => {
    return {
      route: store.route,
    };
  });

  const handleNavigationHome = () => {
    navigate(route === "finance" ? "FinancesRoutes" : "SettingsRoutes");
  };

  return (
    <S.Wrapper>
      {left ? (
        <S.BtnBack onPress={handleNavigation}>
          <ArrowLeft width={32} height={32} />
        </S.BtnBack>
      ) : (
        <S.BtnBack />
      )}
      <TypographyTextMaster
        variant="headline"
        typeWeight="bold"
        fontSize={theme.fonts.sizes.largeS}
        color={theme.colors.gray_l900_d50}
      >
        Biometria
      </TypographyTextMaster>
      {right ? (
        <S.BtnBack onPress={handleNavigationHome}>
          <AntDesign
            name="close"
            size={24}
            color={theme.colors.color_neutral_100}
          />
        </S.BtnBack>
      ) : (
        <S.BtnBack />
      )}
    </S.Wrapper>
  );
};
