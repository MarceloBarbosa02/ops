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

import * as S from '../../components/lead.components.styles';
import { LayoutLeadsScreen } from '../../components/lead.layout.screen';
import { ProgressLeadCard } from '../../components/progress-card';
import { usePhysicalOrDigitalProduct } from './use-physical-or-digital-product';

const PhysicalOrDigitalProductScreen = () => {
  const {
    leads,
    stepProgressYes,
    totalStepsYes,
    handleNavigationBack,
    handleChangePhysicalOrDigitalProduct,
    handleNavigationPhysicalOrDigitalProduct,
  } = usePhysicalOrDigitalProduct();
  return (
    <LayoutLeadsScreen
      isRespondLater
      isDisabled={!leads.physicalOrDigitalProduct}
      onNavigationContinue={handleNavigationPhysicalOrDigitalProduct}
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
            progress={stepProgressYes * 3}
            step={'3'}
            stepMax={totalStepsYes.toString()}
          />
          <Separator />
        </S.WrapperInfo>
        <S.WrapperInfo>
          <Typography title="Seu produto é físico ou digital?" weight="bold" />
          <Typography
            title="Você pode selecionar várias opções."
            colorValue="neutral-regular"
          />
        </S.WrapperInfo>
        <S.WrapperOptions>
          <Checkbox
            onPress={() => handleChangePhysicalOrDigitalProduct('digital')}
            label="Digital"
            description="Entregue eletronicamente | Ex: E-books, cursos..."
            isChecked={leads.physicalOrDigitalProduct === 'digital'}
          />
          <Checkbox
            onPress={() => handleChangePhysicalOrDigitalProduct('physical')}
            label="Físico"
            description="Entregue fisicamente | Ex: Roupas, objetos..."
            isChecked={leads.physicalOrDigitalProduct === 'physical'}
          />
        </S.WrapperOptions>
      </View>
    </LayoutLeadsScreen>
  );
};

export default PhysicalOrDigitalProductScreen;
