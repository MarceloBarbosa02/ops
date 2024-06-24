import React from 'react';

import { Typography } from '@/shared/components';

import { CheckoutConversionItem } from './checkout-conversion.item';

import * as S from './checkout-conversion.styles';

const CheckoutConversionCard = () => {
  return (
    <S.Wrapper>
      <S.WrapperTop>
        <Typography
          title="Conversão de checkout"
          size="small"
          weight="medium"
        />
      </S.WrapperTop>
      <S.Container>
        <CheckoutConversionItem />
      </S.Container>
    </S.Wrapper>
  );
};

export default CheckoutConversionCard;
