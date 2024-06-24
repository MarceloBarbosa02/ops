import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';

export const useMonthlyBilling = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangeMonthlyBilling,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangeMonthlyBilling: store.handleChangeMonthlyBilling,
    };
  });

  const handleNavigationMonthlyBilling = () => {
    router.push('/(private)/(stack)/(lead-capture)/business-type');
  };

  const handleNavigationBack = () => {
    // handleChangeMonthlyBilling('');
    router.back();
  };

  return {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeMonthlyBilling,
    handleNavigationMonthlyBilling,
  };
};
