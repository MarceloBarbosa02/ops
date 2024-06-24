import { useFocusEffect } from 'expo-router';
import { forwardRef, memo, useCallback, useEffect, useRef } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
} from 'react-native';

import { TBaseScreenLayout } from './base-types';
import LayoutBaseScreen from './base.screen';
import { HeaderLayout } from './header';
import { useTheme } from 'styled-components/native';

const TabsScreen = (
  {
    children,
    title,
    headerCustom,
    refScroll,
    isFetching = false,
    refresh = false,
    endContent,
    handleRefresh,
  }: TBaseScreenLayout,
  ref: any
) => {
  const theme = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    }, [])
  );

  useEffect(() => {
    if (isFetching) {
      refScroll?.current?.scrollTo({
        x: 0,
        y: 0,
        animated: true,
      });
    }
  }, [isFetching]);

  return (
    <LayoutBaseScreen isShowAlert>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <HeaderLayout title={`${title}`} endContent={endContent} />
        {headerCustom && headerCustom}
        <ScrollView
          ref={refScroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={handleRefresh}
              tintColor={theme.gray[900]}
            />
          }>
          <Animated.View
            style={{
              opacity: fadeAnim,
              flex: 1,
              paddingHorizontal: RFPercentage(2.6),
              paddingBottom: RFPercentage(12),
            }}>
            {children}
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(TabsScreen));
