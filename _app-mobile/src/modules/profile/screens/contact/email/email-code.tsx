import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import {
  Button,
  CountTimerCard,
  ModalScreen,
  PinCode,
  Typography,
} from '@/shared/components';
import ErrorIcon from '@/shared/assets/images/svg/error.svg';

import { useEmail } from './use-email';

import * as S from './email.styles';

const ContactEmailCodeModalScreen = () => {
  const pinRef = useRef<TextInput>(null);
  const [pinCode, setPinCode] = useState<string>('');
  const {
    email,
    isError,
    isPendingUpdateCode,
    handleVerifyCode,
    handleNavigationBack,
    handleSubmitEmailContact,
  } = useEmail();

  useEffect(() => {
    pinRef.current?.focus();
  }, []);

  return (
    <ModalScreen
      title="Atualizar e-mail"
      handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperCard>
          <S.WrapperCardHeader>
            <Typography title="Digite o código que recebeu" weight="bold" />
            <S.WrapperTextEmail>
              Enviamos um código para o seu novo e-mail:{' '}
              <Typography
                title={email}
                weight="bold"
                variant="subtitle"
                size="large"
              />
            </S.WrapperTextEmail>
          </S.WrapperCardHeader>

          <S.WrapperForm>
            {isError ? (
              <S.WrapperError>
                <ErrorIcon />
                <Typography
                  title="O código está incorreto"
                  colorValue="danger"
                />
              </S.WrapperError>
            ) : (
              <Typography title="Código de verificação" />
            )}
            <PinCode
              textPinRef={pinRef}
              changeCode={setPinCode}
              pin={pinCode === ''}
              isError={!!isError}
              keyboardType="numeric"
              sizePin={56}
            />
          </S.WrapperForm>
          <Button
            title="Verificar código"
            colorValue="secondary"
            size="medium"
            textWeightButton="bold"
            onPress={() => handleVerifyCode(pinCode)}
            isLoading={isPendingUpdateCode}
          />
        </S.WrapperCard>
        <S.WrapperEmailButtonCode>
          <CountTimerCard onSubmit={handleSubmitEmailContact} />
        </S.WrapperEmailButtonCode>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ContactEmailCodeModalScreen;
