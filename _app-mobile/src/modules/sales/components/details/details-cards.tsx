import React from 'react';

import { IProductSales } from './details.types';
import { ItemProduct } from './item-product';

import * as S from './details.styles';

interface DetailsProps {
  details: IProductSales[];
}

export const DetailsCards = ({ details }: DetailsProps) => {
  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Detalhes da venda</S.Title>
        <S.Quantity>({details.length})</S.Quantity>
      </S.WrapperHeader>
      {details.map((item) => (
        <ItemProduct key={item.uuid} data={item} />
      ))}
    </S.Wrapper>
  );
};
