import { api } from "@shared/services/api";
import {
  FetchOffersType,
  ListOffersResponseType,
} from "@shared/types/entities/offers/interfaces";
import { format, limitStringSize } from "@shared/utils";
import { useQuery } from "@tanstack/react-query";

export async function fetchOffers({
  productUuid,
  params = { page: 1, pageSize: 8 },
}: FetchOffersType): Promise<ListOffersResponseType> {
  const { data } = await api.get(`/products/${productUuid}/offers/sold`, {
    params,
  });
  return data;
}

export function useFetchOffers({ productUuid, params }: FetchOffersType) {
  return useQuery(
    ["/offers", productUuid, params?.pageSize, params?.page],
    () => fetchOffers({ productUuid, params }),
    {
      enabled: productUuid !== "all",
    }
  );
}

export function useFetchOffersAsSelectOptions(productUuid: string): {
  options: { value: string; label: string }[];
  isLoading: boolean;
  refetch: any;
} {
  const { data, isSuccess, isLoading, refetch } = useFetchOffers({
    productUuid,
  });
  let options: { value: string; label: string }[] = [];
  if (isSuccess) {
    Object.keys(data?.data).forEach(function (key: any) {
      options.push({
        value: data.data[key].uuid,
        label:
          limitStringSize(30, data.data[key].name) +
          " - " +
          format.money(data.data[key].price),
      });
    });
  }

  return { options, isLoading, refetch };
}
