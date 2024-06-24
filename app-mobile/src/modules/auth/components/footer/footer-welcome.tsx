import { Button } from '@/shared/components';
import { router } from 'expo-router';
import { View } from 'react-native';

const FooterWelcome = () => {
  const handleNavigationSignUp = () => {
    router.push('/(auth)/sign-up');
  };

  const handleNavigationSignIn = () => {
    router.push('/(auth)/sign-in');
  };

  return (
    <View className="w-full z-50 absolute bottom-6 flex-row justify-between items-center gap-6 p-4 ">
      <Button
        title="Criar conta"
        size="medium"
        radius="full"
        sizeWidth="size50"
        onPress={handleNavigationSignUp}
      />
      <Button
        title="Entrar"
        size="medium"
        radius="full"
        sizeWidth="size50"
        colorValue="whiteBlack"
        onPress={handleNavigationSignIn}
      />
    </View>
  );
};

export default FooterWelcome;
