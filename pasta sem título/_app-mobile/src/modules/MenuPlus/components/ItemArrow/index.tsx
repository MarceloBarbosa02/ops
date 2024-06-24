import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface ItemArrowProps extends TouchableOpacityProps {
  title: string;
  icon: ReactNode;
  flag?: ReactNode;
  isDisabled?: boolean;
}

export const ItemArrow = ({
  title,
  icon,
  flag,
  isDisabled = false,
  ...rest
}: ItemArrowProps) => {
  return (
    <S.Wrapper {...rest} activeOpacity={0.6} isDisabled={isDisabled}>
      {icon}
      <S.Title out={title === "Sair"}>{title}</S.Title>
    </S.Wrapper>
  );
};
