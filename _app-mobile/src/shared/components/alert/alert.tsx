import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';

import { InfoIcon, WarningIcon } from '@/shared/assets';
import {
  useFetchCompanies,
  useFetchMe,
  useFetchProducts,
} from '@/shared/queries';

import { Typography } from '../typography';

import * as S from './alert.styles';

const Alert = () => {
  const theme = useTheme();
  const { data: userData, isFetching: isFetchingUser } = useFetchMe();
  const { data: companiesData, isFetching: isFetchingCompanies } =
    useFetchCompanies();
  const { data: productsData, isFetching: isFetchingProducts } =
    useFetchProducts();

  const profile = userData?.isUpdated as boolean;
  const company = companiesData?.data?.length;
  const product = productsData?.data?.length;

  const isVisible = isFetchingUser || isFetchingCompanies || isFetchingProducts;

  if (isVisible) {
    return <></>;
  }

  if (!profile) {
    return (
      <S.Wrapper>
        <WarningIcon />
        <S.TitleText>
          <Typography
            title="Etapa 1 de 3: "
            weight="bold"
            variant="subtitle"
            size="medium"
            style={{ color: theme.button.text.secondary }}
          />
          para prosseguir, finalize seu cadastro.{'\n'}
          <Typography
            title="Configurar perfil."
            weight="bold"
            variant="subtitle"
            size="medium"
            colorValue="primary"
            onPress={() => router.push('/(private)/(stack)/configure-profile')}
          />
        </S.TitleText>
      </S.Wrapper>
    );
  }

  if (Number(company) <= 1 && profile) {
    return (
      <S.Wrapper>
        <WarningIcon />
        <S.TitleText>
          <Typography
            title="Etapa 2 de 3: "
            weight="bold"
            variant="subtitle"
            size="medium"
            style={{ color: theme.button.text.secondary }}
          />
          para prosseguir, finalize seu cadastro.{'\n'}
          <Typography
            title="Adicionar negócio."
            weight="bold"
            variant="subtitle"
            size="medium"
            colorValue="primary"
            onPress={() => () =>
              router.push('/(private)/(stack)/identification')
            }
          />
        </S.TitleText>
      </S.Wrapper>
    );
  }

  if (Number(product) < 1 && profile && Number(company) <= 1) {
    return (
      <S.WrapperInfo>
        <InfoIcon />
        <S.TitleTextInfo>
          <Typography
            title="Seu primeiro produto: "
            weight="bold"
            variant="subtitle"
            size="medium"
          />
          Você receberá um e-mail com as instruções para terminar de configurar
          este produto pelo seu computador.
        </S.TitleTextInfo>
      </S.WrapperInfo>
    );
  }
};

export default Alert;
