import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DocumentPhotoBackScreen,
  DocumentPhotoFrontScreen,
  TakeSelfieScreen,
} from "../pages";
import { ValidationScreen } from "../pages/Validation";
import { InfoUserScreen } from "../pages/InfoUser";
import { TypeDocumentScreen } from "../pages/TypeDocument";
import { DocumentBiometricsProvider } from "../context/BiometricContext";

export const { Navigator, Screen } = createNativeStackNavigator();

export const ValidateIdentityRoutes = () => {
  return (
    <DocumentBiometricsProvider>
      <Navigator
        initialRouteName="InfoUser"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="InfoUser" component={InfoUserScreen} />
        <Screen name="Validation" component={ValidationScreen} />
        <Screen
          name="DocumentPhotoFront"
          component={DocumentPhotoFrontScreen}
        />
        <Screen name="DocumentPhotoBack" component={DocumentPhotoBackScreen} />
        <Screen name="TakeSelfie" component={TakeSelfieScreen} />
        <Screen name="TypeDocument" component={TypeDocumentScreen} />
      </Navigator>
    </DocumentBiometricsProvider>
  );
};
