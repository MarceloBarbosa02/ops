import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { Animated, BackHandler, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@shared/components/Headers/Header";
import { AlertContext } from "@shared/context/AlertContext";
import { HeaderAlert } from "@shared/components/Headers/HeaderAlert";

import { mobile } from "../../../../../template.json";

import * as S from "./styles";
import { HeaderTabs } from "@shared/components/Headers/Header/header.tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenLayoutProps = {
  left?: boolean;
  isTabs?: boolean;
  title: string;
  quantity?: number;
  children: ReactNode;
  routeParam?(): void;
};

export const ScreenLayout = ({
  left = false,
  isTabs = false,
  title,
  quantity,
  children,
  routeParam,
}: ScreenLayoutProps) => {
  const theme = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const { biometry, availableValue } = useContext(AlertContext);

  const handleNavigation = () => {
    if (typeof routeParam === "function") {
      routeParam();
    } else {
      goBack();
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleNavigation);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleNavigation);
  }, []);

  useFocusEffect(
    useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    }, [])
  );

  return (
    <S.Wrapper>
      <StatusBar
        backgroundColor={theme.theme === "dark" ? "#181818" : "#FDFDFD"}
        barStyle={theme.theme === "dark" ? "light-content" : "dark-content"}
        translucent
      />
      <S.Content style={{ marginTop: top }}>
        {mobile.isTesting && (
          <S.WrapperHeaderEnv>
            <S.Title>{`Ambiente: ${mobile.app_name}`}</S.Title>
          </S.WrapperHeaderEnv>
        )}
        <HeaderAlert />
        {isTabs ? (
          <HeaderTabs title={title} quantity={quantity} />
        ) : (
          <Header
            quantity={quantity}
            title={title}
            handleNavigation={handleNavigation}
            leftBtn={left}
          />
        )}

        <Animated.View
          style={{
            opacity: fadeAnim,
            flex: 1,
          }}
        >
          {children}
        </Animated.View>
      </S.Content>
    </S.Wrapper>
  );
};
