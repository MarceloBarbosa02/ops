export interface SelectProps {
  id: number;
  APPROVED: string;
  reference: string;
  isActive: boolean;
}

export const sale_Status_title = {
  APPROVED: "Aprovada",
  PENDING: "Pendente",
  REFUSED: "Recusada",
  CHARGEBACK: "Chargeback",
  CANCELED: "Cancelada",
  REFUNDED: "Estornada",
  SYSTEM_ERROR: "Erro",
};
