import {
  useConversion,
  useFetchBalances,
  useFetchChart,
  useFetchMe,
  useFetchValuation,
} from '@/shared/queries';
import { useBillingGraphsStore } from '../../components/billing-graphs/use-billing-graphs.store';
import { useState } from 'react';

export const useDashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  // const { refetch: refetchValuation } = useFetchValuation();
  const { optionSelect } = useBillingGraphsStore((store) => {
    return {
      optionSelect: store.optionSelect,
    };
  });
  const { refetch: refetchChart } = useFetchChart(optionSelect);
  const { refetch: refetchBalances } = useFetchBalances();
  const { refetch: refetchUser } = useFetchMe();
  const { useFetchConversion } = useConversion();
  const { refetch: refetchConversion } = useFetchConversion();

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([
      refetchUser(),
      refetchChart(),
      refetchBalances(),
      // refetchValuation(),
      refetchConversion(),
    ]);

    setIsRefreshing(false);
  };

  return {
    isRefreshing,
    handleRefresh,
  };
};
