import React, { useMemo } from 'react';
import { View } from 'react-native';

import { ddi_phone } from '@/modules/auth/screens/sign-up/phone.ddi';
import { statesOptions } from '@/modules/profile/mocks/form';
import { format, formatPhoneDDD } from '@/shared/utils';
import { Typography } from '@/shared/components';

import { ICustomer } from './details.types';
import { ItemLineDetails } from './item-line';

import * as S from './details.styles';

interface CustomerProps {
  customer: ICustomer;
  isShowData?: boolean | null;
}

export const CustomerCard = ({ customer, isShowData }: CustomerProps) => {
  const customCountry = useMemo(() => {
    if (customer?.phoneNumber) {
      const country =
        customer?.phoneNumber &&
        customer?.phoneNumber.split(' ')[0].replace('+', '');
      const brands = ddi_phone.filter((brand) => brand.value === country)[0];

      return brands;
    }
    return '';
  }, [customer?.phoneNumber]);

  return (
    <S.WrapperCustomer>
      <Typography title="Cliente" size="large" weight="bold" />
      <View style={{ paddingVertical: 8, marginBottom: 8 }}>
        {customer?.name && (
          <ItemLineDetails title="Nome" description={customer?.name} />
        )}

        {customer?.document && (
          <ItemLineDetails
            title="Documento"
            description={format.cpf(customer?.document)}
          />
        )}

        {!!isShowData && (
          <ItemLineDetails title="E-mail" description={customer?.email} />
        )}

        {!!isShowData ? (
          <ItemLineDetails
            title="Telefone"
            description={
              <S.Label>
                {customCountry && <S.Label>{customCountry?.flag}</S.Label>}{' '}
                {formatPhoneDDD(customer?.phoneNumber)}
              </S.Label>
            }
          />
        ) : null}
        {!!isShowData && (
          <ItemLineDetails title="IP" description={customer?.ip} />
        )}

        {customer?.address && !!isShowData && (
          <>
            <ItemLineDetails
              title="CEP"
              description={customer.address?.zipcode.replace(
                /^(\d{5})(\d{3})$/,
                '$1-$2'
              )}
            />
            <ItemLineDetails
              title="Logradouro"
              description={customer.address?.street}
            />
            <ItemLineDetails
              title="Número"
              description={customer.address?.number}
            />
            <ItemLineDetails
              title="Complemento"
              description={customer.address?.complement}
            />
            <ItemLineDetails
              title="Bairro"
              description={customer.address?.neighborhood}
            />
            <ItemLineDetails
              title="Cidade"
              description={customer.address?.city}
            />
            <ItemLineDetails
              title="Estado"
              description={customer.address?.state || customer.state}
            />
            <ItemLineDetails
              title="País"
              description={
                <S.Label>
                  {customCountry && <S.Label>{customCountry?.flag}</S.Label>}{' '}
                  {customer.country === 'BR' ? 'Brasil' : customer.country}
                </S.Label>
              }
            />
          </>
        )}
      </View>
    </S.WrapperCustomer>
  );
};
