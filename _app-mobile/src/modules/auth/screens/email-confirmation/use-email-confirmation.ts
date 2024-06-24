import { showToast } from '@/shared/components/toast/use-toast-store';
import { useSignInData } from '@/shared/hooks';
import { useFetchEmailValidation } from '@/shared/queries';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

export const useEmailConfirmation = () => {
  const [respError, setRespError] = useState<string>('');
  const { mutate: mutateEmailValidation, isPending: isPendingEmailValidation } =
    useFetchEmailValidation();
  const { handleSignInStorage } = useSignInData();
  const { hash } = useLocalSearchParams();

  const handleNavigation = useCallback(() => {
    router.replace('/(auth)/sign-in');
  }, []);

  const handleFetchConfirmEmail = (uuid: string) => {
    mutateEmailValidation(uuid, {
      onSuccess: ({ data }) => {
        showToast({
          type: 'success',
          message: `Bem-vindo(a) à Kirvano, ${data?.name}!`,
        });
        handleSignInStorage({
          token: data.accessToken,
          refreshToken: data?.refreshToken,
          uuid: data?.uuid,
        });
      },
      onError(error: any) {
        setRespError(error?.response?.data?.message);
      },
    });
  };

  useEffect(() => {
    if (hash) {
      handleFetchConfirmEmail(String(hash));
    }
  }, [hash]);

  return {
    respError,
    isPendingEmailValidation,
    handleNavigation,
    handleFetchConfirmEmail,
  };
};
