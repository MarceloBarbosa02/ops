import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CheckInfoScreen,
  EditCompanyScreen,
  EditProfileScreen,
  NewBusinessScreen,
  SearchCompanyScreen,
  SettingsEmailValidationScreen,
  SettingsScreen,
} from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsRoutes = () => {
  return (
    <Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen name="EditProfile" component={EditProfileScreen} />
      <Screen name="CheckInfo" component={CheckInfoScreen} />
      <Screen name="NewBusiness" component={NewBusinessScreen} />
      <Screen name="SearchCompany" component={SearchCompanyScreen} />
      <Screen name="EditCompany" component={EditCompanyScreen} />
      <Screen
        name="SettingsEmailValidation"
        component={SettingsEmailValidationScreen}
      />
    </Navigator>
  );
};
