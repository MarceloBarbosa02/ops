import { useMutation, useQuery } from "@tanstack/react-query";

import {
  IIProductResponse,
  IItemsSales,
  ISalesRefundTaxType,
  IUseApproveFakeSaleProps,
  ListProductsSoldResponseType,
} from "@shared/types";
import { useCompanyStore } from "@shared/store";
import { api } from "@shared/services/api";
import { formatFilter } from "../utils/formatFilter";
import { useSalesStore } from "@shared/store/useSalesStore";

export const useFiltersSearch = () => {
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { params } = useSalesStore((store) => {
    return {
      params: store.params,
    };
  });

  async function fetchSalesTotals() {
    const queryString = formatFilter(params);
    const { data } = await api.get(`/sales/totals${queryString}`);
    return data;
  }

  function useFetchSalesTotals() {
    return useQuery(["totals"], () => fetchSalesTotals(), {
      staleTime: 1000 * 10 * 1, // 10 seconds
      refetchOnWindowFocus: false,
      enabled: !!currentCompany?.uuid,
    });
  }

  async function fetchSalesList() {
    const queryString = formatFilter(params);

    const { data } = await api.get(`/sales${queryString}`);
    return data;
  }

  function useFetchSalesList() {
    return useQuery(["/list"], () => fetchSalesList(), {
      staleTime: 1000 * 10 * 1, // 10 seconds
      refetchOnWindowFocus: false,
      enabled: !!currentCompany?.uuid,
    });
  }

  async function fetchProducts(
    params:
      | {
          page: number;
          pageSize: number;
          initialDateInterval?: string;
          finishDateInterval?: string;
          categoryUuid?: string;
          status?: string[];
          format?: string[];
          affiliation?: string;
        }
      | undefined
  ): Promise<IIProductResponse> {
    const status = params?.status;
    const statusString = status ? status.join(",") : undefined;
    const type = params?.format;
    const typeString = type ? type.join(",") : undefined;
    const finalParams = params
      ? { ...params, status: statusString, format: typeString }
      : undefined;

    const { data } = await api.get("/products", { params: finalParams });
    return data;
  }

  async function fetchProductsSold(): Promise<ListProductsSoldResponseType> {
    const { data } = await api.get("/products/sold");
    return data;
  }

  function useFetchProductsSold() {
    return useQuery(["/products", "/sold"], () => fetchProductsSold(), {
      enabled: true,
      staleTime: 0, // 30 seconds
    });
  }

  function useProductsSoldAsSelectOptions() {
    const { data } = useFetchProductsSold();
    let productsOptions: any[] = [];

    if (data) {
      Object.keys(data.data).forEach(function (key: any) {
        productsOptions.push({
          value: data["data"][key]["uuid"],
          label: data["data"][key]["name"],
        });
      });
    }
    return { productsOptions };
  }

  function useFetchProducts() {
    return useQuery(
      ["/products", currentCompany?.uuid],
      () => fetchProducts({ page: 1, pageSize: 999 }),
      {
        enabled: !!currentCompany?.uuid,
        staleTime: 0,
        refetchOnWindowFocus: true,
        refetchInterval: 1000 * 30,
      }
    );
  }

  function useFetchProductsSelectOptions(): {
    options: { value: string; label: string }[];
    isLoading: boolean;
    refetch: any;
  } {
    const { data, isSuccess, isLoading, refetch } = useFetchProducts();

    let options: { value: string; label: string }[] = [];
    if (isSuccess) {
      Object.keys(data?.data).forEach(function (key: any) {
        options.push({
          value: data?.data[key]?.uuid as string,
          label: data.data[key].name,
        });
      });
    }

    return { options, isLoading, refetch };
  }

  async function fetchItemSalesById(uuid: string): Promise<IItemsSales> {
    const { data } = await api.get(`/sales/${uuid}`);
    return data;
  }

  function useFetchItemSales(itemUuid: string) {
    return useQuery(["/sales-item", itemUuid], () =>
      fetchItemSalesById(itemUuid)
    );
  }

  function useApproveSale() {
    return useMutation(async (data: IUseApproveFakeSaleProps) => {
      return await api.post(`/sales/approve-fake-sale/${data.uuid}`, {
        subscriptionChargeUuid: data.subscriptionChargeUuid,
      });
    });
  }

  function useRefundSale() {
    return useMutation(async (data: IUseApproveFakeSaleProps) => {
      return await api.post(`/sales/refund/${data.uuid}`, {
        subscriptionChargeUuid: data.subscriptionChargeUuid,
      });
    });
  }

  async function fetchSalesRefundTax(): Promise<ISalesRefundTaxType> {
    const { data } = await api.get(`/sales/refund/taxes`);
    return data;
  }

  function useFetchSalesRefundTax() {
    return useQuery(
      ["/sales", "/refund", "/taxes"],
      () => fetchSalesRefundTax(),
      {
        refetchOnWindowFocus: true,
        staleTime: 0,
      }
    );
  }

  return {
    useFetchSalesList,
    useFetchSalesTotals,
    useFetchProducts,
    useFetchItemSales,
    useApproveSale,
    useRefundSale,
    useFetchSalesRefundTax,
    useProductsSoldAsSelectOptions,
    useFetchProductsSelectOptions,
  };
};
