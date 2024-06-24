import React from 'react';

import { CardsDataProps } from './sliders.types';

import * as S from './sliders.styles';
import { Typography } from '@/shared/components';

export const CardsData = ({ item }: CardsDataProps) => {
  return (
    <S.Wrapper>
      {item.img}
      <S.WrapperInfo>
        <Typography
          title={item?.title}
          variant="head"
          weight="bold"
          align="center"
        />
        <Typography
          title={item?.description}
          variant="head"
          weight="regular"
          size="small"
          align="center"
          colorValue="neutral-regular"
        />
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
