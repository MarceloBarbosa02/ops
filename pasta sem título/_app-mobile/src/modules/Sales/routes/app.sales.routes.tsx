import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SalesHomeScreen } from "../pages";
import { SalesProvider } from "../context/SalesContext";

const { Navigator, Screen } = createStackNavigator();

export const SalesRoutes = () => {
  return (
    <SalesProvider>
      <Navigator
        initialRouteName="Sales"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Sales" component={SalesHomeScreen} />
      </Navigator>
    </SalesProvider>
  );
};
