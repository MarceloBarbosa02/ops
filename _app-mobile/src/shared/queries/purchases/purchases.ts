import { api } from '@/shared/services';
import { useMutation } from '@tanstack/react-query';
import { PURCHASE } from '@/shared/constants';

async function fetchPurchase(hash: string) {
  const { data } = await api.get(PURCHASE(hash));

  return data;
}

export function useFetchPurchase() {
  return useMutation({
    mutationFn: async (uuid: string) => {
      return await api.get(PURCHASE(uuid));
    },
  });
}
