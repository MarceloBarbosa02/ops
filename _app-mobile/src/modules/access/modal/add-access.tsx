import { FooterCard, ModalScreen, Typography } from '@/shared/components';
import * as S from './access-modal.styles';
import { AccessStatusForm, EmployeeDataForm } from '../components';
import { useAccessForm } from './use-access-form';
import { FormProvider } from 'react-hook-form';
import { CheckIcon } from '@/shared/assets';

const AddAccessScreen = () => {
  const { methods, handleNavigationBack } = useAccessForm();

  return (
    <ModalScreen
      title="Adicionar acesso"
      handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <FormProvider {...methods}>
          <EmployeeDataForm />
          <AccessStatusForm />
        </FormProvider>
      </S.Wrapper>
      <FooterCard
        titleLeft="Cancelar"
        titleRight="Salvar dados"
        colorRight="success"
        startContent={<CheckIcon />}
        handleOnPressLeft={handleNavigationBack}
        handleOnPressRight={() => {}}
      />
    </ModalScreen>
  );
};

export default AddAccessScreen;
