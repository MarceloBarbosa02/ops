import React from "react";

import IconRadioBlack from "@shared/assets/icons/svg/icon_radio_black.svg";
import IconRadio from "@shared/assets/icons/svg/icon_radio.svg";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

interface RadioButtonProps extends TouchableOpacityProps {
  title: string;
  active: boolean;
}

export const RadioButton = ({ title, active, ...rest }: RadioButtonProps) => {
  const theme = useTheme();

  return (
    <S.Wrapper active={active} activeOpacity={0.5} {...rest}>
      {active ? (
        <IconRadioBlack fill={theme.colors.color_neutral_100} />
      ) : (
        <IconRadio stroke={theme.colors.color_neutral_60} />
      )}
      <S.Title active={active}>{title}</S.Title>
      <S.WrapperDot>{active && <S.Dot />}</S.WrapperDot>
    </S.Wrapper>
  );
};
