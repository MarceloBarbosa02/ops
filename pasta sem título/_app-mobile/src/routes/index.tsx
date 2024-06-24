import { AuthRoutes } from "./app.auth.routes";
import { StackRoutes } from "./app.stack.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { useMemo } from "react";
import { useAuthStore } from "@shared/store/useAuthStore";

export const Routes = () => {
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });
  const theme = useTheme();

  const StackNavigation = useMemo(() => {
    if (token) {
      return (
        <View
          style={{ flex: 1, backgroundColor: theme.colors.color_neutral_0 }}
        >
          <StackRoutes />
        </View>
      );
    }

    return <AuthRoutes />;
  }, [token, theme]);

  return StackNavigation;
};
