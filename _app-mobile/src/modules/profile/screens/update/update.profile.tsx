import { useUpdateProfile } from './use-update.profile';
import { FormProvider } from 'react-hook-form';
import { router } from 'expo-router';

import { CheckIcon } from '@/shared/assets';
import { FooterCard, StackScreen } from '@/shared/components';
import {
  ContactCards,
  ProfileAddressCard,
  ProfileIdentifyCard,
  UpdateProfileCardsInfo,
} from '../../components';
import { BiometricCard } from '../../components/cards/validate-biometric/validate-biometric';

import * as S from './update.profile.styles';

const UpdateProfileScreen = () => {
  const { methods, isPending, handleNavigationBack, handleSubmitUser } =
    useUpdateProfile();

  return (
    <StackScreen
      title="Atualizar perfil"
      handleNavigateLeft={handleNavigationBack}>
      <FormProvider {...methods}>
        <BiometricCard />
        <ProfileIdentifyCard />
        <S.WrapperContact>
          <ContactCards type="PHONE" />
          <ContactCards type="EMAIL" />
        </S.WrapperContact>
        <ProfileAddressCard />
        <UpdateProfileCardsInfo />
        <FooterCard
          handleOnPressLeft={handleNavigationBack}
          handleOnPressRight={handleSubmitUser}
          titleLeft="Cancelar"
          titleRight="Salvar dados"
          colorRight="success"
          isLoading={isPending}
          startContent={<CheckIcon />}
        />
      </FormProvider>
    </StackScreen>
  );
};

export default UpdateProfileScreen;
