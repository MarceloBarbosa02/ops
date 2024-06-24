import { useFocusEffect, useRouter } from 'expo-router';
import { MotiView, View } from 'moti';
import { useTheme } from 'styled-components/native';
import { MMKV } from 'react-native-mmkv';

import { LogoIconSplash } from '@/shared/assets';
import { useAuthStore } from '@/shared/store';
import { EnumStorageSignIn, useFetchMe } from '@/shared';

const storage = new MMKV();

export default function StartPage() {
  const router = useRouter();
  const theme = useTheme();
  const isPassedOnboarding = storage.getString(EnumStorageSignIn.ONBOARDING);
  const { data: userData } = useFetchMe();

  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });

  console.log({ userData });

  useFocusEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        return router.replace('/(private)/(tabs)/');
      }

      if (!isPassedOnboarding) {
        return router.replace('/(auth)/onboarding');
      }

      return router.replace('/sign-in');
    }, 4000);

    return () => clearTimeout(timer);
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.gray[50],
      }}>
      <MotiView
        from={{
          scale: 0.8,
        }}
        animate={{
          scale: 1.4,
        }}
        transition={{
          type: 'timing',
          duration: 2000,
          repeat: 2,
        }}>
        <LogoIconSplash />
      </MotiView>
    </View>
  );
}
