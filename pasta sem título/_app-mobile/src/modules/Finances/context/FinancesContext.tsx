import { ReactNode, createContext, useEffect, useMemo } from "react";
import { useCompanyStore } from "@shared/store";
import { useFinancesStore } from "@shared/store/useFinancesStore";
import { useExtractFilter } from "../hook/useExtractFilter";

interface IFinancesContext {}

export const FinancesContext = createContext({} as IFinancesContext);

interface FinancesProviderProps {
  children: ReactNode;
}

export const FinancesProvider = ({ children }: FinancesProviderProps) => {
  const { useFetchExtract } = useExtractFilter();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { params, handleSetInitialParams } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetInitialParams: store.handleSetInitialParams,
    };
  });
  const { refetch: refetchExtract } = useFetchExtract();

  // useEffect(() => {
  //   if (currentCompany?.uuid) {
  //     handleSetInitialParams();
  //     setTimeout(() => {
  //       refetchExtract();
  //     }, 300);
  //   }
  // }, [currentCompany?.uuid]);

  // useEffect(() => {
  //   if (params.mainSearchFilter !== "") {
  //     refetchExtract();
  //   }
  // }, [params.mainSearchFilter]);

  const values = useMemo(() => ({}), []);

  return (
    <FinancesContext.Provider value={values}>
      {children}
    </FinancesContext.Provider>
  );
};
