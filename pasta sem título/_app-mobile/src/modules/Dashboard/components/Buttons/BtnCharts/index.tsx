import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type BtnChartsProps = {
  title: string;
  active: boolean;
} & TouchableOpacityProps;

export const BtnCharts = ({ title, active, ...rest }: BtnChartsProps) => {
  return (
    <S.Wrapper activeOpacity={0.7} active={active} {...rest}>
      <S.Title active={active}>{title}</S.Title>
    </S.Wrapper>
  );
};
