import { router } from 'expo-router';
import { useForm } from 'react-hook-form';

import { useFetchMe } from '@/shared/queries/user';

import { useContactConfigureStore } from '../../components/form/contact/use.contact.store';

export const useConfigure = () => {
  const { data: dataUser } = useFetchMe();
  const methods = useForm();
  const { handleSelectOptionSteps } = useContactConfigureStore((store) => {
    return {
      handleSelectOptionSteps: store.handleSelectOptionSteps,
    };
  });

  const handleNavigationCancel = () => {
    router.back();
  };

  const handleSubmitUserConfigure = (data: any) => {
    console.log(data);
    handleSelectOptionSteps('phone');
    router.push('/(private)/(stack)/(configure)/config-contact');
  };

  const handleShowSelectMethods = () => {};

  return {
    methods,
    handleNavigationCancel,
    handleShowSelectMethods,
    handleSubmitUser: methods.handleSubmit(handleSubmitUserConfigure),
  };
};
