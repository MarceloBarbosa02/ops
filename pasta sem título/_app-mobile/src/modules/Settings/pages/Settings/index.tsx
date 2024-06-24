import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { ScreenLayout } from "@shared/components/Layouts/ScreenLayout";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { ContainerCard } from "@modules/Settings/components/Cards/Container";
import { AvatarCard } from "@modules/Settings/components/Cards/Avatar";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";

import * as S from "./styles";

export const SettingsScreen = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const { data: allCompanies, refetch: refetchCompanies } = useFetchCompanies();
  const { refetch: refetchUser } = useFetchMe();

  useEffect(() => {
    if (isFocused) {
      refetchUser();
      refetchCompanies();
    }
  }, [isFocused]);

  const handleProfileNavigation = () => {
    return navigate("EditProfile");
  };

  const handleBusinessNavigation = () => {
    return navigate(
      allCompanies && allCompanies?.data?.length >= 1
        ? "SearchCompany"
        : "NewBusiness"
    );
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await Promise.all([refetchUser(), refetchCompanies()]);

    setIsRefreshing(false);
  };

  const handleNavigation = () => {
    navigate("TabRoutes");
  };

  return (
    <ScreenLayout title="Configurações" left routeParam={handleNavigation}>
      <S.Wrapper>
        <ScrollView
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="none"
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
          <AvatarCard />
          <ContainerCard
            title="Perfil"
            handleNavigation={handleProfileNavigation}
          />
          <ContainerCard
            title="Negócios"
            handleNavigation={handleBusinessNavigation}
          />
          <S.Spacer />
        </ScrollView>
      </S.Wrapper>
    </ScreenLayout>
  );
};
