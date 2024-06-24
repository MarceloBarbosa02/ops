import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import {
  ForgotPasswordSchema,
  RedefinePasswordSchema,
  TForgotPasswordSchema,
  TRedefinePasswordSchema,
} from '../validations';
import {
  useFetchMe,
  usePasswordUpdateConfirmCode,
  usePasswordUpdateSendCode,
  useRequestEmail,
  useRequestResetPassword,
  useSendContactUpdate,
  useUpdateChangePassword,
} from '@/shared/queries';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { useSecurityStore } from '../store/use-security-store';
import { loadIpv6 } from '@/shared/utils/getIPV6';
import { TContactTypes } from '@/shared/queries/user/sign-in.types';

export const useSecurity = () => {
  const { data: userData, refetch: refetchUserMe } = useFetchMe();
  const methodsRedefine = useForm<TRedefinePasswordSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(RedefinePasswordSchema),
  });
  const methodsForgot = useForm<TForgotPasswordSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const { mutate: mutatePasswordUpdateSendCode } = usePasswordUpdateSendCode();
  const { mutate: mutateChangePassword } = useUpdateChangePassword();
  const { mutate: mutateContactUpdate } = useSendContactUpdate();
  const { mutate: mutatePasswordUpdateConfirmCode } =
    usePasswordUpdateConfirmCode();
  const { mutate: mutateSendResetPassword } = useRequestResetPassword();
  const { mutate: mutateRequestEmail } = useRequestEmail();
  const {
    uuidMethod,
    uuidCode,
    handleSetContact,
    handleSetUUIDMethod,
    handleSetUUIDCode,
  } = useSecurityStore((store) => {
    return {
      uuidMethod: store.uuidMethod,
      uuidCode: store.uuidCode,
      handleSetContact: store.handleSetContact,
      handleSetUUIDMethod: store.handleSetUUIDMethod,
      handleSetUUIDCode: store.handleSetUUIDCode,
    };
  });

  const handleNavigationRedefine = () => {
    router.push('/(private)/(stack)/redefine-password');
  };

  const handleNavigationCancel = () => {
    router.replace('/(private)/(tabs)/plus');
  };

  const handleNavigationCode = () => {
    router.push('/(private)/(modais)/code-security');
  };

  const handleNavigationNewPassword = () => {
    router.push('/(private)/(modais)/new-password');
  };

  const handleNavigationSelectMethods = () => {
    router.push('/(private)/(modais)/methods-security');
  };

  const handleNavigationMethod = async (
    type: TContactTypes,
    provider: TContactTypes
  ) => {
    const payload = {
      type,
      provider,
    };

    mutatePasswordUpdateSendCode(payload, {
      onSuccess({ data }) {
        handleSetContact(type);
        handleSetUUIDMethod(data?.uuid || '');
        router.push('/(private)/(modais)/code-security');
        showToast({
          type: 'success',
          message: 'Código enviado com sucesso!',
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

  const handleConfirmCode = async (code: string) => {
    mutatePasswordUpdateConfirmCode(
      {
        code: code,
        uuid: uuidMethod,
      },
      {
        onSuccess({ data }) {
          handleSetUUIDCode(data?.uuid || '');
          showToast({
            type: 'success',
            message: 'Código validado com sucesso!',
          });
        },
        onError(error: any) {
          showToast({
            type: 'error',
            message: error.response?.data.message || 'Código incorreto',
          });
        },
      }
    );
  };

  const handleNavigationGoBack = () => {
    router.back();
  };

  const handleNavigationBackModal = () => {
    router.dismiss();
  };

  const handleChangePasswordRedefine = (data: TRedefinePasswordSchema) => {
    mutateChangePassword(data, {
      onSuccess: () => {
        handleNavigationCancel();
        showToast({
          type: 'success',
          message: 'Senha atualizada com sucesso!.',
        });
      },
      onError: (error: any) => {
        showToast({
          type: 'error',
          message: error.response?.data.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleChangePasswordForgot = (dataForgot: TForgotPasswordSchema) => {
    const payload = {
      token: uuidCode,
      password: dataForgot.newPassword,
      confirmPassword: dataForgot.newPasswordConfirmation,
    };

    mutateSendResetPassword(payload, {
      onSuccess: () => {
        handleNavigationCancel();
        showToast({
          type: 'success',
          message: 'Senha atualizada com sucesso!.',
        });
      },
      onError: (error: any) => {
        showToast({
          type: 'error',
          message: error.response?.data.message || 'Ops! Algo deu errado.',
        });
      },
    });
  };

  return {
    userData,
    methodsForgot,
    methodsRedefine,
    handleConfirmCode,
    handleNavigationBackModal,
    handleChangePasswordRedefine: methodsRedefine.handleSubmit(
      handleChangePasswordRedefine
    ),
    handleChangePasswordForgot: methodsForgot.handleSubmit(
      handleChangePasswordForgot
    ),
    handleNavigationCode,
    handleNavigationCancel,
    handleNavigationGoBack,
    handleNavigationMethod,
    handleNavigationRedefine,
    handleNavigationNewPassword,
    handleNavigationSelectMethods,
  };
};
