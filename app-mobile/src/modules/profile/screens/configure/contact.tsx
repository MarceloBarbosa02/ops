import { View } from 'react-native';
import { FormProvider } from 'react-hook-form';

import { Button, LayoutStackScreen } from '@/shared/components';
import { IdentifyConfig } from '@/shared/components/headers';

import { useContact } from '../../components/form/contact/use-contact';
import { ContactPhoneCard } from '../../components';
import ContactSelectMethodsCard from '../../components/form/contact/select-methods';
import ContactCodeCard from '../../components/form/contact/code';
import { ChevronRightIcon } from '@/shared/assets';

function ConfigureContactScreen() {
  const { methods, optionSteps, handleNavigationCancel, handleSubmitPhone } =
    useContact();

  return (
    <LayoutStackScreen
      title="Configure seu perfil"
      isShowFooterBottom={optionSteps !== 'methods'}
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
          title={optionSteps === 'code' ? 'Concluir' : 'Avançar'}
          onPress={handleSubmitPhone}
          size="medium"
          sizeWidth="size50"
          radius="full"
          colorValue={optionSteps === 'code' ? 'success' : 'primary'}
          endContent={optionSteps !== 'code' ? <ChevronRightIcon /> : <></>}
        />
      }>
      <View className="flex-1 gap-4 p-4">
        <IdentifyConfig step="step2" />
        <FormProvider {...methods}>
          {optionSteps === 'phone' && <ContactPhoneCard />}
          {optionSteps === 'methods' && <ContactSelectMethodsCard />}
          {optionSteps === 'code' && <ContactCodeCard />}
        </FormProvider>
      </View>
    </LayoutStackScreen>
  );
}

export default ConfigureContactScreen;
