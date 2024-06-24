import React, { useEffect, useState } from 'react';

import timer from '@/shared/assets/images/png/biometrics/timer.png';

import { BiometricsScreen, ModalScreen, Typography } from '@/shared/components';

import * as S from './validation.styles';
import { ItemList } from '../biometrics/biometrics.item';
import { Image } from 'react-native';

const TookWhileScreen = () => {
  return (
    <ModalScreen title="Biometria">
      <Image source={timer} resizeMode="contain" />
      <Typography title="Isso demorou um pouco" />
      <Typography title="Para sua proteção, as sessões da validação na Kirvano tem um limite de 10 minutos." />
    </ModalScreen>
  );
};

export default TookWhileScreen;
