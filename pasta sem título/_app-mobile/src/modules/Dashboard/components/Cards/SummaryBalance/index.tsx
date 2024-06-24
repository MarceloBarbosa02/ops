import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { useFetchBalances } from "@modules/Dashboard/hooks/useBalances";
import { useToggleStore } from "@shared/store";

import { BalanceCard } from "../Balance";
import { LevelCard } from "../Level";
import * as S from "./styles";

type SummaryBalanceProps = {
  type: "finance" | "dashboard";
};

export const SummaryBalance = ({ type }: SummaryBalanceProps) => {
  const theme = useTheme();
  const { toggle, handleChangeVisible } = useToggleStore((store) => {
    return {
      handleChangeVisible: store.handleChangeVisible,
      toggle: store.toggle,
    };
  });

  const { data: balances } = useFetchBalances();

  if (type === "finance") {
    return (
      <S.Wrapper>
        <S.WrapperTop>
          <S.Title>RESUMO</S.Title>
          <S.BtnToggle onPress={handleChangeVisible} activeOpacity={0.7}>
            {toggle ? (
              <Feather
                name="eye"
                size={18}
                color={theme.colors.color_neutral_70}
              />
            ) : (
              <Feather
                name="eye-off"
                size={18}
                color={theme.colors.color_neutral_70}
              />
            )}
          </S.BtnToggle>
        </S.WrapperTop>

        <BalanceCard balance={balances?.availableBalance} type="balance" />
        <BalanceCard balance={balances?.pendingBalance} type="pending" />
        <BalanceCard
          balance={balances?.securityReserveBalance}
          type="reserved"
        />
        <BalanceCard balance={balances?.totalBalance} type="total" />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.Title>RESUMO</S.Title>
        <S.BtnToggle onPress={handleChangeVisible} activeOpacity={0.7}>
          {toggle ? (
            <Feather
              name="eye"
              size={16}
              color={theme.colors.color_neutral_70}
            />
          ) : (
            <Feather
              name="eye-off"
              size={16}
              color={theme.colors.color_neutral_70}
            />
          )}
        </S.BtnToggle>
      </S.WrapperTop>
      <BalanceCard
        balance={balances?.currentDayBalance}
        type="today"
        previousDayBalance={balances?.previousDayBalance}
      />
      <BalanceCard balance={balances?.pendingBalance} type="pending" />
      <BalanceCard balance={balances?.availableBalance} type="balance" />
      <LevelCard amount={balances?.totalSales} />
    </S.Wrapper>
  );
};
