import React from 'react';
import { useTheme } from 'styled-components/native';
import { Image } from 'react-native';

import imgEmptyDark from '@/shared/assets/images/png/sales/no-items-cart-dark.png';
import imgEmptyLight from '@/shared/assets/images/png/sales/no-items-cart-light.png';

import { Typography } from '@/shared/components';

import * as S from './styles';

const EmptyBusinessCards = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      {theme.theme === 'dark' ? (
        <Image source={imgEmptyDark} resizeMode="cover" />
      ) : (
        <Image source={imgEmptyLight} resizeMode="cover" />
      )}
      <Typography title="Não há registros..." align="center" weight="bold" />
      <Typography
        title="Quando surgirem, você poderá gerenciá-los por aqui"
        align="center"
        style={{ width: '70%' }}
      />
    </S.Wrapper>
  );
};

export default EmptyBusinessCards;
