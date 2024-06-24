import { FormProvider } from 'react-hook-form';
import { View } from 'react-native';

import { FooterCard, StackStepsScreen } from '@/shared/components';
import { ArrowUpdateIcon } from '@/shared/assets/components/generics';

import {
  ProfileAddressCard,
  ProfileIdentifyCard,
  ProgressCard,
  UpdateProfileCardsInfo,
} from '../../components';
import { useConfigure } from './use-configure';

import * as S from './configure.styles';

const ConfigureProfileScreen = () => {
  const {
    methods,
    isPendingUpdateProfile,
    handleSubmitUser,
    handleOutConfigure,
    handleNavigationBack,
  } = useConfigure();

  return (
    <StackStepsScreen
      title="Configure seu perfil"
      handleNavigateLeft={handleNavigationBack}
      handleNavigateRight={handleOutConfigure}>
      <FormProvider {...methods}>
        <View style={{ gap: 4, marginTop: 12 }}>
          <ProgressCard />
          <ProfileIdentifyCard />
          <ProfileAddressCard />
          <UpdateProfileCardsInfo />
        </View>
        <FooterCard
          handleOnPressLeft={handleNavigationBack}
          handleOnPressRight={handleSubmitUser}
          titleLeft="Cancelar"
          titleRight="Próxima etapa"
          colorRight="success"
          isLoading={isPendingUpdateProfile}
          endContent={<ArrowUpdateIcon isActive={!isPendingUpdateProfile} />}
        />
      </FormProvider>
    </StackStepsScreen>
  );
};

export default ConfigureProfileScreen;
