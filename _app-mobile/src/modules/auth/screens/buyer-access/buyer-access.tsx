import { ActivityIndicator, Dimensions, View } from 'react-native';
import { FormProvider } from 'react-hook-form';

import { format } from '@/shared';
import { IconLogo } from '@/shared/assets';
import { AuthScreen, Button, Separator, Typography } from '@/shared/components';

import { PasswordsCards } from '../../components/cards';
import { useBuyerAccess } from './use-buyer-access';

import * as S from './buyer-access.styles';

const { width } = Dimensions.get('window');

const BuyerAccessScreen = () => {
  const {
    methods,
    msgError,
    dataPurchase,
    isPendingPurchase,
    isPendingCreatePasswordAccess,
    defaultProduct,
    handleSubmitPurchaseForm,
  } = useBuyerAccess();

  return (
    <AuthScreen>
      <S.Wrapper>
        <S.WrapperLogo>
          <IconLogo />
        </S.WrapperLogo>
        {isPendingPurchase ? (
          <S.WrapperInfo>
            <Typography title="Verificando sua compra" weight="bold" />
            <ActivityIndicator color="blue" size="large" />
          </S.WrapperInfo>
        ) : (
          <>
            {msgError ? (
              <S.WrapperInfo>
                <Typography title="Compra verificada" weight="bold" />
                <Typography title={msgError} size="small" align="center" />
              </S.WrapperInfo>
            ) : (
              <>
                <S.WrapperInfo>
                  <Typography title="Cadastre sua nova senha" weight="bold" />
                  <Typography
                    title="Após cadastrá-la, você poderá acessar o produto que adquiriu, referente ao e-mail:"
                    size="small"
                    align="center"
                  />
                </S.WrapperInfo>

                <S.WrapperEmailInfo>
                  <Typography
                    title="E-mail"
                    colorValue="neutral-regular"
                    variant="subtitle"
                    size="medium"
                  />
                  <Typography
                    title={dataPurchase?.email}
                    colorValue="neutral-regular"
                  />
                </S.WrapperEmailInfo>

                <S.WrapperProductInfo>
                  {defaultProduct(dataPurchase.product?.format_slug)}
                  <View>
                    <Typography title="Compra recente" colorValue="primary" />
                    <Typography
                      title={format.limitarTamanhoString(
                        dataPurchase.product?.product_name,
                        width - 40
                      )}
                      weight="bold"
                    />
                  </View>
                </S.WrapperProductInfo>

                <Separator />

                <S.WrapperForm>
                  <FormProvider {...methods}>
                    <PasswordsCards
                      control={methods.control}
                      errors={methods.formState.errors}
                    />
                    <Button
                      title="Confirmar"
                      radius="full"
                      size="large"
                      isLoading={isPendingCreatePasswordAccess}
                      textWeightButton="bold"
                      onPress={handleSubmitPurchaseForm}
                    />
                  </FormProvider>
                </S.WrapperForm>
              </>
            )}
          </>
        )}
      </S.Wrapper>
    </AuthScreen>
  );
};

export default BuyerAccessScreen;
