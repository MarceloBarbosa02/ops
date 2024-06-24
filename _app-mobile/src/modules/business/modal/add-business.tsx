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

const AddBusinessModalScreen = () => {
  const {
    step,
    isBusiness,
    methodsCreate,
    isPendingCreateCompany,
    handleNavigationClose,
    handleCreateCompany,
  } = useAddBusiness();

  return (
    <ModalScreen
      title={step === 'profile' ? 'Adicionar negócio' : 'Pessoa Física'}
      handleNavigateRight={handleNavigationClose}>
      <S.Container>
        <FormProvider {...methodsCreate}>
          <Input
            control={methodsCreate.control}
            name="nickname"
            label="Apelido"
            placeholder=" "
          />
          {isBusiness && (
            <S.WrapperBusiness>
              <CheckboxControl
                name="isDefault"
                control={methodsCreate.control}
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
        handleOnPressRight={handleCreateCompany}
        titleLeft="Cancelar"
        titleRight="Salvar dados"
        colorRight="success"
        isLoading={isPendingCreateCompany}
        startContent={<CheckIcon />}
      />
    </ModalScreen>
  );
};

export default AddBusinessModalScreen;
