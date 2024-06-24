import React from 'react';

import { Checkbox, Typography } from '@/shared/components';
import { EnumTypeExtract } from '@/shared';

import { useFinancesStore } from '../../store/use-finances-store';

import * as S from './form.styles';

export const TypeTransactionFilterCard = () => {
  const {
    params,
    handleSetSelectAllTypeTransactionFilter,
    handleSetChangeTypeTransactionFilter,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllTypeTransactionFilter:
        store.handleSetSelectAllTypeTransactionFilter,
      handleSetChangeTypeTransactionFilter:
        store.handleSetChangeTypeTransactionFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <Typography title="Tipo de transação" weight="bold" />
        <S.BtnAll
          activeOpacity={0.7}
          onPress={handleSetSelectAllTypeTransactionFilter}
        >
          <Typography
            title="(Selecionar todas)"
            variant="subtitle"
            size="medium"
            colorValue="primary"
          />
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <Checkbox
            isChecked={params.in as boolean}
            label={EnumTypeExtract.IN}
            onPress={() => handleSetChangeTypeTransactionFilter('in')}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            isChecked={params.out as boolean}
            label={EnumTypeExtract.OUT}
            onPress={() => handleSetChangeTypeTransactionFilter('out')}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
