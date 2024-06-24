import { Stack } from 'expo-router';
import { View } from 'moti';
import { useTheme } from 'styled-components/native';

export default function StackLayout() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.gray[50],
      }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="access" />
        <Stack.Screen name="biometrics" />
        <Stack.Screen name="business" />
        <Stack.Screen name="configure-contact" />
        <Stack.Screen name="configure-profile" />
        <Stack.Screen name="extract" />
        <Stack.Screen name="identification" />
        <Stack.Screen name="notification" />
        <Stack.Screen name="out-configure-business" />
        <Stack.Screen name="out-configure" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="redefine-password" />
        <Stack.Screen name="security" />
        <Stack.Screen name="update-profile" />
        <Stack.Screen name="(lead-capture)" />
      </Stack>
    </View>
  );
}
