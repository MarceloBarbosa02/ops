import { useExtractFilter } from '@/shared/queries/extract/extract';
import { useFinancesStore } from '../../store/use-finances-store';
import { useRef } from 'react';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';

export const useExtract = () => {
  const refScroll = useRef<ScrollView>(null);
  const { useFetchExtract } = useExtractFilter();
  const {
    data: extract,
    isFetching: isPendingExtract,
    refetch: refetchExtract,
  } = useFetchExtract();
  const isEmpty = !extract || extract?.meta.total === 0;
  const isNotEmpty = extract && extract?.meta?.pages > 1;

  const { handleSetCurrentPage, handlePreviousPage } = useFinancesStore(
    (store) => {
      return {
        handleSetCurrentPage: store.handleSetCurrentPage,
        handlePreviousPage: store.handlePreviousPage,
      };
    }
  );

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

  const handleNavigationBack = () => {
    router.back();
  };

  return {
    isEmpty,
    extract,
    refScroll,
    isNotEmpty,
    isPendingExtract,
    refetchExtract,
    handlePageChange,
    handleNavigationBack,
    handleSetCurrentPage,
  };
};
