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
import { ProgressLeadCard } from '../../components/progress-card';
import { useDigitalProductPlans } from './use-digital-product-plans';

const DigitalProductPlansScreen = () => {
  const {
    leads,
    stepProgressYes,
    totalStepsYes,
    stepProgressNo,
    totalStepsNo,
    handleNavigationBack,
    handleChangeDigitalProductPlans,
    handleNavigationDigitalProductPlans,
  } = useDigitalProductPlans();
  const onLineTrue = leads.onlineSales === 'sim';

  return (
    <LayoutLeadsScreen
      isRespondLater
      onNavigationContinue={handleNavigationDigitalProductPlans}
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
            progress={onLineTrue ? stepProgressYes * 4 : stepProgressNo}
            step={onLineTrue ? '4' : '1'}
            stepMax={
              onLineTrue ? totalStepsYes.toString() : totalStepsNo.toString()
            }
          />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography
            title="Você tem planos de vender um produto digital nos próximos 3 meses?"
            weight="bold"
          />
          <Typography
            title="Para que possamos te ajudar a vender mais rápido, precisamos saber um pouco mais sobre sua operação."
            colorValue="neutral-regular"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Radio
            onPress={() => handleChangeDigitalProductPlans('sim')}
            title="Sim"
            select={leads.digitalProductPlans === 'sim'}
          />
          <Radio
            onPress={() => handleChangeDigitalProductPlans('nao')}
            title="Não"
            select={leads.digitalProductPlans === 'nao'}
          />
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default DigitalProductPlansScreen;
