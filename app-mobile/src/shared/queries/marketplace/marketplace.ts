import { MARKETPLACE, MARKETPLACE_DETAIL_PRODUCT } from '@/shared/constants';
import { api } from '@/shared/services/api';
import { useQuery } from '@tanstack/react-query';
import { TMarketplaceRequest, TMarketplaceResponse } from './marketplace.types';
import { formatFilterMarketplace } from './format-filter-marketplace';

async function fetchMarketplace(
  paramsFilter: string
): Promise<TMarketplaceResponse> {
  const { data } = await api.get(MARKETPLACE(paramsFilter));

  return data;
}

export function useFetchMarketplace(data: TMarketplaceRequest) {
  const paramsFilter = formatFilterMarketplace(data);

  return useQuery({
    queryKey: ['/marketplace', paramsFilter],
    queryFn: () => fetchMarketplace(paramsFilter),
    // enabled: ,
    staleTime: Infinity,
  });
}
