import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';

import { useFetchMe, useProfileUser } from '@/shared/queries';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { EnumAdditionalDocumentType, EnumDocumentType } from '@/shared/enum';

import {
  TUpdateProfileSchema,
  UpdateProfileSchema,
} from '../../validations.form';
import { cleanMask } from 'masks-br';

export const useUpdateProfile = () => {
  const { data: userData, refetch: refetchUserMe } = useFetchMe();
  const methods = useForm<TUpdateProfileSchema>({
    mode: 'onChange',
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
      country: userData?.address?.country ?? 'Brasil',
      zipCode: userData?.address?.zipCode || '',
      street: userData?.address?.street || '',
      number: userData?.address?.number || '',
      city: userData?.address?.city || '',
      state: userData?.address?.state || '',
      district: userData?.address?.district || '',
      complement: userData?.address?.complement || '',
      email: userData?.email || '',
      phoneNumber: userData?.phoneNumber || '',
      acceptTerms: true,
      nationality: 'Brasil',
    },
  });
  const { mutate: mutateUpdateProfile, isPending } = useProfileUser();
  console.log('userData?.requestUpdateContact', userData?.requestUpdateContact);
  const handleSubmitUpdateUser = async (data: TUpdateProfileSchema) => {
    Keyboard.dismiss();

    const payload = {
      name: data.name,
      nationality: data.nationality,
      language: data.language,
      documentType: data.documentType,
      document: cleanMask(data.document),
      additionalDocument: data.additionalDocument,
      additionalDocumentType: data.additionalDocumentType,
      additionalDocumentIssueDate: cleanMask(
        data.additionalDocumentIssueDate
      ).replace(/^(\d{2})(\d{2})(\d{4})/, '$3-$2-$1'),
      birthDate: cleanMask(data.birthDate).replace(
        /^(\d{2})(\d{2})(\d{4})/,
        '$3-$2-$1'
      ),
      address: JSON.parse(
        JSON.stringify({
          country: data.country,
          zipCode: data.zipCode,
          street: data.street,
          number: data.number,
          complement: data.complement,
          district: data.district,
          city: data.city,
          state: data.state,
        })
      ),
      acceptTerms: data.acceptTerms,
    };

    mutateUpdateProfile(payload, {
      onSuccess() {
        refetchUserMe();
        router.back();
        showToast({
          type: 'success',
          message: 'Perfil atualizado com sucesso!',
        });
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error.response?.data.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  useEffect(() => {
    if (methods.formState.errors?.acceptTerms?.message) {
      showToast({
        type: 'error',
        message: 'Reconheça que suas informações são verdadeiras.',
      });
      return;
    }
  }, [methods.formState.errors]);

  const handleNavigationBack = () => {
    router.navigate('/(private)/(stack)/profile');
  };

  return {
    methods,
    isPending,
    handleNavigationBack,
    handleSubmitUser: methods.handleSubmit(handleSubmitUpdateUser),
  };
};
