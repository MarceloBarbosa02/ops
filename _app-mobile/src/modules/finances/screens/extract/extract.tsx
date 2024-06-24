import { ScrollView } from 'react-native';
import { useEffect } from 'react';

import { Pagination, StackScreen } from '@/shared/components';

import { EmptyCard, HeaderExtract, HistoryCard } from '../../components';
import { SKExtract } from '../../components/skeleton';

import { useExtract } from './use-extract';

import * as S from './extract.styles';

const ExtractScreen = () => {
  const {
    extract,
    isEmpty,
    refScroll,
    isNotEmpty,
    isPendingExtract,
    refetchExtract,
    handlePageChange,
    handleSetCurrentPage,
    handleNavigationBack,
  } = useExtract();

  useEffect(() => {
    refetchExtract();
  }, []);

  return (
    <StackScreen
      title="Extrato"
      isScroll={false}
      handleNavigateLeft={handleNavigationBack}>
      <S.Wrapper>
        <S.WrapperHistory>
          <HeaderExtract />
          <ScrollView
            ref={refScroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="none"
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            {isPendingExtract ? (
              <SKExtract />
            ) : (
              <S.WrapperContent>
                {isEmpty ? <EmptyCard /> : <HistoryCard />}
                {isNotEmpty && (
                  <S.WrapperFooter>
                    <Pagination
                      handleSearch={handlePageChange}
                      pageNumber={Number(extract?.meta?.page)}
                      setPageNumber={() =>
                        handleSetCurrentPage(Number(extract?.meta?.page) + 1)
                      }
                      totalItems={Number(extract?.meta?.total)}
                    />
                  </S.WrapperFooter>
                )}
              </S.WrapperContent>
            )}
          </ScrollView>
        </S.WrapperHistory>
      </S.Wrapper>
    </StackScreen>
  );
};

export default ExtractScreen;
