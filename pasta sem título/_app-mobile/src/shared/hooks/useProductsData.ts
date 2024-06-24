import { PRODUCTS } from "@shared/constants";
import { api } from "@shared/services/api";
import { useAuthStore } from "@shared/store";
import { IProductsResponse } from "@shared/types/entities";
import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const { data } = await api.get<IProductsResponse>(PRODUCTS);

  return data;
}

export function useFetchProducts() {
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });

  return useQuery({
    queryKey: ["/products"],
    queryFn: () => fetchProducts(),
    enabled: !!token,
    staleTime: Infinity,
  });
}
