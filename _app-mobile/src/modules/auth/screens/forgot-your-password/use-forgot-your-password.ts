import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { useSendRecoverPasswordEmail } from '@/shared/queries/user';
import { showToast } from '@/shared/components/toast/use-toast-store';
import {
  TFormForgotPasswordSchema,
  FormForgotPasswordSchema,
} from './schema.forgot-password.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForgotPasswordStore } from '../../store/use-forgot-password.store';

export const useForgotYourPassword = () => {
  const methods = useForm<TFormForgotPasswordSchema>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    resolver: zodResolver(FormForgotPasswordSchema),
  });
  const { mutate: mutateRequestRecoverPassword, isPending: isPendingRequest } =
    useSendRecoverPasswordEmail();
  const { handleSetEmail } = useForgotPasswordStore();

  const handleSubmitUserForgotPassword = (
    dataEmail: TFormForgotPasswordSchema
  ) => {
    mutateRequestRecoverPassword(dataEmail, {
      onSuccess(data) {
        handleSetEmail(dataEmail.email);
        router.navigate('/account-recovery');
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
    isPendingRequest,
    handleNavigationSignIn,
    handleSubmitPassword: methods.handleSubmit(handleSubmitUserForgotPassword),
  };
};
