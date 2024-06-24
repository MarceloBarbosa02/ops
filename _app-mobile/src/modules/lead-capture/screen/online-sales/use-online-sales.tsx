import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';

export const useOnlineSales = () => {
  const { leads, handleChangeOnlineSales } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      handleChangeOnlineSales: store.handleChangeOnlineSales,
    };
  });

  const handleNavigationOnlineSales = () => {
    if (leads.onlineSales === 'nao') {
      router.push('/(private)/(stack)/(lead-capture)/business-type');
    } else {
      router.push('/(private)/(stack)/(lead-capture)/monthly-billing');
    }
  };

  const handleNavigationBack = () => {
    // handleChangeOnlineSales('');
    router.back();
  };

  return {
    leads,
    handleNavigationBack,
    handleChangeOnlineSales,
    handleNavigationOnlineSales,
  };
};
