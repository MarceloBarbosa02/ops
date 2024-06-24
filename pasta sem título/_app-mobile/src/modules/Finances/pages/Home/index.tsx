import React, { useRef, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { WithdrawalsCards } from "@modules/Finances/components/Cards/Withdrawals";
import { SKFinance } from "@modules/Finances/components/Skeleton/SKFinance";
import { ScreenLayout } from "@shared/components/Layouts/ScreenLayout";
import { useFetchBalances } from "@modules/Dashboard/hooks";
import { ButtonExtract } from "@modules/Finances/components/Button";
import { InfoCard } from "@modules/Finances/components/Cards/info-card";

import * as S from "./styles";
import { useFinancesStore } from "@shared/store";

const PAGE_SIZE = 10;

export const FinancesHomeScreen = () => {
  const theme = useTheme();
  const refScroll = useRef<ScrollView>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const { refetch, isLoading: isLoadingScreen } = useFetchBalances();
  const { handleSetInitialParams } = useFinancesStore((store) => {
    return {
      handleSetInitialParams: store.handleSetInitialParams,
    };
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([refetch()]);

    setIsRefreshing(false);
  };

  const handleNavigation = () => {
    handleSetInitialParams();
    navigate("Extract");
  };

  return (
    <ScreenLayout title="Finanças" isTabs>
      <ScrollView
        ref={refScroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
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
          {isLoadingScreen ? (
            <SKFinance />
          ) : (
            <>
              <InfoCard />
              <WithdrawalsCards />
              <ButtonExtract title="Extrato" onPress={handleNavigation} />
            </>
          )}
        </S.Container>
      </ScrollView>
    </ScreenLayout>
  );
};
