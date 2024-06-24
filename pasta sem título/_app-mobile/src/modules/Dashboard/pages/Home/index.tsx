import React, { createContext, useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { useIsFocused } from "@react-navigation/native";

import { ScreenLayout } from "@shared/components";
import {
  Conversion,
  InfoCard,
  SKDash,
  SummaryBalance,
} from "@modules/Dashboard/components";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { useFetchBalances } from "@modules/Dashboard/hooks";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { IBalancesResponse, ISalesChartResponse } from "@shared/types/entities";

import * as S from "./styles";

export interface IDashboardHomeContext {
  dataBalance: IBalancesResponse;
  dataChart: ISalesChartResponse;
  optionSelect: number;
  isLoading: boolean;
  handleLoadCharts(days: number): void;
  handleSelectOption(value: number): void;
}

export const DashboardHomeContext = createContext<IDashboardHomeContext>(
  {} as IDashboardHomeContext
);

export const DashboardHomeScreen = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const { refetch: refetchUser } = useFetchMe();
  const { refetch: refetchCompanies } = useFetchCompanies();
  const { refetch: refetchBalances, isLoading: isLoadingBalances } =
    useFetchBalances();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([refetchBalances(), refetchUser(), refetchCompanies()]);

    setIsRefreshing(false);
  };

  return (
    <ScreenLayout title="Dashboard" isTabs>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.color_neutral_100}
          />
        }
      >
        <S.Container>
          {isLoadingBalances ? (
            <SKDash />
          ) : (
            <>
              <SummaryBalance type="dashboard" />
              <Conversion title="CONVERSÃO DE PAGAMENTO" />
              <S.WrapperFooter>
                <InfoCard
                  title="STATUS DA CONTA"
                  description="Em breve você terá acesso a um informe instantâneo da saúde do seu negócio."
                />
                <InfoCard
                  title="CONVERSÃO DE CHECKOUT"
                  description="Em breve você terá acesso a um funil otimizado com a conversão dos acessos ao checkout."
                />
              </S.WrapperFooter>
            </>
          )}
        </S.Container>
      </ScrollView>
    </ScreenLayout>
  );
};
