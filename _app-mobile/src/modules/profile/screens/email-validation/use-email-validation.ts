import { showToast } from '@/shared/components/toast/use-toast-store';
import { useFetchMe, useFetchSettingsEmailValidation } from '@/shared/queries';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

export const useEmailValidation = () => {
  const { hash } = useLocalSearchParams();
  const { mutate: mutateEmailValidation, isPending: isPendingEmailValidation } =
    useFetchSettingsEmailValidation();
  const { refetch: refetchUser } = useFetchMe();

  const handleFetchConfirmEmail = (uuid: string) => {
    mutateEmailValidation(uuid, {
      onSuccess: () => {
        refetchUser();
        router.replace('/(private)/(stack)/profile');
        showToast({
          type: 'success',
          message: `E-mail confirmado com sucesso!`,
        });
      },
      onError(error: any) {
        router.replace('/(private)/(stack)/profile');

        if (error?.response?.data?.error === 'No User found') {
          showToast({ type: 'error', message: 'Usuário não encontrado' });
        } else {
          showToast({
            type: 'error',
            message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
          });
        }
      },
    });
  };

  useEffect(() => {
    if (hash) {
      handleFetchConfirmEmail(String(hash));
    }
  }, [hash]);

  return {
    isPendingEmailValidation,
  };
};
