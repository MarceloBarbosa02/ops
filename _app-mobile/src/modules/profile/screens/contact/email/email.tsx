import { Button, Input, ModalScreen, Typography } from '@/shared/components';

import { FormProvider } from 'react-hook-form';
import { useEmail } from './use-email';

import * as S from './email.styles';
import { TextInput } from 'react-native';
import { useEffect, useRef } from 'react';

const ContactEmailModalScreen = () => {
  const emailRef = useRef<TextInput>(null);
  const {
    methods,
    isPendingSendContact,
    handleNavigationBack,
    handleSubmitEmailContact,
  } = useEmail();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <ModalScreen
      title="Atualizar e-mail"
      handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperCard>
          <S.WrapperCardHeader>
            <Typography
              title="Insira seu novo endereço de e-mail"
              weight="bold"
            />
            <Typography title="Enviaremos uma mensagem com um código para confirmar a alteração." />
          </S.WrapperCardHeader>
          <S.WrapperForm>
            <FormProvider {...methods}>
              <Input
                textRef={emailRef}
                control={methods.control}
                name="email"
                label="E-mail"
                labelPlacement="filled"
                errorMessage={methods.formState.errors.email?.message}
                isRemoveSpecialCharacters={false}
              />
            </FormProvider>
          </S.WrapperForm>
          <Button
            title="Avançar"
            colorValue="secondary"
            size="medium"
            textWeightButton="bold"
            onPress={handleSubmitEmailContact}
            isLoading={isPendingSendContact}
          />
        </S.WrapperCard>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ContactEmailModalScreen;
