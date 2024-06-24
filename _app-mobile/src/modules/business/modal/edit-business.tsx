import { FormProvider } from 'react-hook-form';

import {
  Checkbox,
  CheckboxControl,
  FooterCard,
  Input,
  ModalScreen,
} from '@/shared/components';
import { CheckIcon } from '@/shared/assets/components';

import { useAddBusiness } from './use-add-business';
import { AddressCard, IdentifyCard, PaymentCard } from '../components';

import * as S from './business.modal.styles';

const EditBusinessModalScreen = () => {
  const {
    methodsEdit,
    isBusiness,
    isPendingUpdateNicknameCompany,
    handleEditCompany,
    handleNavigationClose,
  } = useAddBusiness();

  return (
    <ModalScreen
      title="Editar negócio"
      handleNavigateRight={handleNavigationClose}>
      <S.Container>
        <FormProvider {...methodsEdit}>
          <Input
            control={methodsEdit.control}
            name="nickname"
            label="Apelido"
            placeholder=" "
          />
          {isBusiness && (
            <S.WrapperBusiness>
              <CheckboxControl
                name="isDefault"
                control={methodsEdit.control}
                label="Tornar este meu negócio principal."
              />
            </S.WrapperBusiness>
          )}
          <IdentifyCard />
          <AddressCard />
          <PaymentCard />
        </FormProvider>
      </S.Container>
      <FooterCard
        handleOnPressLeft={handleNavigationClose}
        handleOnPressRight={handleEditCompany}
        titleLeft="Cancelar"
        titleRight="Salvar dados"
        colorRight="success"
        isLoading={isPendingUpdateNicknameCompany}
        startContent={<CheckIcon />}
      />
    </ModalScreen>
  );
};

export default EditBusinessModalScreen;
