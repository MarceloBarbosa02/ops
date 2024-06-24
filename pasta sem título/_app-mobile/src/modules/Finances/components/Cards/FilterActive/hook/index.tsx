import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { clearFilter } from "@modules/Sales/utils/formatFilter";
import { useSalesStore } from "@shared/store/useSalesStore";
import { useMemo } from "react";

import Clear from "@shared/assets/icons/svg/sales/Clear.svg";
import { useFetchOffersAsSelectOptions } from "@modules/Sales/hooks/useFiltersOffers";

import * as S from "../styles";
import { useFinancesStore } from "@shared/store";
import { clearFilterExtract } from "@modules/Finances/utils/filters-extract";
import { useExtractFilter } from "@modules/Finances/hook/useExtractFilter";

export const useFilterActive = () => {
  const {
    params,
    handlePreviousPage,
    handleCleanSelectDate,
    handleSetInitialParams,
    handleSetMainSearchFilter,
    handleSetChangeCategoryFilter,
    handleSetChangeTypeTransactionFilter,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      handlePreviousPage: store.handlePreviousPage,
      handleCleanSelectDate: store.handleCleanSelectDate,
      handleSetInitialParams: store.handleSetInitialParams,
      handleSetMainSearchFilter: store.handleSetMainSearchFilter,
      handleSetChangeCategoryFilter: store.handleSetChangeCategoryFilter,
      handleSetChangeTypeTransactionFilter:
        store.handleSetChangeTypeTransactionFilter,
    };
  });
  const { useFetchExtract } = useExtractFilter();
  const { refetch: refetchExtract } = useFetchExtract();

  const handleRemoveAllFilter = () => {
    handleSetInitialParams();
    refetchExtract();
  };

  const handleRemoveFilters = (name: string) => {
    handlePreviousPage(1);
    switch (name) {
      case "main":
        handleSetMainSearchFilter("");
        refetchExtract();
        break;
      case "dateFilter":
        handleCleanSelectDate();
        refetchExtract();
        break;
      case "adjust":
      case "chargeback":
      case "comission":
      case "refunded":
      case "withdrawal":
      case "taxas":
        handleSetChangeCategoryFilter(name);
        refetchExtract();
        break;
      case "in":
      case "out":
        handleSetChangeTypeTransactionFilter(name);
        refetchExtract();
        break;

      default:
        break;
    }
  };

  const filters_active = useMemo(() => {
    const filtersAct = clearFilterExtract(params);

    const filtersArr =
      filtersAct.length > 0
        ? filtersAct.map((item) => (
            <S.WrapperActive key={item.reference}>
              <S.ActiveText>{item.label}</S.ActiveText>
              <S.WrapperBtnClear
                onPress={() => handleRemoveFilters(item.reference)}
              >
                <Clear width={16} height={16} />
              </S.WrapperBtnClear>
            </S.WrapperActive>
          ))
        : [];

    return { filtersAct, filtersArr };
  }, [params]);

  return {
    filters_active,
    handleRemoveAllFilter,
    handleRemoveFilters,
  };
};
