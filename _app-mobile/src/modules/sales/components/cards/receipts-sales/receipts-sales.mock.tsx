import {
  BankSlipIcon,
  DiamondIcon,
  GenericIcon,
  PIXIcon,
} from '@/shared/assets/components/sales';
import { FinancesIcon } from '@/shared/assets/components/tabs';
import { Badge } from '@/shared/components';

export const saleStatusTitle = (type: string) => {
  switch (type) {
    case 'APPROVED':
      return (
        <Badge
          label="Aprovada"
          typeBorder="solid"
          size="lg"
          colorValue="success"
        />
      );
    case 'PENDING':
      return (
        <Badge
          label="Pendente"
          typeBorder="solid"
          size="lg"
          colorValue="warning"
        />
      );
    case 'REFUSED':
      return (
        <Badge
          label="Recusada"
          typeBorder="solid"
          size="lg"
          colorValue="warning"
        />
      );
    case 'CHARGEBACK':
      return (
        <Badge
          label="Chargeback"
          typeBorder="solid"
          size="lg"
          colorValue="purple"
        />
      );
    case 'CANCELED':
      return (
        <Badge
          label="Cancelada"
          typeBorder="solid"
          size="lg"
          colorValue="danger"
        />
      );
    case 'REFUNDED':
      return (
        <Badge
          label="Estornada"
          typeBorder="solid"
          size="lg"
          colorValue="primary"
        />
      );
    case 'SYSTEM_ERROR':
      return (
        <Badge label="Erro" typeBorder="solid" size="lg" colorValue="danger" />
      );
    case 'IN_REVIEW':
      return (
        <Badge
          label="Revisão"
          typeBorder="solid"
          size="lg"
          colorValue="purple"
        />
      );
    case 'LIQUIDATING':
      return (
        <Badge
          label="Liquidando"
          typeBorder="solid"
          size="lg"
          colorValue="primary"
        />
      );
    case 'TRANSFERRED':
      return (
        <Badge
          label="Aprovado"
          typeBorder="solid"
          size="lg"
          colorValue="success"
        />
      );

    default:
      return (
        <Badge
          label="Devolvido"
          typeBorder="solid"
          size="lg"
          colorValue="danger"
        />
      );
  }
};

export const methodsPayment = (type: string) => {
  switch (type) {
    case 'pix':
      return <PIXIcon />;
    case 'free':
      return <DiamondIcon />;
    case 'bank_slip':
      return <BankSlipIcon />;

    default:
      return <GenericIcon />;
  }
};
