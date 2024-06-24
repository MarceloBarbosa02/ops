import { useFetchBalances } from '@/shared/queries';
import { useToggleVisibleStore } from '@/shared/store/toggle';
import { useTheme } from 'styled-components/native';

export const useSummary = () => {
  const theme = useTheme();
  const { data: balances, isFetching: isLoadingBalances } = useFetchBalances();
  const { toggle, handleChangeVisible } = useToggleVisibleStore((store) => {
    return {
      handleChangeVisible: store.handleChangeVisible,
      toggle: store.toggle,
    };
  });

  const balanceItems = {
    today: {
      title: 'Vendas hoje',
      color: theme.blue[600],
    },
    balance: {
      title: 'Saldo disponível',
      color: theme.green[600],
    },
    pending: {
      title: 'Valores pendentes',
      color: theme.orange[600],
    },
    reserved: {
      title: 'Reservado',
      color: theme.gray[600],
    },
    total: {
      title: 'Total',
      color: theme.blue[500],
    },
  };

  return {
    toggle,
    balances,
    isLoadingBalances,
    balanceItems,
    handleChangeVisible,
  };
};
