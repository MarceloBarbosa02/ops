import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

interface ISwitch extends TouchableOpacityProps {
  active?: boolean;
  loading?: boolean;
  isDefault?: boolean;
}

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export const SwitchButton = ({
  active,
  loading,
  isDefault = false,
  ...rest
}: ISwitch) => {
  const theme = useTheme();

  return (
    <>
      {!loading ? (
        <S.Switch
          active={active}
          isDefault={isDefault}
          activeOpacity={0.5}
          {...rest}
          color={theme.colors.color_blue_40}
        >
          <S.SwitchCircle active={active} activeOpacity={0.5} {...rest} />
        </S.Switch>
      ) : (
        <S.WrapperLoading>
          <ActivityIndicator size="small" color={theme.colors.color_blue_40} />
        </S.WrapperLoading>
      )}
    </>
  );
};

