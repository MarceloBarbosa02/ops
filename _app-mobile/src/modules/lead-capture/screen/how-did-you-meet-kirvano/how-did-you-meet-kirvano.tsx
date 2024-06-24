import React, { useState } from 'react';

import { IconLogo } from '@/shared';
import {
  AuthScreen,
  Button,
  Checkbox,
  Radio,
  RadioControl,
  Separator,
  Typography,
} from '@/shared/components';
import { View } from 'react-native';
import { LayoutLeadsScreen } from '../../components/lead.layout.screen';

import * as S from '../../components/lead.components.styles';
import { useHowDidYouMeetKirvano } from './use-how-did-you-meet-kirvano';
import { ProgressLeadCard } from '../../components/progress-card';
import { InputCustom } from '../../components/input/input-custom';

const HowDidYouMeetKirvanoScreen = () => {
  const {
    leads,
    totalStepsYes,
    stepProgressYes,
    handleSubmit,
    handleChangeOption,
    handleNavigationBack,
  } = useHowDidYouMeetKirvano();
  return (
    <LayoutLeadsScreen
      isRespondLater
      isConcluded
      isDisabled={!leads.howDidYouMeetKirvano}
      onNavigationContinue={handleSubmit}
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
            progress={stepProgressYes * 5}
            step={'5'}
            stepMax={totalStepsYes.toString()}
          />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Como conheceu a Kirvano?" weight="bold" />
          <Typography
            title="Escolha uma das opções abaixo."
            colorValue="neutral-regular"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Radio
            onPress={() => handleChangeOption('search', '')}
            title="Pesquisar"
            select={leads.howDidYouMeetKirvano?.option === 'search'}
          />
          <Radio
            onPress={() => handleChangeOption('recommendation', '')}
            title="Recomendação de um amigo"
            select={leads.howDidYouMeetKirvano?.option === 'recommendation'}
          />
          <Radio
            onPress={() => handleChangeOption('announcement', '')}
            title="Anúncio"
            select={leads.howDidYouMeetKirvano?.option === 'announcement'}
          />
          <S.WrapperOptionsOther>
            <Radio
              onPress={() => handleChangeOption('influencer', '')}
              title="Influenciador"
              select={leads.howDidYouMeetKirvano?.option === 'influencer'}
            />
            {leads.howDidYouMeetKirvano?.option === 'influencer' && (
              <InputCustom placeholder="@ da pessoa..." />
            )}
          </S.WrapperOptionsOther>
          <S.WrapperOptionsOther>
            <Radio
              onPress={() => handleChangeOption('other', '')}
              title="Outro"
              select={leads.howDidYouMeetKirvano?.option === 'other'}
            />
            {leads.howDidYouMeetKirvano?.option === 'other' && (
              <InputCustom placeholder="Especifique..." />
            )}
          </S.WrapperOptionsOther>
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default HowDidYouMeetKirvanoScreen;
