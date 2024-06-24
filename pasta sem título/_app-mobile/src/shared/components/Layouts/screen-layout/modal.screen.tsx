import { forwardRef, memo } from "react";
import { ScrollView, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import LayoutBaseScreen from "./base.screen";
import { TBaseScreenLayout } from "./base-types";
import { HeaderLayout } from "./header";

import * as S from "./base-styles";

const ModalScreen = (
  { children, title, handleNavigateRight }: TBaseScreenLayout,
  ref: any
) => {
  const colors = useTheme();

  return (
    <LayoutBaseScreen isModalScreen>
      <HeaderLayout
        title={`${title}`}
        handleNavigateRight={handleNavigateRight}
        endContent={
          <AntDesign
            name="close"
            size={18}
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
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(ModalScreen));
