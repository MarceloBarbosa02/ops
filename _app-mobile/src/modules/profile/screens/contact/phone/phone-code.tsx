import { useRef, useState } from 'react';
import { TextInput } from 'react-native';

import {
  Button,
  CountTimerCard,
  ModalScreen,
  PinCode,
  Typography,
} from '@/shared/components';
import ErrorIcon from '@/shared/assets/images/svg/error.svg';

import { usePhone } from './use-phone';

import * as S from './phone.styles';

const ContactPhoneCodeModalScreen = () => {
  const pinRef = useRef<TextInput>(null);
  const [pinCode, setPinCode] = useState<string>('');
  const {
    phone,
    isError,
    isPendingUpdateCode,
    handleVerifyCode,
    handleNavigationBack,
    handleSubmitPhoneContact,
  } = usePhone();

  return (
    <ModalScreen
      title="Atualizar telefone"
      handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperCard>
          <S.WrapperCardHeader>
            <Typography title="Digite o código que recebeu" weight="bold" />
            <S.WrapperTextPhone>
              Enviamos um código para seu novo número com final{' '}
              <Typography
                title={phone.slice(-4)}
                weight="bold"
                variant="subtitle"
                size="large"
              />
            </S.WrapperTextPhone>
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
        <S.WrapperPhoneButtonCode>
          <CountTimerCard
            onSubmit={handleSubmitPhoneContact}
            title="Reenviar código"
          />
        </S.WrapperPhoneButtonCode>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ContactPhoneCodeModalScreen;
