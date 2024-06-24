import { useFiltersRequestSales } from '@/shared/queries/sales/sales';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef, useState } from 'react';

import * as S from './home-sales.styles';
import { Typography } from '@/shared/components';
import { useSalesStore } from '../../store';

export const useHomeSales = () => {
  const refActionSheet = useRef<BottomSheetModal>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { useFetchSalesTotals, useFetchSalesList } = useFiltersRequestSales();
  const { refetch: refetchTotalSales, isFetching: isFetchingTotalSales } =
    useFetchSalesTotals();
  const {
    data: dataListSales,
    refetch: refetchListSales,
    isFetching: isFetchingListSales,
  } = useFetchSalesList();
  const { handleSetInitialParams } = useSalesStore((store) => {
    return {
      handleSetInitialParams: store.handleSetInitialParams,
    };
  });

  const handleNavigationModal = () => {
    refActionSheet.current?.present();
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([refetchTotalSales(), refetchListSales()]);

    setIsRefreshing(false);
  };

  useEffect(() => {
    handleSetInitialParams();
    setTimeout(() => {
      refetchListSales();
      refetchTotalSales();
    }, 200);
  }, []);

  const quantitySales = useMemo(() => {
    if (
      isFetchingListSales ||
      !dataListSales ||
      dataListSales?.meta?.total === 0
    ) {
      return <></>;
    }

    if (String(dataListSales?.meta.total).length <= 2) {
      return (
        <S.WrapperCount size={36}>
          <Typography title={`${dataListSales?.meta.total}`} weight="bold" />
        </S.WrapperCount>
      );
    }
    if (String(dataListSales?.meta.total).length > 2) {
      return (
        <S.WrapperCount size={44}>
          <Typography title={`${dataListSales?.meta.total}`} weight="bold" />
        </S.WrapperCount>
      );
    }
  }, [isFetchingListSales, dataListSales?.meta.total]);

  return {
    isRefreshing,
    quantitySales,
    handleRefresh,
    refetchListSales,
    refetchTotalSales,
    handleNavigationModal,
  };
};
