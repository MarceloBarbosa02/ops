import { router } from 'expo-router';

export const useAccess = () => {
  const handleNavigationBack = () => {
    router.push('/(private)/(tabs)/plus');
  };

  const handleNavigation = () => {
    router.push('/(private)/(modais)/add-access');
  };

  return {
    handleNavigation,
    handleNavigationBack,
  };
};
