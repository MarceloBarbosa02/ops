import { router } from 'expo-router';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTheme } from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMemo, useRef } from 'react';

import { useFiltersRequestSales } from '@/shared/queries/sales/sales';
import { clearFilterSales } from '@/shared/queries/sales/format-filter-sales';
import { useFetchOffersAsSelectOptions } from '@/shared/queries/offers/offers';
import { useProductsSoldAsSelectOptions } from '@/shared/queries';
import { HeaderSearch, Typography } from '@/shared/components';
import { format } from '@/shared';

import { useSalesStore } from '../../store/use-sales-store';

import * as S from './history.styles';

const { width } = Dimensions.get('window');

export const useHistory = () => {
  const theme = useTheme();
  const refScroll = useRef<ScrollView>(null);
  const refActionSheet = useRef<BottomSheetModal>(null);
  const { useFetchSalesTotals, useFetchSalesList } = useFiltersRequestSales();
  const { data: dataTotalSales, refetch: refetchTotalSales } =
    useFetchSalesTotals();
  const {
    data: dataListSales,
    isFetching: isFetchingListSales,
    refetch: refetchListSales,
  } = useFetchSalesList();
  const {
    params,
    handleRemoveParams,
    handleOneSalesUUID,
    handlePreviousPage,
    handleSelectOffers,
    handleSelectProducts,
    handleCleanSelectDate,
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
      handleOneSalesUUID: store.handleOneSalesUUID,
      handleRemoveParams: store.handleRemoveParams,
      handleSelectOffers: store.handleSelectOffers,
      handlePreviousPage: store.handlePreviousPage,
      handleSelectProducts: store.handleSelectProducts,
      handleCleanSelectDate: store.handleCleanSelectDate,
      handleSetChangeUTMFilter: store.handleSetChangeUTMFilter,
      handleSetMainSearchFilter: store.handleSetMainSearchFilter,
      handleSetChangeOriginFilter: store.handleSetChangeOriginFilter,
      handleSetChangeStatusFilter: store.handleSetChangeStatusFilter,
      handleSetEmailAffiliateFilter: store.handleSetEmailAffiliateFilter,
      handleSetChangeTypeOffersFilter: store.handleSetChangeTypeOffersFilter,
      handleSetChangePaymentMethodFilter:
        store.handleSetChangePaymentMethodFilter,
    };
  });
  const { productsOptions } = useProductsSoldAsSelectOptions();
  const { options: offerOptions } = useFetchOffersAsSelectOptions();

  if (productsOptions) {
    const hasAllOption = productsOptions.find(
      (product: any) => product.value === 'all'
    );
    if (!hasAllOption) {
      productsOptions.unshift({
        value: 'all',
        label: 'Todos',
      });
    }
  }
  if (offerOptions) {
    const hasAllOfferOptions = offerOptions.find(
      (offer: any) => offer.value === 'all'
    );
    if (!hasAllOfferOptions) {
      offerOptions.unshift({
        value: 'all',
        label: 'Todas',
      });
    }
  }

  const handleRefetch = () => {
    setTimeout(() => {
      refetchTotalSales();
      refetchListSales();
    }, 400);
  };

  const handleNavigation = () => {
    router.push('/(private)/(modais)/filters-sales');
  };

  const handleNavigationDetails = (uuid: string) => {
    handleOneSalesUUID(uuid);
    router.push('/(private)/(modais)/details-sales');
  };

  const handleRemoveAllFilter = () => {
    handleRemoveParams();
    handleRefetch();
  };

  const handleRemoveFilters = (name: string) => {
    handlePreviousPage(1);
    switch (name) {
      case 'main':
        handleSetMainSearchFilter('');
        handleRefetch();
        break;
      case 'dateFilter':
        handleCleanSelectDate();
        handleRefetch();
        break;
      case 'product':
        handleSelectProducts('');
        handleSelectOffers('');
        handleRefetch();
        break;
      case 'affiliateEmail':
        handleSetEmailAffiliateFilter('');
        handleRefetch();
        break;
      case 'offer':
        handleSelectOffers('');
        handleRefetch();
        break;
      case 'approved':
      case 'pending':
      case 'expired':
      case 'refused':
      case 'refunded':
      case 'chargeback':
        handleSetChangeStatusFilter(name);
        handleRefetch();
        break;
      case 'creditCard':
      case 'pix':
      case 'bankSlip':
      case 'free':
        handleSetChangePaymentMethodFilter(name);
        handleRefetch();
        break;
      case 'oneTime':
      case 'recurring':
        handleSetChangeTypeOffersFilter(name);
        handleRefetch();
        break;
      case 'autoral':
      case 'affiliation':
        handleSetChangeOriginFilter(name);
        handleRefetch();
        break;
      case 'utmCampaign':
      case 'utmContent':
      case 'utmMedium':
      case 'utmSource':
      case 'utmSrc':
      case 'utmTerm':
        handleSetChangeUTMFilter(name, '');
        handleRefetch();
        break;

      default:
        break;
    }
  };

  const filtersActive = useMemo(() => {
    const filtersAct = clearFilterSales(params, productsOptions, offerOptions);

    const filtersArr =
      filtersAct.length > 0
        ? filtersAct.map((item) => (
            <S.WrapperActive key={item.reference}>
              <Typography
                title={`${item.label}`}
                variant="subtitle"
                size="large"
              />
              <S.WrapperBtnClear
                onPress={() => handleRemoveFilters(item.reference)}>
                <Ionicons name="close" size={16} color={theme.gray[800]} />
              </S.WrapperBtnClear>
            </S.WrapperActive>
          ))
        : [];

    return { filtersAct, filtersArr };
  }, [params, offerOptions, productsOptions]);

  const headerSales = useMemo(() => {
    return (
      <S.WrapperHeader>
        <HeaderSearch
          handleNavigation={handleNavigation}
          filters_active={filtersActive}
          handleRemoveAllFilters={handleRemoveAllFilter}
          handleRequestSearch={() => {}}
          handleSetMainSearchFilter={() => handleSetMainSearchFilter('')}
          params={params}
          label={format.limitarTamanhoString(
            'Buscar por CPF, transação ou nome',
            width + 50
          )}
        />
      </S.WrapperHeader>
    );
  }, [filtersActive, params]);

  const handlePageChange = (value: number) => {
    refScroll.current?.scrollTo({
      x: 0,
      y: -500,
      animated: true,
    });
    handlePreviousPage(value);

    setTimeout(() => {
      refetchTotalSales();
      refetchListSales();
    }, 300);
  };

  return {
    params,
    refScroll,
    headerSales,
    offerOptions,
    productsOptions,
    dataListSales,
    filtersActive,
    dataTotalSales,
    refActionSheet,
    isFetchingListSales,
    handleNavigationDetails,
    handlePageChange,
    handleNavigation,
    handleRemoveFilters,
    handleRemoveAllFilter,
    handleSetMainSearchFilter,
  };
};
