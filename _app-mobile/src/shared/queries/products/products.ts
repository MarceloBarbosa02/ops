import { PRODUCTS, PRODUCTS_SOLD } from '@/shared/constants';
import { api } from '@/shared/services';
import { useQuery } from '@tanstack/react-query';
import {
  IIProductResponse,
  IProductsResponse,
  ListProductsSoldResponseType,
} from './products.interfaces';
import { useAuthStore, useCompanyStore } from '@/shared/store';
import { useFetchCompanies } from '../companies';

async function fetchProducts() {
  const { data } = await api.get<IProductsResponse>(PRODUCTS);

  return data;
}

export function useFetchProducts() {
  const { data: companiesData } = useFetchCompanies();

  return useQuery({
    queryKey: ['/products'],
    queryFn: fetchProducts,
    enabled: !!companiesData?.data.length,
    staleTime: Infinity,
  });
}

async function fetchSalesProducts(
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
  const statusString = status ? status.join(',') : undefined;
  const type = params?.format;
  const typeString = type ? type.join(',') : undefined;
  const finalParams = params
    ? { ...params, status: statusString, format: typeString }
    : undefined;

  const { data } = await api.get(PRODUCTS, { params: finalParams });
  return data;
}

async function fetchProductsSold(): Promise<ListProductsSoldResponseType> {
  const { data } = await api.get(PRODUCTS_SOLD);
  return data;
}

function useFetchProductsSold() {
  const currentCompany = useCompanyStore((store) => store.currentCompany);

  return useQuery({
    queryKey: ['/products', '/sold', currentCompany?.uuid],
    queryFn: fetchProductsSold,
    enabled: Boolean(currentCompany?.uuid),
    staleTime: 0, // 30 seconds
  });
}

export function useProductsSoldAsSelectOptions() {
  const { data } = useFetchProductsSold();
  let productsOptions: any[] = [];

  if (data) {
    Object.keys(data.data).forEach(function (key: any) {
      productsOptions.push({
        value: data['data'][key]['uuid'],
        label: data['data'][key]['name'],
      });
    });
  }
  return { productsOptions };
}

export function useFetchSalesProducts() {
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  return useQuery({
    queryKey: ['/products', currentCompany?.uuid],
    queryFn: () => fetchSalesProducts({ page: 1, pageSize: 999 }),
    enabled: !!currentCompany?.uuid,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 30,
  });
}

export function useFetchProductsSelectOptions(): {
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
