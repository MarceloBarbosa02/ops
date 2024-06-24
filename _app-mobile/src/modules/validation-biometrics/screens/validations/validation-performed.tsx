import React, { useEffect, useState } from 'react';

import checkbox from '@/shared/assets/images/png/biometrics/checkbox.png';

import {
  BiometricsScreen,
  Button,
  ModalScreen,
  Typography,
} from '@/shared/components';

import * as S from './validation.styles';
import { Image } from 'react-native';
import { router } from 'expo-router';

const ValidationPerformedScreen = () => {
  const handleNavigationBack = () => {
    router.dismissAll();
    router.push('/(private)/(modais)/validation-analysis');
  };

  return (
    <ModalScreen title="Biometria" handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperHeader>
          <Image source={checkbox} resizeMode="contain" />
          <Typography title="Validação realizada" weight="bold" size="large" />
          <Typography
            title="Seus dados de verificação foram enviados e aprovados com sucesso. Agora você já pode começar a faturar com a Kirvano.  🚀"
            align="center"
          />
        </S.WrapperHeader>
        <S.WrapperButton>
          <Button
            title="Voltar"
            colorValue="tertiary"
            size="small"
            textWeightButton="bold"
            onPress={handleNavigationBack}
          />
        </S.WrapperButton>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ValidationPerformedScreen;
