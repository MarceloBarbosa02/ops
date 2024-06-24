import { FontAwesome6 } from '@expo/vector-icons';
import { View } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { IconLogo } from '@/shared/assets/components';
import {
  AuthScreen,
  Button,
  CountTimerCard,
  Input,
  Separator,
  Typography,
} from '@/shared/components';
import { InfoIconCard } from '@/shared/assets/components/finances';

import { useCompleteYourRegistration } from './use-complete-your-registration';

import * as S from './complete-your-registration.styles';

const CompleteYourRegistrationScreen = () => {
  const colors = useTheme();
  const {
    user,
    methods,
    isActive,
    emailRef,
    isLoading,
    handleResendEmail,
    handleChangeOption,
    handleNavigationBack,
  } = useCompleteYourRegistration();

  return (
    <AuthScreen>
      <View>
        <S.Wrapper>
          <S.WrapperLogo>
            <IconLogo />
          </S.WrapperLogo>
          <S.Container>
            <Typography
              title="Finalize seu cadastro"
              align="center"
              weight="bold"
              size="large"
            />
            <Typography
              title="Para isso siga as instruções enviadas para:"
              colorValue="neutral-regular"
            />
            <View>
              <FormProvider {...methods}>
                <View>
                  {isActive ? (
                    <Input
                      textRef={emailRef}
                      control={methods.control}
                      name="new_email"
                      label="E-mail"
                      labelPlacement="inside"
                      editable={false}
                      endContent={
                        <Button
                          title="Editar"
                          variant="link"
                          onPress={handleChangeOption}
                          textWeightButton="bold"
                        />
                      }
                      isRemoveSpecialCharacters={false}
                    />
                  ) : (
                    <Input
                      textRef={emailRef}
                      control={methods.control}
                      name="new_email"
                      label="E-mail"
                      labelPlacement="inside"
                      isRemoveSpecialCharacters={false}
                    />
                  )}
                  <S.WrapperCount>
                    <CountTimerCard
                      onSubmit={handleResendEmail}
                      isStart={false}
                    />
                  </S.WrapperCount>
                </View>
              </FormProvider>
            </View>
            <Separator />
          </S.Container>
          <S.WrapperCard>
            <InfoIconCard />
            <Typography
              title={`Caso não encontre na sua caixa de entrada. Verifique a caixa de spam ou lixo eletrônico no seu e-mail.`}
              size="small"
              weight="regular"
              style={{ width: '85%' }}
            />
          </S.WrapperCard>
        </S.Wrapper>
        <S.WrapperButton>
          <Button
            title="Voltar para criação de conta"
            variant="link"
            startContent={
              <FontAwesome6
                name="arrow-left"
                size={14}
                color={colors.blue[500]}
              />
            }
            underline
            textWeightButton="regular"
            onPress={handleNavigationBack}
          />
        </S.WrapperButton>
      </View>
    </AuthScreen>
  );
};

export default CompleteYourRegistrationScreen;
