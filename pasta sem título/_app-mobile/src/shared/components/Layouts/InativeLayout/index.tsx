import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import LogoKirvanoLight from "@shared/assets/icons/svg/splash/logo_light.svg";
import LogoKirvanoDark from "@shared/assets/icons/svg/splash/logo_dark.svg";

import * as S from "./styles";

export const InativeLayout = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      {theme.theme === "dark" ? (
        <LogoKirvanoLight width={RFPercentage(11)} height={RFPercentage(11)} />
      ) : (
        <LogoKirvanoDark width={RFPercentage(11)} height={RFPercentage(11)} />
      )}
    </S.Wrapper>
  );
};
