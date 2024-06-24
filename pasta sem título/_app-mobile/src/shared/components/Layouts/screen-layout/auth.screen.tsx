import React, { forwardRef, memo } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { TBaseScreenLayout } from './base-types';
import LayoutBaseScreen from './base.screen';

import * as S from './base-styles';

const AuthScreen = ({ children }: TBaseScreenLayout, ref: any) => {
  return (
    <LayoutBaseScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <S.WrapperAuth>{children}</S.WrapperAuth>
        </ScrollView>
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(AuthScreen));
