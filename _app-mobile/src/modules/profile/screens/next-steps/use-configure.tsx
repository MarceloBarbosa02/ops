import { Keyboard, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { cleanMask } from 'masks-br';

import {
  useFetchMe,
  useProfileUser,
  useSendContactUpdate,
  useSendUpdateCode,
} from '@/shared/queries';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { useInputPhoneStore } from '@/shared/components/input/use-input-phone.store';
import { TSelectOptions } from '@/shared/components/select/select.types';
import { loadIpv6 } from '@/shared/utils/getIPV6';
import { ModalsContext } from '@/shared/context/modals.context';

import {
  TUpdateProfileSchema,
  UpdateProfileSchema,
} from '../../validations.form';

import * as S from './configure.styles';
import {
  EnumAdditionalDocumentType,
  EnumDocumentType,
  format,
  useFetchCompanies,
  useFetchProducts,
} from '@/shared';

export const useConfigure = () => {
  const refActionSheet = useRef<BottomSheetModal>(null);

  const [steps, setSteps] = useState('');
  const [changeUUID, setChangeUUID] = useState('');
  const [isError, setIsError] = useState<string>('');
  const [isPendingSendContact, setIsPendingSendContact] = useState(false);
  const { handleSetContentModal } = useContext(ModalsContext);
  const { data: userData, refetch: refetchUserMe } = useFetchMe();
  const { refetch: refetchCompanies } = useFetchCompanies();
  const { refetch: refetchProducts } = useFetchProducts();
  const methods = useForm<TUpdateProfileSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      language: 'Português',
      name: userData?.name || undefined,
      birthDate: userData?.birthDate || '',
      documentType:
        (userData?.documentType as EnumDocumentType) || EnumDocumentType.CPF,
      document: userData?.document || '',
      additionalDocumentType:
        (userData?.additionalDocumentType as EnumAdditionalDocumentType) ||
        EnumAdditionalDocumentType.IDENTITY_CARD,
      additionalDocument: userData?.additionalDocument || '',
      additionalDocumentIssueDate: userData?.additionalDocumentIssueDate || '',
      country: userData?.address?.country || 'Brasil',
      zipCode: userData?.address?.zipCode || '',
      street: userData?.address?.street || '',
      number: userData?.address?.number || '',
      city: userData?.address?.city || '',
      state: userData?.address?.state || '',
      district: userData?.address?.district || '',
      complement: userData?.address?.complement || '',
      email: userData?.email || '',
      phoneNumber: userData?.phoneNumber ? userData?.phoneNumber.slice(2) : '',
      acceptTerms: true,
      nationality: 'Brasil',
    },
  });
  const { mutate: mutateUpdateProfile, isPending: isPendingUpdateProfile } =
    useProfileUser();
  const { mutate: mutateSendContact } = useSendContactUpdate();
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

  const phone = methods.watch('phoneNumber');

  const handleSubmitUpdateUser = async (dataUser: TUpdateProfileSchema) => {
    Keyboard.dismiss();
    console.log(dataUser);
    const payload = {
      name: dataUser.name,
      nationality: dataUser.nationality,
      language: dataUser.language,
      documentType: dataUser.documentType,
      document: cleanMask(dataUser.document),
      additionalDocument: dataUser.additionalDocument,
      additionalDocumentType: dataUser.additionalDocumentType,
      additionalDocumentIssueDate: cleanMask(
        dataUser.additionalDocumentIssueDate
      ).replace(/^(\d{2})(\d{2})(\d{4})/, '$3-$2-$1'),
      birthDate: cleanMask(dataUser.birthDate).replace(
        /^(\d{2})(\d{2})(\d{4})/,
        '$3-$2-$1'
      ),
      address: JSON.parse(
        JSON.stringify({
          country: dataUser.country,
          zipCode: dataUser.zipCode.replace(/^(\d{5})(\d{3})/, '$1-$2'),
          street: dataUser.street,
          number: dataUser.number,
          complement: dataUser.complement,
          district: dataUser.district,
          city: dataUser.city,
          state: dataUser.state,
        })
      ),
      acceptTerms: dataUser.acceptTerms,
    };

    mutateUpdateProfile(payload, {
      onSuccess() {
        refetchUserMe();
        showToast({
          type: 'success',
          message: 'Perfil atualizado com sucesso!',
        });
        router.push('/(private)/(stack)/configure-contact');
      },
      onError(error: any) {
        console.log(error.response?.data.message);
        showToast({
          type: 'error',
          message: error.response?.data.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  useEffect(() => {
    if (methods.formState.errors?.acceptTerms?.message) {
      methods.setError('acceptTerms', {
        message: 'Reconheça que suas informações são verdadeiras.',
      });
      return;
    }
  }, [methods.formState.errors]);

  const handleNavigationBack = () => {
    router.back();
  };

  const handleRequestCodePhone = async (dataUser: TUpdateProfileSchema) => {
    setIsPendingSendContact(true);
    const ipv6 = await loadIpv6();

    const payload = {
      value: `${optionCountry.value}${cleanMask(dataUser.phoneNumber)}`,
      type: 'PHONE' as 'EMAIL' | 'PHONE',
      provider: 'SMS' as 'SMS' | 'WHATSAPP',
      requester: await ipv6,
    };

    if (payload.value) {
      showToast({
        type: 'success',
        message: payload.value,
      });
    }

    if (methods.formState.errors.phoneNumber?.message) {
      showToast({
        type: 'info',
        message: methods.formState.errors.phoneNumber?.message,
      });
    }

    mutateSendContact(payload, {
      onSuccess({ data }) {
        if (data?.uuid) {
          setChangeUUID(data?.uuid);
          showToast({
            type: 'success',
            message: data.message || 'Código enviado com sucesso!',
          });
          setSteps('code');
          setIsPendingSendContact(false);
        }
      },
      onError(error: any) {
        setIsPendingSendContact(false);
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
      uuid: changeUUID,
    };

    mutateUpdateCode(payload, {
      onSuccess() {
        setSteps('success');
        showToast({
          type: 'success',
          message: 'Código validado com sucesso!',
        });
        refetchUserMe();
      },
      onError(error: any) {
        setIsError(error.response?.data.message || 'Erro ao enviar código');
        setTimeout(() => {
          setIsError('');
        }, 2000);
      },
    });
  };

  const handleIsOpen = () => {
    refActionSheet.current?.present();
  };

  const handleIsClose = (item: TSelectOptions) => {
    handleSelectOptionCountry(item);
    refActionSheet.current?.dismiss();
  };

  const handleOutConfigure = () => {
    if (!userData?.isUpdated && !userData?.isDocumentUpdated) {
      router.push('/(private)/(stack)/out-configure');
    } else {
      router.push('/(private)/(tabs)/');
    }
  };

  const handleNavigationOut = () => {
    router.navigate('/(private)/(tabs)/');
  };

  const handleNavigationSuccess = () => {
    refetchUserMe();
    refetchCompanies();
    refetchProducts();

    handleSetContentModal();
    return router.navigate('/(private)/(tabs)/');
  };

  const updateStatusEmail = useMemo(() => {
    return userData?.requestUpdateContact?.find(
      (obj: any) => obj.type === 'EMAIL'
    );
  }, [userData]);

  return {
    steps,
    phone,
    methods,
    isError,
    userData,
    isPendingUpdateProfile,
    isPendingUpdateCode,
    isPendingSendContact,
    optionCountry,
    refActionSheet,
    updateStatusEmail,
    handleIsOpen,
    handleIsClose,
    handleVerifyCode,
    handleRequestPhone: methods.handleSubmit(handleRequestCodePhone),
    handleOutConfigure,
    handleNavigationOut,
    handleNavigationBack,
    handleNavigationSuccess,
    handleSelectOptionCountry,
    // handleSubmitUser: handleSubmitUpdateUser,
    handleSubmitUser: methods.handleSubmit(handleSubmitUpdateUser),
  };
};
