import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuPlusHomeScreen } from "../pages";

const { Navigator, Screen } = createStackNavigator();

export const PlusRoutes = () => {
  return (
    <Navigator
      initialRouteName="Plus"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Plus" component={MenuPlusHomeScreen} />
    </Navigator>
  );
};
