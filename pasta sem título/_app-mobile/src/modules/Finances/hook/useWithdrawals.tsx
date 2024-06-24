import { useMutation, useQuery } from "@tanstack/react-query";

import { api } from "@shared/services/api";
import { WITHDRAWAL, WITHDRAWALS } from "@shared/constants";
import {
  IWithdrawalCreate,
  IWithdrawalsRequest,
  IWithdrawalsResponse,
} from "@shared/types";

export function useCreateWithdrawal() {
  return useMutation(async (data: IWithdrawalCreate) => {
    return await api.post(WITHDRAWAL, data);
  });
}

export async function fetchWithdrawals(
  dataRequest: IWithdrawalsRequest
): Promise<IWithdrawalsResponse> {
  const { data } = await api.get(
    WITHDRAWALS(dataRequest.page, dataRequest.pageSize)
  );
  return data;
}

export function useFetchWithdrawals(dataRequest?: IWithdrawalsRequest) {
  return useQuery([WITHDRAWAL, dataRequest], () =>
    fetchWithdrawals(dataRequest!)
  );
}
