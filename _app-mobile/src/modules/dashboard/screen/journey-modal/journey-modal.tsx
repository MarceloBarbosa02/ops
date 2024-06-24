import React from 'react';
import { ScrollView } from 'react-native';
import { Button, ModalScreen } from '@/shared/components';

import * as S from './journey-modal.styles';
import { JourneyCards } from '../../components';
import { router } from 'expo-router';

const JourneyAchievementsModalScreen = () => {
  return (
    <ModalScreen
      title="Jornada de conquistas"
      isFooter
      handleNavigateRight={() => router.back()}>
      <S.Container>
        <JourneyCards location="modal" />
      </S.Container>
    </ModalScreen>
  );
};

export default JourneyAchievementsModalScreen;
