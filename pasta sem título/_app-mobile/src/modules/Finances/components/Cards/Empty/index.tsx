import React from "react";
import { useTheme } from "styled-components/native";

import EmptyDark from "@shared/assets/icons/svg/finance/empty_dark.svg";
import EmptyLight from "@shared/assets/icons/svg/finance/empty_light.svg";

import * as S from "./styles";

export const EmptyCard = () => {
  const theme = useTheme();
  return (
    <S.WrapperInfo>
      {theme.theme === "dark" ? <EmptyDark /> : <EmptyLight />}
      <S.Label>Não há registros...</S.Label>
      <S.Title>Quando surgirem, você poderá gerenciá-los por aqui</S.Title>
    </S.WrapperInfo>
  );
};
