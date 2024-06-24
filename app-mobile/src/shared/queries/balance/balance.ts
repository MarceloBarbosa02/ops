import { useQuery } from '@tanstack/react-query';
import { IBalanceResponse } from './balance.interface';
import { api } from '@/shared/services/api';
import { useAuthStore } from '@/shared/store';
import { BALANCES } from '@/shared/constants';

export async function fetchBalances(): Promise<IBalanceResponse> {
  const { data } = await api.get(BALANCES);
  return data;
}

export function useFetchBalances() {
  const token = useAuthStore((store) => store.token);

  return useQuery({
    queryKey: ['/balances'],
    queryFn: fetchBalances,
    enabled: !!token,
    staleTime: Infinity,
  });
}
