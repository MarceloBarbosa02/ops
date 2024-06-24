import { router } from 'expo-router';
import { useForm } from 'react-hook-form';

export const useAccessForm = () => {
  const methods = useForm();

  const handleNavigationBack = () => {
    router.dismiss();
  };

  return {
    methods,
    handleNavigationBack,
  };
};
