import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ExtractScreen, FinancesHomeScreen } from "../pages";
import { FinancesProvider } from "../context/FinancesContext";

const { Navigator, Screen } = createStackNavigator();

export const FinancesRoutes = () => {
  return (
    <FinancesProvider>
      <Navigator
        initialRouteName="Finances"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Finances" component={FinancesHomeScreen} />
        <Screen name="Extract" component={ExtractScreen} />
      </Navigator>
    </FinancesProvider>
  );
};
