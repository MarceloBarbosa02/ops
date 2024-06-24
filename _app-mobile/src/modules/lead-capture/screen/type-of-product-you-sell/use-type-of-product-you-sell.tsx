import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';
import { useMemo } from 'react';

export const useTypeOfProductYouSell = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangeTypeOfProductYouSell,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangeTypeOfProductYouSell: store.handleChangeTypeOfProductYouSell,
    };
  });

  const handleNavigationTypeOfProductYouSell = () => {
    router.push('/(private)/(stack)/(lead-capture)/accommodation');
  };

  const handleNavigationBack = () => {
    // handleChangeTypeOfProductYouSell('');
    router.back();
  };

  const isNext = useMemo(() => {
    if (leads.typeOfProductYouSell?.bets) {
      return true;
    }
    if (leads.typeOfProductYouSell?.business) {
      return true;
    }
    if (leads.typeOfProductYouSell?.educational) {
      return true;
    }
    if (leads.typeOfProductYouSell?.extraIncome) {
      return true;
    }
    if (leads.typeOfProductYouSell?.other) {
      return true;
    }
    if (leads.typeOfProductYouSell?.relationships) {
      return true;
    }
    if (leads.typeOfProductYouSell?.sexuality) {
      return true;
    }
    if (leads.typeOfProductYouSell?.weightLoss) {
      return true;
    }
    return false;
  }, [leads.typeOfProductYouSell]);

  return {
    leads,
    isNext,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleNavigationBack,
    handleChangeTypeOfProductYouSell,
    handleNavigationTypeOfProductYouSell,
  };
};
