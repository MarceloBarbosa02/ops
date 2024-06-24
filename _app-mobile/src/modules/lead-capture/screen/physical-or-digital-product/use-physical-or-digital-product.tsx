import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';

export const usePhysicalOrDigitalProduct = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangePhysicalOrDigitalProduct,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangePhysicalOrDigitalProduct:
        store.handleChangePhysicalOrDigitalProduct,
    };
  });

  const handleNavigationPhysicalOrDigitalProduct = () => {
    if (leads.physicalOrDigitalProduct === 'digital') {
      router.push('/(private)/(stack)/(lead-capture)/type-of-product-you-sell');
    } else {
      router.push('/(private)/(stack)/(lead-capture)/digital-product-plans');
    }
  };

  const handleNavigationBack = () => {
    // handleChangePhysicalOrDigitalProduct('');
    router.back();
  };

  return {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangePhysicalOrDigitalProduct,
    handleNavigationPhysicalOrDigitalProduct,
  };
};
