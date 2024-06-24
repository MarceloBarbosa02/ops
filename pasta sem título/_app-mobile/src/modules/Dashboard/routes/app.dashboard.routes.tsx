import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DashboardHomeScreen } from "../pages";

const { Navigator, Screen } = createStackNavigator();

export const DashboardRoutes = () => {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Dashboard" component={DashboardHomeScreen} />
    </Navigator>
  );
};
