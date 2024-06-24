import React from "react";
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

type SelectButtonProps = {
  title: string;
  active: boolean;
  widthSize?: number;
  fontSize?: "small" | "medium" | "large";
} & TouchableOpacityProps;

export const Checkbox = ({
  title,
  active,
  fontSize = "small",
  widthSize = 100,
  ...rest
}: SelectButtonProps) => {
  const theme = useTheme();

  return (
    <S.Wrapper activeOpacity={0.7} widthSize={widthSize} {...rest}>
      <S.SelectBtn active={active} testID="check-select">
        {active && (
          <Feather
            name="check"
            size={14}
            color={theme.colors.color_neutral_0}
          />
        )}
      </S.SelectBtn>
      <S.Title fontSize={fontSize}>{title}</S.Title>
    </S.Wrapper>
  );
};
