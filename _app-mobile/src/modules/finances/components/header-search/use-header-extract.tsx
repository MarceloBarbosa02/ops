import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Keyboard } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { useExtractFilter } from '@/shared/queries/extract/extract';
import { router } from 'expo-router';
import { format, minutesDifference10Minutes } from '@/shared/utils';
import { formatParams } from '@/shared/queries/extract/format-params';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { useFinancesStore } from '../../store/use-finances-store';
import { HeaderSearch, Typography } from '@/shared/components';
import { clearFilterExtract } from '../../utils/filters-extract';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const storage = new MMKV();
const width = Dimensions.get('screen').width;

import * as S from './header-search.styles';

export const useHeaderExtract = () => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { useExportTransfers, useFetchExtract } = useExtractFilter();
  const { data: extract, refetch: refetchExtract } = useFetchExtract();
  const { mutate: mutateExportTransfers, isPending: isPendingExtract } =
    useExportTransfers();
  const {
    params,
    handleSetMainSearchFilter,
    handlePreviousPage,
    handleCleanSelectDate,
    handleSetChangeTypeTransactionFilter,
    handleSetChangeCategoryFilter,
    handleSetInitialParams,
  } = useFinancesStore((store) => {
    return {
      params: store.params,
      handleSetMainSearchFilter: store.handleSetMainSearchFilter,
      handlePreviousPage: store.handlePreviousPage,
      handleCleanSelectDate: store.handleCleanSelectDate,
      handleSetChangeTypeTransactionFilter:
        store.handleSetChangeTypeTransactionFilter,
      handleSetChangeCategoryFilter: store.handleSetChangeCategoryFilter,
      handleSetInitialParams: store.handleSetInitialParams,
    };
  });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleNavigation = () => {
    router.push('/(private)/(modais)/filters-extract');
    Keyboard.dismiss();
  };

  const handleConfirmExtract = async () => {
    const time = storage.getNumber('@timeExport') || 0;

    const queryString = formatParams(params);

    mutateExportTransfers(queryString, {
      onSuccess: async ({ data }) => {
        showToast({
          delay: 5000,
          type: 'success',
          message:
            data.message ??
            'Em instantes você receberá no seu e-mail o relatório com os dados solicitados.',
        });
        setIsDisabled(false);
        storage.set('@timeExport', new Date().getTime());
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const isColor = useMemo(() => {
    return isFocused ? theme.blue[400] : theme.gray[300];
  }, [isFocused, theme]);

  const handleRemoveAllFilter = () => {
    handleSetInitialParams();
    refetchExtract();
  };

  const handleRemoveFilters = (name: string) => {
    handlePreviousPage(1);
    switch (name) {
      case 'main':
        handleSetMainSearchFilter('');
        refetchExtract();
        break;
      case 'dateFilter':
        handleCleanSelectDate();
        refetchExtract();
        break;
      case 'adjust':
      case 'chargeback':
      case 'comission':
      case 'refunded':
      case 'withdrawal':
      case 'taxas':
        handleSetChangeCategoryFilter(name);
        refetchExtract();
        break;
      case 'in':
      case 'out':
        handleSetChangeTypeTransactionFilter(name);
        refetchExtract();
        break;

      default:
        break;
    }
  };

  const filtersActive = useMemo(() => {
    const filtersAct = clearFilterExtract(params);

    const filtersArr =
      filtersAct.length > 0
        ? filtersAct.map((item) => (
            <S.WrapperActive key={item.reference}>
              <Typography
                title={`${item.label}`}
                variant="subtitle"
                size="large"
              />
              <S.WrapperBtnClear
                onPress={() => handleRemoveFilters(item.reference)}>
                <Ionicons name="close" size={16} color={theme.gray[800]} />
              </S.WrapperBtnClear>
            </S.WrapperActive>
          ))
        : [];

    return { filtersAct, filtersArr };
  }, [params]);

  const headerSales = useMemo(() => {
    return (
      <HeaderSearch
        handleNavigation={handleNavigation}
        filters_active={filtersActive}
        handleRemoveAllFilters={handleRemoveAllFilter}
        handleRequestSearch={() => {}}
        handleSetMainSearchFilter={() => handleSetMainSearchFilter('')}
        params={params}
        label={'Buscar'}
      />
    );
  }, [filtersActive, params]);

  return {
    params,
    isColor,
    extract,
    isLoading,
    isDisabled,
    headerSales,
    isPendingExtract,
    handleInputFocus,
    handleInputBlur,
    handleNavigation,
    handleConfirmExtract,
    handleSetMainSearchFilter,
  };
};
