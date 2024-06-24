import { useFetchBalances } from "@modules/Dashboard/hooks";
import { useToggleStore } from "@shared/store";
import { useTheme } from "styled-components/native";

export const useInfoCard = () => {
  const theme = useTheme();
  const { data: balances, isFetching: isLoadingBalances } = useFetchBalances();
  const { toggle, handleChangeVisible } = useToggleStore((store) => {
    return {
      handleChangeVisible: store.handleChangeVisible,
      toggle: store.toggle,
    };
  });

  const typeTooltip = {
    balance: "Valor disponível para solicitação de saque",
    pending:
      "Valor que estará disponível em breve de acordo com os prazos de pagamento",
    reserved: "Valor ainda não disponível para saque por questões de segurança",
    total:
      "Valor total dos saldos disponíveis, pendentes e reservados no momento",
  };

  const balanceItems = {
    balance: {
      title: "Saldo disponível",
      color: theme.colors.green_l600_d300,
    },
    pending: {
      title: "Pendentes",
      color: theme.colors.orange_l600_d300,
    },
    reserved: {
      title: "Reservado",
      color: theme.colors.gray_l600_d300,
    },
    total: {
      title: "Total",
      color: theme.colors.blue_l600_d300,
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
