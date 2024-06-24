import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Dimensions, View } from 'react-native';

import { Badge, Button, Switch, Typography } from '@/shared/components';
import { format } from '@/shared/utils';
import { StarIcon } from '@/shared/assets';
import { EnumCStatus } from '@/shared/enum';

import * as S from './business-list.styles';
import { TBusinessList } from './business-list.types';
import { BusinessListItem } from './business-list.item';
import { useBusinessList } from './use-business-list';

const { width } = Dimensions.get('window');

const BusinessListCard = ({ data }: TBusinessList) => {
  const theme = useTheme();
  const {
    isActive,
    isPendingEditCompany,
    isPendingStatusCompany,
    handleEditCompany,
    handleToggleStatus,
  } = useBusinessList({ data });
  const nameFantasy = format.initialsName(`${data?.fantasyName}`);

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.WrapperHeaderInfo>
          <Typography
            title={format.limitarTamanhoString(nameFantasy, width)}
            weight="bold"
          />
          {data?.isDefault && <StarIcon />}
        </S.WrapperHeaderInfo>
        <Badge
          label="Sócio"
          variant="outlined"
          colorValue="primary"
          typeBorder="solid"
        />
      </S.WrapperHeader>
      <S.WrapperInfo>
        <View>
          <BusinessListItem
            title={data?.document.length > 11 ? 'Nome Fantasia' : 'Nome'}
            description={format.limitarTamanhoString(nameFantasy, 240)}
          />
          <BusinessListItem
            title={data?.document.length > 11 ? 'CNPJ' : 'CPF'}
            description={
              data?.document.length > 11
                ? format.cnpj(data?.document)
                : format.cpf(data?.document)
            }
          />
          <BusinessListItem
            title="Status"
            description={
              <Switch
                title="Ativo"
                defaultValue={isActive}
                disabled={data?.isDefault}
                isLoading={isPendingStatusCompany}
                onPress={() => {
                  handleToggleStatus(
                    data?.status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE',
                    data.uuid
                  );
                }}
              />
            }
          />
        </View>
        <Button
          title="Editar"
          colorValue="secondary"
          size="medium"
          textWeightButton="bold"
          isLoading={isPendingEditCompany}
          endContent={
            <Entypo
              name="chevron-small-right"
              size={24}
              color={theme.gray[100]}
            />
          }
          onPress={() => handleEditCompany(data.uuid)}
        />
      </S.WrapperInfo>
    </S.Wrapper>
  );
};

export default BusinessListCard;
