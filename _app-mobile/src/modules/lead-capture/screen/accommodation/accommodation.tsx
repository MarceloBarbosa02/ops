import React, { useState } from 'react';
import { View } from 'react-native';

import { Checkbox, Separator, Typography } from '@/shared/components';

import { LayoutLeadsScreen } from '../../components/lead.layout.screen';
import { useAccommodation } from './use-accommodation';
import * as S from '../../components/lead.components.styles';
import { ProgressLeadCard } from '../../components/progress-card';

const AccommodationScreen = () => {
  const {
    leads,
    stepProgressYes,
    totalStepsYes,
    handleChangeAccommodation,
    handleNavigationBack,
    handleNavigationAccommodation,
  } = useAccommodation();

  return (
    <LayoutLeadsScreen
      isRespondLater
      onNavigationContinue={handleNavigationAccommodation}
      onNavigationBack={handleNavigationBack}>
      <View>
        <S.WrapperInfo>
          <Typography
            title="Queremos te conhecer"
            weight="bold"
            variant="head"
            size="small"
          />
          <Separator />
          <ProgressLeadCard
            progress={stepProgressYes * 5}
            step={'5'}
            stepMax={totalStepsYes.toString()}
          />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Onde seu produto é hospedado?" weight="bold" />
          <Typography
            title="Você pode selecionar várias opções."
            colorValue="neutral-regular"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Checkbox
            onPress={() => handleChangeAccommodation('hotmart')}
            label="Hotmart"
            isChecked={leads?.accommodation?.hotmart}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('monetize')}
            label="Monetize"
            isChecked={leads?.accommodation?.monetize}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('eduzz')}
            label="Eduzz"
            isChecked={leads?.accommodation?.eduzz}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('kiwify')}
            label="Kiwify"
            isChecked={leads?.accommodation?.kiwify}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('perfectPay')}
            label="Perfect Pay"
            isChecked={leads?.accommodation?.perfectPay}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('heroSpark')}
            label="HeroSpark"
            isChecked={leads?.accommodation?.heroSpark}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('doppus')}
            label="Doppus"
            isChecked={leads?.accommodation?.doppus}
          />
          <Checkbox
            onPress={() => handleChangeAccommodation('other')}
            label="Outro"
            isChecked={leads?.accommodation?.other}
          />
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default AccommodationScreen;
