import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';

export const useAccommodation = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangeAccommodation,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangeAccommodation: store.handleChangeAccommodation,
    };
  });

  const handleNavigationAccommodation = () => {
    if (leads.onlineSales === 'nao') {
      router.push('/(private)/(stack)/(lead-capture)/digital-product-plans');
    } else {
      router.push('/(private)/(stack)/(lead-capture)/how-did-you-meet-kirvano');
    }
  };

  const handleNavigationBack = () => {
    // handleChangeAccommodation('');
    router.back();
  };

  return {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeAccommodation,
    handleNavigationAccommodation,
  };
};
