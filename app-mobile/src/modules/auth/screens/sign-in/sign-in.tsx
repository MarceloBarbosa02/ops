import {
  Button,
  InputControl,
  LayoutAuthScreen,
  Typography,
} from '@/shared/components';
import { useSignIn } from './use-sign-in';
import { FormProvider } from 'react-hook-form';
import { View } from 'react-native';

const SignInScreen = () => {
  const {
    methods,
    isLoadingSignIn,
    handleSignIn,
    handleNavigateBack,
    handleNavigateSignUp,
  } = useSignIn();

  return (
    <LayoutAuthScreen handleNavigateLeft={handleNavigateBack}>
      <FormProvider {...methods}>
        <Typography title="Identifique-se" variant="subheading" weight="bold" />
        <View className="gap-8 py-4">
          <View className="gap-5">
            <InputControl
              name="email"
              control={methods.control}
              label="Email"
              errorMessage={methods.formState.errors.email?.message}
            />
            <InputControl
              name="password"
              label="Sua senha"
              secureTextEntry
              control={methods.control}
              errorMessage={methods.formState.errors.password?.message}
            />
          </View>
          <Button
            title="Entrar"
            size="medium"
            radius="full"
            onPress={handleSignIn}
            isLoading={isLoadingSignIn}
          />
          <View className="flex-row items-center justify-center gap-2">
            <Typography title="Primeira vez na Kirvano?" />
            <Button
              title="Criar conta"
              variant="link"
              onPress={handleNavigateSignUp}
            />
          </View>
        </View>
      </FormProvider>
    </LayoutAuthScreen>
  );
};

export default SignInScreen;
