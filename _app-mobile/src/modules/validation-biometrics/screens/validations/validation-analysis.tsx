import React, { useEffect, useState } from 'react';

import info from '@/shared/assets/images/png/biometrics/info.png';

import {
  BiometricsScreen,
  Button,
  ModalScreen,
  Typography,
} from '@/shared/components';

import * as S from './validation.styles';
import { Image } from 'react-native';
import { router } from 'expo-router';
import { useValidations } from './use-validations';

const ValidationAnalysisScreen = () => {
  const { handleNavigationBackModal } = useValidations();

  return (
    <ModalScreen
      title="Biometria"
      handleNavigateRight={handleNavigationBackModal}>
      <S.Wrapper>
        <S.WrapperHeader>
          <Image source={info} resizeMode="contain" />
          <Typography title="Validação em análise" />
          <Typography
            title="Seus dados de verificação foram enviados com sucesso, em breve você terá um retorno. Estamos trabalhando para que sua validação seja atendida de forma ágil. 🚀"
            align="center"
          />
        </S.WrapperHeader>
        <S.WrapperButton>
          <Button
            title="Voltar"
            colorValue="tertiary"
            size="small"
            textWeightButton="bold"
            onPress={() => router.push('/(private)/(modais)/validation-error')}
          />
        </S.WrapperButton>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ValidationAnalysisScreen;
