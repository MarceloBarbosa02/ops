import { Stack } from 'expo-router';
import { View } from 'moti';
import { useTheme } from 'styled-components/native';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function PrivateLayout() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.gray[50],
      }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(modais)"
          options={{
            animation: 'slide_from_bottom',
            gestureEnabled: true,
          }}
        />
        <Stack.Screen name="(stack)" options={{ gestureEnabled: false }} />
        <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
      </Stack>
    </View>
  );
}
