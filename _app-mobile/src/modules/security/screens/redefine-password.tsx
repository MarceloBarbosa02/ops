import {
  Button,
  FooterCard,
  Input,
  StackScreen,
  Typography,
} from '@/shared/components';
import * as S from './security.styles';
import { CheckIcon, InfoIcon } from '@/shared/assets';
import { useSecurity } from './use-security';
import { FormProvider } from 'react-hook-form';
import { router } from 'expo-router';

const RefinePasswordScreen = () => {
  const {
    methodsRedefine,
    handleNavigationCancel,
    handleNavigationSelectMethods,
    handleChangePasswordRedefine,
  } = useSecurity();

  return (
    <StackScreen
      title="Redefinir senha"
      handleNavigateLeft={() => router.back()}>
      <S.Wrapper>
        <S.WrapperCard>
          <S.WrapperForm>
            <FormProvider {...methodsRedefine}>
              <Input
                control={methodsRedefine.control}
                name="currentPassword"
                label="Senha atual"
                placeholder=" "
                secureTextEntry
                isRemoveSpecialCharacters={false}
              />
              <Input
                control={methodsRedefine.control}
                name="newPassword"
                label="Nova senha"
                placeholder=" "
                secureTextEntry
                isRemoveSpecialCharacters={false}
              />
              <Input
                control={methodsRedefine.control}
                name="newPasswordConfirmation"
                label="Confirmação nova senha"
                placeholder=" "
                secureTextEntry
                isRemoveSpecialCharacters={false}
              />
            </FormProvider>
          </S.WrapperForm>
          <S.WrapperCardInfo>
            <InfoIcon />
            <Typography
              title="Ao redefinir sua senha, você sairá de todas as sessões da Kirvano
              ativas em outros dispositivos"
              size="small"
              style={{ width: '90%' }}
            />
          </S.WrapperCardInfo>
        </S.WrapperCard>
        <S.WrapperButtonFooter>
          <Button
            title="Esqueceu a senha?"
            variant="link"
            underline
            textWeightButton="regular"
            onPress={handleNavigationSelectMethods}
          />
        </S.WrapperButtonFooter>
      </S.Wrapper>
      <FooterCard
        titleLeft="Cancelar"
        titleRight="Redefinir senha"
        colorRight="success"
        startContent={<CheckIcon />}
        handleOnPressLeft={handleNavigationCancel}
        handleOnPressRight={handleChangePasswordRedefine}
      />
    </StackScreen>
  );
};

export default RefinePasswordScreen;
