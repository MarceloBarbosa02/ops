import React, { forwardRef, memo } from 'react';
import { StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TBaseScreenLayout } from './base-types';
import { Alert } from '../alert';
import { Typography } from '../typography';

import { mobile } from '../../../../template.json';

import * as S from './base-styles';

const BaseScreen = (
  { children, isShowAlert = false, isModalScreen = false }: TBaseScreenLayout,
  ref: any
) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <S.Wrapper isModalScreen={isModalScreen}>
      <StatusBar
        backgroundColor={isModalScreen ? 'transparent' : theme.gray[50]}
        barStyle={
          isModalScreen
            ? 'light-content'
            : theme.theme === 'dark'
              ? 'light-content'
              : 'dark-content'
        }
        translucent
      />
      <S.MainBase style={{ marginTop: top }} isModalScreen={isModalScreen}>
        {mobile.isTesting && (
          <S.WrapperHeaderEnv>
            <Typography
              title={`Ambiente: ${mobile.app_name}`}
              align="center"
              weight="bold"
            />
          </S.WrapperHeaderEnv>
        )}
        {isShowAlert && <Alert />}
        <View style={{ flex: 1 }}>{children}</View>
      </S.MainBase>
    </S.Wrapper>
  );
};

export default memo(forwardRef(BaseScreen));
