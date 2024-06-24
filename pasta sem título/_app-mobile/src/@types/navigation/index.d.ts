export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // Splash
      Splash: undefined;
      OnboardingScreen: undefined;

      // SignIn
      ConfirmEmail: undefined;
      EmailConfirmation: { token?: string };
      CreateNewPassword: { token?: string } | undefined;
      ForgotPasswordSendEmail: undefined;
      SelectedPhone: undefined;
      SignIn: undefined;
      ValidationEmail: undefined;
      ValidationPhone: undefined;
      VerifyPinCode: undefined;

      //Tabs
      TabRoutes: undefined;
      DashboardRoutes: undefined;
      DashRoutes: undefined;
      SalesRoutes: undefined;

      // Sales
      Sales: undefined;
      Filters: undefined;
      DetailsSales: undefined;
      PlusRoutes: undefined;

      // Finances
      FinancesRoutes: undefined;
      Extract: undefined;
      FiltersExtract: undefined;
      DetailsTransaction: undefined;

      // Notifications
      NotificationRoutes: undefined;
      History: undefined;
      Notification: undefined;

      // Purchases
      Purchases: undefined;

      // Biometric Único
      ValidateIdentityRoutes: undefined;
      DocumentPhotoBack: undefined;
      DocumentPhotoFront: undefined;
      InfoUserScreen: undefined;
      TakeSelfie: undefined;
      TypeDocument: undefined;
      Validation: { type: "release" | "progress" | "error" };

      // Business
      BusinessRoutes: undefined;
      Business: undefined;
      CheckInfo: undefined;
      EditCompany: undefined;
      NewBusiness: undefined;
      SearchCompany: undefined;

      // EditProfile
      EditProfile: undefined;

      // Settings
      SettingsRoutes: undefined;
      SettingsScreen: undefined;
      SettingsEmailValidation: { token?: string };

      // Erros
      AccessNotPermitted: undefined;
      Connection: undefined;
      Maintenance: undefined;
    }
  }
}
