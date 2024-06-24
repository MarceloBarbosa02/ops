import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';

export const useDigitalProductPlans = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangeDigitalProductPlans,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangeDigitalProductPlans: store.handleChangeDigitalProductPlans,
    };
  });

  const handleNavigationDigitalProductPlans = () => {
    router.push('/(private)/(stack)/(lead-capture)/accommodation');
  };

  const handleNavigationBack = () => {
    // handleChangeDigitalProductPlans('');
    router.back();
  };

  return {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeDigitalProductPlans,
    handleNavigationDigitalProductPlans,
  };
};
