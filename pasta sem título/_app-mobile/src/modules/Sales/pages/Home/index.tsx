import React, { useEffect, useMemo, useRef, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { useForm } from "react-hook-form";
import { useIsFocused } from "@react-navigation/native";

import ImgEmpty from "@shared/assets/images/svg/sales-empty-state.svg";
import ImgEmptyDark from "@shared/assets/images/svg/sales-empty-state-dark.svg";
import {
  EmptyCards,
  Pagination,
  ScreenLayout,
  TabsScreen,
} from "@shared/components";
import { useCompanyStore } from "@shared/store/useCompanyStore";
import { HeaderParallax, TopValueCards } from "@modules/Sales/components";
import { ReceiptsSales } from "@modules/Sales/components/Cards/Receipts";
import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { SkeletonList } from "@modules/Sales/components/Skeletons/SkeletonList";
import { useSalesStore } from "@shared/store/useSalesStore";
import { FilterActiveCard } from "@modules/Sales/components/Cards/Filters";

import * as S from "./styles";

export const SalesHomeScreen = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const refScroll = useRef<ScrollView>(null);

  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { useFetchSalesList, useFetchSalesTotals } = useFiltersSearch();
  const { handlePreviousPage, handleSetMainSearchFilter } = useSalesStore(
    (store) => {
      return {
        handlePreviousPage: store.handlePreviousPage,
        handleSetMainSearchFilter: store.handleSetMainSearchFilter,
      };
    }
  );
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const { data: totalSalesData, refetch: refetchSales } = useFetchSalesTotals();
  const {
    data: salesListData,
    isFetching: isFetchingListSales,
    refetch: refetchList,
  } = useFetchSalesList();

  const handlePageFilter = (page: number) => {
    handlePreviousPage(page);
    refScroll.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
    setTimeout(() => {
      refetchSales();
      refetchList();
    }, 300);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    handlePreviousPage(1);

    if (currentCompany?.uuid) {
      await Promise.all([refetchSales(), refetchList()]);
    }

    setIsRefreshing(false);
  };

  return (
    <ScreenLayout title="Vendas" quantity={salesListData?.meta?.total} isTabs>
      <S.Wrapper>
        <HeaderParallax />
        <ScrollView
          ref={refScroll}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor={theme.colors.color_neutral_100}
            />
          }
        >
          <FilterActiveCard />

          <S.Container>
            {isFetchingListSales ? (
              <SkeletonList />
            ) : (
              <>
                {!salesListData || salesListData?.meta?.total === 0 ? (
                  <EmptyCards
                    title="Não há registros..."
                    description="Quando surgirem vendas, você poderá gerenciá-las por aqui."
                    image={
                      theme.theme === "dark" ? <ImgEmptyDark /> : <ImgEmpty />
                    }
                  />
                ) : (
                  <>
                    <S.WrapperTotal>
                      <TopValueCards
                        title="COMISSÃO"
                        value={totalSalesData?.commission}
                      />
                      <TopValueCards
                        title="TOTAL"
                        value={totalSalesData?.total}
                      />
                    </S.WrapperTotal>
                    {salesListData?.data?.map((item: any, index: number) => (
                      <ReceiptsSales
                        key={`${item.code}_${index}`}
                        data={item}
                      />
                    ))}
                  </>
                )}
              </>
            )}
            {salesListData?.meta?.pages > 1 && (
              <Pagination
                handleSearch={handlePageFilter}
                pageNumber={salesListData.meta?.page}
                setPageNumber={() =>
                  handlePageFilter(salesListData.meta?.page + 1)
                }
                totalItems={salesListData.meta?.total}
              />
            )}
          </S.Container>
        </ScrollView>
      </S.Wrapper>
    </ScreenLayout>
  );
};
