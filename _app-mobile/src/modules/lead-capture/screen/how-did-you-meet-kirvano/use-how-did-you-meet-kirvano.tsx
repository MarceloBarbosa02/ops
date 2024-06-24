import { useForm } from 'react-hook-form';
import { useLeadCaptureStore } from '../../store/use-lead-capture.store';
import { router } from 'expo-router';
import { THowDidYouMeetKirvano } from '../../store/lead-capture.types';
import { useSignInData } from '@/shared/hooks';

export const useHowDidYouMeetKirvano = () => {
  const {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleChangeHowDidYouMeetKirvano,
  } = useLeadCaptureStore((store) => {
    return {
      leads: store.leads,
      totalStepsNo: store.totalStepsNo,
      totalStepsYes: store.totalStepsYes,
      stepProgressYes: store.stepProgressYes,
      stepProgressNo: store.stepProgressNo,
      handleChangeHowDidYouMeetKirvano: store.handleChangeHowDidYouMeetKirvano,
    };
  });
  const { loadDataOff } = useSignInData();

  const handleNavigationHowDidYouMeetKirvano = () => {
    // loadDataOff();
    return router.replace('/(private)/(tabs)/');
  };

  const handleNavigationBack = () => {
    // handleChangeDigitalProductPlans('');
    router.back();
  };

  const handleChangeOption = (value: THowDidYouMeetKirvano, reason: string) => {
    handleChangeHowDidYouMeetKirvano(value, reason);
  };

  const handleSubmit = () => {
    console.log('leads', leads);
    return router.replace('/(private)/(tabs)/');
    // loadDataOff();
    // const payload = {
    //   onlineSales: leads.onlineSales,
    //   monthlyBilling: leads.monthlyBilling,
    //   businessType: leads.businessType,
    //   physicalOrDigitalProduct: leads.physicalOrDigitalProduct,
    //   typeOfProductYouSell: [leads.typeOfProductYouSell?.bets],
    //   howDidYouMeetKirvano:
    //     leads.howDidYouMeetKirvano?.option === 'other' ||
    //     leads.howDidYouMeetKirvano?.option === 'influencer'
    //       ? {
    //           option: leads.howDidYouMeetKirvano?.option,
    //           reason: leads.howDidYouMeetKirvano?.reason,
    //         }
    //       : leads.howDidYouMeetKirvano?.option,
    // };
  };

  return {
    leads,
    totalStepsNo,
    totalStepsYes,
    stepProgressYes,
    stepProgressNo,
    handleSubmit,
    handleChangeOption,
    handleNavigationBack,
    handleChangeHowDidYouMeetKirvano,
    handleNavigationHowDidYouMeetKirvano,
  };
};
