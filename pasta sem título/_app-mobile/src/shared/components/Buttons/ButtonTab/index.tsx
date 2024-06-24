import React, { useMemo } from "react";
import { useTheme } from "styled-components";

import Dashboard from "@shared/assets/icons/svg/menu/dashboard.svg";
import Finances from "@shared/assets/icons/svg/menu/dollar.svg";
import FinancesDark from "@shared/assets/icons/svg/menu/dollarDark.svg";
import FinancesBold from "@shared/assets/icons/svg/menu/dollarBold.svg";
import Sales from "@shared/assets/icons/svg/menu/sales.svg";
import SalesDark from "@shared/assets/icons/svg/menu/salesDark.svg";
import SalesBold from "@shared/assets/icons/svg/menu/salesBold.svg";
import Settings from "@shared/assets/icons/svg/menu/settings.svg";

import * as S from "./styles";

type ButtonTabProps = {
  type: "dashboard" | "finances" | "sales" | "settings";
  color: string;
  focused?: boolean;
};

export const ButtonTab = ({ type, focused, color }: ButtonTabProps) => {
  const theme = useTheme();

  const icon_tab = useMemo(() => {
    switch (type) {
      case "dashboard":
        return (
          <>
            {focused ? (
              <>
                <Dashboard fill="#02A0FC" width={24} height={24} />
                <S.Title color="#02A0FC" focused={focused!}>
                  Dashboard
                </S.Title>
              </>
            ) : (
              <>
                <Dashboard
                  fill={theme.colors.color_neutral_100}
                  width={24}
                  height={24}
                />
                <S.Title
                  color={theme.colors.color_neutral_100}
                  focused={focused!}
                >
                  Dashboard
                </S.Title>
              </>
            )}
          </>
        );

      case "finances":
        return (
          <>
            {focused ? (
              <>
                <FinancesBold width={24} height={24} />
                <S.Title color="#02A0FC" focused={focused!}>
                  Finanças
                </S.Title>
              </>
            ) : (
              <>
                {theme.theme === "dark" ? (
                  <Finances width={24} height={24} />
                ) : (
                  <FinancesDark width={24} height={24} />
                )}
                <S.Title
                  color={theme.colors.color_neutral_100}
                  focused={focused!}
                >
                  Finanças
                </S.Title>
              </>
            )}
          </>
        );

      case "sales":
        return (
          <>
            {focused ? (
              <>
                <SalesBold width={24} height={24} color="#02A0FC" />
                <S.Title color="#02A0FC" focused={focused!}>
                  Vendas
                </S.Title>
              </>
            ) : (
              <>
                {theme.theme === "dark" ? (
                  <Sales width={24} height={24} />
                ) : (
                  <SalesDark width={24} height={24} />
                )}
                <S.Title
                  color={theme.colors.color_neutral_100}
                  focused={focused!}
                >
                  Vendas
                </S.Title>
              </>
            )}
          </>
        );

      default:
        return (
          <>
            {focused ? (
              <>
                <Settings fill="#02A0FC" width={24} height={24} />
                <S.Title color="#02A0FC" focused={focused!}>
                  Mais
                </S.Title>
              </>
            ) : (
              <>
                <Settings
                  fill={theme.colors.color_neutral_100}
                  width={24}
                  height={24}
                />
                <S.Title
                  color={theme.colors.color_neutral_100}
                  focused={focused!}
                >
                  Mais
                </S.Title>
              </>
            )}
          </>
        );
    }
  }, [theme, type, focused]);

  return <S.Wrapper>{icon_tab}</S.Wrapper>;
};
