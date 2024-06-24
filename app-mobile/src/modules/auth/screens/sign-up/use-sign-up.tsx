import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { Keyboard, Linking } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
// import { cleanMask } from 'masks-br';
import { useEffect, useMemo } from 'react';

import { useInputPhoneStore } from '@/shared/components/input/use-input-phone.store';
// import {
//   useRequestSendCodeEmail,
//   useRequestSignUp,
// } from '@/shared/queries/user';
import { showToast } from '@/shared/components/toast/use-toast-store';
// import { app } from '@/shared/constants/generic';
// import { links_general } from '@/shared/constants';

import {
  FormCreateUserSchema,
  IFormCreateUserSchema,
} from './sign-up.validations.form';

export const useSignUp = () => {
  const methods = useForm<IFormCreateUserSchema>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(FormCreateUserSchema),
    defaultValues: {
      name: '',
      phone: '',
      new_email: '',
      new_password: '',
      password_confirm: '',
      userTermsReadAt: true,
    },
  });
  // const { mutate: mutateRequestSignUp, isPending: isLoadingSignUp } =
  //   useRequestSignUp();
  // const { mutate: mutateSendCodeEmail } = useRequestSendCodeEmail();
  const phone = methods.watch('phone');
  const password = methods.watch('new_password');
  const password_confirm = methods.watch('password_confirm');
  const { optionCountry } = useInputPhoneStore((store) => {
    return {
      optionCountry: store.optionCountry,
    };
  });

  useEffect(() => {
    if (!password) {
      methods.clearErrors();
    }

    if (password && password_confirm) {
      if (password !== password_confirm) {
        methods.setError('password_confirm', {
          type: 'validate',
          message: 'As senhas digitadas não coincidem.',
        });
      }
    }
  }, [password, password_confirm, methods]);

  const handleSignUpForm = (dataUser: IFormCreateUserSchema) => {
    console.log(dataUser);
    // Keyboard.dismiss();

    // const payload = {
    //   name: dataUser.name,
    //   email: dataUser.new_email,
    //   phoneNumber: `${optionCountry.value}${dataUser.phone}`,
    //   password: dataUser.new_password,
    //   passwordConfirmation: dataUser.password_confirm,
    //   userTermsReadAt: dataUser.userTermsReadAt ? new Date() : '',
    //   source: app,
    // };

    // mutateRequestSignUp(payload, {
    //   onSuccess({ data }) {
    //     mutateSendCodeEmail({
    //       uuid: data?.uuid || '',
    //       contact: dataUser.new_email,
    //       contactType: 'EMAIL',
    //     });
    //     showToast({
    //       type: 'success',
    //       message: 'Registro concluído com sucesso!\nVerifique seu e-mail.',
    //     });
    //     router.replace('/complete-your-registration');
    //   },
    //   onError(err: any) {
    //     if (
    //       err?.response?.data?.message === 'O e-mail informado já está em uso'
    //     ) {
    //       return methods.setError('new_email', {
    //         message: 'Este e-mail já esta cadastrado em nossa plataforma.',
    //       });
    //     }
    //     showToast({
    //       type: 'error',
    //       message: err?.response?.data?.message ?? 'Ops! Algo deu errado.',
    //     });
    //   },
    // });
  };

  const maskCustom = useMemo(() => {
    return optionCountry?.mask ? optionCountry?.mask : '999 999 999 999';
  }, [optionCountry]);

  useEffect(() => {
    if (phone) {
      // if (optionCountry.value === '55') {
      //   const phoneClean = cleanMask(phone);
      //   const thirdNumber = phoneClean.substring(2, 3);

      //   if (!['7', '8', '9'].includes(thirdNumber)) {
      //     methods.setError('phone', {
      //       type: 'validate',
      //       message: 'Informe um celular válido.',
      //     });
      //   }
      // }

      if (phone.length < maskCustom.length) {
        methods.setError('phone', {
          type: 'validate',
          message: 'Informe um celular válido.ssfa',
        });
      }
    }
  }, [phone, optionCountry, maskCustom]);

  const handleNavigateSignIn = () => {
    router.push('/(auth)/sign-in');
  };

  const handleNavigateBack = () => {
    router.replace('/(auth)/welcome');
  };

  const handleLinkNavigation = (term: string) => {
    // if (term === 'terms') Linking.openURL(links_general.termsGeneral);
    // if (term === 'license') Linking.openURL(links_general.termsCompra);
    // if (term === 'privacy') Linking.openURL(links_general.termPolicy);
  };

  return {
    methods,
    password,
    maskCustom,
    // isLoadingSignUp,
    handleNavigateBack,
    handleLinkNavigation,
    handleNavigateSignIn,
    handleSignUp: methods.handleSubmit(handleSignUpForm),
  };
};
