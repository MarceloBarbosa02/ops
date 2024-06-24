import React from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';

import { Radio, Separator, Typography } from '@/shared/components';

import { LayoutLeadsScreen } from '../../components/lead.layout.screen';
import { ProgressLeadCard } from '../../components/progress-card';
import { useBusinessType } from './use-business-type';

import * as S from '../../components/lead.components.styles';

const BusinessTypeScreen = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeBusinessType,
    handleNavigationBusinessType,
  } = useBusinessType();
  const onLineTrue = leads.onlineSales === 'sim';

  return (
    <LayoutLeadsScreen
      isDisabled={!leads.businessType}
      onNavigationContinue={handleNavigationBusinessType}
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
            progress={onLineTrue ? stepProgressYes * 2 : stepProgressNo}
            step={onLineTrue ? '2' : '1'}
            stepMax={
              onLineTrue ? totalStepsYes.toString() : totalStepsNo.toString()
            }
          />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Qual o seu tipo de negócio?" weight="bold" />
          <Typography
            title="Não se preocupe, você pode mudar de ideia depois. Nós iremos te ajudar com um passo a passo nas primeiras configurações."
            colorValue="neutral-regular"
            size="small"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Radio
            onPress={() => handleChangeBusinessType('physicalPerson')}
            title="Pessoa Física"
            description="Uma negócio individual representado por um CPF"
            select={leads.businessType === 'physicalPerson'}
          />
          <Radio
            onPress={() => handleChangeBusinessType('legalPerson')}
            title="Pessoa Jurídica"
            description="Uma empresa representada por um CNPJ"
            select={leads.businessType === 'legalPerson'}
          />
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default BusinessTypeScreen;
