import { showToast } from '@/shared/components/toast/use-toast-store';
import { useForgotPasswordStore } from '../../store/use-forgot-password.store';
import { useSendRecoverPasswordEmail } from '@/shared/queries';
import { router } from 'expo-router';

export const useAccountRecovery = () => {
  const { email } = useForgotPasswordStore();
  const { mutate: mutateRequestRecoverPassword, isPending: isPendingRequest } =
    useSendRecoverPasswordEmail();

  const handleSubmitUserForgotPassword = () => {
    const payload = {
      email: email,
    };

    return new Promise((resolve, reject) => {
      mutateRequestRecoverPassword(payload, {
        onSuccess() {
          showToast({
            type: 'success',
            message: 'E-mail reenviado com sucesso!',
          });
          resolve(true);
        },
        onError(err: any) {
          showToast({
            type: 'error',
            message: err.response?.data.message || 'Ops! Algo deu errado.',
          });
          resolve(false);
        },
      });
    });
  };

  const handleNavigationBack = () => {
    router.navigate('/sign-in');
  };

  return {
    email,
    handleNavigationBack,
    handleSubmitUserForgotPassword,
  };
};
