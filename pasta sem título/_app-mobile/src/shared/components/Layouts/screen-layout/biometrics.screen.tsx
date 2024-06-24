import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import LayoutBaseScreen from "./base.screen";
import { TBaseScreenLayout } from "./base-types";
import { forwardRef, memo } from "react";

import { HeaderLayout } from "./header";

const BiometricsScreen = (
  { children, title, isScroll = true, handleNavigateRight }: TBaseScreenLayout,
  ref: any
) => {
  const colors = useTheme();

  return (
    <LayoutBaseScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <HeaderLayout
          title={title}
          handleNavigateRight={handleNavigateRight}
          endContent={
            <Entypo
              name="chevron-small-left"
              size={24}
              color={colors.colors.gray_l900_d50}
            />
          }
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={{ flex: 1 }}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(BiometricsScreen));
