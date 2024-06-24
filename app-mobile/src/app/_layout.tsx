import '@/shared/theme/global.css';

import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useAuthStore } from '@/shared/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/services/queryClient';
import { AppProvider } from '@/shared/context';

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
  const token = useAuthStore((store) => store.token);

  useEffect(() => {
    const inTabsGroup = segments[0] === '(private)';

    if (!token) return;

    if (token && !inTabsGroup) {
      return router.replace('/(private)/(tabs)/dash');
    }
    return router.replace('/');
  }, [token]);

  return <Slot />;
};

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <InitialLayout />
        </AppProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
