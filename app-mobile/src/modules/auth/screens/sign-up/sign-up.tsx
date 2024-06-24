import { FormProvider } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import {
  Button,
  CheckboxControl,
  InputControl,
  LayoutAuthScreen,
  Separator,
  Typography,
} from '@/shared/components';
import { ErrorIcon } from '@/shared/assets/components';

import { useSignUp } from './use-sign-up';
import { PasswordsBar } from '../../components/cards';

const SignUpScreen = () => {
  const {
    methods,
    password,
    maskCustom,
    // isLoadingSignUp,
    handleSignUp,
    handleLinkNavigation,
    handleNavigateBack,
    handleNavigateSignIn,
  } = useSignUp();

  return (
    <LayoutAuthScreen handleNavigateLeft={handleNavigateBack}>
      <FormProvider {...methods}>
        <Typography title="Criar conta" variant="subheading" weight="bold" />
        <View className="gap-5 py-4">
          <InputControl
            name="name"
            control={methods.control}
            label="Primeiro e último nome"
            errorMessage={methods.formState.errors.name?.message}
          />
          <InputControl
            name="new_email"
            label="E-mail"
            control={methods.control}
            errorMessage={methods.formState.errors.new_email?.message}
          />
          <InputControl
            name="phone"
            type="custom"
            options={{ mask: maskCustom }}
            labelPlacement="phone"
            placeholder={maskCustom.replace(/9/g, '0')}
            maxLength={maskCustom.length}
            control={methods.control}
            errorMessage={methods.formState.errors.phone?.message}
            keyboardType="phone-pad"
          />
          <Separator />
          <InputControl
            isErrorMessage
            secureTextEntry
            name="new_password"
            label="Crie uma senha"
            control={methods.control}
            errorMessage={methods.formState.errors.new_password?.message}
          />
          {password && <PasswordsBar password={password} />}
          {methods.formState.errors.new_password?.message && (
            <View className="flex-row items-center -mt-3">
              <Typography
                title={`${methods.formState.errors.new_password?.message}`}
                variant="caption"
                size="small"
                color="danger"
                className="w-[90%]"
              />
            </View>
          )}
          <InputControl
            secureTextEntry
            name="password_confirm"
            label="Repita a nova senha"
            control={methods.control}
            errorMessage={methods.formState.errors.password_confirm?.message}
          />
        </View>
        <View className="gap-8 mt-8">
          <CheckboxControl
            control={methods.control}
            name="userTermsReadAt"
            size="small"
            colorValue="primary"
            errorMessage={methods.formState.errors.userTermsReadAt?.message}
            label={
              <Text className="w-[90%] font-Satoshi-Regular text-xs">
                Eu li e aceito os{' '}
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleLinkNavigation('terms')}
                  style={{ marginBottom: -4, paddingHorizontal: 2 }}>
                  <Typography
                    title="termos"
                    color="primary"
                    variant="caption"
                  />
                </TouchableOpacity>
                de uso, termos de{' '}
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleLinkNavigation('license')}
                  style={{ marginBottom: -4, paddingHorizontal: 2 }}>
                  <Typography
                    title="licença de uso"
                    color="primary"
                    variant="caption"
                  />
                </TouchableOpacity>
                de software e{' '}
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleLinkNavigation('privacy')}
                  style={{ marginBottom: -4, paddingHorizontal: 2 }}>
                  <Typography
                    title="política"
                    color="primary"
                    variant="caption"
                  />
                </TouchableOpacity>
                de conteúdo da Kirvano.
              </Text>
            }
          />
          <Button
            title="Criar conta grátis"
            size="medium"
            radius="full"
            onPress={handleSignUp}
            // isLoading={isLoadingSignUp}
          />
          <View className="flex-row items-center justify-center gap-2">
            <Typography title="Já tem uma conta na Kirvano?" />
            <Button
              title="Acesse"
              variant="link"
              onPress={handleNavigateSignIn}
            />
          </View>
        </View>
      </FormProvider>
    </LayoutAuthScreen>
  );
};

export default SignUpScreen;
