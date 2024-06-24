import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { forwardRef, memo } from 'react';

import LayoutBaseScreen from './base.screen';
import { TBaseScreenLayout } from './base-types';
import { HeaderLayout } from './header';

const StackScreen = (
  { children, title, isScroll = true, handleNavigateLeft }: TBaseScreenLayout,
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
          handleNavigateLeft={handleNavigateLeft}
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

export default memo(forwardRef(StackScreen));
