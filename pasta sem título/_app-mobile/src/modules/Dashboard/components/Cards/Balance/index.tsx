import React from "react";
import { useTheme } from "styled-components/native";

import { format } from "@shared/utils/formatters";
import { Dots } from "@shared/components/Items/Dots";
import { useToggleStore } from "@shared/store";

import * as S from "./styles";

type BalanceProps = {
  balance: number;
  previousDayBalance?: number;
  type: "today" | "pending" | "balance" | "reserved" | "total";
};

export const BalanceCard = ({
  balance,
  previousDayBalance,
  type,
}: BalanceProps) => {
  const toggle = useToggleStore((store) => store.toggle);
  const theme = useTheme();

  const balance_items = {
    today: {
      title: "Vendas hoje",
      color: theme.colors.color_blue_40,
    },
    balance: {
      title: "Saldo disponível",
      color: theme.colors.color_green_40,
    },
    pending: {
      title: "Pendente",
      color: theme.colors.color_yellow_40,
    },
    reserved: {
      title: "Reservado",
      color: theme.colors.color_neutral_90,
    },
    total: {
      title: "Total",
      color: theme.colors.color_blue_40,
    },
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{balance_items[type].title}</S.Title>
        {toggle ? (
          <S.TitleBalance color={balance_items[type].color}>
            {`${format.money(balance)}`}
          </S.TitleBalance>
        ) : (
          <S.WrapperLabel>
            <S.TitleBalance color={theme.colors.color_neutral_30}>
              R$
            </S.TitleBalance>
            <Dots type={type} />
          </S.WrapperLabel>
        )}
      </S.Container>
      {previousDayBalance ? (
        <S.WrapperYesterday>
          <S.TitleYesterday>Ontem</S.TitleYesterday>
          {toggle ? (
            <S.TitleBalanceYesterday>
              {format.money(previousDayBalance)}
            </S.TitleBalanceYesterday>
          ) : (
            <S.WrapperLabel>
              <S.TitleBalance color={theme.colors.color_neutral_30}>
                R$
              </S.TitleBalance>
              <Dots type={type} />
            </S.WrapperLabel>
          )}
        </S.WrapperYesterday>
      ) : null}
    </S.Wrapper>
  );
};
