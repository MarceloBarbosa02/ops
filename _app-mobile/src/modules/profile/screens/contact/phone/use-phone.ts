import { ddi_phone } from '@/modules/auth/screens/sign-up/phone.ddi';
import { useContactStore } from '@/modules/profile/store/use-contact.store';
import {
  TToggleContactPhoneSchema,
  ToggleContactPhoneSchema,
} from '@/modules/profile/validations.form/contact.phone';
import {
  EnumContactTypes,
  useFetchMe,
  useSendContactUpdate,
  useSendUpdateCode,
} from '@/shared';
import { useInputPhoneStore } from '@/shared/components/input/use-input-phone.store';
import { TSelectOptions } from '@/shared/components/select/select.types';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { TContactTypes } from '@/shared/queries/user/sign-in.types';
import { loadIpv6 } from '@/shared/utils/getIPV6';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { cleanMask } from 'masks-br';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';

export const usePhone = () => {
  const refActionSheet = useRef<BottomSheetModal>(null);
  const { data: userData, refetch: refetchUser } = useFetchMe();
  const methods = useForm<TToggleContactPhoneSchema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(ToggleContactPhoneSchema),
    defaultValues: {
      phone: userData?.phoneNumber?.substring(2) || '',
    },
  });
  const [isError, setIsError] = useState<string>('');
  const { mutate: mutateSendContact, isPending: isPendingSendContact } =
    useSendContactUpdate();
  const { mutate: mutateUpdateCode, isPending: isPendingUpdateCode } =
    useSendUpdateCode();
  const { optionCountry, handleSelectOptionCountry } = useInputPhoneStore(
    (store) => {
      return {
        optionCountry: store.optionCountry,
        handleSelectOptionCountry: store.handleSelectOptionCountry,
      };
    }
  );
  const { phone, uuid, setToggleUUID, setTogglePhone } = useContactStore(
    (store) => {
      return {
        phone: store.phone,
        uuid: store.uuid,
        setToggleUUID: store.setToggleUUID,
        setTogglePhone: store.setTogglePhone,
      };
    }
  );
  const phoneWatch = methods.watch('phone');

  const handleIsOpen = () => {
    refActionSheet.current?.present();
  };

  useEffect(() => {
    handleSelectOptionCountry(ddi_phone[29]);
  }, []);

  const handleSubmitPhoneContact = async (
    dataContact: TToggleContactPhoneSchema
  ) => {
    Keyboard.dismiss();
    const ipv6 = await loadIpv6();

    const payload = {
      provider: EnumContactTypes.SMS,
      type: 'PHONE' as TContactTypes,
      value: `${optionCountry.value}${cleanMask(dataContact.phone)}`,
      requester: ipv6,
    };

    mutateSendContact(payload, {
      onSuccess({ data }) {
        if (data?.uuid) {
          setTogglePhone(dataContact?.phone);
          setToggleUUID(data?.uuid);
          showToast({
            type: 'success',
            message: data.message || 'Código enviado com sucesso!',
          });
          router.push('/(private)/(modais)/contact-phone-code');
        }
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error.response?.data.message || 'Erro ao enviar código',
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
        setIsError(error.response?.data.message || 'Erro ao enviar código');
        setTimeout(() => {
          setIsError('');
        }, 2500);
      },
    });
  };

  const maskCustom = useMemo(() => {
    return optionCountry?.mask ? optionCountry?.mask : '999 999 999 999';
  }, [optionCountry]);

  useEffect(() => {
    if (phoneWatch) {
      if (optionCountry.value === '55') {
        const phoneClean = cleanMask(phoneWatch);
        const thirdNumber = phoneClean.substring(2, 3);

        if (!['7', '8', '9'].includes(thirdNumber)) {
          methods.setError('phone', {
            type: 'validate',
            message: 'Informe um celular válido.',
          });
          return;
        }
      }

      if (cleanMask(phoneWatch).length < cleanMask(maskCustom).length) {
        methods.setError('phone', {
          type: 'validate',
          message: 'Informe um celular válido...',
        });
        return;
      }
    }
  }, [phoneWatch, optionCountry, maskCustom]);

  const handleNavigationBack = () => {
    router.dismiss();
  };

  const handleIsClose = (item: TSelectOptions) => {
    handleSelectOptionCountry(item);
    refActionSheet.current?.dismiss();
  };

  return {
    phone,
    isError,
    methods,
    optionCountry,
    refActionSheet,
    isPendingSendContact,
    isPendingUpdateCode,
    handleIsOpen,
    handleIsClose,
    handleVerifyCode,
    handleNavigationBack,
    handleSubmitPhoneContact: methods.handleSubmit(handleSubmitPhoneContact),
  };
};
