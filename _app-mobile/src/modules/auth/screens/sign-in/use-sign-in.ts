import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { Keyboard } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRequestSignIn } from '@/shared/queries/user';
import { useAuthStore } from '@/shared/store';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { app } from '@/shared/constants/generic';
import { useSignInData } from '@/shared/hooks';

import { FormSchema, TFormSchemaUser } from './schema.user.validator';
import { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const useSignIn = () => {
  const methods = useForm<TFormSchemaUser>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(FormSchema),
  });
  const { mutate: mutateRequestSignIn, isPending: isLoadingSignIn } =
    useRequestSignIn();
  const { handleSignInStorage } = useSignInData();
  const { handleSetUserData } = useAuthStore((store) => {
    return {
      handleSetUserData: store.handleSetUserData,
    };
  });

  const handleSubmitUserSignIn = (data: TFormSchemaUser) => {
    Keyboard.dismiss();

    const payload = {
      ...data,
      source: app,
    };

    mutateRequestSignIn(payload, {
      onSuccess(data) {
        console.log({ data });
        if (data?.permissions?.length >= 2) {
          handleSignInStorage({
            token: data.token,
            refreshToken: data?.refreshToken,
            uuid: data?.uuid,
          });
          handleSetUserData(data);
        } else {
          router.replace('/(auth)/access-not-permitted');
        }
      },
      onError(err: any) {
        showToast({
          type: 'error',
          message: err?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleNavigationForgotPassword = () => {
    router.navigate('/forgot-your-password');
  };

  const handleNavigationSignUp = () => {
    router.navigate('/sign-up');
  };

  return {
    methods,
    isLoadingSignIn,
    handleNavigationSignUp,
    handleNavigationForgotPassword,
    handleSubmitUser: methods.handleSubmit(handleSubmitUserSignIn),
  };
};
