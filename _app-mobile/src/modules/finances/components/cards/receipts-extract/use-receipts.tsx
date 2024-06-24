import { useTheme } from 'styled-components/native';
import { useCallback, useMemo, useRef } from 'react';
import { Modalize } from 'react-native-modalize';

import Badge from '@/shared/components/badge/badge';
import {
  TCategoryExtract,
  TStatusWithdrawal,
} from '@/shared/queries/extract/extract.types';
import { useFinancesStore } from '@/modules/finances/store/use-finances-store';

export const useReceipts = (
  future: boolean,
  canceled: boolean,
  isDisabled: boolean
) => {
  const theme = useTheme();
  const refActionSheet = useRef<Modalize>(null);
  const { handleSetDetail } = useFinancesStore((store) => {
    return {
      handleSetDetail: store.handleSetUUIDDetail,
    };
  });

  const isColor = useMemo(() => {
    if (!future && canceled) {
      return 'danger';
    }
    if (future && !canceled) {
      return 'warning';
    }
    if (!future && !canceled) {
      return 'primary';
    }
  }, [future, canceled]);

  const validCategory = useCallback((category: TCategoryExtract) => {
    switch (category) {
      case 'AD_HOC':
        return <Badge label="Ajuste" colorValue="primary" typeBorder="solid" />;
      case 'CHARGEBACK':
        return (
          <Badge label="Chargeback" colorValue="primary" typeBorder="solid" />
        );
      case 'COMISSION':
        return (
          <Badge label="Comissão" colorValue="primary" typeBorder="solid" />
        );
      case 'REFUND':
        return (
          <Badge label="Estorno" colorValue="primary" typeBorder="solid" />
        );
      case 'TAX':
        return <Badge label="Taxas" colorValue="primary" typeBorder="solid" />;
      case 'WITHDRAWAL':
        return <Badge label="Saque" colorValue={isColor} typeBorder="solid" />;

      default:
        return;
    }
  }, []);

  const validType = {
    IN: 'Entrada',
    OUT: 'Saída',
  };

  const isStatusWithdrawal = useCallback(
    (statusWithdrawal?: TStatusWithdrawal) => {
      switch (statusWithdrawal) {
        case 'IN_REVIEW':
          return (
            <Badge label="Saque" colorValue="warning" typeBorder="solid" />
          );
        case 'LIQUIDATING':
          return (
            <Badge label="Saque" colorValue="primary" typeBorder="solid" />
          );
        case 'PENDING':
          return (
            <Badge label="Saque" colorValue="warning" typeBorder="solid" />
          );
        case 'REFUSED':
          return <Badge label="Saque" colorValue="danger" typeBorder="solid" />;
        case 'RETURNED':
          return (
            <Badge label="Saque" colorValue="warning" typeBorder="solid" />
          );

        default:
          return (
            <Badge label="Saque" colorValue="warning" typeBorder="solid" />
          );
      }
    },
    []
  );

  const handleShowModalDetail = (uuid: string) => {
    if (isDisabled) return;

    handleSetDetail(uuid);
    refActionSheet.current?.open();
  };

  return {
    validType,
    refActionSheet,
    validCategory,
    isStatusWithdrawal,
    handleShowModalDetail,
  };
};
