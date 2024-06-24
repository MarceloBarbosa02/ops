import React, { ReactNode, useEffect } from "react";
import { BackHandler, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { HeaderBiometric } from "@modules/ValidateIdentity/components/Header";

import * as S from "./styles";

type BiometricLayoutProps = {
  children: ReactNode;
  left?: boolean;
  right?: boolean;
  routeParam?(): void;
};

export const BiometricLayout = ({
  children,
  left,
  right,
  routeParam,
}: BiometricLayoutProps) => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const handleNavigation = () => {
    if (typeof routeParam === "function") {
      routeParam();
    } else {
      goBack();
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleNavigation);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleNavigation);
  }, []);

  return (
    <S.Wrapper>
      <StatusBar
        backgroundColor={theme.theme === "dark" ? "#181818" : "#FDFDFD"}
        barStyle={theme.theme === "dark" ? "light-content" : "dark-content"}
        translucent
      />
      <S.Content>
        <HeaderBiometric
          handleNavigation={handleNavigation}
          left={left}
          right={right}
        />
        <S.Container>{children}</S.Container>
      </S.Content>
    </S.Wrapper>
  );
};
