import { IconLogo } from '@/shared';
import { AuthScreen, Button, Typography } from '@/shared/components';
import { ActivityIndicator } from 'react-native';

import * as S from './email-validation.styles';
import { useTheme } from 'styled-components/native';
import { useEmailValidation } from './use-email-validation';

const EmailValidationScreen = () => {
  const theme = useTheme();
  const { isPendingEmailValidation } = useEmailValidation();

  return (
    <AuthScreen>
      <S.Wrapper>
        <S.WrapperLogo>
          <IconLogo />
        </S.WrapperLogo>
        {isPendingEmailValidation && (
          <S.WrapperInfo>
            <ActivityIndicator color={theme.blue[600]} size={'large'} />
          </S.WrapperInfo>
        )}
      </S.Wrapper>
    </AuthScreen>
  );
};

export default EmailValidationScreen;
