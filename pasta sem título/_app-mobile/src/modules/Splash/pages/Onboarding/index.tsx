import React, { useEffect, useMemo } from "react";
import { BackHandler, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import LogoLight from "@shared/assets/images/svg/light_kirvano.svg";
import LogoDark from "@shared/assets/images/svg/dark_kirvano.svg";
import { Slider } from "@modules/Splash/components/Slider";

import * as S from "./styles";

export const OnboardingScreen = () => {
  const theme = useTheme();

  const _logo = useMemo(() => {
    if (theme.theme === "dark") {
      return <LogoLight width={200} />;
    } else {
      return <LogoDark width={200} />;
    }
  }, [theme.theme]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
    <S.Wrapper>
      <StatusBar
        backgroundColor={theme.theme === "dark" ? "#181818" : "#FDFDFD"}
        barStyle={theme.theme === "dark" ? "light-content" : "dark-content"}
        translucent
      />
      <S.Container>
        {_logo}
        <Slider />
      </S.Container>
    </S.Wrapper>
  );
};
