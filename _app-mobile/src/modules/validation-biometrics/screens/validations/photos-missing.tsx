import React, { useEffect, useState } from 'react';

import selfieInfo from '@/shared/assets/images/png/biometrics/selfie-info.png';

import { BiometricsScreen, ModalScreen, Typography } from '@/shared/components';

import * as S from './validation.styles';
import { Image } from 'react-native';
import { useValidations } from './use-validations';

const PhotoMissingScreen = () => {
  const { handleNavigationBackModal } = useValidations();

  return (
    <ModalScreen
      title="Biometria"
      handleNavigateRight={handleNavigationBackModal}>
      <Image source={selfieInfo} resizeMode="contain" />
      <Typography title="Algumas fotos estão faltando" />
      <Typography title="Não conseguimos verificar sua identidade. Tente novamente e tire todas as fotos de acordo com as instruções." />
    </ModalScreen>
  );
};

export default PhotoMissingScreen;
