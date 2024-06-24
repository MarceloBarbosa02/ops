import { router } from 'expo-router';

import { Typography } from '../typography';
import { TBaseScreenLayout } from './base-types';

import * as S from './base-styles';

export const HeaderLayout = ({
  title,
  endContent,
  startContent,
  handleNavigateLeft,
  handleNavigateRight,
}: Omit<TBaseScreenLayout, 'children'>) => {
  const handleNavigationBack = () => {
    if (typeof handleNavigateLeft === 'function') {
      handleNavigateLeft();
    } else {
      () => {};
    }
  };

  const handleNavigationRight = () => {
    if (typeof handleNavigateRight === 'function') {
      handleNavigateRight();
    } else {
      () => {};
    }
  };

  return (
    <S.WrapperHeader>
      <S.HeaderButtonLeft onPress={handleNavigationBack}>
        {startContent}
      </S.HeaderButtonLeft>
      <Typography title={`${title}`} size="large" weight="bold" />
      <S.HeaderButtonRight onPress={handleNavigationRight}>
        {endContent}
      </S.HeaderButtonRight>
    </S.WrapperHeader>
  );
};
