import { forwardRef, memo } from 'react';
import { ScrollView, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LayoutBaseScreen from './base.screen';
import { TBaseScreenLayout } from './base-types';
import { HeaderLayout } from './header';

import { Button } from '../button';

import * as S from './base-styles';

const ModalScreen = (
  {
    children,
    title,
    isFooter = false,
    isScroll = true,
    handleNavigateRight,
  }: TBaseScreenLayout,
  ref: any
) => {
  const colors = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <LayoutBaseScreen isModalScreen>
      <HeaderLayout
        title={`${title}`}
        handleNavigateRight={handleNavigateRight}
        endContent={
          <AntDesign name="close" size={18} color={colors.gray[900]} />
        }
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
      {isFooter && (
        <S.WrapperFooterModal>
          <Button
            title="Ok, entendi"
            size="medium"
            colorValue="success"
            textWeightButton="bold"
            onPress={() => router.back()}
          />
        </S.WrapperFooterModal>
      )}
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(ModalScreen));
