import { api } from '@/shared/services/api';
import { useQuery } from '@tanstack/react-query';
import { FetchValuationResponseType } from './evaluation.types';
import { COMPANIES_EVALUATION } from '@/shared/constants';
import { useAuthStore } from '@/shared/store';

async function fetchValuation(): Promise<FetchValuationResponseType> {
  const { data } = await api.get(COMPANIES_EVALUATION);
  return data;
}

export function useFetchValuation() {
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });

  return useQuery({
    queryKey: ['/valuation'],
    queryFn: fetchValuation,
    enabled: !!token,
    refetchOnWindowFocus: true,
    staleTime: Infinity,
  });
}
