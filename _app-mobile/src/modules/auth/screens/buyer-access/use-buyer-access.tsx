import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFetchPurchase } from '@/shared/queries/purchases/purchases';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { useCreatePasswordAccessPurchase } from '@/shared/queries/user/users';
import { useSignInData } from '@/shared/hooks';

import ebookDark from '@/shared/assets/images/png/product/ebook-default-dark.png';
import ebookLight from '@/shared/assets/images/png/product/ebook-default.png';
import serviceDark from '@/shared/assets/images/png/product/service-default-dark.png';
import serviceLight from '@/shared/assets/images/png/product/service-default.png';
import videClassDark from '@/shared/assets/images/png/product/videoclass-default-dark.png';
import videoClassLight from '@/shared/assets/images/png/product/videoclass-default.png';

import {
  BuyerAccessSchema,
  TBuyerAccessSchema,
} from './buyer-access.validator';
import { IPurchasesResponse } from './buyer-access.types';

import * as S from './buyer-access.styles';

export const useBuyerAccess = () => {
  const theme = useTheme();
  const methods = useForm<TBuyerAccessSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(BuyerAccessSchema),
  });
  const { hash } = useLocalSearchParams();
  const { handleSignInStorage } = useSignInData();
  const { mutate: mutatePurchase, isPending: isPendingPurchase } =
    useFetchPurchase();
  const {
    mutate: mutateCreatePasswordAccess,
    isPending: isPendingCreatePasswordAccess,
  } = useCreatePasswordAccessPurchase();
  const [msgError, setMsgError] = useState<string>('');
  const [dataPurchase, setDataPurchase] = useState<IPurchasesResponse>(
    {} as IPurchasesResponse
  );

  const defaultProduct = (format: string) => {
    switch (format) {
      case 'videoclass':
      case 'video-aula':
      case 'Vídeo aula':
      case 'community':
      case 'comunidade':
      case 'Comunidade':
        return theme.theme === 'dark' ? (
          <S.ImgProduct source={videClassDark} resizeMode="cover" />
        ) : (
          <S.ImgProduct source={videoClassLight} resizeMode="cover" />
        );

      case 'service':
      case 'servicos':
      case 'Serviços':
        return theme.theme === 'dark' ? (
          <S.ImgProduct source={serviceDark} resizeMode="cover" />
        ) : (
          <S.ImgProduct source={serviceLight} resizeMode="cover" />
        );

      default:
        return theme.theme === 'dark' ? (
          <S.ImgProduct source={ebookDark} resizeMode="cover" />
        ) : (
          <S.ImgProduct source={ebookLight} resizeMode="cover" />
        );
    }
  };

  const handleSubmitPurchase = (hash: string) => {
    mutatePurchase(hash, {
      onSuccess: ({ data }) => {
        setDataPurchase(data);
      },
      onError: (err: any) => {
        setMsgError(err.response.data.message);
        showToast({
          type: 'error',
          message: err?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  useEffect(() => {
    if (hash) {
      handleSubmitPurchase(String(hash));
    }
  }, [hash]);

  const handleSubmitPurchaseForm = async (data: TBuyerAccessSchema) => {
    const payload = {
      token: hash as string,
      password: data.new_password,
      confirmPassword: data.password_confirm,
    };

    mutateCreatePasswordAccess(payload, {
      onSuccess: ({ data }) => {
        showToast({ type: 'success', message: 'Senha criada com sucesso!' });

        handleSignInStorage({
          token: data.token,
          refreshToken: data?.refreshToken,
          uuid: data?.uuid,
        });
      },
      onError: (error: any) => {
        showToast({
          type: 'error',
          message: error?.response?.data?.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  return {
    methods,
    msgError,
    dataPurchase,
    isPendingPurchase,
    isPendingCreatePasswordAccess,
    defaultProduct,
    handleSubmitPurchaseForm: methods.handleSubmit(handleSubmitPurchaseForm),
  };
};
