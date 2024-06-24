import { useExtractFilter } from '@/shared/queries/extract/extract';
import { useFinancesStore } from '../../store/use-finances-store';
import { router } from 'expo-router';
import { Keyboard } from 'react-native';

export const useFiltersExtract = () => {
  const { useFetchExtract } = useExtractFilter();
  const {
    params,
    isOpenModal,
    modalCalendar,
    handleSelectDate,
    handlePreviousPage,
    handleSetAuxParams,
    handleSetGoBackParams,
    handleShowModalCalendar,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      auxParams: store.auxParams,
      modalCalendar: store.modalCalendar,
      isOpenModal: store.isOpenModal,
      handleSelectDate: store.handleSelectDate,
      handlePreviousPage: store.handlePreviousPage,
      handleSetAuxParams: store.handleSetAuxParams,
      handleSetGoBackParams: store.handleSetGoBackParams,
      handleShowModalCalendar: store.handleShowModalCalendar,
    };
  });
  const { refetch: refetchExtract } = useFetchExtract();

  const handleNavigation = () => {
    handleSetAuxParams();
    router.push('/(private)/(modais)/filters-extract');
    Keyboard.dismiss();
  };

  const handleNavigationBack = () => {
    handlePreviousPage(1);
    refetchExtract();
    router.dismiss();
  };

  const handleClosed = () => {
    // handleSetGoBackParams();
    router.dismiss();
  };

  return {
    params,
    isOpenModal,
    modalCalendar,
    handleClosed,
    handleNavigation,
    handleSelectDate,
    handlePreviousPage,
    handleNavigationBack,
    handleSetGoBackParams,
    handleShowModalCalendar,
  };
};
