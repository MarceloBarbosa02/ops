import React, { forwardRef, memo } from "react";
import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TBaseScreenLayout } from "./base-types";

import { mobile } from "../../../../../template.json";

import * as S from "./base-styles";
import { Alert } from "@shared/components/alert";

const BaseScreen = (
  { children, isShowAlert = false, isModalScreen = false }: TBaseScreenLayout,
  ref: any
) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <S.Wrapper>
      <StatusBar
        backgroundColor={
          isModalScreen ? "transparent" : theme.colors.gray_l50_d900
        }
        barStyle={
          isModalScreen
            ? "light-content"
            : theme.theme === "dark"
            ? "light-content"
            : "dark-content"
        }
        translucent
      />
      <S.MainBase style={{ marginTop: top }} isModalScreen={isModalScreen}>
        {mobile.isTesting && (
          <S.WrapperHeaderEnv>
            <S.Title>{`Ambiente: ${mobile.app_name}`}</S.Title>
          </S.WrapperHeaderEnv>
        )}
        {isShowAlert && <Alert />}
        <View style={{ flex: 1 }}>{children}</View>
      </S.MainBase>
    </S.Wrapper>
  );
};

export default memo(forwardRef(BaseScreen));
