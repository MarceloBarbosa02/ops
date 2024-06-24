import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Typography } from '@/shared/components';
import { CheckBioIcon } from '@/shared/assets/components';

import * as S from './biometrics.styles';

interface ItemListProps {
  title: string;
  isLoading?: boolean;
}

export const ItemList = ({ title, isLoading = false }: ItemListProps) => {
  const theme = useTheme();
  return (
    <S.WrapperItem>
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.gray[400]} />
      ) : (
        <CheckBioIcon />
      )}
      <Typography title={title} />
    </S.WrapperItem>
  );
};
