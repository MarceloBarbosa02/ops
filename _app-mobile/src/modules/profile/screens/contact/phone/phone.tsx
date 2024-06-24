import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { FormProvider } from 'react-hook-form';

import {
  ActionSheet,
  Button,
  Input,
  ModalScreen,
  Typography,
} from '@/shared/components';

import { usePhone } from './use-phone';
import * as S from './phone.styles';
import { ddi_phone } from '@/modules/auth/screens/sign-up/phone.ddi';
import { useEffect, useRef } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { TextInputMaskMethods } from 'react-native-masked-text';
import { BottomSheetView } from '@gorhom/bottom-sheet';

const ContactPhoneModalScreen = () => {
  const theme = useTheme();
  const phoneRef = useRef<TextInputMaskMethods>(null);
  const {
    methods,
    optionCountry,
    refActionSheet,
    isPendingSendContact,
    handleIsOpen,
    handleIsClose,
    handleNavigationBack,
    handleSubmitPhoneContact,
  } = usePhone();

  useEffect(() => {
    phoneRef.current?.getElement().focus();
  }, []);

  return (
    <ModalScreen
      title="Atualizar telefone"
      handleNavigateRight={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperCard>
          <Typography
            title="Insira seu novo número de telefone"
            weight="bold"
          />
          <S.WrapperForm>
            <FormProvider {...methods}>
              <Input
                textRefMask={phoneRef}
                control={methods.control}
                name="phone"
                errorMessage={methods.formState.errors.phone?.message}
                mask
                type="custom"
                options={{
                  mask: optionCountry?.mask
                    ? optionCountry?.mask
                    : '999 999 999 999',
                }}
                keyboardType="phone-pad"
                startContent={
                  <S.WrapperPhone>
                    <S.WrapperPhoneInput
                      onPress={handleIsOpen}
                      activeOpacity={0.7}>
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
          </S.WrapperForm>
          <Button
            title="Avançar"
            colorValue="secondary"
            size="medium"
            textWeightButton="bold"
            onPress={handleSubmitPhoneContact}
            isLoading={isPendingSendContact}
          />
        </S.WrapperCard>
      </S.Wrapper>
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
    </ModalScreen>
  );
};

export default ContactPhoneModalScreen;
