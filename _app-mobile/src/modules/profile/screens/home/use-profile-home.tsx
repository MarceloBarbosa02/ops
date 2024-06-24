import { useFetchMe } from '@/shared';
import { router } from 'expo-router';
import { useState } from 'react';

export const useProfileHome = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { refetch: refetchFetchMe } = useFetchMe();

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([refetchFetchMe()]);

    setIsRefreshing(false);
  };

  const handleNavigation = () => {
    router.push('/update-profile');
  };

  const handleNavigationBack = () => {
    router.push('/(private)/(tabs)/plus');
  };

  return {
    isRefreshing,
    handleRefresh,
    handleNavigation,
    handleNavigationBack,
  };
};
