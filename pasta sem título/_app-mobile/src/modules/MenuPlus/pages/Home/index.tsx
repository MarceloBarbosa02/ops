import React, { ReactNode, useRef, useState } from "react";
import { getVersion } from "react-native-device-info";
import { Modalize } from "react-native-modalize";
import { RefreshControl, ScrollView } from "react-native";

import { ScreenLayout } from "@shared/components";
import { useCompanyStore } from "@shared/store";

import { ItemArrow } from "@modules/MenuPlus/components";
import { ToggleAccountModal } from "@modules/MenuPlus/components/Modals/ToggleAccount";
import { ItemAccount } from "@modules/MenuPlus/components/Items/Account";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useHomeMenu } from "@modules/MenuPlus/hook/useHomeMenu";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

type Row = {
  label: string;
  value?: string;
  description?: string;
  icon?: ReactNode;
  navigation?: () => void;
};

export const MenuPlusHomeScreen = () => {
  const version = getVersion();
  const theme = useTheme();
  const refModal = useRef<Modalize>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { rows_menu, handleShowModalToggleAccount } = useHomeMenu({ refModal });
  const { data: userData, refetch: refetchMe } = useFetchMe();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  const renderRow = (item: Row, index: number) => {
    return (
      <ItemArrow
        key={index.toString()}
        onPress={item.navigation}
        title={item.label}
        icon={item.icon}
      />
    );
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);

    refetchMe();

    setIsRefreshing(false);
  };

  return (
    <ScreenLayout title="Mais" isTabs>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.color_neutral_100}
          />
        }
      >
        <S.Wrapper>
          <S.WrapperHeader>
            <ItemAccount
              photo={userData?.photo ?? ""}
              avatar_title={(currentCompany?.name || userData?.name) ?? ""}
              title={
                currentCompany
                  ? currentCompany?.nickname ?? currentCompany?.fantasyName
                  : userData?.name ?? ""
              }
              type="sync"
              type_acronym={currentCompany?.type}
              onPress={handleShowModalToggleAccount}
            />
          </S.WrapperHeader>
          <S.WrapperItems>{rows_menu.map(renderRow)}</S.WrapperItems>
          <S.WrapperFooter>
            <S.TitleFlag>Versão do app {version}</S.TitleFlag>
          </S.WrapperFooter>
        </S.Wrapper>
      </ScrollView>
      <ToggleAccountModal refModal={refModal} />
    </ScreenLayout>
  );
};
