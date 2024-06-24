import React, { useState } from 'react';

import { Radio, Separator, Typography } from '@/shared/components';

import * as S from '../../components/lead.components.styles';
import { View } from 'react-native';
import { LayoutLeadsScreen } from '../../components/lead.layout.screen';
import { ProgressLeadCard } from '../../components/progress-card';
import { useTypeOfProductYouSell } from './use-type-of-product-you-sell';

const TypeOfProductYouSellScreen = () => {
  const {
    leads,
    isNext,
    stepProgressYes,
    totalStepsNo,
    totalStepsYes,
    handleNavigationBack,
    handleChangeTypeOfProductYouSell,
    handleNavigationTypeOfProductYouSell,
  } = useTypeOfProductYouSell();

  return (
    <LayoutLeadsScreen
      isRespondLater
      isDisabled={!isNext}
      onNavigationContinue={handleNavigationTypeOfProductYouSell}
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
            progress={stepProgressYes * 4}
            step={'4'}
            stepMax={totalStepsYes.toString()}
          />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Que tipo de produto você vende?" weight="bold" />
          <Typography
            title="Você pode selecionar várias opções."
            colorValue="neutral-regular"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('extraIncome')}
            title="Renda extra"
            select={leads.typeOfProductYouSell?.extraIncome}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('bets')}
            title="Apostas/jogos de azar"
            select={leads.typeOfProductYouSell?.bets}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('weightLoss')}
            title="Emagrecimento"
            select={leads.typeOfProductYouSell?.weightLoss}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('relationships')}
            title="Relacionamentos"
            select={leads.typeOfProductYouSell?.relationships}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('sexuality')}
            title="Sexualidade"
            select={leads.typeOfProductYouSell?.sexuality}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('business')}
            title="Negócios"
            select={leads.typeOfProductYouSell?.business}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('educational')}
            title="Educacional"
            select={leads.typeOfProductYouSell?.educational}
          />
          <Radio
            onPress={() => handleChangeTypeOfProductYouSell('other')}
            title="Outro"
            select={leads.typeOfProductYouSell?.other}
          />
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default TypeOfProductYouSellScreen;
