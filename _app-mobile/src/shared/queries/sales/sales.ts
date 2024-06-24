import { useSalesStore } from '@/modules/sales/store/use-sales-store';
import { useCompanyStore } from '@/shared/store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { formatFilterSales } from './format-filter-sales';
import { api } from '@/shared/services';
import {
  SALES_APROVE,
  SALES_LIST_SALES,
  SALES_ONE,
  SALES_REFUND,
  SALES_TOTALS,
} from '@/shared/constants';
import {
  IItemsSalesResponse,
  ISalesListResponse,
  ISalesTotalResponse,
  IUseApproveFakeSaleRequestProps,
} from './sales.interfaces';

export const useFiltersRequestSales = () => {
  const currentCompany = useCompanyStore((store) => store.currentCompany);
  const params = useSalesStore((store) => store.params);

  async function fetchSalesTotals(): Promise<ISalesTotalResponse> {
    const queryString = formatFilterSales(params);
    const { data } = await api.get(SALES_TOTALS(queryString));
    return data;
  }

  function useFetchSalesTotals() {
    return useQuery({
      queryKey: ['/totals', params],
      queryFn: fetchSalesTotals,
      staleTime: 1000 * 10 * 1, // 10 seconds
      refetchOnWindowFocus: false,
      enabled: !!currentCompany?.uuid,
    });
  }

  async function fetchSalesList(): Promise<ISalesListResponse> {
    const queryString = formatFilterSales(params);

    const { data } = await api.get(SALES_LIST_SALES(queryString));
    return data;
  }

  function useFetchSalesList() {
    return useQuery({
      queryKey: ['/sales', params],
      queryFn: fetchSalesList,
      staleTime: 1000 * 10 * 1, // 10 seconds
      refetchOnWindowFocus: false,
      enabled: !!currentCompany?.uuid,
    });
  }

  async function fetchItemSalesById(
    uuid: string
  ): Promise<IItemsSalesResponse> {
    const { data } = await api.get(SALES_ONE(uuid));
    return data;
  }

  function useFetchItemSales(itemUuid: string) {
    return useQuery({
      queryKey: ['/sales-item', itemUuid],
      queryFn: () => fetchItemSalesById(itemUuid),
    });
  }

  function useApproveSale() {
    return useMutation({
      mutationFn: async (data: IUseApproveFakeSaleRequestProps) => {
        return await api.post(SALES_APROVE(data.uuid), {
          subscriptionChargeUuid: data.subscriptionChargeUuid,
        });
      },
    });
  }

  function useRefundSale() {
    return useMutation({
      mutationFn: async (data: IUseApproveFakeSaleRequestProps) => {
        return await api.post(SALES_REFUND(data.uuid), {
          subscriptionChargeUuid: data.subscriptionChargeUuid,
        });
      },
    });
  }

  return {
    useRefundSale,
    useApproveSale,
    useFetchItemSales,
    useFetchSalesList,
    useFetchSalesTotals,
  };
};
