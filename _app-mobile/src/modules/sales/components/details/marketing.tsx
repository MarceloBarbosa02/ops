import React from 'react';

import { LinkIcon } from '@/shared/assets/components/sales';

import { ItemLineDetails } from './item-line';
import { IMarketing } from './details.types';

import * as S from './details.styles';

interface MarketingProps {
  marketing: IMarketing;
}

export const MarketingCards = ({ marketing }: MarketingProps) => {
  return (
    <S.WrapperMarketing>
      <S.WrapperTable>
        <S.WrapperTableHeader>
          <LinkIcon />
          <S.Title>Marketing</S.Title>
        </S.WrapperTableHeader>
        <S.WrapperTableLine>
          <ItemLineDetails
            type="marketing"
            title="UTM Campaign"
            description={marketing?.campaign || '-'}
          />
        </S.WrapperTableLine>
        <S.WrapperTableLine>
          <ItemLineDetails
            type="marketing"
            title="UTM Content"
            description={marketing?.content || '-'}
          />
        </S.WrapperTableLine>
        <S.WrapperTableLine>
          <ItemLineDetails
            type="marketing"
            title="UTM Medium"
            description={marketing?.medium || '-'}
          />
        </S.WrapperTableLine>
        <S.WrapperTableLine>
          <ItemLineDetails
            type="marketing"
            title="UTM Source"
            description={marketing?.source || '-'}
          />
        </S.WrapperTableLine>
        <S.WrapperTableLine>
          <ItemLineDetails
            type="marketing"
            title="UTM SRC"
            description={marketing?.src || '-'}
          />
        </S.WrapperTableLine>
        <S.WrapperTableLine last>
          <ItemLineDetails
            type="marketing"
            title="UTM Term"
            description={marketing?.term || '-'}
          />
        </S.WrapperTableLine>
      </S.WrapperTable>
    </S.WrapperMarketing>
  );
};
