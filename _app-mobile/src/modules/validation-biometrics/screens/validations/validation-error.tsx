import React, { useEffect, useState } from 'react';

import error from '@/shared/assets/images/png/biometrics/error.png';

import {
  BiometricsScreen,
  Button,
  ModalScreen,
  Typography,
} from '@/shared/components';

import * as S from './validation.styles';
import { Image } from 'react-native';
import { router } from 'expo-router';

const ValidationErrorScreen = () => {
  const handleNavigationBack = () => {
    router.dismissAll();
    router.replace('/(private)/(stack)/biometrics');
  };

  return (
    <ModalScreen title="Biometria" handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperHeader>
          <Image source={error} resizeMode="contain" />
          <Typography title="Erro na validação" />
          <Typography title="Houve uma falha na validação da sua biometria. Tente novamente." />
        </S.WrapperHeader>

        <S.WrapperButtonError>
          <Button
            title="Cancelar"
            sizeWidth={48}
            size="small"
            variant="link"
            colorValue="secondary"
            onPress={() => router.replace('/(private)/(tabs)/')}
          />
          <Button
            title="Tentar novamente"
            sizeWidth={48}
            size="small"
            onPress={handleNavigationBack}
          />
        </S.WrapperButtonError>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ValidationErrorScreen;
