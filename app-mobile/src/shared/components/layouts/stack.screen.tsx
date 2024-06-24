import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

import { TabsLayoutProps } from './base.screen.types';
import { colors } from '@/shared/theme';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../button';
import { HeaderStack } from '../headers';
import { style } from './layout.styles';

const LayoutStackScreen = ({
  children,
  title,
  isShowFooterBottom = true,
  titleFooterRight = 'Confirmar',
  colorButtonFooterRight = 'primary',
  startContent,
  endContent,
}: TabsLayoutProps) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View className={'flex-1 bg-gray-950'}>
      <StatusBar style={'light'} translucent />
      <View
        style={{
          flex: 1,
          marginTop: top,
          backgroundColor: colors.gray[50],
        }}>
        <KeyboardAvoidingView
          className="flex-1"
          enabled
          keyboardVerticalOffset={24}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <HeaderStack title={`${title}`} />

          <View className="flex-1 justify-between bg-gray-300">
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="none"
              contentContainerStyle={{
                flexGrow: 1,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                {children}
              </View>
            </ScrollView>

            {isShowFooterBottom && (
              <View
                style={[
                  { paddingBottom: bottom + (Platform.OS === 'ios' ? 8 : 16) },
                  style.footer,
                ]}>
                {startContent && startContent}
                {endContent && endContent}
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default LayoutStackScreen;
