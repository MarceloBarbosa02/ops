import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Typography } from '../typography';

import * as S from './pin-code.styles';

type PinProps = {
  title: string;
  isError: boolean;
  isFocused?: boolean;
  sizePin?: number;
} & TouchableOpacityProps;

export const Pin = ({
  title,
  isError = false,
  sizePin = RFPercentage(7),
  isFocused = false,
  ...rest
}: PinProps) => {
  return (
    <S.WrapperPin
      activeOpacity={0.6}
      isError={isError}
      sizePin={sizePin}
      isFocused={isFocused}
      {...rest}>
      <Typography title={title} weight="bold" variant="head" />
    </S.WrapperPin>
  );
};
