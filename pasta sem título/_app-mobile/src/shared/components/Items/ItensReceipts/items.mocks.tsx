import Diamond from "@shared/assets/icons/svg/payment-methods/diamond.svg";
import { PIXIcon } from "@shared/assets/components/sales/pix";
import { BankSlipIcon } from "@shared/assets/components/sales/bank-slip";
import { GenericIcon } from "@shared/assets/components/sales/generic";

import * as S from "./styles";

export const sale_Status_title = {
  APPROVED: "Aprovada",
  PENDING: "Pendente",
  REFUSED: "Recusada",
  CHARGEBACK: "Chargeback",
  CANCELED: "Cancelada",
  REFUNDED: "Estornada",
  SYSTEM_ERROR: "Erro",

  IN_REVIEW: "Revisão",
  LIQUIDATING: "Liquidando",
  TRANSFERRED: "Aprovado",
  RETURNED: "Devolvido",
};

export const saleStatusTitle = (type: string) => {
  switch (type) {
    case "APPROVED":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "PENDING":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "REFUSED":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "CHARGEBACK":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "CANCELED":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "REFUNDED":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "SYSTEM_ERROR":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "IN_REVIEW":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "LIQUIDATING":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );
    case "TRANSFERRED":
      return (
        <S.WrapperBadge status={type}>
          <S.TitleBadge status={type}>{sale_Status_title[type]}</S.TitleBadge>
        </S.WrapperBadge>
      );

    default:
      return (
        <S.WrapperBadge status={"RETURNED"}>
          <S.TitleBadge status={"RETURNED"}>
            {sale_Status_title["RETURNED"]}
          </S.TitleBadge>
        </S.WrapperBadge>
      );
  }
};

export const methodsPayment = (type: string) => {
  switch (type) {
    case "pix":
      return <PIXIcon />;
    case "free":
      return <Diamond />;
    case "bank_slip":
      return <BankSlipIcon />;

    default:
      return <GenericIcon />;
  }
};
