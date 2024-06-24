import { router } from 'expo-router';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useFetchMe } from '@/shared/queries/user';
import { showToast } from '@/shared/components/toast/use-toast-store';

import { useContactConfigureStore } from './use.contact.store';

export const useContact = () => {
  const { data: dataUser } = useFetchMe();
  const methods = useForm();
  const {
    phone,
    optionCountry,
    optionSteps,
    handleSetPhone,
    handleSelectOptionSteps,
  } = useContactConfigureStore((store) => {
    return {
      optionSteps: store.optionSteps,
      phone: store.phone,
      optionCountry: store.optionCountry,
      handleSetPhone: store.handleSetPhone,
      handleSelectOptionSteps: store.handleSelectOptionSteps,
    };
  });

  const handleNavigationCancel = () => {
    router.back();
  };

  const handleSubmitPhoneConfigure = (data: any) => {
    if (optionSteps === 'code') {
      showToast({
        type: 'success',
        message: 'Perfil atualizado com sucesso!',
      });
      return router.push('/(private)/(tabs)/dash');
    } else {
      console.log(data);
      handleSetPhone(optionCountry.value + data?.phone);
      handleSelectOptionSteps('methods');
    }
  };

  const handleSendContactConfigure = () => {
    // console.log(data);

    if (optionSteps === 'phone') {
      handleSelectOptionSteps('methods');
      return;
    }

    handleSelectOptionSteps('code');

    // router.push('/(private)/(stack)/configure-contact');
  };

  const handleShowSelectMethods = () => {
    handleSelectOptionSteps('code');
  };

  const handleBackSteps = () => {
    handleSelectOptionSteps('phone');
  };

  const maskCustom = useMemo(() => {
    return optionCountry?.mask ? optionCountry?.mask : '999 999 999 999';
  }, [optionCountry]);

  return {
    phone,
    methods,
    maskCustom,
    optionSteps,
    handleBackSteps,
    handleNavigationCancel,
    handleShowSelectMethods,
    handleSendContactConfigure,
    handleSubmitPhone: methods.handleSubmit(handleSubmitPhoneConfigure),
  };
};
