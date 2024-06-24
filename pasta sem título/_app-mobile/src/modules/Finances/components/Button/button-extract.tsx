import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { TButtonExtractProps } from "./extract.type";
import * as S from "./styles";

export const ButtonExtract = ({ title, ...rest }: TButtonExtractProps) => {
  const theme = useTheme();
  return (
    <S.Wrapper activeOpacity={0.7} {...rest}>
      <S.Title>{title}</S.Title>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color={theme.colors.gray_l900_d50}
      />
    </S.Wrapper>
  );
};
