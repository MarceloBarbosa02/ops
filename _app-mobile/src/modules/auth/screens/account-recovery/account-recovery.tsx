import { FontAwesome6 } from '@expo/vector-icons';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { IconLogo } from '@/shared/assets/components';
import {
  AuthScreen,
  Button,
  CountTimerCard,
  Separator,
  Typography,
} from '@/shared/components';
import { InfoIconCard } from '@/shared/assets/components/finances';

import { useAccountRecovery } from './use-account-recovery';
import * as S from './account-recovery.styles';

const AccountRecoveryScreen = () => {
  const colors = useTheme();
  const { email, handleNavigationBack, handleSubmitUserForgotPassword } =
    useAccountRecovery();

  return (
    <AuthScreen>
      <View>
        <S.Wrapper>
          <S.WrapperLogo>
            <IconLogo />
          </S.WrapperLogo>
          <S.WrapperInfo>
            <Typography
              title="Recuperação de conta"
              align="center"
              weight="bold"
              size="large"
            />
            <Typography
              title="Enviamos um link de recuperação para o e-mail:"
              align="center"
              colorValue="neutral-regular"
            />
          </S.WrapperInfo>
          <S.WrapperInfoContent>
            <View style={{ gap: 8 }}>
              <S.WrapperInfoEmail>
                <Typography
                  title="E-mail"
                  size="medium"
                  weight="regular"
                  variant="subtitle"
                />
                <Typography title={email} size="small" weight="regular" />
              </S.WrapperInfoEmail>
              <CountTimerCard
                onSubmit={handleSubmitUserForgotPassword}
                isStart={false}
              />
            </View>
            <Separator />
          </S.WrapperInfoContent>
          <S.WrapperCard>
            <InfoIconCard />
            <Typography
              title={`Caso não encontre na sua caixa de entrada. Verifique a caixa de spam ou lixo eletrônico no seu e-mail.`}
              size="small"
              weight="regular"
              style={{ width: '85%' }}
            />
          </S.WrapperCard>
        </S.Wrapper>
        <S.WrapperButtonLogin>
          <Button
            title="Voltar para o login"
            variant="link"
            startContent={
              <FontAwesome6
                name="arrow-left"
                size={14}
                color={colors.blue[500]}
              />
            }
            underline
            textWeightButton="regular"
            onPress={handleNavigationBack}
          />
        </S.WrapperButtonLogin>
      </View>
    </AuthScreen>
  );
};

export default AccountRecoveryScreen;
