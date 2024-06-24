import { forwardRef, memo } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { IconLogo } from '@/shared/assets/components';
import { BaseScreen, Button, Typography } from '@/shared/components';

import { TComponentLayout } from './components.types';

import * as S from './lead.components.styles';
import { router } from 'expo-router';

export const LayoutLeadsScreen = (
  {
    children,
    isDisabled = false,
    isRespondLater = false,
    isConcluded = false,
    onNavigationContinue,
    onNavigationBack,
  }: TComponentLayout,
  ref: any
) => {
  return (
    <BaseScreen>
      <S.Wrapper>
        <S.Content>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="none"
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <S.Container>
              <S.WrapperLogo>
                <IconLogo />
              </S.WrapperLogo>
              <View>{children}</View>
            </S.Container>
            {isRespondLater && (
              <S.WrapperLater>
                <Button
                  title="Quero responder depois"
                  underline
                  variant="link"
                />
              </S.WrapperLater>
            )}
          </ScrollView>
        </S.Content>
        <S.WrapperButton>
          <Button
            title="Voltar"
            colorValue="secondary"
            onPress={onNavigationBack}
            sizeWidth={48}
            variant="link"
            size="small"
          />
          <Button
            title={isConcluded ? 'Concluir' : 'Continuar'}
            colorValue={isConcluded ? 'success' : 'primary'}
            onPress={onNavigationContinue}
            sizeWidth={48}
            size="small"
            disabled={isDisabled}
          />
        </S.WrapperButton>
      </S.Wrapper>
    </BaseScreen>
  );
};
