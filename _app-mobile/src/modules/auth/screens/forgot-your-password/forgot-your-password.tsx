import { IconLogo } from '@/shared/assets/components';
import {
  AuthScreen,
  Button,
  Input,
  Separator,
  Typography,
} from '@/shared/components';
import { View } from 'react-native';
import { useForgotYourPassword } from './use-forgot-your-password';
import { FontAwesome6 } from '@expo/vector-icons';
import { FormProvider } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import * as S from './forgot-your-password.styles';

const ForgotYourPasswordScreen = () => {
  const colors = useTheme();
  const {
    methods,
    isPendingRequest,
    handleNavigationSignIn,
    handleSubmitPassword,
  } = useForgotYourPassword();

  return (
    <AuthScreen>
      <S.Wrapper>
        <View>
          <S.WrapperLogo>
            <IconLogo />
          </S.WrapperLogo>
          <S.WrapperInfo>
            <Typography
              title="Esqueceu a senha?"
              align="center"
              weight="bold"
              size="large"
            />
            <S.TitleText>
              Não se preocupe, nós vamos te ajudar. Digite o
              <Typography title=" e-mail cadastrado " weight="bold" />
              para prosseguir.
            </S.TitleText>
          </S.WrapperInfo>
          <Separator />
        </View>
        <S.WrapperForm>
          <FormProvider {...methods}>
            <Input
              control={methods.control}
              name="email"
              label="Seu e-mail"
              labelPlacement="filled"
              errorMessage={methods.formState.errors.email?.message as string}
              isRemoveSpecialCharacters={false}
            />
            <Button
              title="Recuperar"
              radius="full"
              size="large"
              textWeightButton="bold"
              isLoading={isPendingRequest}
              onPress={handleSubmitPassword}
            />
          </FormProvider>
        </S.WrapperForm>
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
          onPress={handleNavigationSignIn}
        />
      </S.WrapperButtonLogin>
    </AuthScreen>
  );
};

export default ForgotYourPasswordScreen;
