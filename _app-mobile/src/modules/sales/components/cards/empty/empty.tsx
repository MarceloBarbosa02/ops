import React, { ReactNode } from 'react';

import * as S from './empty.styles';
import { EmptyCardsProps } from './empty.types';
import { Typography } from '@/shared/components';
import { useTheme } from 'styled-components/native';
import { Image } from 'react-native';

import imgEmptyDark from '@/shared/assets/images/png/sales/no-items-cart-dark.png';
import imgEmptyLight from '@/shared/assets/images/png/sales/no-items-cart-light.png';

const EmptyCards = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      {theme.theme === 'dark' ? (
        <Image source={imgEmptyDark} resizeMode="cover" />
      ) : (
        <Image source={imgEmptyLight} resizeMode="cover" />
      )}
      <Typography title="Não há registros..." weight="bold" align="center" />
      <Typography
        title="Quando surgirem vendas, você poderá gerenciá-las por aqui."
        align="center"
        colorValue="neutral-regular"
      />
    </S.Wrapper>
  );
};

export default EmptyCards;
