import { useQuery } from "@tanstack/react-query";

import { api } from "@shared/services/api";
import { BALANCES } from "@shared/constants";
import { useAuthStore } from "@shared/store";

export async function fetchBalances() {
  const { data } = await api.get(BALANCES);
  return data;
}

export function useFetchBalances() {
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });

  return useQuery(["/balances"], () => fetchBalances(), {
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  });
}
