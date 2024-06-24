import { SALES_CHARTS } from '@/shared/constants';
import { api } from '@/shared/services/api';
import { useQuery } from '@tanstack/react-query';
import { TSalesChartResponse } from './charts.types';

async function fetchChart(optionSelect: number) {
  const { data } = await api.get<TSalesChartResponse>(
    SALES_CHARTS(optionSelect)
  );

  return data;
}

export function useFetchChart(optionSelect: number) {
  return useQuery({
    queryKey: ['/chart'],
    queryFn: () => fetchChart(optionSelect),
  });
}
