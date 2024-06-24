import { links_general } from '@/shared';
import { router } from 'expo-router';
import { Linking } from 'react-native';

export const useAccessNotPermitted = () => {
  const handleNavigation = () => {
    Linking.openURL(links_general.web_app);
  };

  const handleNavigationBack = () => {
    router.replace('/(auth)/sign-in');
  };

  return {
    handleNavigation,
    handleNavigationBack,
  };
};
