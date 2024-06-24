import { useEffect, useMemo, useRef, useState } from 'react';
import { useCreateUserStore } from '../../store/use-create-user.store';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { useRequestEmail } from '@/shared/queries';
import { showToast } from '@/shared/components/toast/use-toast-store';
import {
  FormCompleteRegistrationSchema,
  TFormCompleteRegistrationSchema,
} from './schema.complete-registration.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';

export const useCompleteYourRegistration = () => {
  const emailRef = useRef<TextInput>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const { mutate: mutateSendEmail, isPending: isLoading } = useRequestEmail();
  const { user, uuid } = useCreateUserStore((store) => {
    return {
      user: store.user,
      uuid: store.uuid,
    };
  });

  const methods = useForm<TFormCompleteRegistrationSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(FormCompleteRegistrationSchema),
  });

  const handleChangeOption = () => {
    methods.setValue('new_email', '');
    setIsActive((prev) => !prev);
    setTimeout(() => {
      emailRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    if (user.email) {
      methods.setValue('new_email', user.email);
    }
  }, [user]);

  const handleRequestEmail = (data: TFormCompleteRegistrationSchema) => {
    mutateSendEmail(
      {
        uuid: uuid,
        contact: data.new_email,
        contactType: 'EMAIL',
      },
      {
        onSuccess({ data }) {
          showToast({
            type: 'success',
            message:
              data?.message ||
              'Código enviado por e-mail. Verifique sua caixa de entrada.',
          });
        },
        onError(error: any) {
          showToast({
            type: 'error',
            message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
          });
        },
      }
    );
  };

  const handleNavigationBack = () => {
    router.navigate('/sign-up');
  };

  return {
    user,
    methods,
    isActive,
    emailRef,
    isLoading,
    handleChangeOption,
    handleNavigationBack,
    handleResendEmail: methods.handleSubmit(handleRequestEmail),
  };
};
