import { format } from '@/shared/utils';
import { limitStringSize } from '@/shared/utils/validations';
import { useQuery } from '@tanstack/react-query';
import { ListOffersResponseType } from './offers.interfaces';
import { api } from '@/shared/services';
import { useSalesStore } from '@/modules/sales/store/use-sales-store';

export async function fetchOffers(
  productUuid: string
): Promise<ListOffersResponseType> {
  const params = { page: 1, pageSize: 8 };
  const { data } = await api.get(`/products/${productUuid}/offers`, { params });
  return data;
}

export function useFetchOffers() {
  const { params } = useSalesStore((store) => {
    return {
      params: store.params,
    };
  });

  return useQuery({
    queryKey: ['/offers', params?.productFilter],
    queryFn: () => fetchOffers(params?.productFilter!),
    enabled: params.productFilter !== 'all',
  });
}

export function useFetchOffersAsSelectOptions(): {
  options: { value: string; label: string }[];
  isLoading: boolean;
  refetch: any;
} {
  const { data, isSuccess, isLoading, refetch } = useFetchOffers();

  let options: { value: string; label: string }[] = [];
  if (isSuccess) {
    Object.keys(data?.data).forEach(function (key: any) {
      options.push({
        value: data.data[key].uuid,
        label:
          limitStringSize(30, data.data[key].name) +
          ' - ' +
          format.money(data.data[key].price),
      });
    });
  }

  return { options, isLoading, refetch };
}
