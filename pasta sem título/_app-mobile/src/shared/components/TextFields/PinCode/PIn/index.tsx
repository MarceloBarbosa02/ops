import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import { RFPercentage } from "react-native-responsive-fontsize";

type PinProps = {
  title: string;
  isError: boolean;
  isFocused?: boolean;
  sizePin?: number;
} & TouchableOpacityProps;

export const Pin = ({
  title,
  isError,
  sizePin = RFPercentage(7),
  isFocused = false,
  ...rest
}: PinProps) => {
  return (
    <S.Wrapper
      activeOpacity={0.6}
      isError={isError}
      sizePin={sizePin}
      isFocused={isFocused}
      {...rest}
    >
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
