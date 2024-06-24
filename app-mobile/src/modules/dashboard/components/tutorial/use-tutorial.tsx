import { router } from 'expo-router';
import { useMemo } from 'react';

import { useFetchCompanies, useFetchMe } from '@/shared/queries';
import { useFetchProducts } from '@/shared/queries/products';

export function useTutorial() {
  const { data: dataUser, isLoading: isLoadingUser } = useFetchMe();
  const { data: companiesData, isLoading: isLoadingCompanies } =
    useFetchCompanies();
  const { data: productsData, isLoading: isLoadingProducts } =
    useFetchProducts();

  const profile = dataUser?.isUpdated;
  const business = companiesData?.data.length || 0;
  const products = productsData?.data.length || 0;

  const isVisible = !profile || business === 0 || products === 0;

  console.log({ profile, business, products });

  const handleNavigationProfile = () => {
    router.push('/(private)/(stack)/(configure)/config-profile');
  };

  const nextLevel = [
    {
      step: 1,
      title: 'Perfil',
      description: 'Insira seus dados e faça a verificação do telefone',
      onNavigation: () =>
        router.push('/(private)/(stack)/(configure)/config-profile'),
      active: !profile,
      progress: 1,
    },
    {
      step: 2,
      title: 'Negócio',
      description: 'Configure um negócio Pessoa Física ou Jurídica',
      onNavigation: () =>
        router.push('/(private)/(stack)/(configure)/config-business'),
      active: business < 1 && profile,
      progress: 33,
    },
    {
      step: 3,
      title: 'Vendas',
      description: 'Escolha entre vender produtos autorais ou ser afiliado',
      onNavigation: () =>
        router.push('/(private)/(stack)/(configure)/config-sales'),
      active: products < 1 && business >= 1 && profile,
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

  const indexActive = nextLevel.filter((item) => item.active)[0];

  return {
    nextLevel,
    isVisible,
    indexActive,
    progressSteps,
    isLoadingProducts,
    handleNavigationProfile,
  };
}
