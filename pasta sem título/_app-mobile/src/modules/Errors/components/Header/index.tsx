import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import IconLogo from "@shared/assets/icons/svg/header/logo_light.svg";
import IconLogoDark from "@shared/assets/icons/svg/header/logo_dark.svg";

import * as S from "./styles";

export const HeaderInfo = () => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <S.Wrapper>
      <S.BtnBack />
      {theme.theme === "dark" ? <IconLogoDark /> : <IconLogo />}
      <S.BtnBack onPress={goBack}>
        <Ionicons
          name="close-outline"
          size={28}
          color={theme.colors.color_neutral_100}
        />
      </S.BtnBack>
    </S.Wrapper>
  );
};
