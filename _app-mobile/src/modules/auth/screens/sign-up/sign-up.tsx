import { FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { ScrollView } from 'moti';

import { IconLogo } from '@/shared/assets/components';
import {
  ActionSheet,
  AuthScreen,
  Button,
  Input,
  Separator,
  Typography,
} from '@/shared/components';

import { useSignUp } from './use-sign-up';
import { ddi_phone } from './phone.ddi';
import { PasswordsBar } from '../../components/cards/passwords/passwords.bar';

import * as S from './sign-up.styles';

const SignUpScreen = () => {
  const theme = useTheme();
  const {
    methods,
    visible,
    password,
    locationY,
    maskCustom,
    optionCountry,
    refActionSheet,
    isPendingCurrentUser,
    handleIsOpen,
    handleIsClose,
    handleSubmitNewUser,
    handleNavigationSignIn,
    handleNavigationTermOfUSe,
  } = useSignUp();

  return (
    <AuthScreen>
      <View style={{ flex: 1 }}>
        <S.Wrapper>
          <S.WrapperLogo>
            <IconLogo />
          </S.WrapperLogo>
          <S.WrapperForm>
            <FormProvider {...methods}>
              <Input
                control={methods.control}
                name="name"
                label="Nome"
                labelPlacement="filled"
                errorMessage={methods.formState.errors.name?.message}
              />
              <Input
                control={methods.control}
                name="last_name"
                label="Sobrenome"
                labelPlacement="filled"
                errorMessage={methods.formState.errors.last_name?.message}
              />
              <Input
                control={methods.control}
                name="new_email"
                label="E-mail"
                labelPlacement="filled"
                keyboardType="email-address"
                errorMessage={methods.formState.errors.new_email?.message}
                isRemoveSpecialCharacters={false}
              />
              <Input
                control={methods.control}
                name="phone"
                mask
                type="custom"
                options={{
                  mask: maskCustom,
                }}
                maxLength={maskCustom.length}
                keyboardType="phone-pad"
                errorMessage={methods.formState.errors.phone?.message}
                startContent={
                  <S.WrapperPhone>
                    <S.WrapperPhoneInput
                      onPress={handleIsOpen}
                      activeOpacity={0.7}>
                      <Typography title={`${optionCountry.flag ?? ''}`} />
                      <MaterialIcons
                        name="keyboard-arrow-down"
                        size={20}
                        color={theme.gray[600]}
                      />
                    </S.WrapperPhoneInput>
                    <Typography
                      title={`+${optionCountry.value}`}
                      colorValue="neutral-black"
                    />
                  </S.WrapperPhone>
                }
              />

              <Separator />
              <View style={{ width: '100%', marginBottom: 16, marginTop: 24 }}>
                <Input
                  control={methods.control}
                  name="new_password"
                  label="Senha"
                  labelPlacement="filled"
                  secureTextEntry
                  errorMessage={methods.formState.errors.new_password?.message}
                  isErrorMessage
                  isRemoveSpecialCharacters={false}
                />
                {password && <PasswordsBar password={password} />}
                {methods.formState.errors.new_password?.message && (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 16,
                    }}>
                    {/* <Feather name="info" size={12} color={theme.red[600]} /> */}
                    <Typography
                      title={`${methods.formState.errors.new_password?.message}`}
                      variant="subtitle"
                      size="small"
                      colorValue="danger"
                      style={{ width: '90%' }}
                    />
                  </View>
                )}
              </View>

              <Input
                control={methods.control}
                name="password_confirm"
                label="Confirmar senha"
                labelPlacement="filled"
                secureTextEntry
                errorMessage={
                  methods.formState.errors.password_confirm?.message
                }
                isRemoveSpecialCharacters={false}
              />
            </FormProvider>
          </S.WrapperForm>
          <S.WrapperButtons>
            <S.TitleText>
              Ao criar sua conta, você confirma que leu e{'\n'} concorda com
              <S.TermText onPress={handleNavigationTermOfUSe}>
                {' '}
                os termos de uso{' '}
              </S.TermText>
              da Kirvano
            </S.TitleText>
            <Button
              title="Criar conta grátis"
              radius="full"
              size="large"
              textWeightButton="bold"
              onPress={handleSubmitNewUser}
              isLoading={isPendingCurrentUser}
            />
          </S.WrapperButtons>
        </S.Wrapper>
        <S.WrapperButtonLogin>
          <Typography title="Já possui conta? Faça o" size="small" />
          <Button
            title="Login"
            variant="link"
            underline
            onPress={handleNavigationSignIn}
            size="small"
            style={{ marginLeft: -16 }}
          />
        </S.WrapperButtonLogin>
      </View>
      <ActionSheet
        bottomSheetRef={refActionSheet}
        title="DDI países"
        indexOpen={2}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 8,
          }}>
          {ddi_phone.map((item) => (
            <S.WrapperModalItem
              key={item.flag}
              onPress={() => handleIsClose(item)}>
              <Typography title={`${item.flag}`} />
              <Typography
                title={item.label}
                weight={item.value === optionCountry.value ? 'bold' : 'regular'}
              />
              {item.value === optionCountry.value && (
                <AntDesign name="check" size={16} color={theme.gray[300]} />
              )}
            </S.WrapperModalItem>
          ))}
        </ScrollView>
      </ActionSheet>
    </AuthScreen>
  );
};

export default SignUpScreen;
