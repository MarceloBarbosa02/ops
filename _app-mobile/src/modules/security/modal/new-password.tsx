import { FormProvider } from 'react-hook-form';

import {
  FooterCard,
  Input,
  ModalScreen,
  Typography,
} from '@/shared/components';
import { CheckIcon } from '@/shared/assets';

import { useSecurity } from '../screens/use-security';

import * as S from '../screens/security.styles';

const NewPasswordModalScreen = () => {
  const {
    methodsForgot,
    handleNavigationCancel,
    handleChangePasswordForgot,
    handleNavigationBackModal,
  } = useSecurity();

  return (
    <ModalScreen
      title="Esqueceu a senha"
      handleNavigateRight={handleNavigationBackModal}>
      <S.Wrapper>
        <S.WrapperCard>
          <Typography title="Digite sua nova senha" weight="bold" />
          <S.WrapperForm>
            <FormProvider {...methodsForgot}>
              <Input
                control={methodsForgot.control}
                name="newPassword"
                label="Nova senha"
                placeholder=" "
                secureTextEntry
                errorMessage={
                  methodsForgot.formState.errors.newPassword?.message
                }
                isRemoveSpecialCharacters={false}
              />
              <Input
                control={methodsForgot.control}
                name="newPasswordConfirmation"
                label="Confirmar nova senha"
                placeholder=" "
                secureTextEntry
                errorMessage={
                  methodsForgot.formState.errors.newPasswordConfirmation
                    ?.message
                }
                isRemoveSpecialCharacters={false}
              />
            </FormProvider>
          </S.WrapperForm>
        </S.WrapperCard>
      </S.Wrapper>
      <FooterCard
        titleLeft="Cancelar"
        titleRight="Redefinir senha"
        colorRight="success"
        startContent={<CheckIcon />}
        handleOnPressLeft={handleNavigationCancel}
        handleOnPressRight={handleChangePasswordForgot}
      />
    </ModalScreen>
  );
};

export default NewPasswordModalScreen;
