import React from "react";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface DotsProps {
  type: "today" | "pending" | "balance" | "reserved" | "total";
}

export const Dots = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.Dot style={{ backgroundColor: theme.colors.color_neutral_30 }} />
      <S.Dot style={{ backgroundColor: theme.colors.color_neutral_30 }} />
      <S.Dot style={{ backgroundColor: theme.colors.color_neutral_30 }} />
      <S.Dot style={{ backgroundColor: theme.colors.color_neutral_30 }} />
      <S.Dot style={{ backgroundColor: theme.colors.color_neutral_30 }} />
      <S.Dot style={{ backgroundColor: theme.colors.color_neutral_30 }} />
    </S.Wrapper>
  );
};
