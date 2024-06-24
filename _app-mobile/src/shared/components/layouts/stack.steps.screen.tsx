import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { forwardRef, memo } from 'react';
import { useTheme } from 'styled-components/native';

import LayoutBaseScreen from './base.screen';
import { TBaseScreenLayout } from './base-types';
import { HeaderLayout } from './header';

const StackStepsScreen = (
  {
    title,
    children,
    isScroll = true,
    handleNavigateLeft,
    handleNavigateRight,
  }: TBaseScreenLayout,
  ref: any
) => {
  const colors = useTheme();

  return (
    <LayoutBaseScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <HeaderLayout
          title={`${title}`}
          startContent={
            <Entypo
              name="chevron-small-left"
              size={24}
              color={colors.gray[900]}
            />
          }
          endContent={
            <Ionicons name="close-sharp" size={20} color={colors.gray[900]} />
          }
          handleNavigateLeft={handleNavigateLeft}
          handleNavigateRight={handleNavigateRight}
        />
        {isScroll ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="none"
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <View style={{ flex: 1 }}>{children}</View>
          </ScrollView>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(StackStepsScreen));
