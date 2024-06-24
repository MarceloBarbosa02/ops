import React from 'react';
import { Keyboard } from 'react-native';

import * as S from './form.styles';
import { useSalesStore } from '../../store';
import { Checkbox, CheckboxControl } from '@/shared/components';
import { useFilterSales } from '../../screens/modal/use-filter-sales';
import { useFormContext } from 'react-hook-form';

export const OriginFilterCard = () => {
  const methods = useFormContext();

  const handleSetSelectAllOriginFilter = () => {
    if (
      methods.getValues('autoral') &&
      methods.getValues('affiliation') &&
      methods.getValues('coproduction')
    ) {
      methods.setValue('autoral', false);
      methods.setValue('affiliation', false);
      methods.setValue('coproduction', false);
    } else {
      methods.setValue('autoral', true);
      methods.setValue('affiliation', true);
      methods.setValue('coproduction', true);
    }
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Origem</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleSetSelectAllOriginFilter();
          }}>
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.ContainerItems>
        <S.ItemsOrigin index={0}>
          <CheckboxControl
            control={methods.control}
            name="autoral"
            label="Autoral"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="affiliation"
            label="Afiliação"
          />
        </S.ItemsOrigin>
        <S.ItemsOrigin index={1}>
          <CheckboxControl
            control={methods.control}
            name="coproduction"
            label="Coprodução"
          />
        </S.ItemsOrigin>
      </S.ContainerItems>
    </S.Wrapper>
  );
};
