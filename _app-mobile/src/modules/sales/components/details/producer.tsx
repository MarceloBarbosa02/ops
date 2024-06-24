import React from 'react';

import { Typography } from '@/shared/components';

import { ItemLineDetails } from './item-line';
import { IProducer } from './details.types';

import * as S from './details.styles';

interface ProducerProps {
  producer: IProducer;
}

export const ProducerCard = ({ producer }: ProducerProps) => {
  return (
    <S.WrapperCustomer>
      <Typography title="Produtor" weight="bold" size="large" />
      <S.WrapperInfoAffiliate>
        <ItemLineDetails title="Nome" description={producer.name} />
        <ItemLineDetails title="E-mail" description={producer.email} />
      </S.WrapperInfoAffiliate>
    </S.WrapperCustomer>
  );
};
