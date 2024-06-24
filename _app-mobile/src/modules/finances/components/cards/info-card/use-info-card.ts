import { useFetchBalances } from '@/shared/queries';
import { useToggleVisibleStore } from '@/shared/store/toggle';
import { useTheme } from 'styled-components/native';

export const useInfoCard = () => {
  const theme = useTheme();
  const { data: balances, isFetching: isLoadingBalances } = useFetchBalances();
  const { toggle, handleChangeVisible } = useToggleVisibleStore((store) => {
    return {
      handleChangeVisible: store.handleChangeVisible,
      toggle: store.toggle,
    };
  });

  const typeTooltip = {
    balance: 'Valor disponível para solicitação de saque',
    pending:
      'Valor que estará disponível em breve de acordo com os prazos de pagamento',
    reserved: 'Valor ainda não disponível para saque por questões de segurança',
    total:
      'Valor total dos saldos disponíveis, pendentes e reservados no momento',
  };

  const balanceItems = {
    balance: {
      title: 'Saldo disponível',
      color: theme.green[600],
    },
    pending: {
      title: 'Pendentes',
      color: theme.orange[600],
    },
    reserved: {
      title: 'Reservado',
      color: theme.gray[500],
    },
    total: {
      title: 'Total',
      color: theme.blue[500],
    },
  };

  return {
    toggle,
    balances,
    typeTooltip,
    balanceItems,
    isLoadingBalances,
    handleChangeVisible,
  };
};
