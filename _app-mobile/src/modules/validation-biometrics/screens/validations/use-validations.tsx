import { router } from 'expo-router';

export const useValidations = () => {
  const handleNavigationBackModal = () => {
    router.dismiss();
  };

  return { handleNavigationBackModal };
};
