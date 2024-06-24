import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { useRequestCurrentUser, useRequestEmail } from '@/shared/queries/user';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard, PanResponder } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';

import { links_general } from '@/shared/constants';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { TSelectOptions } from '@/shared/components/select/select.types';
import { useInputPhoneStore } from '@/shared/components/input/use-input-phone.store';
import { showToast } from '@/shared/components/toast/use-toast-store';

import { useCreateUserStore } from '../../store/use-create-user.store';
import {
  CreateUserSchema,
  IFormCreateUserSchema,
} from './sign-up.validations.form';
import { ddi_phone } from './phone.ddi';

import * as Linking from 'expo-linking';
import { app } from '@/shared/constants/generic';
import { cleanMask } from 'masks-br';

export const useSignUp = () => {
  const refActionSheet = useRef<BottomSheetModal>(null);
  const methods = useForm<IFormCreateUserSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(CreateUserSchema),
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [locationX, setLocationX] = useState<number>(0);
  const [locationY, setLocationY] = useState<number>(0);
  const { mutate: mutateRequestNewUser, isPending: isPendingCurrentUser } =
    useRequestCurrentUser();
  const { mutate: mutateSendEmail } = useRequestEmail();
  const { optionCountry, handleSelectOptionCountry } = useInputPhoneStore(
    (store) => {
      return {
        optionCountry: store.optionCountry,
        handleSelectOptionCountry: store.handleSelectOptionCountry,
      };
    }
  );
  const { handleSetNewUser, handleSetUUID } = useCreateUserStore((store) => {
    return {
      handleSetNewUser: store.handleSetNewUser,
      handleSetUUID: store.handleSetUUID,
    };
  });
  const phoneWatch = methods.watch('phone');
  const password = methods.watch('new_password');
  const password_confirm = methods.watch('password_confirm');

  useEffect(() => {
    if (!password) {
      methods.clearErrors();
      return;
    }

    if (password?.length > 0 && password_confirm) {
      if (password !== password_confirm) {
        methods.setError('password_confirm', {
          type: 'validate',
          message: 'As senhas digitadas não coincidem.',
        });
        return;
      }
    }
  }, [password, password_confirm]);

  const handleSubmitCreateNewUser = (dataUser: IFormCreateUserSchema) => {
    Keyboard.dismiss();

    const payload = {
      name: dataUser.name,
      email: dataUser.new_email,
      phoneNumber: `${optionCountry.value}${dataUser.phone}`,
      password: dataUser.new_password,
      passwordConfirmation: dataUser.password_confirm,
      userTermsReadAt: new Date(),
      source: app,
    };

    mutateRequestNewUser(payload, {
      onSuccess({ data }) {
        setTimeout(() => {
          mutateSendEmail({
            uuid: data?.uuid,
            contact: dataUser.new_email,
            contactType: 'EMAIL',
          });
        }, 200);
        handleSetUUID(data?.uuid);
        handleSetNewUser(payload);
        showToast({
          type: 'success',
          message: 'Registro concluído com sucesso! Verifique seu e-mail',
        });
        router.push('/complete-your-registration');
      },
      onError(err: any) {
        if (
          err?.response?.data?.message === 'O e-mail informado já está em uso'
        ) {
          return methods.setError('new_email', {
            message: 'Este e-mail já esta cadastrado em nossa plataforma.',
          });
        }
        showToast({
          type: 'error',
          message: err?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
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
        const thirdNumber =
          phoneClean.length > 3 ? phoneClean.substring(2, 3) : '9';

        if (!['7', '8', '9'].includes(thirdNumber)) {
          methods.setError('phone', {
            type: 'validate',
            message: 'Este número de celular não é valido.',
          });
          return;
        }
      }

      if (cleanMask(phoneWatch).length < cleanMask(maskCustom).length) {
        methods.setError('phone', {
          type: 'validate',
          message: 'Informe um celular válido.',
        });
        return;
      }
    }
  }, [phoneWatch, optionCountry, maskCustom]);

  const handleIsOpen = () => {
    setVisible(!visible);
    refActionSheet.current?.present();
  };

  const handleIsClose = (item: TSelectOptions) => {
    handleSelectOptionCountry(item);
    setVisible(false);
    refActionSheet.current?.dismiss();
  };

  useEffect(() => {
    handleSelectOptionCountry(ddi_phone[29]);
  }, []);

  const handleNavigationSignIn = () => {
    router.navigate('/sign-in');
  };

  const handleNavigationAccountRecovery = () => {
    router.navigate('/account-recovery');
  };

  const handleNavigationTermOfUSe = () => {
    Linking.openURL(links_general.terms);
  };

  return {
    methods,
    visible,
    password,
    locationY,
    maskCustom,
    optionCountry,
    refActionSheet,
    isPendingCurrentUser,
    handleIsOpen,
    handleIsClose,
    handleNavigationSignIn,
    handleNavigationTermOfUSe,
    handleNavigationAccountRecovery,
    handleSubmitNewUser: methods.handleSubmit(handleSubmitCreateNewUser),
  };
};
