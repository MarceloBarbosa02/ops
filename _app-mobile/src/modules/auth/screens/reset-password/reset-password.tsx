import { IconLogo } from '@/shared/assets/components';
import {
  AuthScreen,
  Button,
  Input,
  Separator,
  Typography,
} from '@/shared/components';
import { View } from 'react-native';
import { useResetPassword } from './use-reset-password';
import { FormProvider } from 'react-hook-form';
import { PasswordsBar } from '../../components/cards/passwords/passwords.bar';

import * as S from './reset-password.styles';

const ResetPasswordScreen = () => {
  const { methods, password, isPendingResetPassword, handleSubmitPassword } =
    useResetPassword();

  return (
    <AuthScreen>
      <S.Wrapper>
        <S.WrapperLogo>
          <IconLogo />
        </S.WrapperLogo>
        <View style={{ gap: 24, paddingBottom: 24 }}>
          <S.WrapperInfo>
            <Typography
              title="Criar nova senha"
              align="center"
              weight="bold"
              size="large"
            />
            <Typography
              title="Digite a nova senha de acesso da sua conta."
              size="small"
            />
          </S.WrapperInfo>
          <Separator />
        </View>
        <S.WrapperForm>
          <FormProvider {...methods}>
            <View style={{ width: '100%', marginBottom: 16, marginTop: 24 }}>
              <Input
                control={methods.control}
                name="new_password"
                label="Senha"
                labelPlacement="filled"
                secureTextEntry
                errorMessage={methods.formState.errors.new_password?.message}
                isErrorMessage
                isRemoveSpecialCharacters={false}
              />
              {password && <PasswordsBar password={password} />}
              {methods.formState.errors.new_password?.message && (
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 16,
                  }}>
                  {/* <Feather name="info" size={12} color={theme.red[600]} /> */}
                  <Typography
                    title={`${methods.formState.errors.new_password?.message}`}
                    variant="subtitle"
                    size="small"
                    colorValue="danger"
                    style={{ width: '85%' }}
                  />
                </View>
              )}
            </View>

            <Input
              control={methods.control}
              name="password_confirm"
              label="Confirmar senha"
              labelPlacement="filled"
              secureTextEntry
              errorMessage={methods.formState.errors.password_confirm?.message}
              isRemoveSpecialCharacters={false}
            />
            <Button
              title="Avançar"
              radius="full"
              size="large"
              isLoading={isPendingResetPassword}
              textWeightButton="bold"
              onPress={handleSubmitPassword}
            />
          </FormProvider>
        </S.WrapperForm>
      </S.Wrapper>
    </AuthScreen>
  );
};

export default ResetPasswordScreen;
