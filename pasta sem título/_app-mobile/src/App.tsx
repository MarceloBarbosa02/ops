import { useCallback, useEffect, useState } from "react";
import { View, useColorScheme, LogBox, Text } from "react-native";
import { Host } from "react-native-portalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import * as Sentry from "@sentry/react-native";

import { useFonts } from "expo-font";
import { AppProvider } from "@shared/context";
import { queryClient } from "@shared/services/queryClient";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "@shared/theme";
import useThemeStore from "@shared/store/useThemeStore";

import { Routes } from "./routes";

LogBox.ignoreAllLogs();

SplashScreen.preventAutoHideAsync();

Sentry.init({
  dsn: "https://ce96a9f140d84a089ba6254807b37816@o4504850859163648.ingest.sentry.io/4505483812864000",
  integrations: [new Sentry.ReactNativeTracing()],
});

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const config = {
  screens: {
    EmailConfirmation: {
      path: "/email-confirmation/:token",
    },
    SettingsEmailValidation: {
      path: "/contact-update/email-validation/:token",
    },
  },
};

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const themeDevice = useColorScheme() as "dark" | "light";
  const [themeSelect, setThemeSelect] = useState<DefaultTheme>(themes.light);
  const { selectedTheme, toggleDefaultTheme } = useThemeStore((state) => {
    return {
      selectedTheme: state.selectedTheme,
      toggleDefaultTheme: state.toggleDefaultTheme,
    };
  });

  const linking = {
    prefixes: [
      "https://app-stg.kirvano.com",
      "https://app-qa.kirvano.com",
      "https://app.kirvano.com",
    ],
    config,
  };

  useEffect(() => {
    async function prepare() {
      try {
        useFonts({
          "Satoshi-Bold": require("./shared/assets/fonts/Satoshi-Bold.otf"),
          "Satoshi-Light": require("./shared/assets/fonts/Satoshi-Light.otf"),
          "Satoshi-Medium": require("./shared/assets/fonts/Satoshi-Medium.otf"),
          "Satoshi-Regular": require("./shared/assets/fonts/Satoshi-Regular.otf"),
          "Satoshi-Variable": require("./shared/assets/fonts/Satoshi-Variable.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    toggleDefaultTheme(themeDevice);
  }, [themeDevice]);

  useEffect(() => {
    setThemeSelect(themes[selectedTheme === "" ? themeDevice : selectedTheme]);
  }, [selectedTheme]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <View
          onLayout={onLayoutRootView}
          style={{
            flex: 1,
          }}
        >
          <ThemeProvider theme={themeSelect}>
            <NavigationContainer linking={linking} fallback={<Text />}>
              <AppProvider>
                <Host>
                  <Routes />
                </Host>
              </AppProvider>
            </NavigationContainer>
          </ThemeProvider>
        </View>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default Sentry.wrap(App);
