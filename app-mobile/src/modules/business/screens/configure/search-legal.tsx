import { FormProvider } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import {
  Button,
  EmptyCards,
  InputControl,
  LayoutStackScreen,
  Typography,
} from '@/shared/components';
import { IdentifyConfig } from '@/shared/components/headers';
import Return from '@/shared/assets/images/svg/return.svg';
import { WarningIcon } from '@/shared/assets';

import { LineContent } from '../../components';

import { useConfigureBusiness } from './use-business';

function SearchCNPJScreen() {
  const { methodsSearch, companyData, isPendingSearchCompany } =
    useConfigureBusiness();

  return (
    <LayoutStackScreen
      title="Pessoa jurídica"
      startContent={
        <Button
          title="Cancelar"
          onPress={() => router.back()}
          colorValue="whiteBlack"
          size="medium"
          radius="full"
          sizeWidth="size50"
        />
      }
      endContent={
        <Button
          title="Adicionar"
          onPress={() => {}}
          size="medium"
          sizeWidth="size50"
          radius="full"
          colorValue="success"
        />
      }>
      <View className="flex-1 gap-4 items-center p-4">
        <IdentifyConfig step="step2" />
        <View className="w-full bg-gray-50 p-4 rounded-lg gap-4">
          <View className="w-full flex-row justify-between">
            <Typography title="Novo negócio" weight="bold" />
            {companyData.document && (
              <TouchableOpacity
                className="flex-row items-center gap-1"
                // onPress={handleBackSteps}
                activeOpacity={0.8}>
                <Typography
                  title="Alterar número"
                  weight="bold"
                  variant="caption"
                  color="primary"
                />
                <Return />
              </TouchableOpacity>
            )}
          </View>
          <FormProvider {...methodsSearch}>
            <InputControl
              control={methodsSearch.control}
              name="companyNumber"
              label="CNPJ*"
              placeholder="CNPJ*"
              isLoading={isPendingSearchCompany}
              errorMessage={
                methodsSearch.formState.errors.companyNumber?.message
              }
              isMask
              type="custom"
              options={{ mask: '99.999.999/9999-99' }}
              keyboardType="numeric"
            />
            {companyData.document && (
              <InputControl
                control={methodsSearch.control}
                name="nickname"
                label="Apelido"
                placeholder="Apelido (opcional)"
              />
            )}
          </FormProvider>
        </View>
        {companyData.document && (
          <>
            <EmptyCards title="Identificação">
              <LineContent
                label="Razão Social"
                description={companyData.name}
              />
              <LineContent
                label="Nome Fantasia"
                description={companyData.fantasyName}
              />
              <LineContent label="CNPJ" description={companyData.document} />
              <LineContent
                label="Origem"
                description={companyData.address.country}
              />
              <LineContent
                label="Situação Cadastral"
                description={companyData.fantasyName}
              />
            </EmptyCards>

            <EmptyCards title="Endereço">
              <LineContent
                label="CEP"
                description={companyData.address.zipCode}
              />
              <LineContent
                label="País"
                description={companyData.address.country}
              />
              <LineContent
                label="Estado"
                description={companyData.address.state}
              />
              <LineContent
                label="Cidade"
                description={companyData.address.city}
              />
              <LineContent
                label="Bairro"
                description={companyData.address.district}
              />
              {companyData.address.complement && (
                <LineContent
                  label="Complemento"
                  description={companyData.address.complement}
                />
              )}
            </EmptyCards>

            <View className="w-full mb-28">
              <EmptyCards title="Pagamento">
                <View className="flex-row items-center gap-2 bg-yellow-100 p-2 rounded">
                  <WarningIcon />
                  <Typography variant="caption">
                    Seu recebimento via{' '}
                    <Typography title="PIX" weight="bold" variant="caption" />{' '}
                    está atrelado ao{' '}
                    <Typography title="CNPJ" weight="bold" variant="caption" />{' '}
                    informado
                  </Typography>
                </View>
              </EmptyCards>
            </View>
          </>
        )}
      </View>
    </LayoutStackScreen>
  );
}

export default SearchCNPJScreen;
