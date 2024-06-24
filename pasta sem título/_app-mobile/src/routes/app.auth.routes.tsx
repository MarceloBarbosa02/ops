import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AccessNotPermittedScreen,
  ConfirmEmailScreen,
  EmailConfirmationScreen,
  ForgotPasswordScreen,
  ForgotPasswordSendEmailScreen,
  OnboardingScreen,
  SelectedPhoneScreen,
  SettingsEmailValidationScreen,
  SignInScreen,
  SplashScreen,
  ValidationEmailScreen,
  ValidationPhoneScreen,
  VerifyPinCodeScreen,
} from "@modules";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => (
  <Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <Screen name="Splash" component={SplashScreen} />
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    <Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Screen name="AccessNotPermitted" component={AccessNotPermittedScreen} />
    <Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Screen name="SelectedPhone" component={SelectedPhoneScreen} />
    <Screen name="ValidationEmail" component={ValidationEmailScreen} />
    <Screen name="ValidationPhone" component={ValidationPhoneScreen} />
    <Screen name="VerifyPinCode" component={VerifyPinCodeScreen} />
    <Screen name="EmailConfirmation" component={EmailConfirmationScreen} />
    <Screen
      name="SettingsEmailValidation"
      component={SettingsEmailValidationScreen}
    />
    <Screen
      name="ForgotPasswordSendEmail"
      component={ForgotPasswordSendEmailScreen}
    />
  </Navigator>
);
