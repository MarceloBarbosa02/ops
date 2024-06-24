import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';

export const useBusinessType = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangeBusinessType,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangeBusinessType: store.handleChangeBusinessType,
    };
  });

  const handleNavigationBusinessType = () => {
    if (leads.businessType === 'nao') {
      router.push('/(private)/(stack)/(lead-capture)/digital-product-plans');
    } else {
      router.push(
        '/(private)/(stack)/(lead-capture)/physical-or-digital-product'
      );
    }
  };

  const handleNavigationBack = () => {
    // handleChangeBusinessType('');
    router.back();
  };

  return {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeBusinessType,
    handleNavigationBusinessType,
  };
};
