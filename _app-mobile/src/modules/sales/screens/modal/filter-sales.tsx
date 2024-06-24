import { FormProvider } from 'react-hook-form';
import { useEffect } from 'react';

import { CalendarModal, FooterCard, ModalScreen } from '@/shared/components';
import { CheckIcon } from '@/shared/assets/components/generics';

import { useFilterSales } from './use-filter-sales';
import {
  HeaderForm,
  MethodPaymentFilterCard,
  OriginFilterCard,
  StatusFilterCard,
  TypeOffersFilterCard,
  UTMFiltersCard,
} from '../../components/form';
import * as S from './filter-sales.styles';
import { View } from 'moti';
import { ScrollView } from 'react-native';

const FilterSalesScreenModal = () => {
  const {
    params,
    methods,
    isLoading,
    modalCalendar,
    handleSelectDate,
    handleApplyFilters,
    handleNavigationBack,
    handleSetInitialParams,
    handleShowModalCalendar,
  } = useFilterSales();

  useEffect(() => {
    handleSetInitialParams();
  }, []);

  return (
    <ModalScreen
      title="Filtrar"
      handleNavigateRight={handleNavigationBack}
      isScroll={false}>
      <S.WrapperFilters>
        {/* <View /> */}
        <ScrollView>
          <FormProvider {...methods}>
            <HeaderForm />

            <OriginFilterCard />

            <TypeOffersFilterCard />

            <MethodPaymentFilterCard />

            <StatusFilterCard />

            <UTMFiltersCard />
          </FormProvider>
        </ScrollView>
        <FooterCard
          handleOnPressLeft={handleNavigationBack}
          handleOnPressRight={handleApplyFilters}
          titleLeft="Cancelar"
          titleRight="Aplicar filtros"
          colorRight="success"
          isLoading={isLoading}
          startContent={<CheckIcon />}
        />
      </S.WrapperFilters>
      <CalendarModal
        close={handleShowModalCalendar}
        isShow={modalCalendar}
        defaultDate={params?.dateFilter as Date[]}
        handleSelectDate={handleSelectDate}
      />
    </ModalScreen>
  );
};

export default FilterSalesScreenModal;
