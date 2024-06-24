import React, { useMemo, useRef } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { HeaderExtract } from "@modules/Finances/components/Cards/HeaderExtract";
import { ReceiptsExtract } from "@modules/Finances/components/Cards/ReceiptsExtract/receipts-extract";
import { FilterActiveCard } from "@modules/Finances/components/Cards/FilterActive";
import { SKExtract } from "@modules/Finances/components/Skeleton/SKExtract";
import { useExtractFilter } from "@modules/Finances/hook/useExtractFilter";
import { EmptyCard } from "@modules/Finances/components/Cards/Empty";
import { Pagination, StackScreen } from "@shared/components";
import { useFinancesStore } from "@shared/store";

import * as S from "./styles";

export const ExtractScreen = () => {
  const theme = useTheme();
  const refScroll = useRef<ScrollView>(null);
  const { goBack } = useNavigation();
  const { useFetchExtract } = useExtractFilter();
  const { handleSetCurrentPage, handlePreviousPage } = useFinancesStore(
    (store) => {
      return {
        handleSetCurrentPage: store.handleSetCurrentPage,
        handlePreviousPage: store.handlePreviousPage,
      };
    }
  );

  const {
    data: extract,
    isFetching,
    refetch: refetchExtract,
  } = useFetchExtract();

  const dataWithdrawals = useMemo(() => {
    const pending = extract?.data.filter((withdrawal) => withdrawal?.isFuture);
    const done = extract?.data.filter((withdrawal) => !withdrawal?.isFuture);

    return { pending, done };
  }, [extract?.data]);

  const handlePageChange = (value: number) => {
    handlePreviousPage(value);
    setTimeout(() => {
      refetchExtract();
    }, 300);
    refScroll.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };

  const isValidPending =
    (dataWithdrawals?.pending?.length as number) !== 0 &&
    (dataWithdrawals?.pending?.length as number) < 10;

  const isValidDone =
    (dataWithdrawals?.done?.length as number) !== 0 &&
    (dataWithdrawals?.done?.length as number) < 10;

  console.log("extract", { extract });

  return (
    <StackScreen title="Extrato" isScroll={false} handleNavigateLeft={goBack}>
      <S.Container>
        <HeaderExtract />
        <ScrollView ref={refScroll} showsVerticalScrollIndicator={false}>
          {isFetching ? (
            <SKExtract />
          ) : (
            <S.Content>
              <FilterActiveCard />
              {extract?.data.length === 0 ? (
                <EmptyCard />
              ) : (
                <>
                  {dataWithdrawals?.pending?.length ? (
                    <S.WrapperSeparate>
                      <S.TitleSeparate>PRÓXIMOS LANÇAMENTOS</S.TitleSeparate>
                    </S.WrapperSeparate>
                  ) : null}
                  {dataWithdrawals?.pending?.length ? (
                    <S.WrapperItems>
                      {dataWithdrawals?.pending?.map((item) => (
                        <ReceiptsExtract key={item.uuid} data={item} />
                      ))}
                    </S.WrapperItems>
                  ) : null}
                  {isValidPending && isValidDone ? (
                    <S.WrapperSeparate line>
                      <S.LineSeparate />
                    </S.WrapperSeparate>
                  ) : null}
                  {dataWithdrawals?.done?.length ? (
                    <S.WrapperItemsDone>
                      {dataWithdrawals?.done?.map((item) => (
                        <ReceiptsExtract key={item.uuid} data={item} />
                      ))}
                    </S.WrapperItemsDone>
                  ) : null}
                  {extract && extract?.meta?.pages > 1 && (
                    <S.WrapperFooter>
                      <Pagination
                        handleSearch={handlePageChange}
                        pageNumber={extract?.meta?.page}
                        setPageNumber={() =>
                          handleSetCurrentPage(extract?.meta?.page + 1)
                        }
                        totalItems={extract?.meta?.total}
                      />
                    </S.WrapperFooter>
                  )}
                </>
              )}
            </S.Content>
          )}
        </ScrollView>
      </S.Container>
    </StackScreen>
  );
};
