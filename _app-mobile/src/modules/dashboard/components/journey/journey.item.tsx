import * as S from './journey.styles';
import { TJourneyItem } from './journey.types';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActionSheet, Typography } from '@/shared/components';
import { useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';

export const JourneyItemIcon = ({
  title,
  image,
  location,
  active = false,
  completed = false,
}: TJourneyItem) => {
  const handleNavigationModal = () => {
    if (location === 'card') {
      router.push('/(private)/(modais)/modal-journey');
    }
  };

  return (
    <S.WrapperCardIcon
      isActive={active}
      activeOpacity={0.9}
      onPress={handleNavigationModal}>
      {image}
      {title && (
        <View>
          <Typography
            title={title.split(':')[0]}
            variant="subtitle"
            colorValue={
              active || completed ? 'neutral-black' : 'neutral-regular'
            }
            weight="bold"
          />
          <S.Description>{title.split(':')[1]}</S.Description>
        </View>
      )}
    </S.WrapperCardIcon>
  );
};
