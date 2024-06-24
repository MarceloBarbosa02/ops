import React from "react";

import { TabsRoutes } from "./app.tabs.routes";
import {
  DetailsScreen,
  DetailsTransactionScreen,
  FiltersExtractScreen,
  FiltersScreen,
  NotificationRoutes,
  SettingsEmailValidationScreen,
  SettingsRoutes,
} from "@modules";
import { ValidateIdentityRoutes } from "@modules/ValidateIdentity";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

const { Navigator, Group, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="TabRoutes" component={TabsRoutes} />
      <Screen name="InfoUserScreen" component={ValidateIdentityRoutes} />
      <Screen name="Notification" component={NotificationRoutes} />
      <Screen name="SettingsRoutes" component={SettingsRoutes} />
      <Screen
        name="SettingsEmailValidation"
        component={SettingsEmailValidationScreen}
      />
      <Group screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
        <Screen name="Filters" component={FiltersScreen} />
        <Screen name="DetailsSales" component={DetailsScreen} />
        <Screen name="FiltersExtract" component={FiltersExtractScreen} />
        <Screen
          name="DetailsTransaction"
          component={DetailsTransactionScreen}
        />
      </Group>
    </Navigator>
  );
};
