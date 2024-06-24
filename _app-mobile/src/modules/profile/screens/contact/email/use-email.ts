import { useContactStore } from '@/modules/profile/store/use-contact.store';
import {
  TToggleContactEmailSchema,
  ToggleContactEmailSchema,
} from '@/modules/profile/validations.form/contact.email';
import {
  EnumContactTypes,
  useFetchMe,
  useSendContactUpdate,
  useSendUpdateCode,
} from '@/shared';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { TContactTypes } from '@/shared/queries/user/sign-in.types';
import { loadIpv6 } from '@/shared/utils/getIPV6';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';

export const useEmail = () => {
  const { data: userData, refetch: refetchUser } = useFetchMe();
  const methods = useForm<TToggleContactEmailSchema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(ToggleContactEmailSchema),
    defaultValues: {
      email: userData?.email || '',
    },
  });
  const [isError, setIsError] = useState<boolean>(false);
  const { mutate: mutateSendContact, isPending: isPendingSendContact } =
    useSendContactUpdate();
  const { mutate: mutateUpdateCode, isPending: isPendingUpdateCode } =
    useSendUpdateCode();
  const { email, uuid, setToggleUUID, setToggleEmail } = useContactStore(
    (store) => {
      return {
        email: store.email,
        uuid: store.uuid,
        setToggleUUID: store.setToggleUUID,
        setToggleEmail: store.setToggleEmail,
      };
    }
  );

  const handleSubmitEmailContact = async (
    dataContact: TToggleContactEmailSchema
  ) => {
    Keyboard.dismiss();
    const ipv6 = await loadIpv6();

    const payload = {
      provider: EnumContactTypes.EMAIL,
      type: 'EMAIL' as TContactTypes,
      value: dataContact.email,
      requester: await ipv6,
    };

    mutateSendContact(payload, {
      onSuccess({ data }) {
        if (data?.uuid) {
          setToggleEmail(dataContact?.email);
          setToggleUUID(data?.uuid);
          showToast({
            type: 'success',
            message: data.message || 'Código enviado com sucesso!',
          });
          router.push('/(private)/(modais)/contact-email-code');
        }
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error.response?.data.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleVerifyCode = async (code: string) => {
    const payload = {
      code: code,
      uuid: uuid,
    };

    mutateUpdateCode(payload, {
      onSuccess() {
        refetchUser();
        showToast({
          type: 'success',
          message: 'Código validado com sucesso!',
        });
        router.push('/(private)/(modais)/contact-finished');
      },
      onError(error: any) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2500);
      },
    });
  };

  const handleNavigationBack = () => {
    router.dismiss();
  };

  return {
    email,
    isError,
    methods,
    isPendingSendContact,
    isPendingUpdateCode,
    handleVerifyCode,
    handleNavigationBack,
    handleSubmitEmailContact: methods.handleSubmit(handleSubmitEmailContact),
  };
};
