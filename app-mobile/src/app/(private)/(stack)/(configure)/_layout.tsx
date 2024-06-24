import { Stack } from 'expo-router';

export default function ConfigureLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="config-business" />
      <Stack.Screen name="config-contact" />
      <Stack.Screen name="config-legal-person" />
      <Stack.Screen name="config-physical-person" />
      <Stack.Screen name="config-profile" />
      <Stack.Screen name="config-add-files" />
    </Stack>
  );
}
