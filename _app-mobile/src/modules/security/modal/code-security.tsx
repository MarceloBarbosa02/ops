import { useRef, useState } from 'react';
import * as S from '../screens/security.styles';
import { TextInput } from 'react-native';
import {
  Button,
  CountTimerCard,
  ModalScreen,
  PinCode,
  Typography,
} from '@/shared/components';
import { useSecurity } from '../screens/use-security';
import { useSecurityStore } from '../store/use-security-store';

const CodeSecurityModalScreen = () => {
  const pinRef = useRef<TextInput>(null);
  const [pinCode, setPinCode] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const {
    userData,
    handleConfirmCode,
    handleNavigationBackModal,
    handleNavigationMethod,
  } = useSecurity();
  const { contact } = useSecurityStore((store) => {
    return {
      contact: store.contact,
    };
  });

  return (
    <ModalScreen
      title="Esqueceu a senha"
      handleNavigateRight={handleNavigationBackModal}>
      <S.Wrapper>
        <S.WrapperCard>
          {contact === 'SMS' ? (
            <S.WrapperCardHeader>
              <Typography title="Digite o código que recebeu" weight="bold" />
              <S.WrapperTextGenerics>
                Enviamos um código para seu novo número com final{' '}
                <Typography
                  title={`${userData?.phoneNumber?.slice(-4)}`}
                  weight="bold"
                  variant="subtitle"
                  size="large"
                />
              </S.WrapperTextGenerics>
            </S.WrapperCardHeader>
          ) : (
            <S.WrapperCardHeader>
              <Typography title="Digite o código que recebeu" weight="bold" />
              <S.WrapperTextGenerics>
                Agora digite o código que enviamos para o seu e-mail.
              </S.WrapperTextGenerics>
            </S.WrapperCardHeader>
          )}

          <S.WrapperForm>
            <PinCode
              textPinRef={pinRef}
              changeCode={setPinCode}
              pin={pinCode === ''}
              isError={isError}
              sizePin={56}
            />
          </S.WrapperForm>
          <Button
            title="Verificar código"
            colorValue="secondary"
            size="medium"
            textWeightButton="bold"
            onPress={() => handleConfirmCode(pinCode)}
          />
        </S.WrapperCard>
        <S.WrapperButtonCode>
          {contact === 'SMS' ? (
            <CountTimerCard
              handleSubmit={() => handleNavigationMethod('PHONE', 'SMS')}
              title="Reenviar código"
            />
          ) : (
            <CountTimerCard
              handleSubmit={() => handleNavigationMethod('EMAIL', 'EMAIL')}
              title="Reenviar código"
            />
          )}
        </S.WrapperButtonCode>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default CodeSecurityModalScreen;
