import { useQuery } from "@tanstack/react-query";

import { api } from "@shared/services/api";
import { CONVERSION } from "@shared/constants";
import { useCompanyStore } from "@shared/store";

export const useConversion = () => {
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  async function fetchConversion() {
    const { data } = await api.get(CONVERSION);
    return data;
  }

  function useFetchConversion() {
    return useQuery(["/conversion", currentCompany], () => fetchConversion());
  }

  return {
    useFetchConversion,
  };
};
