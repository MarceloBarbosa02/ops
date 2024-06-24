import React from 'react';
import { Keyboard } from 'react-native';

import * as S from './form.styles';
import { CheckboxControl } from '@/shared/components';
import { useFilterSales } from '../../screens/modal/use-filter-sales';
import { useFormContext } from 'react-hook-form';

export const MethodPaymentFilterCard = () => {
  const methods = useFormContext();

  const handleSetSelectAllPaymentMethodFilter = () => {
    if (
      methods.getValues('creditCard') &&
      methods.getValues('bankSlip') &&
      methods.getValues('pix') &&
      methods.getValues('free')
    ) {
      methods.setValue('creditCard', false);
      methods.setValue('bankSlip', false);
      methods.setValue('pix', false);
      methods.setValue('free', false);
    } else {
      methods.setValue('creditCard', true);
      methods.setValue('bankSlip', true);
      methods.setValue('pix', true);
      methods.setValue('free', true);
    }
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Método de pagamento</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllPaymentMethodFilter();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <CheckboxControl
            control={methods.control}
            name="creditCard"
            label="Cartão de crédito"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="bankSlip"
            label="Boleto"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl control={methods.control} name="pix" label="Pix" />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="free"
            label="Gratuito"
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
