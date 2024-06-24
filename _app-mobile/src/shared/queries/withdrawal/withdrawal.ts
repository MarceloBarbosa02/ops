import { WITHDRAWAL, WITHDRAWALS } from '@/shared/constants';
import { useMutation } from '@tanstack/react-query';
import {
  TWithdrawalCreate,
  TWithdrawalsRequest,
  TWithdrawalsResponse,
} from './withdrawal.types';
import { api } from '@/shared/services';

export async function fetchWithdrawals(
  dataRequest: TWithdrawalsRequest
): Promise<TWithdrawalsResponse> {
  const { data } = await api.get(
    WITHDRAWALS(dataRequest.page, dataRequest.pageSize)
  );
  return data;
}

export async function fetchCreateWithdrawals(
  dataRequest: TWithdrawalCreate
): Promise<TWithdrawalsResponse> {
  const { data } = await api.post(WITHDRAWAL, dataRequest);
  return data;
}

export function useCreateWithdrawal() {
  return useMutation({
    mutationFn: async (data: TWithdrawalCreate) => {
      return fetchCreateWithdrawals(data);
    },
  });
}
