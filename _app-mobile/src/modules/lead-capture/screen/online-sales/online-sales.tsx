import React, { useState } from 'react';
import { View } from 'react-native';

import { Radio, Separator, Typography } from '@/shared/components';

import { LayoutLeadsScreen } from '../../components/lead.layout.screen';
import { ProgressLeadCard } from '../../components/progress-card';

import * as S from '../../components/lead.components.styles';
import { useOnlineSales } from './use-online-sales';

const OnlineSalesScreen = () => {
  const {
    leads,
    handleChangeOnlineSales,
    handleNavigationBack,
    handleNavigationOnlineSales,
  } = useOnlineSales();

  return (
    <LayoutLeadsScreen
      isDisabled={!leads.onlineSales}
      onNavigationContinue={handleNavigationOnlineSales}
      onNavigationBack={handleNavigationBack}>
      <View>
        <S.WrapperInfo>
          <Typography
            title="Queremos te conhecer"
            weight="bold"
            variant="head"
            size="small"
          />
          <ProgressLeadCard progress={0.1} step="0" stepMax="0" />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Você ja vende online?" weight="bold" />
          <Typography
            title="Para que possamos te ajudar a vender mais rápido, precisamos saber um pouco mais sobre sua operação."
            colorValue="neutral-regular"
            size="small"
          />
          <S.WrapperOptions>
            <Radio
              onPress={() => handleChangeOnlineSales('sim')}
              title="Sim"
              select={leads.onlineSales === 'sim'}
            />
            <Radio
              onPress={() => handleChangeOnlineSales('nao')}
              title="Não"
              select={leads.onlineSales === 'nao'}
            />
          </S.WrapperOptions>
        </S.WrapperInfo>
      </View>
    </LayoutLeadsScreen>
  );
};

export default OnlineSalesScreen;
