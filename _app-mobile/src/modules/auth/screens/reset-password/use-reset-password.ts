import { useForm } from 'react-hook-form';
import { router, useLocalSearchParams } from 'expo-router';
import { useRequestResetPassword } from '@/shared/queries/user';
import {
  ResetPasswordSchema,
  TResetPasswordSchema,
} from './reset-password-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { Keyboard } from 'react-native';
import { useEffect } from 'react';

export const useResetPassword = () => {
  const methods = useForm<TResetPasswordSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(ResetPasswordSchema),
  });
  const {
    mutate: mutateRequestResetPassword,
    isPending: isPendingResetPassword,
  } = useRequestResetPassword();
  const { hash } = useLocalSearchParams();

  const password = methods.watch('new_password');
  const password_confirm = methods.watch('password_confirm');

  useEffect(() => {
    if (!password) {
      methods.clearErrors();
      return;
    }

    if (password?.length > 0 && password_confirm) {
      if (password !== password_confirm) {
        methods.setError('password_confirm', {
          type: 'validate',
          message: 'As senhas digitadas não coincidem.',
        });
        return;
      }
    }
  }, [password, password_confirm]);

  const handleSubmitCreateNewPassword = (data: TResetPasswordSchema) => {
    Keyboard.dismiss();

    const payload = {
      token: hash,
      password: data.new_password,
      confirmPassword: data.password_confirm,
    };

    mutateRequestResetPassword(payload, {
      onSuccess(data) {
        showToast({
          type: 'success',
          message: 'Senha alterada com sucesso!',
        });
        router.push('/(auth)/sign-in');
      },
      onError(err: any) {
        showToast({
          type: 'error',
          message: err.response?.data.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleNavigationSignIn = () => {
    router.navigate('/sign-in');
  };

  return {
    methods,
    password,
    isPendingResetPassword,
    handleNavigationSignIn,
    handleSubmitPassword: methods.handleSubmit(handleSubmitCreateNewPassword),
  };
};
