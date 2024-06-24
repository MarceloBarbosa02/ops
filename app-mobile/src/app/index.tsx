import { router, useFocusEffect } from 'expo-router';
import { Image, MotiView, View } from 'moti';
import { StatusBar } from 'expo-status-bar';

import { LogoKVNIcon } from '@/shared/assets';
import { useAuthStore } from '@/shared/store';

import bgSplash from '../../assets/images/splash.png';

export default function Index() {
  const token = useAuthStore((store) => store.token);

  useFocusEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        return router.replace('/(private)/(tabs)/dash');
      }

      return router.replace('/(auth)/welcome');
    }, 2200);

    return () => clearTimeout(timer);
  });

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <StatusBar style="light" translucent />
      <Image
        source={bgSplash}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          zIndex: -9,
          position: 'absolute',
        }}
      />
      <MotiView
        from={{
          scale: 1,
        }}
        animate={{
          scale: 1.7,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          repeat: 2,
        }}>
        <LogoKVNIcon />
      </MotiView>
    </View>
  );
}
