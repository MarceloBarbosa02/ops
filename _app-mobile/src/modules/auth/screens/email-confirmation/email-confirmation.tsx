import { useEmailConfirmation } from './use-email-confirmation';

import * as S from './email-confirmation.styles';
import { AuthScreen, Button, Typography } from '@/shared/components';
import { IconLogo } from '@/shared/assets/components';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

const EmailValidationScreen = () => {
  const theme = useTheme();
  const { isPendingEmailValidation, respError, handleNavigation } =
    useEmailConfirmation();

  return (
    <AuthScreen>
      <S.Wrapper>
        <S.WrapperLogo>
          <IconLogo />
        </S.WrapperLogo>
        {respError ? (
          <>
            <S.WrapperInfo>
              <Typography title="Não foi possível confirmar seu e-mail" />
              <Typography title={respError} align="center" />
              <Typography title="Verifique sua caixa de e-mail" />
            </S.WrapperInfo>
            <Button title="Entendi" size="small" onPress={handleNavigation} />
          </>
        ) : (
          <S.WrapperInfo>
            {isPendingEmailValidation && (
              <ActivityIndicator color={theme.blue[600]} size={'large'} />
            )}
            <Typography title="Confirmando e-mail" />
            <Typography title="Aguarde, estamos confirmando seu email." />
          </S.WrapperInfo>
        )}
      </S.Wrapper>
    </AuthScreen>
  );
};

export default EmailValidationScreen;
