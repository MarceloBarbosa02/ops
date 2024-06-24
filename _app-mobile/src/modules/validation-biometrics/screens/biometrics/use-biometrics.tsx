import { links_general, useFetchMe } from '@/shared';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { Linking } from 'react-native';
import { useBiometric } from '../../store/use-biometrics.store';

export const useBiometrics = () => {
  const { data: userData } = useFetchMe();
  const { route } = useBiometric((store) => {
    return {
      route: store.route,
    };
  });

  const handleLinkNavigation = () => {
    Linking.openURL(links_general.policy);
  };

  const handleNavigationBack = () => {
    if (route === 'finance') {
      return router.navigate('/(private)/(tabs)/finances');
    } else {
      return router.navigate('/(private)/(stack)/profile');
    }
  };

  const handleLinkNavigationNext = () => {
    router.push('/(private)/(modais)/validation-performed');
  };

  const document = useMemo(() => {
    return `***.***.***${userData?.document?.slice(11, 14)}`;
  }, [userData]);

  return {
    route,
    document,
    handleLinkNavigation,
    handleNavigationBack,
    handleLinkNavigationNext,
  };
};
