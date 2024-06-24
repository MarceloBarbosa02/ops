import { useTheme } from "styled-components/native";
import { useMemo } from "react";

import {
  TCategoryExtract,
  TStatusWithdrawal,
} from "@shared/types/entities/Finance/types";

import * as S from "./styles";

export const useReceipts = (future: boolean, canceled: boolean) => {
  const theme = useTheme();

  const isColor = useMemo(() => {
    if (!future && canceled) {
      return theme.colors.red_l600_d300;
    }
    if (future && !canceled) {
      return theme.colors.orange_l600_d300;
    }
    if (!future && !canceled) {
      return theme.colors.blue_l600_d300;
    }
  }, [future, canceled]);

  const validCategory = (category: TCategoryExtract) => {
    switch (category) {
      case "AD_HOC":
        return (
          <S.WrapperFlag>
            <S.TextFlag>Ajuste</S.TextFlag>
          </S.WrapperFlag>
        );
      case "CHARGEBACK":
        return (
          <S.WrapperFlag>
            <S.TextFlag>Chargeback</S.TextFlag>
          </S.WrapperFlag>
        );
      case "COMISSION":
        return (
          <S.WrapperFlag>
            <S.TextFlag>Comissão</S.TextFlag>
          </S.WrapperFlag>
        );
      case "REFUND":
        return (
          <S.WrapperFlag>
            <S.TextFlag>Estorno</S.TextFlag>
          </S.WrapperFlag>
        );
      case "TAX":
        return (
          <S.WrapperFlag>
            <S.TextFlag>Taxa</S.TextFlag>
          </S.WrapperFlag>
        );
      case "WITHDRAWAL":
        return (
          <S.WrapperFlag color={isColor}>
            <S.TextFlag color={isColor}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );

      default:
        return;
    }
  };

  const validType = {
    IN: "Entrada",
    OUT: "Saída",
  };

  const isStatusWithdrawal = (statusWithdrawal?: TStatusWithdrawal) => {
    switch (statusWithdrawal) {
      case "IN_REVIEW":
        return (
          <S.WrapperFlag color={theme.colors.orange_l600_d300}>
            <S.TextFlag color={theme.colors.orange_l600_d300}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );
      case "LIQUIDATING":
        return (
          <S.WrapperFlag color={theme.colors.blue_l600_d300}>
            <S.TextFlag color={theme.colors.blue_l600_d300}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );
      case "PENDING":
        return (
          <S.WrapperFlag color={theme.colors.orange_l600_d300}>
            <S.TextFlag color={theme.colors.orange_l600_d300}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );
      case "REFUSED":
        return (
          <S.WrapperFlag color={theme.colors.red_l600_d300}>
            <S.TextFlag color={theme.colors.red_l600_d300}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );
      case "RETURNED":
        return (
          <S.WrapperFlag color={theme.colors.orange_l600_d300}>
            <S.TextFlag color={theme.colors.orange_l600_d300}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );

      default:
        return (
          <S.WrapperFlag color={theme.colors.blue_l600_d300}>
            <S.TextFlag color={theme.colors.blue_l600_d300}>Saque</S.TextFlag>
          </S.WrapperFlag>
        );
    }
  };

  return {
    validType,
    validCategory,
    isStatusWithdrawal,
  };
};
