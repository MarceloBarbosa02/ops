import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Appearance, LogBox, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { Host } from 'react-native-portalize';

import { AppProvider } from '@/shared/context';
import { queryClient } from '@/shared/services';
import { useAuthStore, useThemeStore } from '@/shared/store';
import { themes } from '@/shared/theme';

LogBox.ignoreAllLogs();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Satoshi-Bold': require('../../assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-Light': require('../../assets/fonts/Satoshi-Light.otf'),
    'Satoshi-Medium': require('../../assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-Regular': require('../../assets/fonts/Satoshi-Regular.otf'),
    'Satoshi-Variable': require('../../assets/fonts/Satoshi-Variable.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const InitialLayout = () => {
  const segments = useSegments();
  const router = useRouter();
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });

  useEffect(() => {
    const inTabsGroup = segments[0] === '(private)';

    if (!token) return;

    if (token && !inTabsGroup) {
      return router.replace('/(private)/(tabs)/');
    }
    return router.replace('/');
  }, [token]);

  return <Slot />;
};

function RootLayoutNav() {
  const { isDarkMode, setThemeBasedOnSystem, userChoseTheme } = useThemeStore();

  useEffect(() => {
    const listener = ({ colorScheme }: any) => {
      if (!userChoseTheme) {
        setThemeBasedOnSystem();
      }
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => subscription.remove();
  }, [userChoseTheme]);

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: isDarkMode
            ? themes.dark.gray[50]
            : themes.light.gray[50],
        }}>
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <Host>
              <AppProvider>
                <InitialLayout />
              </AppProvider>
            </Host>
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
