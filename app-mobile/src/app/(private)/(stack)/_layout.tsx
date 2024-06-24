import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(configure)" />
      <Stack.Screen name="leads" />
    </Stack>
  );
}
