import { ScrollView, TextInput, View } from 'react-native';
import { useMemo, useRef, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import {
  ActionSheet,
  Badge,
  Button,
  CountTimerCard,
  Input,
  PinCode,
  StackStepsScreen,
  Typography,
} from '@/shared/components';
import { ddi_phone } from '@/modules/auth/screens/sign-up/phone.ddi';
import ErrorIcon from '@/shared/assets/images/svg/error.svg';

import { ProgressCard } from '../../components';
import { useConfigure } from './use-configure';

import * as S from './configure.styles';

const ConfigureContactsScreen = () => {
  const theme = useTheme();
  const pinRef = useRef<TextInput>(null);
  const [pinCode, setPinCode] = useState<string>('');
  const {
    steps,
    phone,
    isError,
    methods,
    userData,
    optionCountry,
    refActionSheet,
    isPendingUpdateCode,
    isPendingSendContact,
    handleIsOpen,
    handleIsClose,
    handleVerifyCode,
    handleOutConfigure,
    handleRequestPhone,
    handleNavigationOut,
    handleNavigationBack,
    handleNavigationSuccess,
  } = useConfigure();

  const contactPhone = useMemo(() => {
    if (steps === 'code') {
      return (
        <>
          <S.WrapperCard>
            <Typography title="Validar telefone" size="large" weight="bold" />
            <S.TitleText>
              Digite o código enviado para o seu número com final{' '}
              <Typography
                title={phone.slice(-4)}
                variant="subtitle"
                weight="bold"
                size="large"
              />
            </S.TitleText>
            <S.WrapperForm>
              {isError ? (
                <S.WrapperError>
                  <ErrorIcon />
                  <Typography
                    title="O código está incorreto"
                    colorValue="danger"
                  />
                </S.WrapperError>
              ) : (
                <Typography title="Código de verificação" />
              )}
              <PinCode
                textPinRef={pinRef}
                changeCode={setPinCode}
                pin={pinCode === ''}
                isError={Boolean(isError)}
                keyboardType="numeric"
                sizePin={56}
              />
            </S.WrapperForm>
            <Button
              title="Concluir"
              colorValue="success"
              size="medium"
              textWeightButton="bold"
              onPress={() => handleVerifyCode(pinCode)}
              isLoading={isPendingUpdateCode}
            />
          </S.WrapperCard>
          <S.WrapperCount>
            <CountTimerCard
              title="Reenviar código"
              onSubmit={handleRequestPhone}
            />
          </S.WrapperCount>
        </>
      );
    }
    if (steps === 'success') {
      return (
        <S.WrapperEmail>
          <View>
            <Typography title="Telefone" size="medium" weight="bold" />
            <Typography
              title={`Atual: ${userData?.phoneNumber}`}
              variant="subtitle"
            />
          </View>
          <Badge label="Validado" colorValue="success" typeBorder="solid" />
        </S.WrapperEmail>
      );
    }

    return (
      <S.WrapperCard>
        <Typography title="Validar telefone" size="large" weight="bold" />
        <S.TitleText>
          <Typography
            title="Mantenha ou altere seu telefone informado no cadastro."
            variant="subtitle"
            colorValue="neutral-regular"
          />
        </S.TitleText>
        <FormProvider {...methods}>
          <Input
            control={methods.control}
            name="phoneNumber"
            mask
            type="custom"
            options={{
              mask: optionCountry?.mask
                ? optionCountry?.mask
                : '999 999 999 999',
            }}
            labelPlacement="filled"
            errorMessage={
              methods.formState.errors.phoneNumber?.message as string
            }
            startContent={
              <S.WrapperPhone>
                <S.WrapperPhoneInput onPress={handleIsOpen} activeOpacity={0.7}>
                  <Typography title={`${optionCountry.flag ?? ''}`} />
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={20}
                    color={theme.gray[500]}
                  />
                </S.WrapperPhoneInput>
                <Typography
                  title={`+${optionCountry.value}`}
                  colorValue="neutral-regular"
                />
              </S.WrapperPhone>
            }
          />
        </FormProvider>
        <Button
          title="Avançar"
          size="medium"
          colorValue="secondary"
          textWeightButton="bold"
          isLoading={isPendingSendContact}
          disabled={isPendingSendContact}
          onPress={handleRequestPhone}
        />
        <ActionSheet
          bottomSheetRef={refActionSheet}
          title="DDI países"
          indexOpen={2}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingVertical: 8,
              paddingBottom: 384,
            }}>
            <S.WrapperModal>
              {ddi_phone.map((item) => (
                <S.WrapperModalItem
                  key={item.label}
                  onPress={() => handleIsClose(item)}>
                  <Typography title={`${item.flag}`} />
                  <Typography
                    title={item.label}
                    weight={
                      item.value === optionCountry.value ? 'bold' : 'regular'
                    }
                  />
                  {item.value === optionCountry.value && (
                    <AntDesign name="check" size={16} color={theme.gray[300]} />
                  )}
                </S.WrapperModalItem>
              ))}
            </S.WrapperModal>
          </ScrollView>
        </ActionSheet>
      </S.WrapperCard>
    );
  }, [
    steps,
    pinCode,
    isError,
    userData,
    optionCountry,
    refActionSheet,
    isPendingUpdateCode,
    isPendingSendContact,
  ]);

  return (
    <StackStepsScreen
      title="Configure seu perfil"
      handleNavigateLeft={handleNavigationBack}
      handleNavigateRight={handleOutConfigure}>
      <S.WrapperContact>
        <View style={{ gap: 24 }}>
          <S.WrapperHeader>
            <Typography title="Contatos" weight="bold" size="large" />
          </S.WrapperHeader>
          <ProgressCard progress={50} />
          <S.WrapperContent>
            <S.WrapperEmail>
              <View>
                <Typography title="E-mail" size="medium" weight="bold" />
                <Typography
                  title={`Atual: ${userData?.email}`}
                  variant="subtitle"
                />
              </View>
              <Badge label="Validado" colorValue="success" typeBorder="solid" />
            </S.WrapperEmail>
            {contactPhone}
          </S.WrapperContent>
        </View>
        {steps === 'success' && (
          <S.WrapperFooter>
            <Button
              title="Voltar"
              colorValue="secondary"
              variant="link"
              size="medium"
              textWeightButton="bold"
              sizeWidth={48}
              onPress={handleNavigationOut}
            />
            <Button
              title="Concluir"
              colorValue="success"
              size="medium"
              textWeightButton="bold"
              sizeWidth={48}
              onPress={handleNavigationSuccess}
            />
          </S.WrapperFooter>
        )}
      </S.WrapperContact>
    </StackStepsScreen>
  );
};

export default ConfigureContactsScreen;
