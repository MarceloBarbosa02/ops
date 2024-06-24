import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NotificationGeneralScreen,
  NotificationsHistoryScreen,
} from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

export const NotificationRoutes = () => {
  return (
    <Navigator
      initialRouteName="NotificationGeneral"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="History" component={NotificationsHistoryScreen} />
      <Screen
        name="NotificationGeneral"
        component={NotificationGeneralScreen}
      />
    </Navigator>
  );
};
