import { FormProvider } from 'react-hook-form';

import {
  AuthScreen,
  Button,
  Input,
  Separator,
  Typography,
} from '@/shared/components';
import { IconLogo } from '@/shared/assets/components';

import { useSignIn } from './use-sign-in';

import * as S from './sign-in.styles';

const SignInScreen = () => {
  const {
    methods,
    isLoadingSignIn,
    handleSubmitUser,
    handleNavigationSignUp,
    handleNavigationForgotPassword,
  } = useSignIn();

  return (
    <AuthScreen>
      <S.Wrapper>
        <FormProvider {...methods}>
          <S.WrapperLogo>
            <IconLogo />
          </S.WrapperLogo>
          <S.WrapperForm>
            <Input
              control={methods.control}
              name="email"
              label="E-mail"
              labelPlacement="filled"
              keyboardType="email-address"
              errorMessage={methods.formState.errors?.email?.message}
              isRemoveSpecialCharacters={false}
            />
            <Input
              control={methods.control}
              name="password"
              label="Senha"
              labelPlacement="filled"
              errorMessage={methods.formState.errors?.password?.message}
              secureTextEntry
              isRemoveSpecialCharacters={false}
            />
          </S.WrapperForm>
          <S.WrapperButtons>
            <S.WrapperButton>
              <Button
                title="Esqueceu sua senha?"
                variant="link"
                textWeightButton="regular"
                onPress={handleNavigationForgotPassword}
              />
            </S.WrapperButton>
            <Separator />
            <Button
              title="Acessar minha conta"
              radius="full"
              size="large"
              isLoading={isLoadingSignIn}
              textWeightButton="bold"
              onPress={handleSubmitUser}
            />
          </S.WrapperButtons>
        </FormProvider>
      </S.Wrapper>
      <S.WrapperButtonRegister>
        <Typography title="Não tem uma conta?" size="small" />
        <Button
          title="Cadastrar-se"
          variant="link"
          onPress={handleNavigationSignUp}
          underline
        />
      </S.WrapperButtonRegister>
    </AuthScreen>
  );
};

export default SignInScreen;
