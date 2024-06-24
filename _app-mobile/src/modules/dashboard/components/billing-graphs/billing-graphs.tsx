import * as S from './billing-graphs.styles';
import { BillingGraphsCharts } from './billing-graphs.charts';
import { FilterCharts } from './filter.charts';
import { ButtonFilter } from './button.filter';
import { useBillingGraphsStore } from './use-billing-graphs.store';
import { useEffect, useMemo, useRef } from 'react';
import { BillingGraphsModal } from './billing-graphs.modal';
import { months } from './billing-graphs.mocks';
import { useFetchChart } from '@/shared/queries';
import { Typography } from '@/shared/components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import ChartSkeleton from './billing-graphs.skeleton';

const BillingGraphsCards = () => {
  const refModal = useRef<BottomSheetModal>(null);
  const { optionSelect, optionMonth, handleSetOptionSelectMonth } =
    useBillingGraphsStore((store) => {
      return {
        optionSelect: store.optionSelect,
        optionMonth: store.optionMonth,
        handleSetOptionSelectMonth: store.handleSetOptionSelectMonth,
      };
    });
  const { data, isFetching } = useFetchChart(optionSelect);

  const formatMonth = useMemo(() => {
    const index = data?.data[0].date.split('-')[1];

    return months[Number(index) - 1];
  }, [data, months]);

  const openModalMonths = () => {
    refModal.current?.present();
  };

  useEffect(() => {
    handleSetOptionSelectMonth(formatMonth);
  }, [formatMonth]);

  if (isFetching) {
    return <ChartSkeleton />;
  }

  return (
    <S.Wrapper>
      <S.WrapperFilterHeader>
        <Typography title="Gráfico de faturamento" />
        {/* <ButtonFilter
          title={optionMonth?.label ?? 'Mês'}
          type="date"
          onPress={openModalMonths}
        /> */}
      </S.WrapperFilterHeader>
      <FilterCharts />
      <BillingGraphsCharts />
      <BillingGraphsModal refModal={refModal} />
    </S.Wrapper>
  );
};

export default BillingGraphsCards;
