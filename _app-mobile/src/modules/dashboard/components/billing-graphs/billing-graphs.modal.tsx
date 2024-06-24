import { useTheme } from 'styled-components/native';
import { TBillingGraphsModal, TSelectOptions } from './billing-graphs.types';

import * as S from './billing-graphs.styles';
import { ActionSheet, Typography } from '@/shared/components';
// import { months } from "@/modules/dash/mocks/months";
import { TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useBillingGraphsStore } from './use-billing-graphs.store';
import { Feather } from '@expo/vector-icons';
import { months } from './billing-graphs.mocks';

export const BillingGraphsModal = ({ refModal }: TBillingGraphsModal) => {
  const theme = useTheme();
  const { optionMonth, handleSetOptionSelectMonth } = useBillingGraphsStore(
    (store) => {
      return {
        optionMonth: store.optionMonth,
        handleSetOptionSelectMonth: store.handleSetOptionSelectMonth,
      };
    }
  );

  const handleSelectMonth = (item: TSelectOptions) => {
    handleSetOptionSelectMonth(item);
    // refModal.current?.close();
  };

  return (
    <ActionSheet
      bottomSheetRef={refModal}
      indexOpen={2}
      title="Selecione o mês de faturamento"
    >
      <S.WrapperModal>
        {months.map((item) => (
          <S.ButtonSelect
            key={item.value}
            onPress={() => handleSelectMonth(item)}
          >
            <Typography
              title={item.label}
              weight={optionMonth?.value === item.value ? 'bold' : 'regular'}
            />
            {optionMonth?.value === item.value && (
              <Feather name="check" size={16} color={theme.gray[600]} />
            )}
          </S.ButtonSelect>
        ))}
      </S.WrapperModal>
    </ActionSheet>
  );
};
