import {
  useFetchBalances,
  useFetchCompanies,
  useFetchMe,
} from '@/shared/queries';
import { ICompany } from '@/shared/store/company/company.interfaces';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useMemo, useRef, useState } from 'react';

export const useFinancesHome = () => {
  const { data: companiesData } = useFetchCompanies();
  const { refetch: refetchBalances } = useFetchBalances();
  const { data: userData } = useFetchMe();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const profile = userData?.isUpdated;

  const currentCompany = useMemo(() => {
    return companiesData?.data.filter(
      (company: ICompany) => company?.isDefault
    )[0];
  }, [companiesData]);

  const handleNavigation = () => {
    router.push('/(private)/(stack)/extract');
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([refetchBalances()]);

    setIsRefreshing(false);
  };

  return {
    profile,
    isRefreshing,
    currentCompany,
    handleRefresh,
    handleNavigation,
  };
};
