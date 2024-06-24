import { View } from 'react-native';
import { FormProvider } from 'react-hook-form';

import { Button, LayoutStackScreen } from '@/shared/components';
import { IdentifyConfig } from '@/shared/components/headers';

import { ProfileAddressCard, ProfileIdentifyCard } from '../../components/form';

import { useConfigure } from './use-configure';
import { ChevronRightIcon } from '@/shared/assets';

function ConfigureProfileScreen() {
  const { methods, handleSubmitUser, handleNavigationCancel } = useConfigure();

  return (
    <LayoutStackScreen
      title="Configure seu perfil"
      startContent={
        <Button
          title="Cancelar"
          onPress={handleNavigationCancel}
          colorValue="whiteBlack"
          size="medium"
          radius="full"
          sizeWidth="size50"
        />
      }
      endContent={
        <Button
          title="Avançar"
          onPress={handleSubmitUser}
          size="medium"
          sizeWidth="size50"
          radius="full"
          endContent={<ChevronRightIcon />}
        />
      }>
      <View className="flex-1 gap-4 p-4">
        <IdentifyConfig step="step1" />
        <FormProvider {...methods}>
          <ProfileIdentifyCard />
          <ProfileAddressCard />
        </FormProvider>
      </View>
    </LayoutStackScreen>
  );
}

export default ConfigureProfileScreen;
