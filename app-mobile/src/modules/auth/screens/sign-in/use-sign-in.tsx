import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Keyboard } from 'react-native';

import { showToast } from '@/shared/components/toast/use-toast-store';
import { useRequestSignIn } from '@/shared/queries/user';
import { useAuthStore } from '@/shared/store';
import { app } from '@/shared/constants';

import { FormSchemaUser, TFormSchemaUser } from './sign-in.validator.form';
import { useSignInData } from '@/shared/hooks';

export const useSignIn = () => {
  const methods = useForm<TFormSchemaUser>({
    resolver: zodResolver(FormSchemaUser),
    mode: 'onBlur',
    criteriaMode: 'all',
  });
  const { handleSignInStorage } = useSignInData();
  const { mutate: mutateRequestSignIn, isPending: isLoadingSignIn } =
    useRequestSignIn();

  const handleSignInForm = (data: any) => {
    Keyboard.dismiss();

    const payload = {
      ...data,
      source: app,
    };

    mutateRequestSignIn(payload, {
      onSuccess(data) {
        handleSignInStorage(data);
      },
      onError(err: any) {
        showToast({
          type: 'error',
          message: err?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleNavigateSignUp = () => {
    router.push('/(auth)/sign-up');
  };

  const handleNavigateBack = () => {
    router.replace('/(auth)/welcome');
  };

  return {
    methods,
    isLoadingSignIn,
    handleNavigateBack,
    handleNavigateSignUp,
    handleSignIn: methods.handleSubmit(handleSignInForm),
  };
};
