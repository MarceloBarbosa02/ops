import * as S from './billing-graphs.styles';
import { ButtonFilter } from './button.filter';
import { days_charts } from './billing-graphs.mocks';
import { useState } from 'react';
import { useBillingGraphsStore } from './use-billing-graphs.store';
import { useFetchChart } from '@/shared/queries';

export const FilterCharts = () => {
  const { optionSelect, handleSetOptionSelect } = useBillingGraphsStore(
    (store) => {
      return {
        optionSelect: store.optionSelect,
        handleSetOptionSelect: store.handleSetOptionSelect,
      };
    }
  );
  const { refetch } = useFetchChart(optionSelect);

  const handleFilter = (item: number) => {
    handleSetOptionSelect(item);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  return (
    <S.WrapperFilter>
      {days_charts.map((item) => (
        <ButtonFilter
          key={item.day.toString()}
          type="filter"
          title={item.label}
          active={item.day === optionSelect}
          onPress={() => handleFilter(item.day)}
        />
      ))}
    </S.WrapperFilter>
  );
};
