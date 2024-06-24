import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";

import {
  DashboardRoutes,
  FinancesRoutes,
  SalesRoutes,
  PlusRoutes,
} from "@modules";
import { ButtonTab } from "@shared/components";
import { Platform } from "react-native";

const { Navigator, Group, Screen } = createBottomTabNavigator();

export const TabsRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="DashboardRoutes"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 80 : 73,
          backgroundColor: theme.colors.color_neutral_20,
          borderTopColor: "transparent",
        },
      }}
    >
      <Screen
        name="DashboardRoutes"
        component={DashboardRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <ButtonTab type="dashboard" focused={focused} color={color} />
          ),
        }}
      />
      <Screen
        name="SalesRoutes"
        component={SalesRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <ButtonTab type="sales" focused={focused} color={color} />
          ),
        }}
      />
      <Screen
        name="FinancesRoutes"
        component={FinancesRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <ButtonTab type="finances" focused={focused} color={color} />
          ),
        }}
      />
      <Screen
        name="PlusRoutes"
        component={PlusRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <ButtonTab type="settings" focused={focused} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
