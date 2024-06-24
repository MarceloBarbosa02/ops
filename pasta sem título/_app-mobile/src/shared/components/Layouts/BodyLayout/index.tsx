import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

type BodyLayoutProps = {
  children: ReactNode;
  routeParam?(): void;
};

export const BodyLayout = ({ children, routeParam }: BodyLayoutProps) => {
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

  return (
    <S.Wrapper>
      <StatusBar
        backgroundColor={theme.theme === "dark" ? "#181818" : "#FDFDFD"}
        barStyle={theme.theme === "dark" ? "light-content" : "dark-content"}
        translucent
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <S.Container>{children}</S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </S.Wrapper>
  );
};
