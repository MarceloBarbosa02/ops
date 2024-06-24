import React from 'react';

import { Typography } from '@/shared/components';

import { IAffiliate } from './details.types';
import { ItemLineDetails } from './item-line';

import * as S from './details.styles';

interface AffiliateProps {
  affiliate: IAffiliate;
}

export const AffiliateCard = ({ affiliate }: AffiliateProps) => {
  return (
    <S.WrapperCustomer>
      <Typography title="Afiliado" weight="bold" size="large" />
      <S.WrapperInfoAffiliate>
        <ItemLineDetails title="Nome" description={affiliate?.name} />
        <ItemLineDetails title="E-mail" description={affiliate?.email} />
      </S.WrapperInfoAffiliate>
    </S.WrapperCustomer>
  );
};
