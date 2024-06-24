import React from 'react';
import { Keyboard } from 'react-native';

import * as S from './form.styles';
import { useSalesStore } from '../../store';
import { Checkbox, CheckboxControl } from '@/shared/components';
import { useFilterSales } from '../../screens/modal/use-filter-sales';
import { useFormContext } from 'react-hook-form';

export const TypeOffersFilterCard = () => {
  const methods = useFormContext();

  const handleSetSelectAllTypeOffersFilter = () => {
    if (methods.getValues('oneTime') && methods.getValues('recurring')) {
      methods.setValue('oneTime', false);
      methods.setValue('recurring', false);
    } else {
      methods.setValue('oneTime', true);
      methods.setValue('recurring', true);
    }
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Tipo de oferta</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllTypeOffersFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <CheckboxControl
            control={methods.control}
            name="oneTime"
            label="Preço único"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="recurring"
            label="Assinatura"
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
