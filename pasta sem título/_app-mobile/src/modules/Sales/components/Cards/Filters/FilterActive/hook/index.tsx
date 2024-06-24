import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { clearFilter } from "@modules/Sales/utils/formatFilter";
import { useSalesStore } from "@shared/store/useSalesStore";
import { useMemo } from "react";

import Clear from "@shared/assets/icons/svg/sales/Clear.svg";
import { useFetchOffersAsSelectOptions } from "@modules/Sales/hooks/useFiltersOffers";

import * as S from "../styles";

export const useFilterActive = () => {
  const { useProductsSoldAsSelectOptions } = useFiltersSearch();
  const {
    params,
    handlePreviousPage,
    handleSelectOffers,
    handleSelectProducts,
    handleCleanSelectDate,
    handleSetInitialParams,
    handleSetChangeUTMFilter,
    handleSetMainSearchFilter,
    handleSetChangeStatusFilter,
    handleSetChangeOriginFilter,
    handleSetEmailAffiliateFilter,
    handleSetChangeTypeOffersFilter,
    handleSetChangePaymentMethodFilter,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSelectOffers: store.handleSelectOffers,
      handlePreviousPage: store.handlePreviousPage,
      handleSelectProducts: store.handleSelectProducts,
      handleCleanSelectDate: store.handleCleanSelectDate,
      handleSetInitialParams: store.handleSetInitialParams,
      handleSetChangeUTMFilter: store.handleSetChangeUTMFilter,
      handleSetChangeOriginFilter: store.handleSetChangeOriginFilter,
      handleSetChangeTypeOffersFilter: store.handleSetChangeTypeOffersFilter,
      handleSetChangePaymentMethodFilter:
        store.handleSetChangePaymentMethodFilter,
      handleSetChangeStatusFilter: store.handleSetChangeStatusFilter,
      handleSetMainSearchFilter: store.handleSetMainSearchFilter,
      handleSetEmailAffiliateFilter: store.handleSetEmailAffiliateFilter,
    };
  });
  const { productsOptions } = useProductsSoldAsSelectOptions();
  const { options: offersOptions } = useFetchOffersAsSelectOptions(
    params.productFilter
  );
  const { useFetchSalesList, useFetchSalesTotals } = useFiltersSearch();
  const { refetch: refetchSales } = useFetchSalesTotals();
  const { refetch: refetchList } = useFetchSalesList();

  const handleRefetch = () => {
    setTimeout(() => {
      refetchSales();
      refetchList();
    }, 400);
  };

  const handleRemoveAllFilter = () => {
    handleSetInitialParams();
    handleRefetch();
  };

  const handleRemoveFilters = (name: string) => {
    handlePreviousPage(1);
    switch (name) {
      case "main":
        handleSetMainSearchFilter("");
        handleRefetch();
        break;
      case "dateFilter":
        handleCleanSelectDate();
        handleRefetch();
        break;
      case "product":
        handleSelectProducts({
          label: "",
          value: "",
        });
        handleRefetch();
        break;
      case "affiliateEmail":
        handleSetEmailAffiliateFilter("");
        handleRefetch();
        break;
      case "offer":
        handleSelectOffers({
          label: "",
          value: "",
        });
        handleRefetch();
        break;
      case "approved":
      case "pending":
      case "expired":
      case "refused":
      case "refunded":
      case "chargeback":
        handleSetChangeStatusFilter(name);
        handleRefetch();
        break;
      case "creditCard":
      case "pix":
      case "bankSlip":
      case "free":
        handleSetChangePaymentMethodFilter(name);
        handleRefetch();
        break;
      case "oneTime":
      case "recurring":
        handleSetChangeTypeOffersFilter(name);
        handleRefetch();
        break;
      case "autoral":
      case "affiliation":
      case "coproduction":
        handleSetChangeOriginFilter(name);
        handleRefetch();
        break;
      case "utmCampaign":
      case "utmContent":
      case "utmMedium":
      case "utmSource":
      case "utmSrc":
      case "utmTerm":
        handleSetChangeUTMFilter(name, "");
        handleRefetch();
        break;

      default:
        break;
    }
  };

  const filters_active = useMemo(() => {
    const filtersAct = clearFilter(params, productsOptions, offersOptions);

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
  }, [params, productsOptions, offersOptions]);

  return {
    filters_active,
    handleRemoveAllFilter,
    handleRemoveFilters,
  };
};
