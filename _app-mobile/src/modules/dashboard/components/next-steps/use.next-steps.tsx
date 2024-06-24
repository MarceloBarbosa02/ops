import ProfileIcon from '@/shared/assets/components/steps/profile-icon';
import { useMemo } from 'react';
import ProductIcon from '@/shared/assets/components/steps/product-icon';
import BusinessIcon from '@/shared/assets/components/steps/business-icon';
import {
  useFetchCompanies,
  useFetchMe,
  useFetchProducts,
} from '@/shared/queries';
import { router } from 'expo-router';

export const useNextSteps = () => {
  const { data: userData, isFetching: isLoadingUser } = useFetchMe();
  const { data: companiesData, isFetching: isLoadingCompanies } =
    useFetchCompanies();
  const { data: productsData, isFetching: isLoadingProducts } =
    useFetchProducts();

  const profile = userData?.isUpdated as boolean;
  const company = companiesData?.data?.length || 0;
  const products = productsData?.data?.length || 0;

  const isVisible = !profile || company === 0 || products === 0;

  const nextLevel = [
    {
      step: 1,
      icon: <ProfileIcon active={!profile} complete={profile} />,
      title: 'Perfil',
      description: 'Insira seus dados solicitados e verifique o telefone',
      onNavigation: () => router.push('/(private)/(stack)/configure-profile'),
      active: !profile,
      complete: profile,
      progress: 1,
    },
    {
      step: 2,
      icon: (
        <BusinessIcon
          active={Number(company) < 1}
          complete={Number(company) >= 1}
        />
      ),
      title: 'Seu negócio',
      description: 'Configure um negócio Pessoa Física ou Jurídica',
      onNavigation: () => router.push('/(private)/(stack)/identification'),
      active: Number(company) < 1 && profile,
      complete: Number(company) >= 1,
      progress: 33,
    },
    {
      step: 3,
      icon: (
        <ProductIcon
          active={Number(products) < 1}
          complete={Number(products) >= 1}
        />
      ),
      title: 'Seu primeiro produto',
      description:
        'Você receberá um e-mail com as instruções para terminar de configurar este produto pelo seu computador.',
      onNavigation: () => {},
      active: Number(products) < 1 && profile && Number(company) >= 1,
      complete: Number(products) >= 1,
      progress: 67,
    },
  ];

  const progressSteps = useMemo(() => {
    const totalProgress = nextLevel.reduce((acc, curr) => {
      if (curr.active) {
        return acc + curr.progress;
      }
      return acc;
    }, 0.5);

    return totalProgress;
  }, [nextLevel]);

  return {
    isVisible,
    nextLevel,
    progressSteps,
  };
};
