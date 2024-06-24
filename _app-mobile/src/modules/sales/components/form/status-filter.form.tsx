import React from 'react';
import { Keyboard } from 'react-native';

import * as S from './form.styles';
import { useSalesStore } from '../../store';
import { Checkbox, CheckboxControl } from '@/shared/components';
import { StatusFilterProps } from '../../store/sales.store.types';
import { useFilterSales } from '../../screens/modal/use-filter-sales';
import { useFormContext } from 'react-hook-form';

export const StatusFilterCard = () => {
  const methods = useFormContext();

  const handleSetSelectAllStatusFilter = () => {
    if (
      methods.getValues('approved') &&
      methods.getValues('pending') &&
      methods.getValues('refunded') &&
      methods.getValues('refused') &&
      methods.getValues('chargeback') &&
      methods.getValues('expired')
    ) {
      methods.setValue('approved', false);
      methods.setValue('pending', false);
      methods.setValue('refunded', false);
      methods.setValue('refused', false);
      methods.setValue('chargeback', false);
      methods.setValue('expired', false);
    } else {
      methods.setValue('approved', true);
      methods.setValue('pending', true);
      methods.setValue('refunded', true);
      methods.setValue('refused', true);
      methods.setValue('chargeback', true);
      methods.setValue('expired', true);
    }
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Status</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllStatusFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <CheckboxControl
            control={methods.control}
            name="approved"
            label="Aprovado"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="pending"
            label="Pendente"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="expired"
            label="Cancelado"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="refused"
            label="Recusado"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="refunded"
            label="Estornado"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="chargeback"
            label="Chargeback"
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
