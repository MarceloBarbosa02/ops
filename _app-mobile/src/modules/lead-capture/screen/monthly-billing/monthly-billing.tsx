import React, { useState } from 'react';

import { IconLogo } from '@/shared';
import {
  AuthScreen,
  Button,
  Radio,
  RadioControl,
  Separator,
  Typography,
} from '@/shared/components';

import * as S from '../../components/lead.components.styles';
import { LayoutLeadsScreen } from '../../components/lead.layout.screen';
import { View } from 'react-native';
import { useMonthlyBilling } from './use-monthly-billing';
import { ProgressLeadCard } from '../../components/progress-card';

const MonthlyBillingScreen = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeMonthlyBilling,
    handleNavigationMonthlyBilling,
  } = useMonthlyBilling();

  return (
    <LayoutLeadsScreen
      isDisabled={!leads.monthlyBilling}
      onNavigationContinue={handleNavigationMonthlyBilling}
      onNavigationBack={handleNavigationBack}>
      <View>
        <S.WrapperInfo>
          <Typography
            title="Queremos te conhecer"
            weight="bold"
            variant="head"
            size="small"
          />
          <ProgressLeadCard
            progress={stepProgressYes}
            step={'1'}
            stepMax={totalStepsYes.toString()}
          />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Qual o seu faturamento mensal?" weight="bold" />
          <Typography
            title="Selecione a faixa do seu faturamento."
            colorValue="neutral-regular"
            size="small"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Radio
            onPress={() => handleChangeMonthlyBilling('upTo10k')}
            title="Até 10k"
            select={leads.monthlyBilling === 'upTo10k'}
          />
          <Radio
            onPress={() => handleChangeMonthlyBilling('between10kAnd100k')}
            title="Entre 10k e 100k"
            select={leads.monthlyBilling === 'between10kAnd100k'}
          />
          <Radio
            onPress={() => handleChangeMonthlyBilling('between100kAnd500k')}
            title="Entre 100k e 500k"
            select={leads.monthlyBilling === 'between100kAnd500k'}
          />
          <Radio
            onPress={() => handleChangeMonthlyBilling('between500kAnd1m')}
            title="Entre 500k e 1m"
            select={leads.monthlyBilling === 'between500kAnd1m'}
          />
          <Radio
            onPress={() => handleChangeMonthlyBilling('above1m')}
            title="Acima de 1m"
            select={leads.monthlyBilling === 'above1m'}
          />
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default MonthlyBillingScreen;
