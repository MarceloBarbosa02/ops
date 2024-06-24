import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import Check from "@shared/assets/icons/svg/checkbox_element_tick.svg";
import { TypographyTextMaster } from "@shared/components/Typography";

import * as S from "./styles";

interface ItemListProps {
  title: string;
  isLoading?: boolean;
}

export const ItemList = ({ title, isLoading = false }: ItemListProps) => {
  const theme = useTheme();
  return (
    <S.Wrapper>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={theme.colors.color_neutral_100}
        />
      ) : (
        <Check />
      )}
      <TypographyTextMaster
        variant="body"
        typeWeight="medium"
        fontSize={theme.fonts.sizes.medium}
        color={theme.colors.gray_l900_d50}
      >
        {title}
      </TypographyTextMaster>
    </S.Wrapper>
  );
};
