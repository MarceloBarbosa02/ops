import { forwardRef, memo } from 'react';
import LayoutBaseScreen from './base.screen';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import { TabsLayoutProps } from './base.screen.types';
import { Typography } from '../typography';
// import { Header } from './header';
import { LinearGradient, SkiaPictureView } from '@shopify/react-native-skia';
import { LinearGradientTabs } from '@/shared/assets/components/tabs/bg.tabs';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTabs from '../headers/tabs';

const LayoutTabsScreen = (
  { children, title, variant }: TabsLayoutProps,
  ref: any
) => {
  const { top } = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={'light'} translucent />
      <SkiaPictureView style={{ flex: 1, position: 'absolute' }}>
        <LinearGradientTabs />
      </SkiaPictureView>
      <View
        style={{
          width: width,
          height: height,
          marginTop: top,
        }}>
        <HeaderTabs />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View className="flex-1 px-4 pb-24">{children}</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(forwardRef(LayoutTabsScreen));
