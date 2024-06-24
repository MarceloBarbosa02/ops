import React from "react";
import { useTheme } from "styled-components/native";

import IconWarning from "@shared/assets/icons/svg/business/warning.svg";

import * as S from "./styles";

interface IAlertCard {
  text: string;
}

export const AlertCard = ({ text }: IAlertCard) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <IconWarning
          width={16}
          height={16}
          stroke={theme.colors.color_yellow_40}
        />
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Container>
  );
};
