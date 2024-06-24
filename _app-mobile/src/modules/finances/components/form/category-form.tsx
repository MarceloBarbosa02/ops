import React from 'react';

import * as S from './form.styles';
import { useFinancesStore } from '../../store/use-finances-store';
import { Checkbox, Typography } from '@/shared/components';
import { EnumCategoryExtract } from '@/shared';

export const CategoryFilterCard = () => {
  const {
    params,
    handleSetSelectAllCategoryFilter,
    handleSetChangeCategoryFilter,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetSelectAllCategoryFilter: store.handleSetSelectAllCategoryFilter,
      handleSetChangeCategoryFilter: store.handleSetChangeCategoryFilter,
    };
  });

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <Typography title="Categoria" weight="bold" />
        <S.BtnAll
          activeOpacity={0.7}
          onPress={handleSetSelectAllCategoryFilter}
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
            isChecked={params.adjust as boolean}
            label={EnumCategoryExtract.AD_HOC}
            onPress={() => handleSetChangeCategoryFilter('adjust')}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            isChecked={params.chargeback as boolean}
            label={EnumCategoryExtract.CHARGEBACK}
            onPress={() => handleSetChangeCategoryFilter('chargeback')}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            isChecked={params.comission as boolean}
            label={EnumCategoryExtract.COMISSION}
            onPress={() => handleSetChangeCategoryFilter('comission')}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            isChecked={params.refunded as boolean}
            label={EnumCategoryExtract.REFUND}
            onPress={() => handleSetChangeCategoryFilter('refunded')}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            isChecked={params.withdrawal as boolean}
            label={EnumCategoryExtract.WITHDRAWAL}
            onPress={() => handleSetChangeCategoryFilter('withdrawal')}
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <Checkbox
            isChecked={params.taxas as boolean}
            label={EnumCategoryExtract.TAX}
            onPress={() => handleSetChangeCategoryFilter('taxas')}
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
