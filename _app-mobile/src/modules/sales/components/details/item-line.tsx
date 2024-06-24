import React, { ReactNode } from 'react';

import { Typography } from '@/shared/components';

import * as S from './details.styles';

interface ItemLineDetailsProps {
  title: string;
  description: ReactNode;
  type?: string;
}

export const ItemLineDetails = ({
  type = '-',
  title,
  description,
}: ItemLineDetailsProps) => {
  return (
    <S.WrapperItemLine type={type}>
      <Typography
        title={title}
        weight="bold"
        style={{ width: type === 'marketing' ? '45%' : 'auto' }}
      />
      {typeof description !== 'string' ? (
        description
      ) : (
        <Typography title={`${description}`} colorValue="neutral-regular" />
      )}
    </S.WrapperItemLine>
  );
};
