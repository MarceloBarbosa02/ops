import { ReactNode, createContext, useEffect, useMemo } from "react";
import { useCompanyStore } from "@shared/store";
import { useSalesStore } from "@shared/store/useSalesStore";
import { useFiltersSearch } from "../hooks/useFiltersSearch";

interface ISalesContext {}

export const SalesContext = createContext({} as ISalesContext);

interface SalesProviderProps {
  children: ReactNode;
}

export const SalesProvider = ({ children }: SalesProviderProps) => {
  const { useFetchSalesList, useFetchSalesTotals } = useFiltersSearch();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { params, handleStartParams } = useSalesStore((store) => {
    return {
      params: store.params,
      handleStartParams: store.handleStartParams,
    };
  });
  const { refetch: refetchSales } = useFetchSalesTotals();
  const { refetch: refetchList } = useFetchSalesList();

  useEffect(() => {
    if (currentCompany?.uuid) {
      handleStartParams();
      setTimeout(() => {
        refetchSales();
        refetchList();
      }, 400);
    }
  }, [currentCompany?.uuid]);

  useEffect(() => {
    if (params.mainSearchFilter !== "") {
      refetchSales();
      refetchList();
    }
  }, [params.mainSearchFilter]);

  const values = useMemo(() => ({}), []);

  return (
    <SalesContext.Provider value={values}>{children}</SalesContext.Provider>
  );
};
